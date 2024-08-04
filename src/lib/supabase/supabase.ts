import { createClient } from "@supabase/supabase-js";

const databaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!databaseUrl || !supabaseKey) {
    throw new Error("Internal Server Error")
}

export const supabase = createClient(databaseUrl, supabaseKey)