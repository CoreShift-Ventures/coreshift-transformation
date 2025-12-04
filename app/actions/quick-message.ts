'use server'

import { Resend } from 'resend'
import { supabaseAdmin } from '@/lib/supabase'

const resend = new Resend(process.env.RESEND_API_KEY)

export interface QuickMessageData {
  name: string
  email: string
  message: string
}

export async function sendQuickMessage(data: QuickMessageData) {
  try {
    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return {
        success: false,
        error: 'Please fill in all fields'
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return {
        success: false,
        error: 'Please enter a valid email address'
      }
    }

    // Save to Supabase first
    const { data: savedMessage, error: dbError } = await supabaseAdmin
      .from('quick_messages')
      .insert([{
        name: data.name,
        email: data.email,
        message: data.message,
        email_sent: false
      }])
      .select()
      .single()

    if (dbError) {
      console.error('Supabase error:', dbError)
      return {
        success: false,
        error: 'Failed to save message. Please try again.'
      }
    }

    // Send emails (admin notification + user confirmation)
    try {
      console.log('Attempting to send emails via Resend...')

      // 1. Send notification to admin
      await resend.emails.send({
        from: 'CoreShift <noreply@cshift.io>',
        to: 'contact@cshift.io',
        replyTo: data.email,
        subject: `Quick Message from ${data.name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #ec5f2b;">New Quick Message</h2>

            <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>From:</strong> ${data.name}</p>
              <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
            </div>

            <div style="background: #fff; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
              <h3 style="margin-top: 0;">Message:</h3>
              <p style="white-space: pre-wrap;">${data.message}</p>
            </div>

            <hr style="margin: 30px 0; border: none; border-top: 1px solid #e0e0e0;">

            <p style="font-size: 12px; color: #666;">
              Sent via CoreShift Quick Message Form<br>
              <a href="https://app.supabase.com">View in Supabase</a>
            </p>
          </div>
        `
      })

      console.log('✅ Admin notification sent')

      // 2. Send confirmation email to sender
      const { getQuickMessageConfirmationEmail } = await import('@/lib/email-templates')
      await resend.emails.send({
        from: 'CoreShift <noreply@cshift.io>',
        to: data.email,
        replyTo: 'contact@cshift.io',
        subject: 'We received your message',
        html: getQuickMessageConfirmationEmail(data.name, data.email)
      })

      console.log('✅ Confirmation email sent to:', data.email)

      // Update Supabase record to mark email as sent
      await supabaseAdmin
        .from('quick_messages')
        .update({
          email_sent: true,
          email_sent_at: new Date().toISOString()
        })
        .eq('id', savedMessage.id)

      return {
        success: true,
        data: savedMessage
      }
    } catch (emailError) {
      console.error('Email sending error:', emailError)
      // Message is saved in DB, but email failed
      return {
        success: true,
        data: savedMessage,
        warning: 'Message saved but email notification failed'
      }
    }

  } catch (error) {
    console.error('Quick message error:', error)
    return {
      success: false,
      error: 'An unexpected error occurred. Please try emailing us directly at contact@cshift.io'
    }
  }
}
