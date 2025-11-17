# Supabase Setup Guide

This guide will help you set up Supabase to store contact form submissions.

## Step 1: Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com) and sign up/login
2. Click **"New Project"**
3. Fill in the project details:
   - **Name**: CoreShift Contact Forms (or any name you prefer)
   - **Database Password**: Generate a strong password (save it somewhere safe)
   - **Region**: Choose the region closest to your users
4. Click **"Create new project"** (takes ~2 minutes)

## Step 2: Run the Database Schema

1. Once your project is created, go to the **SQL Editor** in the left sidebar
2. Click **"New query"**
3. Copy the entire contents of `supabase-schema.sql` file
4. Paste it into the SQL Editor
5. Click **"Run"** or press `Cmd/Ctrl + Enter`
6. You should see a success message

## Step 3: Get Your API Keys

1. Go to **Project Settings** (gear icon in left sidebar)
2. Click on **API** in the left menu
3. You'll see:
   - **Project URL**: Copy this (looks like `https://xxxxx.supabase.co`)
   - **anon public key**: Copy this (long string starting with `eyJ...`)

## Step 4: Set Up Environment Variables

1. In your project root, create a file called `.env.local`
2. Add the following (replace with your actual values):

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

3. **IMPORTANT**: Never commit `.env.local` to git (it's already in `.gitignore`)

## Step 5: Deploy to Vercel

1. Push your code to GitHub
2. Go to [https://vercel.com](https://vercel.com) and import your repository
3. In the **Environment Variables** section during import, add:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy!

## Step 6: Test the Form

1. Visit your contact page: `/contact`
2. Fill out all 4 steps
3. Click **"Continue to Booking"**
4. Check Supabase to verify the submission:
   - Go to **Table Editor** in Supabase
   - Click on `contact_submissions`
   - You should see your test submission!

## Viewing Submissions

To view all form submissions:

1. Go to your Supabase dashboard
2. Click **"Table Editor"** in the left sidebar
3. Select the `contact_submissions` table
4. You'll see all submissions with timestamps

You can also export data as CSV from here.

## Optional: Set Up Email Notifications

If you want to receive emails when someone submits the form, you can:

1. Use Supabase Database Webhooks
2. Use Resend/SendGrid API in the Server Action
3. Use Supabase Edge Functions with email service

Let me know if you'd like help setting this up!

## Troubleshooting

### Error: "Failed to submit form"
- Check that your environment variables are set correctly
- Verify the Supabase URL and anon key are correct
- Make sure you ran the SQL schema in Supabase

### Error: "Network error"
- Check your internet connection
- Verify Supabase project is running (not paused)
- Check browser console for detailed error messages

### Data not showing in Supabase
- Verify RLS (Row Level Security) policies are set correctly
- Try refreshing the Table Editor
- Check the SQL schema was run successfully

## Security Notes

- The `anon` key is safe to expose in the browser
- Row Level Security (RLS) is enabled on the table
- Only authenticated users (you) can read the data
- Anyone can insert (submit the form) but can't read others' submissions
