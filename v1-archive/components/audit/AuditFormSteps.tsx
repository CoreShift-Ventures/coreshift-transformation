import React from 'react';
import type { FormIntent } from '@/lib/supabase';

interface AuditFormStepsProps {
  currentStep: number;
  formData: any;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleMultiSelect: (field: 'currentTools' | 'biggestChallenges' | 'transformationGoals', value: string) => void;
  isDark: boolean;
  intent?: FormIntent;
}

export const AuditFormSteps: React.FC<AuditFormStepsProps> = ({
  currentStep,
  formData,
  handleInputChange,
  handleCheckboxChange,
  handleMultiSelect,
  isDark,
  intent = 'blueprint'
}) => {
  const inputClass = `w-full px-4 py-3 rounded-lg text-sm ${
    isDark
      ? 'bg-gray-950 border border-gray-800 text-gray-100 focus:border-brand-orange'
      : 'bg-white border border-gray-200 text-gray-900 focus:border-brand-orange'
  } focus:outline-none focus:ring-2 focus:ring-brand-orange/20`;

  const labelClass = `block text-sm font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`;

  const checkboxButtonClass = (isSelected: boolean) => `
    p-4 rounded-lg cursor-pointer transition-all border-2 text-left
    ${isSelected
      ? isDark
        ? 'bg-brand-orange/10 border-brand-orange text-gray-100'
        : 'bg-brand-orange/5 border-brand-orange text-brand-charcoal'
      : isDark
        ? 'bg-gray-950 border-gray-800 text-gray-400 hover:border-gray-700'
        : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'
    }
  `;

  // Step 1: Contact Info
  if (currentStep === 1) {
    return (
      <div className="space-y-6">
        <div>
          <label className={labelClass}>Your Name *</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
            className={inputClass}
            placeholder="John Smith"
          />
        </div>

        <div>
          <label className={labelClass}>Work Email *</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className={inputClass}
            placeholder="john@company.com"
          />
        </div>

        <div>
          <label className={labelClass}>Company Name *</label>
          <input
            type="text"
            name="company"
            required
            value={formData.company}
            onChange={handleInputChange}
            className={inputClass}
            placeholder="Acme Inc."
          />
        </div>

        <div>
          <label className={labelClass}>Your Role *</label>
          <select
            name="role"
            required
            value={formData.role}
            onChange={handleInputChange}
            className={inputClass}
          >
            <option value="">Select your role</option>
            <option value="founder">Founder / CEO</option>
            <option value="cxo">C-Level Executive (COO, CTO, etc.)</option>
            <option value="vp">VP / Head of Operations</option>
            <option value="director">Director / Manager</option>
            <option value="operations">Operations Team</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
    );
  }

  // Step 2: Business Overview
  if (currentStep === 2) {
    return (
      <div className="space-y-6">
        <div>
          <label className={labelClass}>Industry *</label>
          <select
            name="industry"
            required
            value={formData.industry}
            onChange={handleInputChange}
            className={inputClass}
          >
            <option value="">Select your industry</option>
            <option value="saas">SaaS / Software</option>
            <option value="services">Professional Services</option>
            <option value="ecommerce">E-commerce / Retail</option>
            <option value="finance">Financial Services</option>
            <option value="healthcare">Healthcare</option>
            <option value="manufacturing">Manufacturing</option>
            <option value="education">Education</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className={labelClass}>Company Size *</label>
          <select
            name="teamSize"
            required
            value={formData.teamSize}
            onChange={handleInputChange}
            className={inputClass}
          >
            <option value="">Select team size</option>
            <option value="1-10">1-10 employees</option>
            <option value="11-50">11-50 employees</option>
            <option value="51-150">51-150 employees</option>
            <option value="151-500">151-500 employees</option>
            <option value="500+">500+ employees</option>
          </select>
        </div>

        <div>
          <label className={labelClass}>Business Stage *</label>
          <select
            name="businessStage"
            required
            value={formData.businessStage}
            onChange={handleInputChange}
            className={inputClass}
          >
            <option value="">Select business stage</option>
            <option value="startup">Early Stage / Startup</option>
            <option value="growth">Growth Stage</option>
            <option value="scale">Scaling</option>
            <option value="established">Established</option>
          </select>
        </div>
      </div>
    );
  }

  // Step 3: Current State
  if (currentStep === 3) {
    const tools = [
      'Spreadsheets (Excel, Google Sheets)',
      'CRM (Salesforce, HubSpot)',
      'Project Management (Asana, Monday)',
      'Communication (Slack, Teams)',
      'Custom databases',
      'ERP system',
      'Automation tools (Zapier, Make)',
      'No formal tools'
    ];

    // Different challenges based on intent
    const challenges = intent === 'advisory' ? [
      'Need strategic operational guidance',
      'Leadership gap in operations function',
      'Scaling challenges without adding overhead',
      'Cross-functional team alignment issues',
      'Need executive-level process oversight',
      'Quarterly planning and OKR execution',
      'Building operational infrastructure',
      'Managing operational initiatives'
    ] : [
      'Processes are manual and time-consuming',
      'Work gets lost between teams',
      'No single source of truth',
      'Inconsistent workflows across team',
      'Too much firefighting, not enough strategy',
      'Scaling is difficult without hiring',
      'Reporting takes days, not hours',
      'Customer experience is inconsistent'
    ];

    return (
      <div className="space-y-6">
        <div>
          <label className={labelClass}>Current Tools (Select all that apply)</label>
          <div className="grid md:grid-cols-2 gap-3 mt-2">
            {tools.map((tool) => (
              <button
                key={tool}
                type="button"
                onClick={() => handleMultiSelect('currentTools', tool)}
                className={checkboxButtonClass(formData.currentTools?.includes(tool))}
              >
                <span className="text-sm">{tool}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className={labelClass}>Process Maturity *</label>
          <select
            name="processMaturity"
            required
            value={formData.processMaturity}
            onChange={handleInputChange}
            className={inputClass}
          >
            <option value="">How would you rate your current processes?</option>
            <option value="5">Excellent - Fully documented, automated, and optimized</option>
            <option value="4">Good - Documented with some automation</option>
            <option value="3">Fair - Some documentation, mostly manual</option>
            <option value="2">Poor - Ad-hoc with little documentation</option>
            <option value="1">Very Poor - Chaotic, no clear processes</option>
          </select>
        </div>

        <div>
          <label className={labelClass}>Biggest Challenges (Select your top pain points)</label>
          <div className="grid md:grid-cols-2 gap-3 mt-2">
            {challenges.map((challenge) => (
              <button
                key={challenge}
                type="button"
                onClick={() => handleMultiSelect('biggestChallenges', challenge)}
                className={checkboxButtonClass(formData.biggestChallenges?.includes(challenge))}
              >
                <span className="text-sm">{challenge}</span>
              </button>
            ))}
          </div>

          {/* Other challenge text input */}
          <div className="mt-4">
            <input
              type="text"
              name="otherChallenge"
              value={formData.otherChallenge}
              onChange={handleInputChange}
              className={inputClass}
              placeholder="Other challenge (optional)"
            />
          </div>
        </div>
      </div>
    );
  }

  // Step 4: Goals & Timeline
  if (currentStep === 4) {
    // Different goals based on intent
    const goals = intent === 'advisory' ? [
      'Strategic operational leadership',
      'Team enablement and coaching',
      'Quarterly planning and OKRs',
      'Operational KPI frameworks',
      'Growth infrastructure support',
      'Executive-level decision support',
      'Organizational structure optimization',
      'Long-term operational strategy'
    ] : [
      'Automate repetitive tasks',
      'Improve team efficiency',
      'Scale without hiring',
      'Better customer experience',
      'Reduce errors and rework',
      'Gain visibility into operations',
      'Streamline cross-team collaboration',
      'Build AI-powered workflows'
    ];

    return (
      <div className="space-y-6">
        <div>
          <label className={labelClass}>Transformation Goals (Select all that apply)</label>
          <div className="grid md:grid-cols-2 gap-3 mt-2">
            {goals.map((goal) => (
              <button
                key={goal}
                type="button"
                onClick={() => handleMultiSelect('transformationGoals', goal)}
                className={checkboxButtonClass(formData.transformationGoals?.includes(goal))}
              >
                <span className="text-sm">{goal}</span>
              </button>
            ))}
          </div>

          {/* Other goal text input */}
          <div className="mt-4">
            <input
              type="text"
              name="otherGoal"
              value={formData.otherGoal}
              onChange={handleInputChange}
              className={inputClass}
              placeholder="Other goal (optional)"
            />
          </div>
        </div>

        <div>
          <label className={labelClass}>Timeline *</label>
          <select
            name="timeline"
            required
            value={formData.timeline}
            onChange={handleInputChange}
            className={inputClass}
          >
            {intent === 'advisory' ? (
              <>
                <option value="">Preferred engagement duration?</option>
                <option value="3-months">3-month engagement</option>
                <option value="6-months">6-month engagement</option>
                <option value="12-months">12+ month engagement</option>
                <option value="flexible">Flexible / Exploring options</option>
              </>
            ) : (
              <>
                <option value="">When do you need this implemented?</option>
                <option value="urgent">Urgent - Within 1 month</option>
                <option value="this-quarter">This quarter (3 months)</option>
                <option value="next-quarter">Next quarter (6 months)</option>
                <option value="exploring">Exploring for future planning</option>
              </>
            )}
          </select>
        </div>
      </div>
    );
  }

  return null;
};
