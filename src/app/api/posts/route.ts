import { paginatePosts } from "@/common/data/postData";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const category = searchParams.get("category") as string;
  const pageNumber = Number(searchParams.get("pageNumber"));

  const paginatedPosts = paginatePosts({ category, pageNumber });

  await new Promise((resolve) => setTimeout(resolve, 1000));
  return NextResponse.json(paginatedPosts);
};
