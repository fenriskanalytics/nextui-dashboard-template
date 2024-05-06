"use server";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Function to fetch income category data
export async function fetchIncomeCategoryData() {
  let { data, error } = await supabase.from("income_data").select("*");

  if (error)
    throw new Error(
      "Failed to fetch income data from Supabase: " + error.message,
    );
  return data;
}
