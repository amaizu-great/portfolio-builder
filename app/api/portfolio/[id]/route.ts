
import { NextResponse } from "next/server";
import { prismaClient as prisma } from "@/lib/prisma";
import { ImageType, PortfolioData } from "@/types/portfolio";
import cloudinary, { uploadBase64Image } from "@/lib/cloudinary";

const processImage = async ( image: ImageType | null | undefined, folder: string,
  oldImage?: { url: string; publicId: string | null } | null
): Promise<ImageType> => {
  if (!image?.url) {
    return {
      url: oldImage?.url ?? "",
      publicId: oldImage?.publicId ?? undefined,
    };
  }

  const isNewBase64 =
    typeof image.url === "string" && image.url.startsWith("data:image");

  // Upload new image
  if (isNewBase64) {
    if (oldImage?.publicId) await cloudinary.uploader.destroy(oldImage.publicId);

    const uploaded = await uploadBase64Image(image.url, folder);
    return {
      url: uploaded.url,
      publicId: uploaded.publicId ?? undefined, // 👈 FIX HERE
    };
  }

  // Existing image — clean publicId
  return {
    url: image.url,
    publicId: image.publicId ?? oldImage?.publicId ?? undefined, // 👈 FIX
  };
};


export async function GET( req: Request, { params }: { params: Promise<{ id: string }> } ) {
  const id = (await params).id;

  try {
    const portfolio = await prisma.portfolio.findUnique({ where: { id}});

    if (!portfolio) {
      return NextResponse.json({ message: "Portfolio not found ❌" }, { status: 404 } );
    }

    return NextResponse.json(portfolio, { status: 200 });
  } catch (error) {
    console.error("Error fetching portfolio:", error);
    return NextResponse.json( { message: "Failed to fetch portfolio 🤯" }, { status: 500 } );
  }
}

export async function DELETE( req: Request, { params }: { params: Promise<{ id: string }>}) {
  const id = (await params).id;

  try {
    const portfolio = await prisma.portfolio.findUnique({ where: { id } });

    if (!portfolio) {
      return NextResponse.json(
        { message: "No portfolio found" },
        { status: 404 }
      );
    }
    const imagePublicIds: string[] = [];

    // Example: collect all images from the portfolio
    if (portfolio.profile?.profileImage?.publicId) {
      imagePublicIds.push(portfolio.profile.profileImage.publicId);
    }
    
    if(portfolio?.profile?.stacks) {
      portfolio?.profile.stacks?.forEach((stack) => {
        if (stack.icon?.publicId) imagePublicIds.push(stack.icon.publicId);
      });
    }
    
    if (portfolio.about?.image?.publicId){
      imagePublicIds.push(portfolio.about.image.publicId)
    }
    
    if (portfolio.testimonials){
      portfolio.testimonials.forEach((testimonial) => {
        if (testimonial.image?.publicId) imagePublicIds.push(testimonial.image.publicId);
      });
    }

      if (imagePublicIds.length > 0) {
      await Promise.all(
        imagePublicIds.map(async (publicId) => {
          try {
            await cloudinary.uploader.destroy(publicId);
          } catch (err) {
            console.warn(`Failed to delete image ${publicId}`, err);
          }
        })
      );
    }

    const deleted = await prisma.portfolio.delete({ where: { id }});

    return NextResponse.json( { message: "Portfolio deleted successfully ✅", deleted }, { status: 200 } );
  } catch (error: any) {
    console.error("Delete error:", error);

    return NextResponse.json(
      { message: "Failed to delete portfolio", error: error.message },
      { status: 500 }
    );
  }
}

export async function PUT( req: Request, { params }: { params: Promise<{ id: string }>}) {
  const id = (await params).id;
  
    const body:PortfolioData = await req.json();

  try {
    const portfolio = await prisma.portfolio.findUnique({ where: { id } });

    if (!portfolio) { return NextResponse.json( { message: "No portfolio found" }, { status: 404 } ); }
    

    if (body.profile?.profileImage) { body.profile.profileImage = await processImage( 
        body.profile.profileImage,
        "profile",
        portfolio?.profile?.profileImage
      );
    }

    // stacks icons
    if (body.profile?.stacks) {
      body.profile.stacks = await Promise.all(
        body.profile.stacks.map(async (stack) => {
          const old = portfolio.profile?.stacks?.find(s => s.name === stack.name); // safer match
          return {
            ...stack,
            icon: await processImage(stack.icon, "stacks", old?.icon),
          };
        })
      );
    }

    //about image
    if (body.about?.image) {
      body.about.image = await processImage(
        body.about.image,
        "about",
        portfolio?.about?.image
      );
    }

    //testimonial images 
    if (body.testimonials) {
      body.testimonials = await Promise.all(
        body.testimonials.map(async (t) => {
          const old = portfolio.testimonials?.find(o => o.name === t.name); // match by name
          return {
            ...t,
            image: await processImage(t.image, "testimonials", old?.image),
          };
        })
      );
    }

    const formattedExperience = body.experience?.map((exp) => ({ ...exp,
      duration: {
        from: new Date(exp.duration.from).toISOString(),
        to: exp.duration.to === "present" ? "present" : new Date(exp.duration.to).toISOString(),
      },
    }));

    const updated = await prisma.portfolio.update({
      where: { id },
      data: {
        ...body,
        experience: formattedExperience,
      },
    });

    return NextResponse.json( { message: "Portfolio Updated successfully ✅", updated }, { status: 200 } );
  } catch (error: any) {
    console.error("Update error:", error);

    return NextResponse.json(
      { message: "Failed to update portfolio", error: error.message },
      { status: 500 }
    );
  }
}