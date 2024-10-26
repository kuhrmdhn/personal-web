import { createClient } from "@supabase/supabase-js";

const databaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!databaseUrl || !supabaseKey) {
    throw new Error("Internal Server Error")
}

export const supabase = createClient(databaseUrl, supabaseKey)