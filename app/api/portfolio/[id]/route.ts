import cloudinary from "@/lib/cloudinary";
import { NextResponse } from "next/server";
import { prismaClient as prisma } from "@/lib/prisma";


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