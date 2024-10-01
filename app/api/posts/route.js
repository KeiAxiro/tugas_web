//import next request and response
import { NextResponse } from "next/server";

//import prisma client
import prisma from "../../../prisma/client";

export async function GET() {
  //get all posts
  const posts = await prisma.post.findMany();

  //return response JSON
  return NextResponse.json(
    {
      sucess: true,
      message: "List Data Posts",
      data: posts,
    },
    {
      status: 200,
    }
  );
}