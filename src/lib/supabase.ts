import AsyncStorage from "@react-native-async-storage/async-storage"
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL
const supabaseAnon = process.env.EXPO_PUBLIC_SUPABASE_ANON

if (!supabaseUrl || !supabaseAnon) {
    throw new Error('supabase missing')
}

export const supabase = createClient(supabaseUrl, supabaseAnon, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true
    }
})