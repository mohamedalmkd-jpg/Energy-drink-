import type { Metadata, Viewport } from 'next';
import { Sofia_Sans, Sofia_Sans_Extra_Condensed } from 'next/font/google';
import type { ReactNode } from 'react';
import './globals.css';

const display = Sofia_Sans_Extra_Condensed({
  subsets: ['latin'],
  weight: ['800', '900'],
  variable: '--font-display',
  display: 'swap',
});

const body = Sofia_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Flux Energy — Zero sugar. Maximum energy.',
  description:
    'Flux Energy is a zero sugar energy drink in five flavors: 160 mg caffeine, 1000 mg taurine and B-vitamins in every 330 ml can.',
  openGraph: {
    title: 'Flux Energy',
    description: 'Zero sugar. Maximum energy. Five flavors, one formula.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#000000',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`} data-ui="dark">
      <body>{children}</body>
    </html>
  );
}
