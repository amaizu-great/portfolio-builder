import { z } from "zod";

import { NextResponse } from "next/server";
import { prismaClient as prisma } from "@/lib/prisma";
import { portfolioDataSchema } from "@/types/portfolio.shema";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    const data = portfolioDataSchema.parse(body);
    // i am passing images thats hasbeen change to base64
    //store the images to cloudnary
    // get thier strings and save to mongodb Portfolio model

    return NextResponse.json({ message: "Portfolio created successfully!", data});
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
