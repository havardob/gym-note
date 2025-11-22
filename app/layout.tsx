import { ReactNode } from 'react';
import type { Metadata } from 'next';
import './_assets/css/reset.css';
import './_assets/css/size-tokens.css';
import './_assets/css/color-tokens.css';
import './_assets/css/font-tokens.css';
import './_assets/css/base.css';
import './_assets/css/utils.css';
import { Geist, Geist_Mono } from 'next/font/google';

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
});


const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Gym Note',
  description: 'Track your workout',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode; 
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
