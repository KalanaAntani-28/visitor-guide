import { NextResponse } from "next/server";

export function middleware() {
  const response = NextResponse.next();
  response.headers.set("Access-Control-Allow-Origin", "none");
  response.headers.set("Access-Control-Allow-Methods", "GET");
  response.headers.set("Access-Control-Allow-Headers", "none");
  return response;
}
