import {ReactNode} from "react";
import type { Metadata } from "next";
import "./assets/css/reset.css";
import "./assets/css/color-tokens.css";
import "./assets/css/font-tokens.css";
import "./assets/css/base.css";
import "./assets/css/utils.css";
import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ['latin'],
  variable: "--font-geist",
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Gym Note",
  description: "Track your workout",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
