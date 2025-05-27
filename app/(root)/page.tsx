import React from 'react'

const page = () => {
  return (
    <section className='flex justify-center mx-auto items-center bh gap-4 h-[70vh] w-[85%] '>
      <div className="flex flex-col gap-5 justify-start">
        <h1 className='text-5xl font-bold'>Snap the Essence of Any Book – Instantly, Intelligently, In Your Language.</h1>
        <p className='text-2xl'>Get intelligent book summaries in seconds — simply enter a book name, choose your preferred summary style (extractive, abstractive, chapter-wise, or bullet points), select your language (English, Hindi, or Marathi), and let AI unlock deep insights tailored just for you.</p>
        <button className='bg-amber-200 w-fit text-black font-semibold p-2.5 rounded'>Summariz Now</button>
      </div>
      <div className="flex items-center justify-center">
        <div className="bg-amber-300 border-8 border-white rounded-3xl w-96 h-64"></div>
      </div>
    </section>
  )
}

export default page