'use server'

import { supabase, type ContactFormSubmission } from '@/lib/supabase'

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
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([{
        intent: formData.intent || 'blueprint',
        name: formData.name,
        email: formData.email,
        company: formData.company,
        role: formData.role,
        industry: formData.industry,
        team_size: formData.team_size,
        business_stage: formData.business_stage,
        current_tools: formData.current_tools,
        process_maturity: formData.process_maturity,
        biggest_challenges: formData.biggest_challenges,
        other_challenge: formData.other_challenge || null,
        transformation_goals: formData.transformation_goals,
        other_goal: formData.other_goal || null,
        timeline: formData.timeline
      }])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      return {
        success: false,
        error: 'Failed to submit form. Please try again.'
      }
    }

    return {
      success: true,
      data: data[0]
    }
  } catch (error) {
    console.error('Contact form submission error:', error)
    return {
      success: false,
      error: 'An unexpected error occurred. Please try again.'
    }
  }
}
