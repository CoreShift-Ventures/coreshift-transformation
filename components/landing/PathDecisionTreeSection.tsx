// @ts-nocheck
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { FileText, Zap, Target, CheckCircle2, Circle } from 'lucide-react';

const questions = [
  {
    id: 'maturity',
    question: 'Do you have a clear CS transformation roadmap?',
    options: [
      {
        answer: 'No, we need strategic direction first',
        recommendation: 'blueprint',
        reason: 'Start with the Transformation Blueprint to assess maturity and build your roadmap'
      },
      {
        answer: 'Yes, we know what we need to build',
        next: 'infrastructure'
      }
    ]
  },
  {
    id: 'infrastructure',
    question: 'Do you have AI-powered infrastructure in place?',
    options: [
      {
        answer: 'No, we need to build it',
        recommendation: 'platform',
        reason: 'Deploy the CoreShift Engine to own your AI infrastructure'
      },
      {
        answer: 'Yes, but we need optimization',
        next: 'guidance'
      }
    ]
  },
  {
    id: 'guidance',
    question: 'Do you need ongoing strategic guidance?',
    options: [
      {
        answer: 'Yes, we want expert partnership',
        recommendation: 'consulting',
        reason: 'Expert Advisory provides ongoing strategic support and optimization'
      },
      {
        answer: 'No, we can execute independently',
        recommendation: 'platform',
        reason: 'Consider the Platform for complete infrastructure ownership'
      }
    ]
  }
];

const paths = {
  blueprint: {
    icon: FileText,
    name: 'Transformation Blueprint',
    tagline: 'Strategy-first approach',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    darkBgColor: 'bg-blue-950/30',
    link: '/blueprint'
  },
  platform: {
    icon: Zap,
    name: 'CoreShift Engine',
    tagline: 'AI infrastructure you own',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    darkBgColor: 'bg-orange-950/30',
    link: '/platform'
  },
  consulting: {
    icon: Target,
    name: 'Expert Advisory',
    tagline: 'Ongoing strategic partnership',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    darkBgColor: 'bg-purple-950/30',
    link: '/consulting'
  }
};

export function PathDecisionTreeSection() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [recommendation, setRecommendation] = useState<string | null>(null);
  const [recommendationReason, setRecommendationReason] = useState<string>('');

  useState(() => {
    setMounted(true);
  });

  const isDark = mounted && theme === 'dark';

  const handleAnswer = (optionIndex: number) => {
    const option = questions[currentQuestion].options[optionIndex];
    const newAnswers = [...answers, option.answer];
    setAnswers(newAnswers);

    if (option.recommendation) {
      setRecommendation(option.recommendation);
      setRecommendationReason(option.reason);
    } else if (option.next) {
      const nextQuestionIndex = questions.findIndex(q => q.id === option.next);
      setCurrentQuestion(nextQuestionIndex);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setRecommendation(null);
    setRecommendationReason('');
  };

  const currentQ = questions[currentQuestion];
  const recommendedPath = recommendation ? paths[recommendation as keyof typeof paths] : null;

  return (
    <section className={`py-24 px-6 ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}
          >
            Which Path Is Right for You?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
          >
            Answer 2-3 quick questions to find your ideal transformation path
          </motion.p>
        </div>

        {/* Progress Indicators */}
        {!recommendation && (
          <div className="flex items-center justify-center gap-3 mb-12">
            {questions.map((_, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center gap-3`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm ${
                  index < currentQuestion
                    ? isDark ? 'bg-brand-orange text-white' : 'bg-brand-orange text-white'
                    : index === currentQuestion
                    ? isDark ? 'bg-gray-700 text-gray-300 border-2 border-brand-orange' : 'bg-white text-gray-900 border-2 border-brand-orange'
                    : isDark ? 'bg-gray-800 text-gray-600' : 'bg-gray-200 text-gray-500'
                }`}>
                  {index < currentQuestion ? <CheckCircle2 className="w-5 h-5" /> : index + 1}
                </div>
                {index < questions.length - 1 && (
                  <div className={`w-12 h-0.5 ${
                    index < currentQuestion
                      ? 'bg-brand-orange'
                      : isDark ? 'bg-gray-800' : 'bg-gray-300'
                  }`} />
                )}
              </motion.div>
            ))}
          </div>
        )}

        {/* Question Card */}
        <AnimatePresence mode="wait">
          {!recommendation ? (
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className={`p-10 rounded-2xl ${
                isDark
                  ? 'bg-gray-900 border border-gray-800'
                  : 'bg-white border border-gray-200 shadow-xl'
              }`}
            >
              <h3 className={`text-2xl font-bold mb-8 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                {currentQ.question}
              </h3>

              <div className="space-y-4">
                {currentQ.options.map((option, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAnswer(index)}
                    className={`w-full p-5 rounded-xl text-left font-medium transition-all ${
                      isDark
                        ? 'bg-gray-800 hover:bg-gray-750 border border-gray-700 hover:border-brand-orange text-gray-200'
                        : 'bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-brand-orange text-gray-900'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Circle className={`w-5 h-5 flex-shrink-0 ${isDark ? 'text-gray-600' : 'text-gray-400'}`} />
                      <span>{option.answer}</span>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Back Button */}
              {currentQuestion > 0 && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onClick={() => {
                    setCurrentQuestion(currentQuestion - 1);
                    setAnswers(answers.slice(0, -1));
                  }}
                  className={`mt-6 text-sm font-medium ${isDark ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  ← Back
                </motion.button>
              )}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className={`p-10 rounded-2xl ${
                isDark
                  ? 'bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800'
                  : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-xl'
              }`}
            >
              {/* Recommendation Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange/10 border border-brand-orange/20 mb-6"
              >
                <CheckCircle2 className="w-5 h-5 text-brand-orange" />
                <span className="text-sm font-semibold text-brand-orange">
                  Recommended for You
                </span>
              </motion.div>

              {/* Path Info */}
              {recommendedPath && (
                <>
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3, type: 'spring' }}
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                        isDark ? recommendedPath.darkBgColor : recommendedPath.bgColor
                      }`}
                    >
                      <recommendedPath.icon className={`w-8 h-8 ${recommendedPath.color}`} />
                    </motion.div>
                    <div>
                      <h3 className={`text-2xl font-bold ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                        {recommendedPath.name}
                      </h3>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {recommendedPath.tagline}
                      </p>
                    </div>
                  </div>

                  <p className={`text-base mb-8 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {recommendationReason}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={recommendedPath.link}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-brand-orange text-white rounded-xl font-semibold text-base hover:bg-brand-orange-dark transition-all hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      Explore {recommendedPath.name}
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                    <button
                      onClick={handleReset}
                      className={`px-6 py-4 rounded-xl font-semibold text-base transition-all ${
                        isDark
                          ? 'bg-gray-800 hover:bg-gray-750 border border-gray-700 text-gray-300'
                          : 'bg-white hover:bg-gray-50 border border-gray-200 text-gray-900'
                      }`}
                    >
                      Start Over
                    </button>
                  </div>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* View All Paths */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#three-paths"
            className={`text-sm font-medium ${isDark ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-900'}`}
          >
            or view all transformation paths →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
