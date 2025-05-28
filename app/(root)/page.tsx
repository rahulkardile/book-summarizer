import Image from 'next/image';
import React from 'react';

const Page = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between w-[80%] mx-auto h-screen max-md:h-auto gap-10">

      <div className="flex flex-col gap-6 max-w-xl text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
          Snap the Essence of Any Book – Instantly, Intelligently, In Your Language.
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          Get intelligent book summaries in seconds — simply enter a book name, choose your preferred summary style (extractive, abstractive, chapter-wise, or bullet points), select your language (English, Hindi, or Marathi), and let AI unlock deep insights tailored just for you.
        </p>
        <button className="bg-yellow-300 hover:bg-yellow-400 text-black font-semibold py-3 px-6 rounded w-fit mx-auto md:mx-0 transition">
          Summarize Now
        </button>
      </div>

      <div className="relative flex justify-center items-end">
        <Image
          src="/logo.png"
          alt="Book cover"
          width={600}
          height={750}
          className="rounded-xl max-w-full h-auto z-10"
        />
        <div className="absolute bottom-0 w-[60%] h-6 bg-black/30 blur-md rounded-full z-0"></div>
      </div>
    </section>
  );
};

export default Page;
