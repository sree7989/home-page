import './globals.css';
import { Inter, PT_Serif, Playfair_Display } from 'next/font/google';
import Navbar from '@/app/components/Nav';
import Footer from '@/app/components/Footer';
import EligibilityBanner from '@/app/components/EligibilityBanner';
import ClientWidgets from '@/app/components/ClientWidgets';
import Script from 'next/script';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Best Visa Immigration Consultants in Hyderabad Bangalore PR Visa | Study Visa | Job Seeker Visa | Visit Visa | Investor Visa | Tourist Visa | Dependent Visa | Work Permit Visa',
  description:
    'Best Visa Immigration Consultants in Hyderabad and Bangalore Process for PR Visa, Study Visa, Job Seeker Visa, Visit Visa, Investor Visa, Tourist Visa, Dependent Visa, Work Permit Visa and much more...',
  keywords:
    'Best Visa Immigration Consultants in Hyderabad, Best Immigration Visa Consultants in Bangalore, PR Visa, Germany Opportunity Card, Study Visa, Job Seeker Visa, Work Permit Visa',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Verification */}
        <meta
          name="google-site-verification"
          content="L_PNy3dgEzp57F2JsXfvTXBc7aedqUdzow1IyvEmCUE"
        />

        {/* ✅ Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16767451796"
          strategy="afterInteractive"
        />

        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JPH0CGYTXT');
          `}
        </Script>

        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16767451796');
          `}
        </Script>

        {/* ✅ Facebook Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2003555746606868');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>

      {/* ✅ ONLY CHANGE HERE 👇 */}
      <body className="bg-white" style={{ fontFamily: 'Times New Roman' }}>
        
        {/* ✅ Navbar (FULL WIDTH) */}
        <Navbar />

        {/* ✅ MAIN CONTENT */}
        <main className="pt-20">

          {/* 🔴 FULL WIDTH SECTION (Banner should stay full) */}
          <EligibilityBanner />

          {/* 🟢 CENTERED CONTENT START */}
          <div className="max-w-7xl mx-auto px-1 sm:px-2 lg:px-3">
            {children}
          </div>
          {/* 🟢 CENTERED CONTENT END */}

          {/* Widgets (can stay full width or move inside if needed) */}
          <ClientWidgets />

          {/* Footer (FULL WIDTH better) */}
          <Footer />
        </main>

        {/* ✅ FB fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=2003555746606868&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}