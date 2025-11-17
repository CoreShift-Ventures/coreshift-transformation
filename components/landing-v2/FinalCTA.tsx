'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Calculator, Calendar, FileText, Shield, Brain, Zap, TrendingUp } from 'lucide-react';

export function FinalCTA() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className={`py-16 px-6 relative ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Main CTA */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-2xl md:text-3xl font-bold mb-6 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
            Transform Your Business Processes
            <br />
            <span className="text-[#ec5f2b]">
              in Weeks, Not Months
            </span>
          </h2>
        </motion.div>

        {/* Three CTAs */}
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          <motion.div
            className={`rounded-2xl p-4 border transition-all cursor-pointer group ${
              isDark ? 'bg-gray-900 border-gray-800 hover:border-[#ec5f2b]' : 'bg-white border-gray-200 hover:border-[#ec5f2b]'
            } shadow-lg`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Calculator className="w-8 h-8 text-[#ec5f2b] mb-3 group-hover:scale-110 transition-transform" />
            <h3 className={`text-base font-bold mb-2 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>Calculate Your Transformation Scope</h3>
            <p className={`text-sm mb-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Interactive calculator to estimate timeline & investment based on your needs
            </p>
            <button className="w-full px-6 py-3 bg-gradient-to-r from-[#ec5f2b] to-[#d94f1f] text-white rounded-lg font-semibold hover:opacity-90 transition-all">
              Get Scope Estimate
            </button>
          </motion.div>

          <motion.div
            className={`rounded-2xl p-4 border transition-all cursor-pointer group ${
              isDark ? 'bg-gray-900 border-gray-800 hover:border-[#ec5f2b]' : 'bg-white border-gray-200 hover:border-[#ec5f2b]'
            } shadow-lg`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Calendar className="w-8 h-8 text-[#ec5f2b] mb-3 group-hover:scale-110 transition-transform" />
            <h3 className={`text-base font-bold mb-2 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>Book Strategy Call</h3>
            <p className={`text-sm mb-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              30-minute free consultation to discuss your process challenges & opportunities
            </p>
            <button className="w-full px-6 py-3 bg-gradient-to-r from-[#ec5f2b] to-[#d94f1f] text-white rounded-lg font-semibold hover:opacity-90 transition-all">
              Schedule Call
            </button>
          </motion.div>

          <motion.div
            className={`rounded-2xl p-4 border transition-all cursor-pointer group ${
              isDark ? 'bg-gray-900 border-gray-800 hover:border-[#ec5f2b]' : 'bg-white border-gray-200 hover:border-[#ec5f2b]'
            } shadow-lg`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <FileText className="w-8 h-8 text-[#ec5f2b] mb-3 group-hover:scale-110 transition-transform" />
            <h3 className={`text-base font-bold mb-2 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>Request Custom Proposal</h3>
            <p className={`text-sm mb-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Share your requirements and get a detailed scope, pricing & sample POC approach
            </p>
            <button className="w-full px-6 py-3 bg-gradient-to-r from-[#ec5f2b] to-[#d94f1f] text-white rounded-lg font-semibold hover:opacity-90 transition-all">
              Get Proposal
            </button>
          </motion.div>
        </div>

        {/* Next Step */}
        <motion.div
          className={`rounded-2xl p-4 border text-center ${
            isDark ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3 className={`text-base font-bold mb-3 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>Next Step</h3>
          <p className={`text-sm mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            2-week Strategy + Blueprint + Working POC
            <br />
            <span className="text-[#ec5f2b]">See proof it works before full commitment</span>
          </p>
        </motion.div>

        {/* Trust Signals */}
        <motion.div
          className={`mt-10 flex flex-wrap justify-center gap-3 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#ec5f2b]" />
            <span>Production-ready systems</span>
          </div>
          <div className="flex items-center gap-2">
            <Brain className="w-4 h-4 text-[#ec5f2b]" />
            <span>AI-powered intelligence</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#ec5f2b]" />
            <span>4-6 week deployment</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-[#ec5f2b]" />
            <span>Your data, your infrastructure</span>
          </div>
        </motion.div>

        {/* Final statement */}
        <motion.p
          className={`text-center text-base mt-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          Most businesses see ROI in 3-6 months. <span className={`font-semibold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>What could you achieve?</span>
        </motion.p>
      </div>
    </section>
  );
}
