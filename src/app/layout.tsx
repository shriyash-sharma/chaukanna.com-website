import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';
import {
  SITE,
  METADATA_ICONS,
  SOCIAL_SHARE_IMAGE,
  ORGANIZATION_JSON_LD,
} from '@/lib/branding';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  themeColor: SITE.themeColor,
};

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} - ${SITE.tagline} in Pune`,
    template: `%s | ${SITE.legalName}`,
  },
  description: SITE.description,
  keywords:
    'CCTV installation Pune, home automation Pune, fire alarm systems, biometric attendance, video door phone, access control, public address systems',
  applicationName: SITE.name,
  authors: [{ name: SITE.legalName }],
  creator: SITE.legalName,
  publisher: SITE.legalName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(SITE.url),
  alternates: {
    canonical: '/',
  },
  manifest: '/manifest.json',
  icons: METADATA_ICONS,
  appleWebApp: {
    capable: true,
    title: SITE.name,
    statusBarStyle: 'default',
  },
  openGraph: {
    type: 'website',
    locale: SITE.locale,
    url: SITE.url,
    title: `${SITE.name} - ${SITE.tagline} in Pune`,
    description: SITE.shortDescription,
    siteName: SITE.name,
    images: [
      {
        url: SOCIAL_SHARE_IMAGE.url,
        width: SOCIAL_SHARE_IMAGE.width,
        height: SOCIAL_SHARE_IMAGE.height,
        alt: SOCIAL_SHARE_IMAGE.alt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} - ${SITE.tagline} in Pune`,
    description: SITE.shortDescription,
    images: [SOCIAL_SHARE_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Organization structured data */}
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ORGANIZATION_JSON_LD),
          }}
        />

        {/* Google Analytics (GA4) */}
        {(() => {
          const gaId = process.env.NEXT_PUBLIC_GA_ID || 'G-Q1LSVKTZ2F';
          return (
            <>
              <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
                strategy="afterInteractive"
              />
              <Script id="google-analytics" strategy="afterInteractive">
                {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}');
                `}
              </Script>
            </>
          );
        })()}

        {/* Tawk.to Script */}
        {process.env.NEXT_PUBLIC_TAWK_ID && (
          <Script
            id="tawk-to"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                (function(){
                  var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                  s1.async=true;
                  s1.src='https://embed.tawk.to/${process.env.NEXT_PUBLIC_TAWK_ID}';
                  s1.charset='UTF-8';
                  s1.setAttribute('crossorigin','*');
                  s0.parentNode.insertBefore(s1,s0);
                })();
              `,
            }}
          />
        )}

        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
        <Analytics />
      </body>
    </html>
  );
}
