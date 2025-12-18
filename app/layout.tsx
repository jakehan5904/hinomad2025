import React from "react";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

// 1. 뷰포트 설정
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
};

// 2. 메타데이터 설정
export const metadata: Metadata = {
  metadataBase: new URL('https://hinomad.net'), 
  alternates: {
    canonical: 'https://hinomad.net', 
  },
  title: "하이노마드 [HINOMAD]",
  description: "IT 컨설팅 하이노마드. 전략 수립, 브랜딩, 웹&앱, 메타버스 및 블록체인 플랫폼 개발까지 올인원솔루션 제공",
  keywords: [
    "하이노마드", "IT컨설팅", "브랜드전략", "메타버스개발", "블록체인개발", 
    "웹&앱개발", "플랫폼구축", "blockchain", "metavers"
  ],
  openGraph: {
    type: "website",
    title: "하이노마드[HINOMAD]",
    siteName: "하이노마드[HINOMAD]",
    description: "전략적인 IT 컨설팅과 메타버스, 블록체인 기술로 당신의 비즈니스를 브랜딩합니다.",
    url: "https://hinomad.net",
    images: [
      {
        url: "/hinomad_sns.png", 
        width: 1200,
        height: 630,
        alt: "HINOMAD Main Visual",
      },
    ],
  },
  icons: {
    icon: "/hinomad_ico.ico", 
    shortcut: "/hinomad_ico.ico",
    apple: "/hinomad_ico.ico", 
  },
};

// 3. GA4 아이디 (이것만 있으면 방문자 집계 끝!)
const GA_ID = 'G-55NCMKXVXL';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat:700|Open+Sans:400,700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        
        {/* ❌ 삭제함: GTM <noscript> 태그 (불필요) */}

        {children}

        {/* ✅ GA4 스크립트 (이것만 남김) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>

        {/* ❌ 삭제함: GTM 스크립트 (불필요) */}
        
      </body>
    </html>
  );
}