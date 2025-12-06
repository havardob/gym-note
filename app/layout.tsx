import { ReactNode } from 'react';
import type { Metadata } from 'next';
import './_assets/css/reset.css';
import './_assets/css/size-tokens.css';
import './_assets/css/color-tokens.css';
import './_assets/css/font-tokens.css';
import './_assets/css/base.css';
import './_assets/css/utils.css';
import "./Layout.css";
import { Geist_Mono, Gabarito } from 'next/font/google';

const gabarito = Gabarito({
  subsets: ['latin'],
  variable: '--font-gabarito',
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
    <html lang="en" className={`${gabarito.variable} ${geistMono.variable}`}>
      <body>
        <div className={"l-app"}>
          {children}
        </div>
      </body>
    </html>
  );
}
