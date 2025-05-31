import ReduxProvider from '@/lib/ReduxProvider';
import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Navbar from './components/Navbar';

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BookSnap – Snap the Essence of Any Book in Seconds",
  description: "BookSnap is a smart, AI-powered summarizer that lets you instantly generate summaries of any book in your preferred format—extractive, abstractive, chapter-wise, or bullet points. Just type the book name, and get concise insights in English, Hindi, or Marathi. Powered by cutting-edge AI, BookSnap makes deep reading fast, fun, and multilingual—for everyone.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${monaSans.className} antialiased pattern min-h-screen bg-gradient-to-r from-[#5f00ba] via-[#d2008f] to-[#6c00ff]`}
      >
        <ReduxProvider>
         <Navbar />
          {children}
          <Toaster />
        </ReduxProvider>
      </body>
    </html>
  );
}