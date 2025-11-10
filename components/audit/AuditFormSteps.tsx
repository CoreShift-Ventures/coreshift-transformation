import React from 'react';

interface AuditFormStepsProps {
  currentStep: number;
  formData: any;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleMultiSelect: (field: 'toolsUsed' | 'topChallenges', value: string) => void;
  isDark: boolean;
}

export const AuditFormSteps: React.FC<AuditFormStepsProps> = ({
  currentStep,
  formData,
  handleInputChange,
  handleCheckboxChange,
  handleMultiSelect,
  isDark
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
            <option value="vp-cs">VP of Customer Success</option>
            <option value="director-cs">Director of CS</option>
            <option value="csm">CSM / Account Manager</option>
            <option value="operations">Operations</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
    );
  }

  // Step 2: Business Metrics
  if (currentStep === 2) {
    return (
      <div className="space-y-6">
        <div>
          <label className={labelClass}>Annual Recurring Revenue (ARR) *</label>
          <input
            type="number"
            name="arr"
            required
            min="0"
            step="100000"
            value={formData.arr}
            onChange={handleInputChange}
            className={inputClass}
            placeholder="5000000"
          />
          <p className={`text-xs mt-1 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
            Enter in dollars (e.g., 5000000 for $5M)
          </p>
        </div>

        <div>
          <label className={labelClass}>Number of Customers *</label>
          <input
            type="number"
            name="customerCount"
            required
            min="0"
            step="1"
            value={formData.customerCount}
            onChange={handleInputChange}
            className={inputClass}
            placeholder="150"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Annual Churn Rate *</label>
            <input
              type="number"
              name="churnRate"
              required
              min="0"
              max="100"
              step="0.1"
              value={formData.churnRate}
              onChange={handleInputChange}
              className={inputClass}
              placeholder="15"
            />
            <p className={`text-xs mt-1 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
              Enter as % (e.g., 15 for 15%)
            </p>
          </div>

          <div>
            <label className={labelClass}>Current Expansion Rate *</label>
            <input
              type="number"
              name="expansionRate"
              required
              min="0"
              max="100"
              step="0.1"
              value={formData.expansionRate}
              onChange={handleInputChange}
              className={inputClass}
              placeholder="20"
            />
            <p className={`text-xs mt-1 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
              Upsell/expansion as % of ARR
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Step 3: Infrastructure & Operations
  if (currentStep === 3) {
    return (
      <div className="space-y-6">
        {/* Team Info */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>CS Team Size *</label>
            <input
              type="number"
              name="teamSize"
              required
              min="0"
              step="1"
              value={formData.teamSize}
              onChange={handleInputChange}
              className={inputClass}
              placeholder="5"
            />
            <p className={`text-xs mt-1 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
              Number of CSMs or account managers
            </p>
          </div>

          <div>
            <label className={labelClass}>Avg Accounts per CSM *</label>
            <input
              type="number"
              name="avgCSMLoad"
              required
              min="0"
              step="1"
              value={formData.avgCSMLoad}
              onChange={handleInputChange}
              className={inputClass}
              placeholder="30"
            />
            <p className={`text-xs mt-1 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
              Customer portfolio per CSM
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>CRM System</label>
            <select
              name="crmTool"
              value={formData.crmTool}
              onChange={handleInputChange}
              className={inputClass}
            >
              <option value="">Select CRM</option>
              <option value="salesforce">Salesforce</option>
              <option value="hubspot">HubSpot</option>
              <option value="pipedrive">Pipedrive</option>
              <option value="other">Other CRM</option>
              <option value="none">No CRM</option>
            </select>
          </div>

          <div>
            <label className={labelClass}>CS Platform</label>
            <select
              name="csPlatform"
              value={formData.csPlatform}
              onChange={handleInputChange}
              className={inputClass}
            >
              <option value="">Select CS Platform</option>
              <option value="gainsight">Gainsight</option>
              <option value="churnzero">ChurnZero</option>
              <option value="totango">Totango</option>
              <option value="planhat">Planhat</option>
              <option value="other">Other Platform</option>
              <option value="none">No CS Platform</option>
            </select>
          </div>

          <div>
            <label className={labelClass}>Product Analytics</label>
            <select
              name="analyticsTool"
              value={formData.analyticsTool}
              onChange={handleInputChange}
              className={inputClass}
            >
              <option value="">Select Analytics Tool</option>
              <option value="pendo">Pendo</option>
              <option value="mixpanel">Mixpanel</option>
              <option value="amplitude">Amplitude</option>
              <option value="heap">Heap</option>
              <option value="other">Other Analytics</option>
              <option value="none">No Analytics</option>
            </select>
          </div>

          <div>
            <label className={labelClass}>Support Tool</label>
            <select
              name="supportTool"
              value={formData.supportTool}
              onChange={handleInputChange}
              className={inputClass}
            >
              <option value="">Select Support Tool</option>
              <option value="zendesk">Zendesk</option>
              <option value="intercom">Intercom</option>
              <option value="freshdesk">Freshdesk</option>
              <option value="other">Other Support Tool</option>
              <option value="none">No Support Tool</option>
            </select>
          </div>
        </div>

        {/* Data Quality */}
        <div>
          <label className={labelClass}>Data Quality Rating *</label>
          <select
            name="dataQuality"
            required
            value={formData.dataQuality}
            onChange={handleInputChange}
            className={inputClass}
          >
            <option value="">Rate your data quality</option>
            <option value="5">Excellent - Clean, centralized, automated</option>
            <option value="4">Good - Mostly accurate, some manual work</option>
            <option value="3">Fair - Fragmented across systems</option>
            <option value="2">Poor - Inconsistent and outdated</option>
            <option value="1">Very Poor - Little to no reliable data</option>
          </select>
        </div>
      </div>
    );
  }

  // Step 4: Pain Points
  if (currentStep === 4) {
    const challenges = [
      'High churn rate',
      'Low expansion revenue',
      'Cannot predict which customers will churn',
      'Manual workflows and reporting',
      'CSMs spending too much time on admin',
      'No visibility into customer health',
      'Reactive firefighting mode',
      'Poor data quality',
      'No automation or playbooks'
    ];

    return (
      <div className="space-y-6">
        <div>
          <label className={labelClass}>Top Challenges (Select your biggest pain points)</label>
          <div className="grid md:grid-cols-2 gap-3 mt-2">
            {challenges.map((challenge) => (
              <button
                key={challenge}
                type="button"
                onClick={() => handleMultiSelect('topChallenges', challenge)}
                className={checkboxButtonClass(formData.topChallenges.includes(challenge))}
              >
                <span className="text-sm">{challenge}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className={labelClass}>Urgency Level *</label>
          <select
            name="urgency"
            required
            value={formData.urgency}
            onChange={handleInputChange}
            className={inputClass}
          >
            <option value="">How urgent is this problem?</option>
            <option value="critical">Critical - Need solution ASAP (within 1 month)</option>
            <option value="high">High - Planning to address this quarter</option>
            <option value="medium">Medium - Exploring options for next 6 months</option>
            <option value="low">Low - Just researching for now</option>
          </select>
        </div>
      </div>
    );
  }

  return null;
};
