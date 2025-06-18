import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vwklkjlguperbfxmblbg.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3a2xramxndXBlcmJmeG1ibGJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyMTUyODIsImV4cCI6MjA2NTc5MTI4Mn0.HP4kHBB3Vjc50A7xOgyQLuzcT2-H5-zcAEcPcLcchU4";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
