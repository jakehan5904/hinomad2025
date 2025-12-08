import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  // 1. 기본 메타 정보
  title: "하이노마드 [HINOMAD]",
  description: "IT 컨설팅 하이노마드. 전략 수립, 브랜딩, 웹&앱, 메타버스 및 블록체인 플랫폼 개발까지 올인원솔루션 제공",
  keywords: [
    "하이노마드", "IT컨설팅", "브랜드전략", "메타버스개발", "블록체인개발", 
    "웹&앱개발", "플랫폼구축", "blockchain", "metavers"
  ],
  
  // 2. 오픈 그래프 (www 제거됨)
  openGraph: {
    type: "website",
    title: "하이노마드[HINOMAD]",
    siteName: "하이노마드[HINOMAD]",
    description: "전략적인 IT 컨설팅과 메타버스, 블록체인 기술로 당신의 비즈니스를 브랜딩합니다.",
    url: "https://hinomad.net", // ✅ www 제거
    images: [
      {
        url: "/hinomad_sns.png", // 업로드하신 파일명 유지
      },
    ],
  },

  // 3. 캐노니컬 URL (www 제거됨 - 가장 중요! ⭐)
  alternates: {
    canonical: "https://hinomad.net", // ✅ www 제거
  },

  // 4. 파비콘
  icons: {
    icon: "/hinomad_ico.ico", // 업로드하신 파일명 유지
    shortcut: "/hinomad_ico.ico",
  },

  // 5. 기타 메타 태그 (www 제거됨)
  other: {
    "al:web:url": "https://hinomad.net", // ✅ www 제거
    "viewport": "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat:700|Open+Sans:400,700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-WNZ2GJV"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {children}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=UA-134154877-1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-134154877-1');
          `}
        </Script>

        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WNZ2GJV');
          `}
        </Script>
      </body>
    </html>
  );
}