'use client'

import React, { useState } from 'react'
import Options from '@/app/components/Options'
import { languageOptions, summarizationOptions } from '@/utils/Contants'
import Link from 'next/link'
import { Sun, Moon } from 'lucide-react'

const Page: React.FC = () => {
  const [format, setFormat] = useState<string>('')
  const [language, setLanguage] = useState<string>('')
  const [darkMode, setDarkMode] = useState<boolean>(false)

  return (
    <section className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} h-screen flex transition-colors duration-300 font-medium`}>
      {/* Left Sidebar */}
      <aside className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} w-[20%] border-r p-6 pt-12 shadow-md`}>
        <h2 className="text-xl font-bold mb-8">📚 BookSnap</h2>
        <div className="flex flex-col gap-3 text-sm">
          <Link href="/">🆕 New Chat</Link>
          <Link href="/">🔍 Search Chat</Link>
          <Link href="/">📖 History</Link>

          <p className="mt-6 mb-2 text-gray-500 dark:text-gray-300 font-semibold">Quick Recommendations</p>
          <Link href="/">• Almanack of Naval Ravikant</Link>
          <Link href="/">• Psychology of Money</Link>
          <Link href="/">• Think and Grow Rich</Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="w-[60%] flex flex-col items-center pt-12 relative bg-transparent">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="absolute top-6 right-6 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white hover:scale-105 transition"
          title="Toggle Dark Mode"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <section className={`${darkMode ? 'bg-black text-xs text-white' : 'bg-white text-xs text-gray-900'} backdrop-blur-md w-11/12 md:w-3/4 lg:w-2/3 absolute bottom-12 p-6 rounded-2xl shadow-xl space-y-6 border border-b-gray-900 dark:border-white/10`}>
          <input
            type="text"
            placeholder="Enter your topic or content..."
            className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-600 text-black dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <div className="flex flex-col md:flex-row gap-4">
            <Options
              id="summarization-format"
              padding={7}
              label="Format"
              options={summarizationOptions}
              value={format}
              onChange={(val) => setFormat(val)}
            />

            <Options
              id="summarization-language"
              padding={7}
              label="Language"
              options={languageOptions}
              value={language}
              onChange={(val) => setLanguage(val)}
            />
          </div>
        </section>
      </main>

      {/* Right Sidebar */}
      <aside className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} w-[20%] border-l p-6 pt-12 shadow-md`}>
        <h2 className="text-lg font-semibold">Library</h2>
        <p className="mt-4 text-sm text-gray-500 dark:text-gray-300">Your saved notes will appear here.</p>
      </aside>
    </section>
  )
}

export default Page
