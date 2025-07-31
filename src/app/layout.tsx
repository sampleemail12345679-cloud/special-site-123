import type { Metadata } from "next";
import { Open_Sans } from 'next/font/google';
import "./globals.css";
import { dark} from '@clerk/themes'


import {
  ClerkProvider
} from '@clerk/nextjs'
const Open =  Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});


export const metadata: Metadata = {
  title: "ClonicalClone",
  description: "A Ecommerce watch Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider  appearance={{
      baseTheme: dark,
    }}
>
    <html lang="en">
      <body className={`  ${Open.className} antialiased`}>
        {children}
      </body>
      </html>
      </ClerkProvider>
  );
}
