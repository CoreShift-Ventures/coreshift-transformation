-- Quick Messages Table (for email modal)
-- Run this SQL in your Supabase SQL Editor

CREATE TABLE IF NOT EXISTS quick_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,

  -- Message details
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,

  -- Email sent status
  email_sent BOOLEAN DEFAULT false,
  email_sent_at TIMESTAMP WITH TIME ZONE
);

-- Create an index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_quick_messages_email ON quick_messages(email);

-- Create an index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_quick_messages_created_at ON quick_messages(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE quick_messages ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows inserts from anyone
CREATE POLICY "Allow public insert" ON quick_messages
  FOR INSERT
  WITH CHECK (true);

-- Create a policy that only allows authenticated users to read
CREATE POLICY "Allow authenticated read" ON quick_messages
  FOR SELECT
  USING (auth.role() = 'authenticated');
