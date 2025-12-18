import type { Metadata, Viewport } from "next"; // Viewport 추가
import Script from "next/script";
import "./globals.css";

// ✅ [핵심 1] 뷰포트는 이제 metadata와 분리해서 쓰는 것이 표준입니다 (Next.js 14+)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false, // user-scalable=no 와 동일
};

export const metadata: Metadata = {
  // ✅ [핵심 2] 도메인 기준점 (상대 경로들이 이 주소를 따라감)
  metadataBase: new URL('https://hinomad.net'), 
  
  // ✅ [핵심 3] 캐노니컬 URL 설정 (중복 삭제 및 통합)
  // 여기서 'https://hinomad.net'을 명시해야 네이버가 티스토리와 헷갈리지 않습니다.
  alternates: {
    canonical: 'https://hinomad.net', 
  },

  title: "하이노마드 [HINOMAD]",
  description: "IT 컨설팅 하이노마드. 전략 수립, 브랜딩, 웹&앱, 메타버스 및 블록체인 플랫폼 개발까지 올인원솔루션 제공",
  keywords: [
    "하이노마드", "IT컨설팅", "브랜드전략", "메타버스개발", "블록체인개발", 
    "웹&앱개발", "플랫폼구축", "blockchain", "metavers"
  ],
  
  // 오픈 그래프 (SNS 공유)
  openGraph: {
    type: "website",
    title: "하이노마드[HINOMAD]",
    siteName: "하이노마드[HINOMAD]",
    description: "전략적인 IT 컨설팅과 메타버스, 블록체인 기술로 당신의 비즈니스를 브랜딩합니다.",
    url: "https://hinomad.net", // 명시적으로 풀 주소 기입 권장
    images: [
      {
        url: "/hinomad_sns.png", 
        width: 1200,
        height: 630,
        alt: "HINOMAD Main Visual",
      },
    ],
  },

  // 파비콘
  icons: {
    icon: "/hinomad_ico.ico", 
    shortcut: "/hinomad_ico.ico",
    apple: "/hinomad_ico.ico", 
  },
  
  // ❌ 삭제됨: 아래에 있던 alternates 중복 코드를 삭제했습니다.
  // ❌ 삭제됨: other에 있던 viewport 코드를 위쪽 export const viewport로 이동했습니다.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        {/* 폰트 최적화는 추후 next/font 사용을 권장하지만 현재 방식도 작동은 합니다 */}
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

        {/* [참고] UA-xxxxx 코드는 구글 애널리틱스(UA) 구버전입니다. 
          2023년 7월부로 서비스가 종료되어 데이터 수집이 안 될 수 있습니다.
          GA4 (G-xxxxx) 코드로 변경하시는 것을 추천드립니다.
        */}
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