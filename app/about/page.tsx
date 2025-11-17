'use client';

import { useState, useEffect } from 'react';
import { NavigationV4 } from '@/components/landing-v4/NavigationV4';
import { Footer } from '@/components/landing/Footer';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === 'dark';

  const principles = [
    'Clarity before execution',
    'Systems scale; people don\'t',
    'Fewer tools, better workflows',
    'High trust, low noise collaboration',
    'Deliver value in weeks, not months'
  ];

  const whoWeWorkWith = [
    'SaaS and services founders',
    'Scaling teams (10 to 150 people)',
    'Businesses outgrowing spreadsheets',
    'Companies needing both strategy and execution'
  ];

  return (
    <>
      <NavigationV4 />
      <main className="min-h-screen">
        {/* Hero Block */}
        <section className={`relative pt-32 pb-16 px-6 overflow-hidden ${isDark ? 'bg-black' : 'bg-white'}`}>
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <div className={`absolute top-20 right-0 w-96 h-96 rounded-full blur-3xl ${isDark ? 'bg-[#ec5f2b]/10' : 'bg-[#ec5f2b]/5'}`} />
            <div className={`absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl ${isDark ? 'bg-purple-500/10' : 'bg-purple-500/5'}`} />
          </div>

          <div className="relative max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <span className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide border ${
                isDark ? 'bg-gray-900 text-gray-400 border-gray-800' : 'bg-gray-100 text-gray-600 border-gray-200'
              }`}>
                ABOUT US
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`text-3xl md:text-4xl font-bold mb-4 leading-tight ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}
            >
              Systems that help businesses
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ec5f2b] to-orange-500">
                scale without chaos
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-base md:text-lg max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}
            >
              CoreShift is a strategy first transformation studio led by Srinath
            </motion.p>
          </div>
        </section>

        {/* About CoreShift */}
        <section className={`py-16 px-6 ${isDark ? 'bg-gradient-to-b from-gray-950 to-black' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-10">
                <h2 className={`text-2xl md:text-3xl font-bold mb-2 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                  About <span className={isDark ? 'text-white' : 'text-black'}>Core</span><span className="text-[#ec5f2b]">Shift</span>
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-[#ec5f2b] to-orange-500 rounded-full" />
              </div>

              <div className={`space-y-5 text-base leading-relaxed mb-12 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>
                  CoreShift (Coreshift Ventures LLP) is a boutique transformation studio that helps scaling businesses design the systems, workflows, and clarity they need to grow without chaos.
                </p>
                <p>
                  We start with strategy, not development. Every engagement begins with a 2 week Blueprint Sprint where we map processes, identify bottlenecks, and design a working prototype before anything is built. This eliminates guesswork and ensures your systems reflect the reality of how your business works.
                </p>
                <p>
                  From there, we build modern operational systems using clean architecture, automation, and AI driven intelligence. Our work spans customer operations, revenue workflows, delivery systems, financial automation, and internal enablement.
                </p>

                <div className={`p-6 rounded-2xl border my-6 ${
                  isDark
                    ? 'bg-gradient-to-br from-gray-900 to-gray-800 border-gray-800'
                    : 'bg-gradient-to-br from-white to-gray-50 border-gray-200'
                } shadow-xl`}>
                  <p className={`text-lg font-semibold mb-3 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                    CoreShift is intentionally small.
                  </p>
                  <p className={`text-base ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    We don't scale through headcount; we scale through depth.
                    <br />
                    You work directly with a seasoned operations and growth leader. No layers, no junior handoffs.
                  </p>
                </div>

                <div className={`relative p-6 rounded-2xl overflow-hidden border ${
                  isDark
                    ? 'bg-gradient-to-br from-[#ec5f2b]/10 to-orange-500/5 border-[#ec5f2b]/20'
                    : 'bg-gradient-to-br from-[#ec5f2b]/5 to-orange-500/5 border-[#ec5f2b]/20'
                }`}>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ec5f2b] to-orange-500" />
                  <div className="flex items-start gap-3 mb-3">
                    <Sparkles className="w-5 h-5 text-[#ec5f2b] flex-shrink-0 mt-1" />
                    <p className={`text-sm font-semibold uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Our Mission
                    </p>
                  </div>
                  <p className={`text-xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                    Give founders the clarity, structure, and systems they need to scale confidently.
                  </p>
                </div>
              </div>

              {/* Principles & Who We Work With */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Principles */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`p-6 rounded-2xl border ${
                    isDark
                      ? 'bg-gradient-to-br from-gray-900 to-gray-800 border-gray-800'
                      : 'bg-gradient-to-br from-white to-gray-50 border-gray-200'
                  } shadow-xl hover:shadow-2xl transition-shadow duration-300`}
                >
                  <h3 className={`text-xl font-bold mb-5 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                    Our Principles
                  </h3>
                  <ul className="space-y-3">
                    {principles.map((principle, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="relative flex-shrink-0 w-6 h-6 mt-0.5">
                          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#ec5f2b] to-orange-500 opacity-20" />
                          <Check className="relative w-5 h-5 text-[#ec5f2b]" strokeWidth={2.5} />
                        </div>
                        <span className={`text-base ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          {principle}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Who We Work With */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`p-6 rounded-2xl border ${
                    isDark
                      ? 'bg-gradient-to-br from-gray-900 to-gray-800 border-gray-800'
                      : 'bg-gradient-to-br from-white to-gray-50 border-gray-200'
                  } shadow-xl hover:shadow-2xl transition-shadow duration-300`}
                >
                  <h3 className={`text-xl font-bold mb-5 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                    Who We Work With
                  </h3>
                  <ul className="space-y-3">
                    {whoWeWorkWith.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="relative flex-shrink-0 w-6 h-6 mt-0.5">
                          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#ec5f2b] to-orange-500 opacity-20" />
                          <Check className="relative w-5 h-5 text-[#ec5f2b]" strokeWidth={2.5} />
                        </div>
                        <span className={`text-base ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Founder's Note */}
        <section className={`py-16 px-6 relative overflow-hidden ${isDark ? 'bg-black' : 'bg-white'}`}>
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none opacity-30">
            <div className={`absolute top-0 left-1/2 w-96 h-96 rounded-full blur-3xl ${isDark ? 'bg-[#ec5f2b]/10' : 'bg-[#ec5f2b]/5'}`} />
          </div>

          <div className="relative max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-10">
                <h2 className={`text-2xl md:text-3xl font-bold mb-2 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                  Meet the Founder
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-[#ec5f2b] to-orange-500 rounded-full mx-auto" />
              </div>

              <div className="grid md:grid-cols-5 gap-10 items-start">
                {/* Image Section */}
                <motion.div
                  className="md:col-span-2"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className={`relative rounded-xl overflow-hidden border-3 shadow-xl max-w-[250px] mx-auto ${
                    isDark ? 'border-gray-800' : 'border-gray-100'
                  }`}>
                    <div className="aspect-[3/4] relative">
                      <Image
                        src="/founder-srinath.jpg"
                        alt="Srinath Sridharan - Founder of CoreShift"
                        fill
                        className="object-cover object-[center_15%] scale-[1.15]"
                      />
                    </div>
                  </div>

                  {/* Name and LinkedIn */}
                  <div className="mt-5 text-center">
                    <h3 className={`text-xl font-bold mb-1 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                      Srinath Sridharan
                    </h3>
                    <p className={`text-sm mb-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Founder, CoreShift
                    </p>
                    <a
                      href="https://www.linkedin.com/in/srisridh/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-[#ec5f2b] text-white hover:bg-[#d54f20] transition-all hover:scale-105 shadow-md"
                    >
                      View LinkedIn Profile
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>

                {/* Founder's Note Content */}
                <motion.div
                  className="md:col-span-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className={`space-y-4 text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <p>
                      I've spent more than two decades helping businesses navigate the messy middle between growth and chaos. From Customer Success to Revenue Operations to large scale transformation programs, I've seen one pattern repeat across every industry:
                    </p>
                    <p className={`text-xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                      Great teams fail when their systems fail.
                    </p>
                    <p>
                      CoreShift was born to solve that.
                    </p>
                    <p>
                      I'm not a traditional consultant. I'm a hands on strategist who has spent years in the trenches running operations, fixing processes, calming escalations, understanding customer behavior, and building clarity where there was none.
                    </p>
                    <p>
                      Today, I work directly with founders who feel their growth is outpacing their systems. Through a structured Blueprint Sprint, I help you uncover where work is breaking, where revenue is leaking, and what needs to change. Then, I design the systems and workflows, powered by automation and AI, that help you scale without chaos.
                    </p>
                    <p>
                      I only work with a small number of motivated clients at a time. No ads. No mass outreach. Every relationship begins with trust, conversation, and clarity.
                    </p>
                    <div className={`p-6 rounded-xl border-l-4 border-[#ec5f2b] ${
                      isDark ? 'bg-gray-900/50' : 'bg-gray-50'
                    }`}>
                      <p className="font-semibold mb-2">
                        If you're looking for theory, I'm not your partner.
                      </p>
                      <p>
                        If you're looking for a practical, experienced partner who can think, design, and execute, we'll work well together.
                      </p>
                    </div>
                    <p className={`text-xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                      Let's build the systems your business deserves.
                    </p>
                    <p className="text-lg italic text-[#ec5f2b]">Srinath</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Block */}
        <section className={`py-16 px-6 ${isDark ? 'bg-gradient-to-br from-gray-950 via-black to-gray-950' : 'bg-gradient-to-br from-gray-50 via-white to-gray-50'}`}>
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative p-10 rounded-2xl overflow-hidden border ${
                isDark ? 'border-gray-800' : 'border-gray-200'
              } shadow-2xl`}
              style={{
                background: isDark
                  ? 'radial-gradient(circle at top, rgba(236, 95, 43, 0.15) 0%, rgba(0,0,0,0.5) 70%)'
                  : 'radial-gradient(circle at top, rgba(236, 95, 43, 0.08) 0%, rgba(255,255,255,0.5) 70%)'
              }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ec5f2b] to-orange-500" />

              <h2 className={`text-xl md:text-2xl font-bold mb-4 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                If you're scaling and feel your operations aren't keeping up, let's talk.
              </h2>

              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#ec5f2b] to-orange-500 text-white rounded-lg font-semibold text-base hover:shadow-2xl transition-all hover:scale-105 shadow-xl"
              >
                Book a Strategy Session
                <ArrowRight className="w-4 h-4" />
              </a>

              <p className={`mt-4 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Free 30 minute diagnostic call
              </p>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
