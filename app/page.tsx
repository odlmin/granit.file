'use client';

import Image from 'next/image';
import React, { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import Link from 'next/link';
import Script from 'next/script';

export default function HomePage() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', 'AW-');
  }, []);

  return (
    <>
      <Script
        id="gtag-async"
        src="https://www.googletagmanager.com/gtag/js?id=AW-"
        strategy="afterInteractive"
      />
      <Script
        id="gtag-inline"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-');
          `,
        }}
      />
      <main className="flex flex-col items-center">
        {/* Hero Section */}
        <HeroSection />
        {/* Main Content Section */}
        <section className="py-16 px-6 w-full text-center bg-[url('/images/halloween-bats.webp')] bg-repeat bg-contain border-y-8 border-rose-600">
          <h2 className="text-3xl font-semibold text-white uppercase">Granit Slots – free heroic slot machine for fun!</h2>
          <p className="mt-6 text-gray-300">
          Experience the thrill of fairy tale combined with classic slots! Granit Slot free social casino experience gives you unforgettable hours of entertainment and fun.
          </p>
          <Image
            src="/images/lucky-gameplay.webp"
            alt="Granit Slot"
            width={800}
            height={300}
            className="mx-auto mt-8"
          />
          <Link href="/game" passHref>
            <button className="mt-6 px-9 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded uppercase">
            Play Now
            </button>
          </Link>
        </section>
        {/* Footer Section */}
        <section className="px-5 bg-yellow-400 py-12 text-center text-white w-full">
          <h2 className="text-4xl font-bold text-red-900 uppercase">Disclaimer:</h2>
          <h3 className="text-2xl font-bold text-cyan-950">You must be at least 18 years old to play.</h3>
          <h3 className="text-2xl font-bold mt-4 max-w-xl mx-auto text-cyan-950">
          This is a game intended for entertainment purposes only and there is no opportunity to win real money, prizes or bets.
          </h3>
        </section>
      </main>
    </>
  );
}
