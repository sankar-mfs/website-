// Supabase configuration
const supabaseUrl = 'YOUR_SUPABASE_PROJECT_URL'; // e.g., https://your-project.supabase.co or http://localhost:54321
const supabaseKey = 'sb_publishable_16Sv0ZlwvqZfyz0hzLZolA_YRJ80vGH'; // Publishable/Anon key

const _supabase = supabase.createClient(supabaseUrl, supabaseKey);
