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
