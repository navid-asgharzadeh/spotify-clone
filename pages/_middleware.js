import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  // token will exist if user is logged in
  const token = await getToken({ req, secret: process.env.JWT_SECRET });
  const { pathname } = req.nextUrl;
  // allow the re if the following it true
  // 1. It is a req for next-auth session & provider fetching
  // 2. if the token exist
  if (token && pathname === "/login") {
    return NextResponse.redirect("/");
  }

  if (pathname.includes("/api/auth") || token) {
    return NextResponse.next();
  }

  // Redirect them to login if they don't have token and requesting a protected route
  if (!token && pathname !== "/login") {
    return NextResponse.redirect("/login");
  }
}
