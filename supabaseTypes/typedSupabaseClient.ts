import { SupabaseClient } from '@supabase/supabase-js'
import type { Database } from '@/supabaseTypes/database.types';

export type TypedSupabaseClient = SupabaseClient<Database>