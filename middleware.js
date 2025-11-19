import { NextResponse } from "next/server";

export function middleware() {
  const response = NextResponse.next();
  response.headers.set("Access-Control-Allow-Origin", "none");
  response.headers.set("Access-Control-Allow-Methods", "GET");
  response.headers.set("Access-Control-Allow-Headers", "none");
  return response;
}
export function middleware(request) {
  const res = NextResponse.next();

  const headersToRemove = [
    "x-vercel-id",
    "x-vercel-cache",
    "x-vercel-error",
    "x-vercel-mitigated"
  ];

  headersToRemove.forEach(h => res.headers.delete(h));

  return res;
}
