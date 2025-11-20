import { createClient } from '@supabase/supabase-js';
import { getEnv } from '../utils/env';

const supabaseUrl = getEnv('VITE_SUPABASE_URL');
const supabaseKey = getEnv('VITE_SUPABASE_ANON_KEY');

// Initialize the Supabase client only if the environment variables are available.
export const supabase = (supabaseUrl && supabaseKey)
  ? createClient(supabaseUrl, supabaseKey)
  : null;