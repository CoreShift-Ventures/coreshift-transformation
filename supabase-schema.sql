-- Contact Form Submissions Table
-- Run this SQL in your Supabase SQL Editor

CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,

  -- Intent tracking
  intent TEXT NOT NULL DEFAULT 'blueprint', -- 'blueprint' or 'advisory'

  -- Step 1: Contact Info
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT NOT NULL,
  role TEXT NOT NULL,

  -- Step 2: Business Overview
  industry TEXT NOT NULL,
  team_size TEXT NOT NULL,
  business_stage TEXT NOT NULL,

  -- Step 3: Current State
  current_tools TEXT[] DEFAULT '{}',
  process_maturity TEXT NOT NULL,
  biggest_challenges TEXT[] DEFAULT '{}',
  other_challenge TEXT,

  -- Step 4: Goals & Timeline
  transformation_goals TEXT[] DEFAULT '{}',
  other_goal TEXT,
  timeline TEXT NOT NULL
);

-- Create an index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email);

-- Create an index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);

-- Create an index on intent for filtering
CREATE INDEX IF NOT EXISTS idx_contact_submissions_intent ON contact_submissions(intent);

-- Enable Row Level Security (RLS)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows inserts from anyone (for form submissions)
CREATE POLICY "Allow public insert" ON contact_submissions
  FOR INSERT
  WITH CHECK (true);

-- Create a policy that only allows authenticated users to read
-- (You'll need to be logged in to Supabase dashboard to view submissions)
CREATE POLICY "Allow authenticated read" ON contact_submissions
  FOR SELECT
  USING (auth.role() = 'authenticated');
