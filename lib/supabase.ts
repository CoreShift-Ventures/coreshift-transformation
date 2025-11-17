import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our contact form submission
export type FormIntent = 'blueprint' | 'advisory'

export interface ContactFormSubmission {
  id?: string
  created_at?: string

  // Intent tracking
  intent: FormIntent

  // Step 1: Contact Info
  name: string
  email: string
  company: string
  role: string

  // Step 2: Business Overview
  industry: string
  team_size: string
  business_stage: string

  // Step 3: Current State
  current_tools: string[]
  process_maturity: string
  biggest_challenges: string[]
  other_challenge?: string

  // Step 4: Goals & Timeline
  transformation_goals: string[]
  other_goal?: string
  timeline: string
}
