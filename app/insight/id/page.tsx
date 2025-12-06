'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HinomadMain() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeServiceCard, setActiveServiceCard] = useState<number | null>(null);
  const [lang, setLang] = useState<'KO' | 'EN'>('KO');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 모바일 서비스 카드 스크롤 감지
  useEffect(() => {
    if (window.innerWidth >= 768) return;
    const observerOptions = { root: null, rootMargin: '-45% 0px -45% 0px', threshold: 0 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveServiceCard(Number(entry.target.getAttribute('data-index')));
      });
    }, observerOptions);
    document.querySelectorAll('.service-card').forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const t = {
    KO: {
      // 타이틀은 영어 유지 (디자인)
      // 설명은 한국어
      desc_intro: "We are a ",
      desc_bold: "Strategic Digital Consultancy.",
      desc: "우리는 단순한 대행이 아닙니다. 치밀한 기획과 데이터 로직, 정교한 엔지니어링을 결합하여 비즈니스의 성장을 설계하는 전략적 파트너입니다.",
      cta_hero: "View Our Strategy",
      sec_service: "01 / Service",
      card_1_title: "Digital Architecture\n& Optimization",
      card_1_desc: "노후화된 시스템은 성장을 저해합니다. 인프라를 정밀 진단하여 병목 현상을 해결하고, 확장성과 최고의 성능을 위해 재설계합니다.",
      card_2_title: "Web3 & Metaspace\nIntegration",
      card_2_desc: "단순한 유행을 넘어서, 고도화된 블록체인 프로토콜을 통해 실체 있는 탈중앙화 생태계와 몰입형 경험을 구축합니다.",
      card_3_title: "Strategic Branding\nPlanning",
      card_3_desc: "브랜딩은 모든 것의 기본입니다. 데이터 기반의 인사이트에서 브랜드 정체성을 도출하여 비즈니스 목표와 시각적 언어를 일치시킵니다.",
      explore: "Explore",
      sec_work: "02 / Selected Works",
      view_all_work: "View All Cases",
      sec_insight: "03 / Latest Insight",
      view_all_insight: "View All Insights",
      footer_desc: "Strategic Digital Consultancy.\n서울을 기반으로, 전 세계와 일합니다."
    },
    EN: {
      desc_intro: "We are a ",
      desc_bold: "Strategic Digital Consultancy.",
      desc: "We are not just an agency. We architect growth through rigorous planning, data logic, and precise engineering as your strategic partner.",
      cta_hero: "View Our Strategy",
      sec_service: "01 / Service",
      card_1_title: "Digital Architecture\n& Optimization",
      card_1_desc: "Legacy systems limit growth. We audit infrastructure to identify bottlenecks and re-engineer for scalability and peak performance.",
      card_2_title: "Web3 & Metaspace\nIntegration",
      card_2_desc: "Beyond the hype. We construct tangible decentralized ecosystems and immersive experiences using advanced blockchain protocols.",
      card_3_title: "Strategic Branding\nPlanning",
      card_3_desc: "Branding is the foundation of everything. We derive brand identity from data-driven insights to align visual language with business goals.",
      explore: "Explore",
      sec_work: "02 / Selected Works",
      view_all_work: "View All Cases",
      sec_insight: "03 / Latest Insight",
      view_all_insight: "View All Insights",
      footer_desc: "Strategic Digital Consultancy.\nBased in Seoul, working globally."
    }
  };

  const text = t[lang];

  return (
    <div className="font-sans text-black bg-white antialiased min-h-screen selection:bg-black selection:text-white">
      
      {/* 1. GNB */}
      <nav className={`fixed w-full z-50 transition-all duration-300 border-b border-gray-200 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-4' : 'bg-white py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold tracking-tighter z-50">HINOMAD</Link>
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-12 text-sm font-medium tracking-tight">
            <a href="#service" className="hover:opacity-50 transition-opacity">Service</a>
            <a href="#work" className="hover:opacity-50 transition-opacity">Work</a>
            <Link href="/insight" className="hover:opacity-50 transition-opacity">Insight</Link>
            <Link href="/about" className="hover:opacity-50 transition-opacity">About</Link>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => setLang(lang === 'KO' ? 'EN' : 'KO')} className="text-xs font-bold tracking-widest hover:opacity-50 transition-opacity">
              <span className={lang === 'KO' ? 'text-black' : 'text-gray-400'}>KO</span><span className="mx-2 text-gray-300">|</span><span className={lang === 'EN' ? 'text-black' : 'text-gray-400'}>EN</span>
            </button>
            <a href="mailto:info@hinomad.net" className="bg-black text-white text-xs font-bold px-6 py-3 rounded-full hover:bg-gray-800 transition-all uppercase tracking-widest">Contact Us</a>
          </div>
          <button className="md:hidden z-50 text-2xl relative" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>{isMobileMenuOpen ? "✕" : "☰"}</button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col justify-center items-center space-y-8 animate-in fade-in duration-200">
           <div className="flex gap-4 text-xl font-bold mb-8">
              <button onClick={() => setLang('KO')} className={lang === 'KO' ? 'text-black underline' : 'text-gray-300'}>KO</button>
              <button onClick={() => setLang('EN')} className={lang === 'EN' ? 'text-black underline' : 'text-gray-300'}>EN</button>
           </div>
          <a href="#service" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-bold tracking-tighter">Service</a>
          <a href="#work" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-bold tracking-tighter">Work</a>
          <Link href="/insight" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-bold tracking-tighter">Insight</Link>
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-bold tracking-tighter">About</Link>
          <div className="pt-12"><a href="mailto:info@hinomad.net" className="text-lg font-bold border-b-2 border-black">info@hinomad.net</a></div>
        </div>
      )}

      {/* 2. Hero Section */}
      <header className="relative pt-24 pb-20 md:pt-60 md:pb-40 px-6 border-b border-black">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-5xl">
            {/* 타이틀 수정: 3단계 명암 복구 + 첫 단어만 Extra Bold */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-tight mb-12 break-keep">
              <span className="block text-gray-400">
                <span className="font-extrabold">Perceive</span> <span className="font-medium">the Essence.</span>
              </span>
              <span className="block text-gray-600">
                <span className="font-extrabold">Inspire</span> <span className="font-medium">the Strategy.</span>
              </span>
              <span className="block text-black">
                <span className="font-extrabold">Construct</span> <span className="font-medium">the Future.</span>
              </span>
            </h1>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-l-2 border-black pl-6 md:pl-8">
              <p className="text-lg md:text-xl text-gray-500 max-w-xl font-medium leading-relaxed break-keep">
                {text.desc_intro}<span className="text-black font-bold">{text.desc_bold}</span><br/>
                {text.desc}
              </p>
              <a href="#service" className="group flex items-center text-sm font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-all cursor-pointer whitespace-nowrap">
                {text.cta_hero}
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* 3. Service Section */}
      <section id="service" className="bg-white border-b border-black">
        <div className="max-w-7xl mx-auto">
          <div className="px-6 py-8 border-b border-gray-200">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">{text.sec_service}</span>
          </div>

          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {/* Card 1 */}
            <div 
              data-index="0"
              className={`service-card group p-10 md:p-12 transition-all duration-500 cursor-pointer min-h-[400px] flex flex-col justify-between 
                ${activeServiceCard === 0 ? 'bg-black text-white md:bg-white md:text-black' : 'bg-white text-black'} 
                md:hover:bg-black md:hover:text-white`}
            >
              <div>
                <div className={`w-12 h-12 border rounded-full flex items-center justify-center mb-8 text-2xl
                  ${activeServiceCard === 0 ? 'border-white/30 text-white md:border-gray-200 md:text-black' : 'border-gray-200 text-black'}
                  md:group-hover:border-white/30 md:group-hover:text-white`}>⚡</div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight whitespace-pre-line">{text.card_1_title}</h3>
                <p className={`text-sm leading-relaxed break-keep 
                  ${activeServiceCard === 0 ? 'text-gray-300 md:text-gray-500' : 'text-gray-500'}
                  md:group-hover:text-gray-300`}>{text.card_1_desc}</p>
              </div>
              <div className={`mt-8 pt-8 border-t flex justify-between items-center transition-opacity
                 ${activeServiceCard === 0 ? 'border-white/20 opacity-100 md:border-gray-100 md:opacity-0' : 'border-gray-100 opacity-0'}
                 md:group-hover:border-white/20 md:group-hover:opacity-100`}>
                <span className="text-xs font-bold uppercase tracking-widest">{text.explore}</span><span>↗</span>
              </div>
            </div>

            {/* Card 2 */}
            <div 
              data-index="1"
              className={`service-card group p-10 md:p-12 transition-all duration-500 cursor-pointer min-h-[400px] flex flex-col justify-between 
                ${activeServiceCard === 1 ? 'bg-black text-white md:bg-white md:text-black' : 'bg-white text-black'} 
                md:hover:bg-black md:hover:text-white`}
            >
              <div>
                <div className={`w-12 h-12 border rounded-full flex items-center justify-center mb-8 text-2xl
                  ${activeServiceCard === 1 ? 'border-white/30 text-white md:border-gray-200 md:text-black' : 'border-gray-200 text-black'}
                  md:group-hover:border-white/30 md:group-hover:text-white`}>🧊</div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight whitespace-pre-line">{text.card_2_title}</h3>
                <p className={`text-sm leading-relaxed break-keep 
                  ${activeServiceCard === 1 ? 'text-gray-300 md:text-gray-500' : 'text-gray-500'}
                  md:group-hover:text-gray-300`}>{text.card_2_desc}</p>
              </div>
              <div className={`mt-8 pt-8 border-t flex justify-between items-center transition-opacity
                 ${activeServiceCard === 1 ? 'border-white/20 opacity-100 md:border-gray-100 md:opacity-0' : 'border-gray-100 opacity-0'}
                 md:group-hover:border-white/20 md:group-hover:opacity-100`}>
                <span className="text-xs font-bold uppercase tracking-widest">{text.explore}</span><span>↗</span>
              </div>
            </div>

            {/* Card 3 */}
            <div 
              data-index="2"
              className={`service-card group p-10 md:p-12 transition-all duration-500 cursor-pointer min-h-[400px] flex flex-col justify-between 
                ${activeServiceCard === 2 ? 'bg-black text-white md:bg-white md:text-black' : 'bg-white text-black'} 
                md:hover:bg-black md:hover:text-white`}
            >
              <div>
                <div className={`w-12 h-12 border rounded-full flex items-center justify-center mb-8 text-2xl
                  ${activeServiceCard === 2 ? 'border-white/30 text-white md:border-gray-200 md:text-black' : 'border-gray-200 text-black'}
                  md:group-hover:border-white/30 md:group-hover:text-white`}>✨</div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight whitespace-pre-line">{text.card_3_title}</h3>
                <p className={`text-sm leading-relaxed break-keep 
                  ${activeServiceCard === 2 ? 'text-gray-300 md:text-gray-500' : 'text-gray-500'}
                  md:group-hover:text-gray-300`}>{text.card_3_desc}</p>
              </div>
              <div className={`mt-8 pt-8 border-t flex justify-between items-center transition-opacity
                 ${activeServiceCard === 2 ? 'border-white/20 opacity-100 md:border-gray-100 md:opacity-0' : 'border-gray-100 opacity-0'}
                 md:group-hover:border-white/20 md:group-hover:opacity-100`}>
                <span className="text-xs font-bold uppercase tracking-widest">{text.explore}</span><span>↗</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Selected Works */}
      <section id="work" className="py-24 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="px-0 py-0 mb-8 md:mb-12">
             <span className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-4 md:hidden">{text.sec_work}</span>
             <div className="flex flex-col md:flex-row justify-between items-end">
                <h2 className="text-4xl font-bold tracking-tighter hidden md:block">{text.sec_work}</h2>
                <h2 className="text-4xl font-bold tracking-tighter md:hidden">Selected Works</h2>
                <a href="#" className="hidden md:block text-sm font-bold border-b border-black pb-1 hover:opacity-50">{text.view_all_work}</a>
             </div>
          </div>

          <div className="border-t border-black">
            {[
              { client: "Samsung", category: "Global Campaign", impact: "Increased Conversion by 45%", year: "2024", url: "/work/samsung" },
              { client: "Naver", category: "Search Optimization", impact: "ROI Improvement 300%", year: "2024", url: "#" },
              { client: "Chanel", category: "Brand Strategy", impact: "Digital Engagement Top 1%", year: "2023", url: "#" },
              { client: "Rentokil", category: "IT Modernization", impact: "Server Latency -60%", year: "2023", url: "#" },
            ].map((item, index) => (
              <Link key={index} href={item.url} className="group flex flex-col md:flex-row items-baseline justify-between py-8 border-b border-gray-300 hover:border-black transition-colors cursor-pointer block">
                <div className="md:w-1/4 text-xl font-bold mb-2 md:mb-0 group-hover:translate-x-2 transition-transform">{item.client}</div>
                <div className="md:w-1/4 text-sm text-gray-500 font-medium mb-1 md:mb-0">{item.category}</div>
                <div className="md:w-1/3 text-sm text-black font-medium group-hover:text-blue-600 transition-colors">{item.impact}</div>
                <div className="md:w-auto text-xs text-gray-400">{item.year}</div>
              </Link>
            ))}
          </div>
          <div className="mt-8 md:hidden">
            <a href="#" className="text-sm font-bold border-b border-black pb-1">{text.view_all_work}</a>
          </div>
        </div>
      </section>

      {/* 5. Latest Insight */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="px-0 py-0 mb-8 md:mb-12">
             <span className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-4 md:hidden">{text.sec_insight}</span>
             <div className="flex flex-col md:flex-row justify-between items-end">
                <h2 className="text-4xl font-bold tracking-tighter hidden md:block">{text.sec_insight}</h2>
                <h2 className="text-4xl font-bold tracking-tighter md:hidden">Latest Insight</h2>
                <Link href="/insight" className="hidden md:block text-sm font-bold border-b border-black pb-1 hover:opacity-50">{text.view_all_insight}</Link>
             </div>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
               { category: 'Tech', date: '2025. 12. 08', title: 'Why Next.js is the Future of Enterprise Web', link: '/insight/1' },
               { category: 'Data', date: '2025. 11. 24', title: 'The Death of Third-Party Cookies: A New Era', link: '/insight/2' },
               { category: 'Strategy', date: '2025. 11. 10', title: 'Visual Logic: Design as a Business Strategy', link: '/insight/3' }
            ].map((insight, index) => (
              <Link href={insight.link} key={index} className="group block cursor-pointer">
                <div className="border-t border-black pt-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">{insight.category}</span>
                    <span className="text-xs text-gray-400 font-medium">{insight.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold leading-tight group-hover:underline decoration-2 underline-offset-4">{insight.title}</h3>
                  <div className="mt-6 flex items-center text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1">
                    Read Article →
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 md:hidden">
            <Link href="/insight" className="text-sm font-bold border-b border-black pb-1">View All Insights</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">
          <div>
            <h4 className="text-3xl font-bold tracking-tighter mb-1">HINOMAD</h4>
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-6 block">Since 2018</span>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed whitespace-pre-line">
              {text.footer_desc}
            </p>
          </div>
          <div className="flex gap-12 text-sm text-gray-400 pt-3">
            <div className="flex flex-col gap-3">
              <span className="text-white font-bold mb-2">Social</span>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">YouTube</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-gray-900 text-xs text-gray-600 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2018-2025 HINOMAD Inc. All rights reserved.</p>
          <a href="mailto:info@hinomad.net" className="hover:text-gray-400 transition-colors">info@hinomad.net</a>
        </div>
      </footer>
    </div>
  );
}