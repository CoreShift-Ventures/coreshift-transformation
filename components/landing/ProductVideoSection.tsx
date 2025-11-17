'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { useTheme } from 'next-themes';
import { Play } from 'lucide-react';

export function ProductVideoSection() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);

  useState(() => {
    setMounted(true);
  });

  const { scrollYProgress } = useScroll({
    target: videoRef,
    offset: ["start end", "end start"]
  });

  // Video scales from 105% to 100% as you scroll
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

  const isDark = mounted && theme === 'dark';

  return (
    <section className={`relative py-16 px-6 ${isDark ? 'bg-gradient-to-b from-gray-950 to-gray-900' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange/10 border border-brand-orange/20 mb-4"
          >
            <Play className="w-4 h-4 text-brand-orange" />
            <span className="text-sm font-semibold text-brand-orange">
              See It In Action
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`text-2xl md:text-4xl font-bold mb-3 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}
          >
            Watch CoreShift Transform Post Sales Operations
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-sm md:text-base max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
          >
            See how enterprise teams use AI powered intelligence to predict churn, surface expansion opportunities, and automate customer workflows.
          </motion.p>
        </div>

        {/* Video Player */}
        <motion.div
          ref={videoRef}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.div
            style={{ scale, opacity }}
            className={`relative aspect-video rounded-2xl overflow-hidden shadow-2xl ${isDark ? 'shadow-black/40' : 'shadow-gray-500/20'}`}
          >
            {/* Placeholder for product demo video */}
            <div className={`w-full h-full ${isDark ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-gray-200 to-gray-300'} flex items-center justify-center relative group cursor-pointer transition-all duration-300 hover:scale-[1.02]`}>
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-20 h-20 bg-brand-orange rounded-xl flex items-center justify-center shadow-2xl group-hover:shadow-brand-orange/30 transition-all duration-300"
                >
                  <Play className="w-10 h-10 text-white ml-1" fill="white" />
                </motion.div>
              </div>

              {/* Video Description */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white text-sm font-semibold">3 minute product walkthrough</p>
                <p className="text-gray-300 text-xs mt-1">See how CoreShift predicts churn 90 days before it happens</p>
              </div>

              {/* Replace this div with actual video element when ready */}
              {/* <video className="w-full h-full object-cover" controls poster="/path/to/thumbnail.jpg">
                <source src="/path/to/demo-video.mp4" type="video/mp4" />
              </video> */}
            </div>
          </motion.div>
        </motion.div>

        {/* Key Features Below Video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10"
        >
          {[
            { title: 'Predict Churn', description: 'AI models identify at-risk accounts 90 days in advance' },
            { title: 'Expansion Signals', description: 'Surface upsell opportunities with behavioral intelligence' },
            { title: 'Automate Workflows', description: 'Remove manual tasks and focus on strategic relationships' }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className={`p-5 rounded-xl text-center ${isDark ? 'bg-gray-900 border border-gray-800' : 'bg-white border border-gray-200 shadow-lg'}`}
            >
              <h3 className={`text-base font-bold mb-2 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                {feature.title}
              </h3>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
