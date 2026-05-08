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
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #f5f7fa; padding: 20px;">
            <div style="background: #1a1a1a; padding: 24px; border-radius: 12px 12px 0 0; text-align: center;">
              <h2 style="color: #4d65ff; margin: 0; font-size: 16px; font-weight: 600;">New Quick Message</h2>
              <p style="color: rgba(255,255,255,0.6); margin: 8px 0 0; font-size: 13px;">Received just now</p>
            </div>

            <div style="background: #ffffff; padding: 24px; border-radius: 0 0 12px 12px;">
              <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 3px solid #4d65ff;">
                <p style="margin: 0 0 8px; font-size: 11px; color: #888; text-transform: uppercase; letter-spacing: 1px;">From</p>
                <p style="margin: 0; font-weight: 600; color: #1a1a1a;">${data.name}</p>
                <p style="margin: 4px 0 0;"><a href="mailto:${data.email}" style="color: #4d65ff; text-decoration: none;">${data.email}</a></p>
              </div>

              <div style="background: #f8f9fa; padding: 20px; border-radius: 8px;">
                <p style="margin: 0 0 12px; font-size: 11px; color: #888; text-transform: uppercase; letter-spacing: 1px;">Message</p>
                <p style="margin: 0; white-space: pre-wrap; color: #555; line-height: 1.6;">${data.message}</p>
              </div>

              <div style="margin-top: 24px; text-align: center;">
                <a href="mailto:${data.email}?subject=Re: Your message to CoreShift" style="display: inline-block; padding: 12px 24px; background: #1a1a1a; color: white; text-decoration: none; border-radius: 6px; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Reply to Message →</a>
              </div>
            </div>

            <p style="text-align: center; font-size: 11px; color: #888; margin-top: 16px;">
              CoreShift Quick Message Notification
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
