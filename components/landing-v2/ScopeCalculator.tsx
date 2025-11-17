'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Calculator, ArrowRight } from 'lucide-react';

export function ScopeCalculator() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [complexity, setComplexity] = useState<'simple' | 'medium' | 'complex'>('medium');
  const [users, setUsers] = useState(25);
  const [integrations, setIntegrations] = useState<string[]>([]);
  const [aiFeatures, setAiFeatures] = useState<string[]>([]);

  const integrationOptions = ['CRM', 'ERP', 'Payment', 'Email', 'Analytics'];
  const aiOptions = ['Lead Scoring', 'Predictions', 'NLP', 'Automation'];

  const basePrice = { simple: 500000, medium: 800000, complex: 1200000 };
  const phase1 = complexity === 'complex' ? 300000 : 150000;
  const phase2Min = basePrice[complexity];
  const phase2Max = phase2Min * 1.5;

  const formatCurrency = (value: number) => {
    if (value >= 10000000) return `₹${(value / 10000000).toFixed(1)} Cr`;
    if (value >= 100000) return `₹${(value / 100000).toFixed(1)} L`;
    return `₹${value.toLocaleString('en-IN')}`;
  };

  return (
    <section className={`py-16 px-6 relative ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
            Transparent <span className="text-[#ec5f2b]">Scoping</span>
          </h2>
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
            Calculate your transformation investment
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-5">
          {/* Input */}
          <motion.div
            className={`rounded-2xl p-6 border ${
              isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
            } shadow-lg`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Calculator className="w-6 h-6 text-[#ec5f2b]" />
              <h3 className={`text-lg font-bold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>Your Requirements</h3>
            </div>

            <div className="space-y-3">
              <div>
                <label className={`block text-xs font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Process Complexity</label>
                <div className="grid grid-cols-3 gap-2">
                  {(['simple', 'medium', 'complex'] as const).map(level => (
                    <button
                      key={level}
                      onClick={() => setComplexity(level)}
                      className={`px-4 py-3 rounded-lg font-semibold capitalize transition-all ${
                        complexity === level
                          ? 'bg-[#ec5f2b] text-white'
                          : isDark
                          ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className={`block text-xs font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>User Count: {users}</label>
                <input
                  type="range"
                  min="5"
                  max="500"
                  value={users}
                  onChange={e => setUsers(Number(e.target.value))}
                  className={`w-full h-2 rounded-lg appearance-none cursor-pointer accent-[#ec5f2b] ${
                    isDark ? 'bg-gray-700' : 'bg-gray-300'
                  }`}
                />
              </div>

              <div>
                <label className={`block text-xs font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Integration Needs</label>
                <div className="flex flex-wrap gap-2">
                  {integrationOptions.map(option => (
                    <button
                      key={option}
                      onClick={() => setIntegrations(prev =>
                        prev.includes(option) ? prev.filter(i => i !== option) : [...prev, option]
                      )}
                      className={`px-4 py-2 rounded-lg font-medium transition-all ${
                        integrations.includes(option)
                          ? 'bg-[#ec5f2b] text-white'
                          : isDark
                          ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className={`block text-xs font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>AI Features</label>
                <div className="flex flex-wrap gap-2">
                  {aiOptions.map(option => (
                    <button
                      key={option}
                      onClick={() => setAiFeatures(prev =>
                        prev.includes(option) ? prev.filter(i => i !== option) : [...prev, option]
                      )}
                      className={`px-4 py-2 rounded-lg font-medium transition-all ${
                        aiFeatures.includes(option)
                          ? 'bg-[#ec5f2b] text-white'
                          : isDark
                          ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Output */}
          <motion.div
            className={`rounded-2xl p-6 border ${
              isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
            } shadow-lg`}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className={`text-lg font-bold mb-4 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>Estimated Investment</h3>

            <div className="space-y-3">
              <div className={`rounded-xl p-4 border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
                <div className={`text-xs mb-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Phase 1 (Blueprint & POC)</div>
                <div className="text-2xl font-bold text-[#ec5f2b] mb-1">{formatCurrency(phase1)}</div>
                <div className={`text-xs ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>2 weeks • Process audit & strategy • Working prototype</div>
                <div className="text-xs text-green-600 mt-1">* Credited toward Phase 2</div>
              </div>

              <div className={`rounded-xl p-4 border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
                <div className={`text-xs mb-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Phase 2 (Full Build)</div>
                <div className="text-2xl font-bold text-[#ec5f2b] mb-1">
                  {formatCurrency(phase2Min)} - {formatCurrency(phase2Max)}
                </div>
                <div className={`text-xs ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>4-6 weeks • Complete system • Deployment & training</div>
              </div>

              <div className={`rounded-xl p-4 border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
                <div className={`text-xs mb-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Phase 3 (Optional Ongoing)</div>
                <div className="text-2xl font-bold text-[#ec5f2b] mb-1">₹1.5-2.5L/mo</div>
                <div className={`text-xs ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Feature evolution • Process optimization</div>
              </div>

              <button className="w-full px-6 py-4 bg-gradient-to-r from-[#ec5f2b] to-[#d94f1f] text-white rounded-lg font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg">
                Get Detailed Scope & Pricing
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Comparison */}
        <motion.div
          className={`mt-10 rounded-2xl p-4 border ${
            isDark ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className={`text-base font-bold mb-4 text-center ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>Cost Comparison Over 3 Years</h3>
          <div className="grid md:grid-cols-4 gap-3 text-center">
            <div>
              <div className={`text-sm mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Salesforce Enterprise</div>
              <div className="text-2xl font-bold text-red-500">₹45L+</div>
              <div className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>₹15L/year × 3</div>
            </div>
            <div>
              <div className={`text-sm mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Traditional Dev</div>
              <div className="text-2xl font-bold text-orange-500">₹35-50L</div>
              <div className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>12-18 months</div>
            </div>
            <div>
              <div className={`text-sm mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Consulting Firms</div>
              <div className="text-2xl font-bold text-yellow-500">₹50L+</div>
              <div className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>Strategy + ₹2Cr build</div>
            </div>
            <div>
              <div className={`text-sm mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>CoreShift</div>
              <div className="text-2xl font-bold text-green-600">₹6-15L</div>
              <div className={`text-xs ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>6-8 weeks</div>
            </div>
          </div>
          <p className={`text-center text-xs mt-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            ROI Timeline: Most clients break even in 4-6 months
          </p>
        </motion.div>
      </div>
    </section>
  );
}
