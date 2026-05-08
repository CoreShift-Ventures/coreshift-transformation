import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

// Client-side Supabase client (uses anon key)
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Server-side Supabase client (bypasses RLS)
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey)

// Types for our contact form submission
export type FormIntent = 'blueprint' | 'build' | 'advisory' | 'cs-engine'

export interface ContactFormSubmission {
  id?: string
  created_at?: string

  // Intent tracking
  intent: FormIntent

  // Contact info
  name: string
  email: string
  company: string
  role: string

  // Simplified form fields
  interest?: string
  challenge?: string
}
