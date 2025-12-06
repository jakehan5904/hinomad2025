'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function AboutPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="font-sans text-black bg-white min-h-screen selection:bg-black selection:text-white">
      {/* GNB (메인과 동일) */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur border-b border-gray-200 py-6 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tighter"
            onClick={closeMenu}
          >
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
            <Link
              href="/insight"
              className="hover:opacity-50 transition-opacity"
            >
              Insight
            </Link>
            <Link href="/about" className="opacity-100 font-bold">
              About
            </Link>
          </div>
          <div className="hidden md:flex items-center">
            <a
              href="mailto:info@hinomad.net"
              className="bg-black text-white text-xs font-bold px-6 py-3 rounded-full hover:bg-gray-800 transition-all uppercase tracking-widest"
            >
              Contact Us
            </a>
          </div>
          <button
            className="md:hidden z-50 text-2xl relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col justify-center items-center space-y-8 animate-in fade-in duration-200">
          <Link
            href="/#service"
            onClick={closeMenu}
            className="text-3xl font-bold tracking-tighter"
          >
            Service
          </Link>
          <Link
            href="/#work"
            onClick={closeMenu}
            className="text-3xl font-bold tracking-tighter"
          >
            Work
          </Link>
          <Link
            href="/insight"
            onClick={closeMenu}
            className="text-3xl font-bold tracking-tighter"
          >
            Insight
          </Link>
          <Link
            href="/about"
            onClick={closeMenu}
            className="text-3xl font-bold tracking-tighter"
          >
            About
          </Link>
          <div className="pt-12">
            <a
              href="mailto:info@hinomad.net"
              className="text-lg font-bold border-b-2 border-black"
            >
              info@hinomad.net
            </a>
          </div>
        </div>
      )}

      {/* 1. Hero: Strategic Vision */}
      <header className="pt-40 pb-20 px-6 border-b border-black">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-12">
            The Logic
            <br />
            Behind Growth.
          </h1>
          <div className="grid md:grid-cols-2 gap-12 border-l-2 border-black pl-8 mb-16">
            <p className="text-xl font-medium leading-relaxed">
              We define ourselves not as an agency, but as a strategic partner.
              <br />
              We architect the digital foundation for your business success.
            </p>
            <p className="text-gray-500 leading-relaxed">
              In a world flooded with data, intuition is not enough. We combine
              the strategic rigor of a top-tier consultancy with the creative
              execution of a design studio. We construct the future you
              envision.
            </p>
          </div>

          {/* [이미지 영역] 사무실 전경이나 팀 사진 */}
          <div className="w-full h-[500px] bg-gray-200 flex items-center justify-center relative overflow-hidden">
            <span className="text-gray-500 font-bold uppercase tracking-widest z-10">
              [ Image: Office or Team Meeting ]
            </span>
            {/* 나중에 이미지 넣을 때: <img src="/images/office.jpg" className="absolute inset-0 w-full h-full object-cover" /> */}
          </div>
        </div>
      </header>

      {/* 2. Philosophy */}
      <section className="border-b border-black">
        <div className="max-w-7xl mx-auto">
          <div className="px-6 py-8 border-b border-gray-200">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
              Our Philosophy
            </span>
          </div>
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="p-10 md:p-12 min-h-[400px]">
              <div className="text-6xl font-bold text-gray-200 mb-8">01</div>
              <h3 className="text-3xl font-bold mb-6 tracking-tight">
                Perceive
              </h3>
              <p className="text-gray-500 leading-relaxed mb-8">
                "Seeing the unseen."
              </p>
              <div className="text-sm text-black font-medium leading-relaxed">
                Before we act, we analyze. We perceive the hidden patterns in
                your data and market dynamics.
              </div>
            </div>
            <div className="p-10 md:p-12 min-h-[400px]">
              <div className="text-6xl font-bold text-gray-400 mb-8">02</div>
              <h3 className="text-3xl font-bold mb-6 tracking-tight">
                Inspire
              </h3>
              <p className="text-gray-500 leading-relaxed mb-8">
                "Breathing life into logic."
              </p>
              <div className="text-sm text-black font-medium leading-relaxed">
                Data needs a story. We inspire stakeholders by translating
                complex strategies into compelling narratives.
              </div>
            </div>
            <div className="p-10 md:p-12 min-h-[400px]">
              <div className="text-6xl font-bold text-black mb-8">03</div>
              <h3 className="text-3xl font-bold mb-6 tracking-tight">
                Construct
              </h3>
              <p className="text-gray-500 leading-relaxed mb-8">
                "Building the reality."
              </p>
              <div className="text-sm text-black font-medium leading-relaxed">
                Strategy must be executable. We construct robust platforms and
                ecosystems that drive real KPIs.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Location */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold tracking-tighter mb-8">
              Seoul HQ.
            </h2>
            <div className="space-y-2 text-lg text-gray-600">
              <p>Platinum Tower 7F</p>
              <p>398, Seocho-daero, Seocho-gu</p>
              <p>Seoul, South Korea</p>
            </div>
            <div className="mt-8">
              <a
                href="mailto:info@hinomad.net"
                className="text-xl font-bold border-b-2 border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors"
              >
                info@hinomad.net
              </a>
            </div>
          </div>
          {/* [이미지 영역] 지도 이미지 */}
          <div className="bg-white p-8 border border-gray-200 h-64 flex items-center justify-center text-gray-400 font-bold tracking-widest uppercase">
            [ Google Map Image ]
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
