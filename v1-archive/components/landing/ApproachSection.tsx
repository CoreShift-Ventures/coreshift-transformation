// @ts-nocheck
/* eslint-disable */
'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export function ApproachSection() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === 'dark';
  const textClass = isDark ? 'text-white' : 'text-[#272624]';
  const mutedClass = isDark ? 'text-white/70' : 'text-[#5a5856]';

  return (
    <section className={`relative py-32 px-6 overflow-hidden ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto relative z-10">
        <div>
          {/* Section badge */}
          <div className="flex justify-center mb-6">
            <span className={`px-4 py-2 rounded-full text-sm font-semibold ${isDark ? 'bg-[#ec5f2b]/10 text-[#ec5f2b] border border-[#ec5f2b]/20' : 'bg-[#ec5f2b]/5 text-[#ec5f2b] border border-[#ec5f2b]/10'}`}>
              The Transformation Method
            </span>
          </div>

          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-5 leading-[1.1] tracking-[-0.02em] ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
            Enterprise Transformation Rigor.<br />
            <span className="text-[#ec5f2b]">AI-First Speed. Your Asset Forever.</span>
          </h2>

          <p className={`text-base text-center mb-12 max-w-3xl mx-auto font-light ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
            We bring decades of enterprise transformation expertise combined with modern AI architecture. You get enterprise-grade post-sales infrastructure in 30 days, not 18 months, deployed to your infrastructure.
          </p>

          {/* CoreShift Engine Visualization - Enterprise Grade */}
          <div className={`rounded-2xl p-12 mb-8 relative overflow-hidden ${
            isDark ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-2 border-gray-700' : 'bg-gradient-to-br from-white via-gray-50 to-white border-2 border-gray-200/50 shadow-2xl'
          }`}>
            {/* Animated Background Grid */}
            <div className="absolute inset-0 opacity-[0.03]">
              <div className="absolute inset-0" style={{
                backgroundImage: `linear-gradient(${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} 1px, transparent 1px)`,
                backgroundSize: '50px 50px'
              }}></div>
            </div>

            {/* Decorative Glow Elements */}
            <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#ec5f2b] rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
              <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#ec5f2b] rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
            </div>

            <div className="relative">
              <h3 className={`text-xl md:text-2xl font-bold text-center mb-12 ${isDark ? 'text-white' : 'text-brand-charcoal'}`}>
                The <span className={isDark ? 'text-white' : 'text-brand-charcoal'}>Core</span><span className="text-[#ec5f2b]">Shift</span> Engine
              </h3>

              {/* Main Architecture Diagram */}
              <div className="grid lg:grid-cols-12 gap-8 mb-12">
                {/* Left Column - Why CoreShift */}
                <div className="lg:col-span-3 flex">
                  <div className={`p-6 rounded-xl shadow-xl flex-1 flex flex-col ${
                    isDark
                      ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 border border-gray-700'
                      : 'bg-gradient-to-br from-[#ec5f2b]/10 via-[#ec5f2b]/5 to-white border border-[#ec5f2b]/20'
                  }`}>
                    <h4 className={`text-lg md:text-xl font-bold mb-6 flex items-center gap-2 ${isDark ? 'text-white' : 'text-[#272624]'}`}>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                      </svg>
                      Why <span className={isDark ? 'text-white' : 'text-[#272624]'}>Core</span><span className="text-[#ec5f2b]">Shift</span>
                    </h4>
                    <div className={`flex flex-col justify-between flex-1 text-sm ${isDark ? 'text-white' : 'text-[#272624]'}`}>
                      {[
                        {
                          icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
                          title: 'Goals & NRR Aligned',
                          sub: 'Dual North Star framework'
                        },
                        {
                          icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
                          title: 'AI-Ready Platform',
                          sub: 'Built-in ML models & predictions'
                        },
                        {
                          icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>,
                          title: 'Full Data Ownership',
                          sub: 'Your cloud, your database'
                        },
                        {
                          icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>,
                          title: 'Rapid Deployment',
                          sub: 'Live in under 4 weeks'
                        },
                        {
                          icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>,
                          title: 'Enterprise Security',
                          sub: 'Built-in security & encryption'
                        }
                      ].map((item, idx) => (
                        <div key={idx} className="flex gap-3 items-start group hover:translate-x-1 transition-transform duration-200">
                          <div className={`w-7 h-7 rounded-lg backdrop-blur-sm flex items-center justify-center flex-shrink-0 transition-colors ${
                            isDark ? 'bg-white/20 group-hover:bg-white/30' : 'bg-[#ec5f2b]/20 group-hover:bg-[#ec5f2b]/30'
                          }`}>
                            <div className="text-[#ec5f2b]">{item.icon}</div>
                          </div>
                          <div className="flex-1">
                            <div className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-[#272624]'}`}>{item.title}</div>
                            <div className={`text-xs mt-0.5 ${isDark ? 'text-white/70' : 'text-[#5a5856]'}`}>{item.sub}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Center - Process Flow */}
                <div className="lg:col-span-9 flex">
                  <div className={`p-8 rounded-xl flex-1 flex flex-col ${isDark ? 'bg-gray-900/50 border border-gray-700' : 'bg-white/80 border border-gray-200'} backdrop-blur-sm`}>
                    {/* Process Flow */}
                    <div className="grid grid-cols-4 gap-4 mb-8 relative">
                      {[
                        {
                          title: 'Ingest',
                          icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" /></svg>,
                          color: '#3b82f6'
                        },
                        {
                          title: 'Analyze',
                          icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>,
                          color: '#8b5cf6'
                        },
                        {
                          title: 'Process',
                          icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
                          color: '#10b981'
                        },
                        {
                          title: 'Act',
                          icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>,
                          color: '#ec5f2b'
                        }
                      ].map((stage, i) => (
                        <div key={i} className="relative">
                          <div className={`group text-center p-5 rounded-xl transition-all duration-300 hover:scale-105 ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'} border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                            <div className="flex justify-center mb-3 text-[#ec5f2b] group-hover:scale-110 transition-transform duration-300">
                              {stage.icon}
                            </div>
                            <div className={`font-bold text-sm ${textClass}`}>{stage.title}</div>
                          </div>
                          {/* Connecting Arrows */}
                          {i < 3 && (
                            <div className="hidden lg:block absolute top-1/2 -right-5 transform -translate-y-1/2 z-10">
                              <svg className="w-4 h-4 text-[#ec5f2b] animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                              </svg>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Continuous Learning Badge */}
                    <div className={`text-center py-4 px-6 rounded-xl mb-8 ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-gradient-to-r from-[#ec5f2b]/10 via-[#ec5f2b]/5 to-[#ec5f2b]/10 border border-[#ec5f2b]/20'} backdrop-blur-sm`}>
                      <div className={`font-semibold flex items-center justify-center gap-2 ${textClass}`}>
                        <svg className="w-5 h-5 text-[#ec5f2b] animate-spin" style={{ animationDuration: '3s' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                        </svg>
                        Continuous Learning & Optimization
                      </div>
                    </div>

                    {/* Integration Systems */}
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        {
                          title: 'Data Sources',
                          icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375" /></svg>,
                          items: [
                            { name: 'Salesforce', logo: '/logos/Engine/Salesforce.com.png', scale: 1.5, invertInDark: false },
                            { name: 'HubSpot', logo: '/logos/Engine/HubSpot.png', scale: 1, invertInDark: true },
                            { name: 'ServiceNow', logo: '/logos/Engine/ServiceNow.png', scale: 0.7, invertInDark: true },
                            { name: 'CSV', logo: '/logos/Engine/csv.png', scale: 1.4, invertInDark: false }
                          ],
                          showMore: true
                        },
                        {
                          title: 'Collaboration',
                          icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" /></svg>,
                          items: [
                            { name: 'Slack', logo: '/logos/Engine/Slack.png', scale: 1, invertInDark: true },
                            { name: 'Teams', logo: '/logos/Engine/Teams.png', scale: 1, invertInDark: true },
                            { name: 'Notion', logo: '/logos/Engine/Notion.png', scale: 1, invertInDark: false },
                            { name: 'more...', isPlaceholder: true }
                          ],
                          showMore: false
                        },
                        {
                          title: 'AI & Intelligence',
                          icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" /></svg>,
                          items: [
                            { name: 'OpenAI', logo: '/logos/Engine/OpenAI.png', scale: 2.2, invertInDark: false },
                            { name: 'Anthropic', logo: '/logos/Engine/Anthropic.svg', scale: 1, invertInDark: false }
                          ]
                        }
                      ].map((system) => (
                        <div key={system.title} className={`p-4 rounded-lg relative ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'} transition-colors border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                          <div className="flex items-center gap-2 mb-3">
                            <div className="text-[#ec5f2b]">{system.icon}</div>
                            <h4 className={`font-bold text-xs ${textClass}`}>{system.title}</h4>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            {system.items.map((item, idx) => {
                              const isLastItem = idx === system.items.length - 1;
                              const shouldSplit = isLastItem && system.showMore;

                              return (
                                <div key={item.name} className={`group relative flex items-center justify-center h-10 w-full rounded transition-all duration-300 ${!shouldSplit && !item.isPlaceholder && 'hover:scale-105'} ${item.isPlaceholder ? (isDark ? 'bg-gray-700/30 border-dashed border border-gray-600' : 'bg-gray-100 border-dashed border border-gray-300') : (isDark ? 'bg-gray-700/50 hover:bg-gray-600 border border-gray-600' : 'bg-white hover:bg-gray-50 border border-gray-200')} ${shouldSplit ? 'overflow-hidden' : ''}`}>
                                  {item.isPlaceholder ? (
                                    <span className={`text-[10px] font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                                      {item.name}
                                    </span>
                                  ) : shouldSplit ? (
                                    <div className="flex w-full h-full gap-1 p-1">
                                      {/* Left side - Logo */}
                                      <div className={`flex items-center justify-center flex-1 rounded ${isDark ? 'bg-gray-700/50' : 'bg-white'}`}>
                                        <img
                                          src={item.logo}
                                          alt={item.name}
                                          className={`h-4 w-auto object-contain ${
                                            isDark
                                              ? item.invertInDark
                                                ? 'brightness-0 invert opacity-80'
                                                : 'opacity-80'
                                              : 'opacity-70'
                                          }`}
                                          style={{ transform: `scale(${item.scale || 1})` }}
                                          title={item.name}
                                        />
                                      </div>
                                      {/* Right side - +more */}
                                      <div className={`flex items-center justify-center flex-1 rounded ${isDark ? 'bg-gray-700/30' : 'bg-gray-100'}`}>
                                        <span className={`text-[10px] font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                                          +more
                                        </span>
                                      </div>
                                    </div>
                                  ) : (
                                    <img
                                      src={item.logo}
                                      alt={item.name}
                                      className={`h-4 w-auto object-contain ${
                                        isDark
                                          ? item.invertInDark
                                            ? 'brightness-0 invert opacity-80 group-hover:opacity-100'
                                            : 'opacity-80 group-hover:opacity-100'
                                          : 'opacity-70 group-hover:opacity-100'
                                      }`}
                                      style={{ transform: `scale(${item.scale || 1})` }}
                                      title={item.name}
                                    />
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom - Key Outcomes */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>,
                    title: 'Unified Customer 360',
                    sub: 'Complete context'
                  },
                  {
                    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" /></svg>,
                    title: 'AI-Powered Automation',
                    sub: 'Smart workflows'
                  },
                  {
                    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>,
                    title: 'Predictable Revenue',
                    sub: 'Data-driven NRR'
                  },
                  {
                    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>,
                    title: 'Institutional Knowledge',
                    sub: 'Codified playbooks'
                  }
                ].map((outcome, idx) => (
                  <div key={idx} className={`group p-5 rounded-xl text-center transition-all duration-300 hover:scale-105 ${isDark ? 'bg-gray-800 hover:bg-gray-700 border border-gray-700' : 'bg-[#ec5f2b]/5 hover:bg-[#ec5f2b]/10 border border-[#ec5f2b]/10'}`}>
                    <div className="flex justify-center mb-3 text-[#ec5f2b] group-hover:scale-110 transition-transform duration-300">
                      {outcome.icon}
                    </div>
                    <div className={`font-bold text-sm ${textClass} mb-1`}>{outcome.title}</div>
                    <div className={`text-xs ${mutedClass}`}>{outcome.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
