'use server'

import { Resend } from 'resend'
import { supabaseAdmin, type ContactFormSubmission } from '@/lib/supabase'
import { getLeadConfirmationEmail, getAdminNotificationEmail } from '@/lib/email-templates'

const resend = new Resend(process.env.RESEND_API_KEY)

// Configuration
const FROM_EMAIL = 'CoreShift <noreply@cshift.io>'
const ADMIN_EMAIL = 'srinath@cshift.io' // Your notification email

// Calendly links - mapped by intent
const CALENDLY_LINKS: Record<string, string> = {
  blueprint: 'https://calendly.com/srinath-cshift/business-transformation-readiness',
  build: 'https://calendly.com/srinath-cshift/business-transformation-readiness',
  advisory: 'https://calendly.com/srinath-cshift/fractional-coo-consultation'
}

// Intent display names for emails
const INTENT_LABELS: Record<string, string> = {
  blueprint: 'Blueprint Sprint',
  build: 'Systems & Automation',
  advisory: 'Fractional COO'
}

export async function submitContactForm(formData: Omit<ContactFormSubmission, 'id' | 'created_at'>) {
  try {
    // Validate required fields
    if (!formData.name || !formData.email || !formData.company || !formData.role) {
      return {
        success: false,
        error: 'Please fill in all required fields'
      }
    }

    // Insert into Supabase
    const { data, error } = await supabaseAdmin
      .from('contact_submissions')
      .insert([{
        intent: formData.intent || 'blueprint',
        name: formData.name,
        email: formData.email,
        company: formData.company,
        role: formData.role,
        interest: formData.interest || INTENT_LABELS[formData.intent] || null,
        challenge: formData.challenge || null
      }])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      return {
        success: false,
        error: 'Failed to submit form. Please try again.'
      }
    }

    const savedSubmission = data[0] as ContactFormSubmission

    // Send emails (don't block on email failures)
    const intentLabel = INTENT_LABELS[savedSubmission.intent] || 'Blueprint Sprint'
    const calendlyLink = CALENDLY_LINKS[savedSubmission.intent] || CALENDLY_LINKS.blueprint

    try {
      // 1. Send confirmation email to the lead
      await resend.emails.send({
        from: FROM_EMAIL,
        to: savedSubmission.email,
        replyTo: 'contact@cshift.io',
        subject: `We received your ${intentLabel} inquiry`,
        html: getLeadConfirmationEmail(savedSubmission, calendlyLink)
      })

      console.log('✅ Confirmation email sent to lead:', savedSubmission.email)
    } catch (emailError) {
      console.error('❌ Failed to send confirmation email:', emailError)
      // Don't fail the whole request if email fails
    }

    try {
      // 2. Send notification email to admin
      await resend.emails.send({
        from: FROM_EMAIL,
        to: ADMIN_EMAIL,
        replyTo: savedSubmission.email,
        subject: `🚀 New ${intentLabel} Lead: ${savedSubmission.name} from ${savedSubmission.company}`,
        html: getAdminNotificationEmail(savedSubmission)
      })

      console.log('✅ Admin notification sent to:', ADMIN_EMAIL)
    } catch (emailError) {
      console.error('❌ Failed to send admin notification:', emailError)
      // Don't fail the whole request if email fails
    }

    return {
      success: true,
      data: savedSubmission
    }
  } catch (error) {
    console.error('Contact form submission error:', error)
    return {
      success: false,
      error: 'An unexpected error occurred. Please try again.'
    }
  }
}
