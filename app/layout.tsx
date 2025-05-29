import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Link from "next/link";

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
        <nav className='bg-gray-800 text-gray-400 font-medium text-sm fixed top-4 left-1/2 transform -translate-x-1/2 flex justify-between items-center px-7 w-[60%] py-2 rounded-2xl'>
          <Link className='hover:text-black rounded hover:bg-white p-1 duration-500' href={"/"}>BookSnap</Link>
          <Link className='hover:text-black rounded hover:bg-white p-1 duration-500' href={"/"}>Pricing</Link>
          <Link className='hover:text-black rounded hover:bg-white p-1 duration-500' href={"/"}>New Book's</Link>
          <Link className='hover:text-black rounded hover:bg-white p-1 duration-500' href={"/"}>New Chat</Link>
          <Link className='hover:text-black rounded hover:bg-white p-1 duration-500' href={"/"}>Contact</Link>
          <Link className='text-gray-200 border border-white p-1.5 px-4  rounded' href={"/"}>Sign-In</Link>
          <Link className='bg-yellow-200 p-1.5 rounded text-black' href={"/chat"}>Get-Started</Link>
        </nav>
        {children}
        <Toaster />
      </body>
    </html>
  );
}