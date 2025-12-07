import type { Metadata } from "next";
import Script from "next/script"; // 스크립트 최적화를 위한 Next.js 기능
import "./globals.css";

export const metadata: Metadata = {
  // 1. 기본 메타 정보 (기존 내용 반영)
  title: "하이노마드 [HINOMAD]",
  description: "IT 컨설팅 하이노마드. 전략 수립, 브랜딩, 웹&앱, 메타버스 및 블록체인 플랫폼 개발까지 올인원솔루션 제공",
  keywords: [
    "하이노마드", "IT컨설팅", "브랜드전략", "메타버스개발", "블록체인개발", 
    "웹&앱개발", "플랫폼구축", "blockchain", "metavers"
  ],
  
  // 2. 오픈 그래프 (카톡/페이스북 공유 시 보이는 정보)
  openGraph: {
    type: "website",
    title: "하이노마드[HINOMAD]",
    siteName: "하이노마드[HINOMAD]",
    description: "전략적인 IT 컨설팅과 메타버스, 블록체인 기술로 당신의 비즈니스를 브랜딩합니다.",
    url: "https://www.hinomad.net/",
    images: [
      {
        url: "https://www.hinomad.net/img/hinomadsns.png", // 기존 이미지 경로 유지 (추후 public 폴더로 이동 권장)
      },
    ],
  },

  // 3. 캐노니컬 URL (대표 주소)
  alternates: {
    canonical: "https://www.hinomad.net/",
  },

  // 4. 파비콘 (아이콘)
  icons: {
    icon: "/favicon.ico", // public 폴더에 favicon.ico가 있어야 함
    shortcut: "/favicon.ico",
  },

  // 5. 기타 메타 태그 (App Link 등)
  other: {
    "al:web:url": "https://www.hinomad.net/",
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
        {/* Google Fonts (기존 Montserrat, Open Sans) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat:700|Open+Sans:400,700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        
        {/* Google Tag Manager (noscript) - 바디 시작 부분에 위치 */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-WNZ2GJV"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {children}

        {/* [중요] Google Analytics & Tag Manager 스크립트 
          Next.js의 Script 컴포넌트를 사용하여 성능 저하 없이 로드합니다.
        */}
        
        {/* Global site tag (gtag.js) */}
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

        {/* Google Tag Manager (GTM) */}
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