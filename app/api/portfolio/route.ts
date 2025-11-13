import { z } from "zod";

import { NextResponse } from "next/server";
import { ImageType } from "@/types/portfolio";
import { uploadBase64Image } from "@/lib/cloudinary";
import { prismaClient as prisma } from "@/lib/prisma";
import { portfolioDataSchema } from "@/types/portfolio.shema";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    const data = portfolioDataSchema.parse(body);

    const processImage = async (image: ImageType, folder: string) => {
      if (!image?.url) return { url: "", publicId: "" };

      if (typeof image.url === "string" && image.url.startsWith("data:image")) {
        const uploaded = await uploadBase64Image(image.url, folder);
        return uploaded;
      }
      return { url: image.url, publicId: image.publicId || "" };
    };

    if (data.profile?.profileImage) {
      data.profile.profileImage = await processImage(data.profile.profileImage, "profile")
    }

    if (data.profile?.stacks){
      data.profile.stacks = await Promise.all(
        data.profile.stacks.map(async (stack) => ({ ...stack, icon: await processImage(stack.icon, "stacks") }))
      );
    }

    if (data.about?.image){
      data.about.image = await processImage(data.about.image, "about")
    }

    if (data.testimonials){
      data.testimonials = await Promise.all(
        data.testimonials.map(async (t) => ({ ...t, image: await processImage(t.image, "testimonials") }))
      );
    }

    const formattedExperience = data.experience?.map((exp) => ({ ...exp,
      duration: {
        from: exp.duration.from.toISOString(),
        to:
          exp.duration.to instanceof Date
            ? exp.duration.to.toISOString()
            : exp.duration.to,
      },
    }));

    const portfolio = await prisma.portfolio.create({
      data: {
        template: data.template,
        views:  0,
        profile: data.profile,
        about: data.about,
        projects: data.projects || [],
        experience: formattedExperience || [],
        testimonials: data.testimonials || [],
        newsletter: data.newsletter,
      },
    });

    return NextResponse.json({ message: "Portfolio created successfully ✅!", portfolio});
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.issues, message: "Validation failed" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Something went wrong", error },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const portfolios = await prisma.portfolio.findMany();

    if (!portfolios || portfolios.length === 0) {
      return NextResponse.json(
        { message: "No portfolios found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Portfolios fetched successfully", data: portfolios },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching portfolios:", error);
    return NextResponse.json(
      { message: "Something went wrong", error },
      { status: 500 }
    );
  }
}