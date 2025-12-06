'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// 가상의 데이터
const articles = [
  {
    id: 1,
    date: '2025. 12. 08',
    category: 'Tech',
    title: 'Why Next.js is the Future of Enterprise Web',
    summary:
      'Analyzing the shift from traditional CSR to SSR and why top companies are migrating to Next.js.',
    link: '#',
  },
  {
    id: 2,
    date: '2025. 11. 24',
    category: 'Data',
    title: 'The Death of Third-Party Cookies: A New Era',
    summary:
      'How to prepare your digital marketing strategy for a privacy-first world using first-party data.',
    link: '#',
  },
  {
    id: 3,
    date: '2025. 11. 10',
    category: 'Branding',
    title: 'Visual Logic: Design as a Business Strategy',
    summary:
      'Branding is no longer just about logos. It is about constructing a consistent visual logic across all touchpoints.',
    link: '#',
  },
  {
    id: 4,
    date: '2025. 10. 05',
    category: 'Tech',
    title: 'Web3 Integration for Traditional Commerce',
    summary:
      'Practical use cases of blockchain technology in retail beyond the NFT hype cycle.',
    link: '#',
  },
  {
    id: 5,
    date: '2025. 09. 12',
    category: 'Data',
    title: 'Understanding GA4 Attribution Models',
    summary:
      'A deep dive into data-driven attribution and how to accurately measure your campaign ROI.',
    link: '#',
  },
];

export default function InsightPage() {
  // 함수 이름도 InsightPage로 변경
  const [filter, setFilter] = useState('All');

  const filteredArticles =
    filter === 'All'
      ? articles
      : articles.filter((article) => article.category === filter);

  return (
    <div className="font-sans text-black bg-white min-h-screen selection:bg-black selection:text-white">
      {/* GNB (메인과 동일하게 수정) */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur border-b border-gray-200 py-6 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold tracking-tighter">
            HINOMAD
          </Link>
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-12 text-sm font-medium tracking-tight">
            <Link
              href="/#service"
              className="hover:opacity-50 transition-opacity"
            >
              Service
            </Link>
            <Link href="/#work" className="hover:opacity-50 transition-opacity">
              Work
            </Link>
            <Link href="/insight" className="opacity-100 font-bold">
              Insight
            </Link>
            <Link
              href="/#about"
              className="hover:opacity-50 transition-opacity"
            >
              About
            </Link>
          </div>
          <div className="hidden md:flex items-center">
            <button className="bg-black text-white text-xs font-bold px-6 py-3 rounded-full hover:bg-gray-800 transition-all uppercase tracking-widest">
              Contact Us
            </button>
          </div>
          <button className="md:hidden z-50 text-2xl">☰</button>
        </div>
      </nav>

      {/* Header (타이틀 변경: Insight.) */}
      <header className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8">
            Insight.
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed">
            Our perspectives on technology, data, and design.
            <br />
            We share knowledge to inspire the industry.
          </p>
        </div>
      </header>

      {/* Filter & List */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <div className="flex gap-6 mb-16 border-b border-black pb-4 overflow-x-auto">
            {['All', 'Tech', 'Data', 'Branding'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-sm font-bold uppercase tracking-widest transition-colors whitespace-nowrap ${
                  filter === cat
                    ? 'text-black'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Article List */}
          <div className="space-y-0">
            {filteredArticles.map((article) => (
              <Link
                href={article.link}
                key={article.id}
                className="group block py-10 border-b border-gray-200 hover:bg-gray-50 transition-colors -mx-6 px-6"
              >
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 md:gap-12">
                  {/* Left: Date & Category */}
                  <div className="md:w-1/6 flex md:flex-col gap-4 md:gap-2">
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-400 font-medium">
                      {article.date}
                    </span>
                  </div>

                  {/* Middle: Title & Summary */}
                  <div className="md:w-3/5">
                    <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 group-hover:underline decoration-2 underline-offset-4">
                      {article.title}
                    </h2>
                    <p className="text-gray-500 leading-relaxed max-w-2xl">
                      {article.summary}
                    </p>
                  </div>

                  {/* Right: Arrow Icon */}
                  <div className="md:w-1/6 flex justify-end items-center">
                    <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-all">
                      <span className="text-xl group-hover:text-white transition-colors">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

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
