import React from 'react'

const page = () => {
  return (
    <section className='flex justify-end bg-sky-200 bh gap-4 w-[85%]'>
        <div className="">
            <h1>Snap the Essence of Any Book – Instantly, Intelligently, In Your Language.</h1>
            <p>Get intelligent book summaries in seconds — simply enter a book name, choose your preferred summary style (extractive, abstractive, chapter-wise, or bullet points), select your language (English, Hindi, or Marathi), and let AI unlock deep insights tailored just for you.</p>
            <button>Summariz Now</button>
        </div>
        <div className="">
            <div className="bg-transparent border-8 border-white rounded-4xl px-28 py-28"></div>
        </div>
    </section>
  )
}

export default page