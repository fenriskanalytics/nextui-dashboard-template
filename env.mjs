// src/env.mjs
import { createEnv } from "@t3-oss/env-nextjs";
import * as z from "zod";

export const env = createEnv({
  server: {
    // Serverside-only variables
  },
  client: {
    // Client-accessible variables, these need to be prefixed with NEXT_PUBLIC_
    NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
    NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string(),
    NEXT_PUBLIC_FMP_API_KEY: z.string(),
  },
  runtimeEnv: {
    // Variables to be destructured for runtime access
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    NEXT_PUBLIC_FMP_API_KEY: process.env.NEXT_PUBLIC_FMP_API_KEY,
  },
});
