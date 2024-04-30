import { NextResponse, type NextRequest } from "next/server";
import { createMiddlewareClient } from "./utils/supabase/middleware";

export async function middleware(request: NextRequest) {
  let response;
  try {
    const { supabase, response: freshResponse } =
      createMiddlewareClient(request);
    response = freshResponse;

    // Refresh session if expired - required for Server Components
    // https://supabase.com/docs/guides/auth/auth-helpers/nextjs#managing-session-with-middleware
    await supabase.auth.getSession();
  } catch (e) {
    console.error("Failed to update or validate session:", e);
    // Fallback response if there's an error in the middleware
    response = NextResponse.next({
      request: {
        headers: request.headers,
      },
    });
  }
  return response;
}

export const config = {
  matcher: [
    // Specify the paths that should be processed by this middleware
    // Excludes paths that typically do not need session handling
    "/((?!_next/static|_next/image|favicon.ico|sw.js|manifest.json).*)",
  ],
};
