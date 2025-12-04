// @ts-nocheck
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useTheme } from 'next-themes';

const faqs = [
  {
    question: 'How is this different from hiring consultants or buying SaaS?',
    answer: 'Enterprise consultants are expensive, take 18 months, and leave when the contract ends, not when you succeed. SaaS vendors trap you in rigid platforms with vendor lock in. CoreShift combines enterprise transformation rigor with modern speed: you get a custom built CS infrastructure in 2 to 4 weeks, deployed to your infrastructure, and there is zero lock in.'
  },
  {
    question: 'Do I really own the platform you build?',
    answer: 'Yes. The platform deploys to YOUR cloud infrastructure. You control access, data, and deployment forever. After implementation, there are zero SaaS fees—just your standard infrastructure costs. You can cancel our support anytime while keeping the platform running. No hostage situations. For enterprises requiring source code access or IP transfer, contact us for premium licensing options.'
  },
  {
    question: 'How can you implement so fast when others take 18 months?',
    answer: 'Two reasons: (1) We have spent 20+ years at SAP, IBM, and Talend building transformation methodology that works, and (2) we leverage modern architecture instead of forcing you to wait for manual customization. We do not waste 6 months on change management theater, we build what stops the bleeding, fast. See our Investment section for specific timelines per package.'
  },
  {
    question: 'What if my team is not technical enough to manage it?',
    answer: 'We offer flexible paths: you can manage it yourself with our comprehensive documentation, or we provide ongoing Fractional CXA support (see our Evolve package in the Investment section). Even with ongoing support, you still own the deployment and can cancel anytime. The platform keeps running. No hostage situations.'
  },
  {
    question: 'Can you really save me hundreds of thousands in churn?',
    answer: 'If you are a B2B SaaS company doing $1M to $100M ARR and experiencing surprise churn, the math is straightforward: 15 to 30% of your ARR is at risk from silent customer exit. Our methodology shows 67% reduction in surprise churn by detecting risk 90 days earlier. The revenue saved in 6 months typically exceeds our entire implementation cost 10 to 20x.'
  },
  {
    question: 'What is the actual investment?',
    answer: 'We offer transparent, fixed pricing with no surprise invoices. View our complete <a href="#pricing" class="text-brand-orange hover:underline font-semibold">pricing breakdown</a> for all packages, including assessment options and early adopter discounts. Unlike enterprise consultants with lengthy engagements or SaaS platforms with recurring fees, you pay once and own the deployment forever.'
  },
  {
    question: 'How is this modern and not just buzzword heavy?',
    answer: 'We do not bolt ChatGPT onto legacy workflows and call it innovative. CoreShift is built on proven enterprise patterns from day one: automated health scoring, churn prediction, sentiment analysis from support tickets, expansion trigger detection. The platform does the manual work so your team focuses on relationships and strategy.'
  },
  {
    question: 'What happens after implementation?',
    answer: 'You go live with a production ready Post-sales Platform. We provide 90 days of support to ensure adoption and answer questions. After that, you can manage it yourself (it is yours), hire us for ongoing Fractional CXA support, or bring us back for expansion phases. You are never locked in.'
  }
];

export function FAQSection() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === 'dark';

  // Helper function to render CoreShift with colors and parse links
  const renderWithColoredBrand = (text: string) => {
    // First split by link pattern
    const linkRegex = /<a href="([^"]*)"[^>]*>([^<]*)<\/a>/g;
    const parts: (string | JSX.Element)[] = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
      // Add text before link
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      // Add link element
      parts.push(
        <a
          key={match.index}
          href={match[1]}
          className="text-brand-orange hover:underline font-semibold"
        >
          {match[2]}
        </a>
      );
      lastIndex = match.index + match[0].length;
    }

    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    // Now process CoreShift branding
    return parts.map((part, idx) => {
      if (typeof part === 'string') {
        const brandParts = part.split('CoreShift');
        return brandParts.map((brandPart, i) => (
          <span key={`${idx}-${i}`}>
            {brandPart}
            {i < brandParts.length - 1 && (
              <>
                <span className={isDark ? 'text-white font-semibold' : 'text-brand-charcoal font-semibold'}>Core</span>
                <span className="text-[#ec5f2b] font-semibold">Shift</span>
              </>
            )}
          </span>
        ));
      }
      return <span key={idx}>{part}</span>;
    });
  };

  return (
    <section className={`py-24 px-6 relative overflow-hidden ${isDark ? 'bg-gray-950' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className={`inline-block px-4 py-2 rounded-full font-semibold text-sm mb-6 ${isDark ? 'bg-[#ec5f2b]/10 text-[#ec5f2b] border border-[#ec5f2b]/20' : 'bg-[#ec5f2b]/5 text-[#ec5f2b] border border-[#ec5f2b]/10'}`}
          >
            Common Questions
          </motion.div>
          <h2 className={`text-3xl md:text-4xl font-bold mb-5 leading-[1.1] tracking-[-0.02em] ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
            The Questions Decision Makers Ask<br />
            <span className="text-[#ec5f2b]">Before Stopping the Bleed</span>
          </h2>
          <p className={`text-base max-w-3xl mx-auto font-light ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
            Straight answers about transformation, ownership, and ROI. No consultant speak.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                isDark
                  ? 'bg-gray-900 border-gray-800 hover:border-brand-orange/50'
                  : 'bg-white border-brand-border hover:border-brand-orange/50 shadow-sm'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 group"
              >
                <span className={`font-semibold text-lg ${isDark ? 'text-gray-100' : 'text-brand-charcoal'} group-hover:text-brand-orange transition-colors`}>
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-brand-gray'}`} />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className={`px-6 pb-6 ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
                      {renderWithColoredBrand(faq.answer)}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
