import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const authCookie = request.cookies.get("isAuthenticated");
  if (!authCookie) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.json({ message: "Sample contacts" });
};
