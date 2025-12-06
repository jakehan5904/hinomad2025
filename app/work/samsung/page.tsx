'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CaseStudyDetail() {
  const [activeSection, setActiveSection] = useState('challenge');

  // 스크롤 감지 (오차 보정값 130px 유지)
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['challenge', 'approach', 'impact'];
      const scrollPosition = window.scrollY + 130;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 클릭 이동 (헤더 오차 보정값 120px 유지)
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="font-sans text-black bg-white min-h-screen selection:bg-black selection:text-white">
      {/* Header */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur border-b border-gray-200 py-6 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center text-sm font-bold uppercase tracking-widest hover:text-gray-600 transition-colors"
          >
            ← Back to Works
          </Link>
          <div className="font-bold text-lg tracking-tighter">HINOMAD</div>
        </div>
      </nav>

      {/* Hero */}
      <header className="pt-40 pb-20 px-6 border-b border-black">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6 text-xs font-bold uppercase tracking-widest text-blue-600">
            Case Study : Samsung Global
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight mb-8">
            Redefining the global digital experience for a tech giant through
            data-driven personalization.
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-gray-200">
            <div>
              <div className="text-xs text-gray-400 uppercase tracking-widest mb-1">
                Client
              </div>
              <div className="font-bold text-lg">Samsung Electronics</div>
            </div>
            <div>
              <div className="text-xs text-gray-400 uppercase tracking-widest mb-1">
                Service
              </div>
              <div className="font-bold text-lg">Global SEO & UX</div>
            </div>
            <div>
              <div className="text-xs text-gray-400 uppercase tracking-widest mb-1">
                Year
              </div>
              <div className="font-bold text-lg">2024</div>
            </div>
            <div>
              <div className="text-xs text-gray-400 uppercase tracking-widest mb-1">
                Key Impact
              </div>
              <div className="font-bold text-lg text-blue-600">
                +45% Conversion
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-[1fr_2.5fr] gap-16 relative">
        {/* Sidebar */}
        <div className="hidden md:block">
          <div className="sticky top-32">
            <ul className="space-y-6 text-sm font-medium border-l border-gray-200 pl-4">
              {['challenge', 'approach', 'impact'].map((section, index) => (
                <li
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`cursor-pointer transition-all duration-300 -ml-[17px] pl-4 border-l-2 ${
                    activeSection === section
                      ? 'text-black border-black font-bold'
                      : 'text-gray-400 border-transparent hover:text-gray-600'
                  }`}
                >
                  0{index + 1} The{' '}
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Content */}
        <div className="space-y-32 pb-32">
          {/* Section 01: The Challenge (내용 대폭 추가됨) */}
          <section id="challenge" className="scroll-mt-32">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mr-4">
                01
              </span>
              The Challenge
            </h2>
            <h3 className="text-3xl font-bold tracking-tight mb-8 text-gray-800">
              "We have traffic, but no connection."
            </h3>

            {/* 1. 줄글 설명 */}
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              Samsung Electronics operates websites in over 50 countries. While
              the aggregate traffic was immense, the conversion rate was
              stagnant. The core issue was a fragmented user journey—customers
              were lost between generic landing pages and local purchase
              channels.
            </p>

            {/* 2. Pain Points Grid (높이 확보용) */}
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <div className="text-red-500 font-bold mb-2 text-xl">!</div>
                <h4 className="font-bold mb-2">Data Silos</h4>
                <p className="text-sm text-gray-500">
                  User data was isolated by country, making global analysis
                  impossible.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <div className="text-red-500 font-bold mb-2 text-xl">!</div>
                <h4 className="font-bold mb-2">Performance Issues</h4>
                <p className="text-sm text-gray-500">
                  Mobile load times averaged 3.5s, leading to a 40% bounce rate.
                </p>
              </div>
            </div>

            {/* 3. Quote (신뢰도 + 높이 확보) */}
            <div className="border-l-4 border-black pl-6 py-2 italic text-gray-500">
              "We needed a partner who understands both the technical complexity
              of our global infrastructure and the delicate nuance of our brand
              identity."
              <br />
              <span className="text-xs font-bold not-italic text-black mt-2 block">
                — Global Marketing Director, Samsung
              </span>
            </div>
          </section>

          {/* Section 02: Our Approach */}
          <section id="approach" className="scroll-mt-32">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mr-4">
                02
              </span>
              Our Approach
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              HINOMAD applied the{' '}
              <span className="font-bold text-black">
                "Perceive-Inspire-Construct"
              </span>{' '}
              framework to restructure the entire digital funnel.
            </p>
            <div className="grid gap-8">
              <div className="border border-gray-200 p-8 hover:border-black transition-colors">
                <div className="w-10 h-10 bg-black text-white font-bold flex items-center justify-center rounded-full mb-4">
                  1
                </div>
                <h4 className="text-xl font-bold mb-2">
                  Data Audit & Integration
                </h4>
                <p className="text-gray-500">
                  Integrated GA4 and Adobe Analytics to visualize the full
                  customer journey map.
                </p>
              </div>
              <div className="border border-gray-200 p-8 hover:border-black transition-colors">
                <div className="w-10 h-10 bg-black text-white font-bold flex items-center justify-center rounded-full mb-4">
                  2
                </div>
                <h4 className="text-xl font-bold mb-2">
                  Technical SEO & Optimization
                </h4>
                <p className="text-gray-500">
                  Reduced LCP (Largest Contentful Paint) by 1.2s through Next.js
                  code splitting.
                </p>
              </div>
            </div>
          </section>

          {/* Section 03: The Impact */}
          <section id="impact" className="scroll-mt-32">
            <h2 className="text-2xl font-bold mb-8 flex items-center">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mr-4">
                03
              </span>
              The Impact
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-black text-white p-10 flex flex-col justify-between min-h-[200px]">
                <div className="text-green-400 text-3xl mb-4">↗</div>
                <div>
                  <div className="text-5xl font-bold mb-2">300%</div>
                  <div className="text-sm text-gray-400 uppercase tracking-widest">
                    ROAS Improvement
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 p-10 flex flex-col justify-between min-h-[200px]">
                <div className="text-black text-3xl mb-4">☺</div>
                <div>
                  <div className="text-5xl font-bold mb-2 text-black">1.5M</div>
                  <div className="text-sm text-gray-500 uppercase tracking-widest">
                    New Leads Generated
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h4 className="font-bold text-sm uppercase tracking-widest mb-4">
                Conversion Rate Growth
              </h4>
              <div className="flex items-center">
                <span className="w-20 text-xs font-bold text-gray-400">
                  Before
                </span>
                <div className="h-10 bg-gray-200 w-1/4 rounded-r-md flex items-center px-3">
                  <span className="text-xs font-bold text-gray-500">1.2%</span>
                </div>
              </div>
              <div className="flex items-center">
                <span className="w-20 text-xs font-bold text-black">After</span>
                <div className="h-10 bg-black w-3/4 rounded-r-md flex items-center px-3 shadow-xl">
                  <span className="text-xs font-bold text-white">
                    4.5% (Target Exceeded)
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-gray-50 py-24 text-center border-t border-gray-200">
        <h3 className="text-3xl font-bold mb-8">
          Ready to achieve similar results?
        </h3>
        <button className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-colors uppercase tracking-widest text-sm">
          Start Your Project
        </button>
      </div>
      {/* Footer */}
      <footer className="bg-black text-white pt-24 pb-12">
        {/* items-start 추가로 정렬 기준을 명확히 하고, 오른쪽 섹션에 패딩 추가 */}
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">
          {/* 왼쪽: 브랜드 정보 */}
          <div>
            <h4 className="text-3xl font-bold tracking-tighter mb-1">
              HINOMAD
            </h4>

            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-6 block">
              Since 2018
            </span>

            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              Strategic Digital Consultancy.
              <br />
              Based in Seoul, working globally.
            </p>
          </div>

          {/* 오른쪽: Social */}
          {/* 👇 pt-3 (약 12px)을 주어서 로고 높이와 시각적 균형을 맞춤 */}
          <div className="flex gap-12 text-sm text-gray-400 pt-3">
            <div className="flex flex-col gap-3">
              <span className="text-white font-bold mb-2">Social</span>
              <a href="#" className="hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="hover:text-white transition-colors">
                YouTube
              </a>
            </div>
          </div>
        </div>

        {/* 하단 카피라이트 */}
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-gray-900 text-xs text-gray-600 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2018-2025 HINOMAD Inc. All rights reserved.</p>
          <a
            href="mailto:info@hinomad.net"
            className="hover:text-gray-400 transition-colors"
          >
            info@hinomad.net
          </a>
        </div>
      </footer>
    </div>
  );
}
