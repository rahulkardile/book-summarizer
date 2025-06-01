'use client'

import React, { useState } from 'react'
import Options from '@/app/components/Options'
import { languageOptions, summarizationOptions } from '@/utils/Contants'
import Link from 'next/link'
import { Sun, Moon } from 'lucide-react'

const Page: React.FC = () => {
  const [format, setFormat] = useState<string>('')
  const [language, setLanguage] = useState<string>('')
  const [bookTitle, setBookTitle] = useState<string>('') // NEW
  const [summary, setSummary] = useState<string>('') // NEW
  const [loading, setLoading] = useState<boolean>(false)
  const [darkMode, setDarkMode] = useState<boolean>(false)

  // 📡 API Call Handler
  const handleSubmit = async () => {
    if (!bookTitle || !format || !language) {
      alert('Please fill all fields.')
      return
    }

    setLoading(true)
    try {
      const res = await fetch('/api/ai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          bookTitle,
          summaryFormat: format,
          language
        })
      })

      const data = await res.json()
      setSummary(data?.summary || 'No summary returned.')
    } catch (err) {
      console.error('Error fetching summary:', err)
      setSummary('Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

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

        <section className={`${darkMode ? 'bg-black text-xs text-white' : 'bg-white text-xs text-gray-900'} backdrop-blur-md w-11/12 md:w-3/4 lg:w-2/3 absolute bottom-12 p-6 rounded-xl space-y-6 border border-gray-300 `}>
          <input
            type="text"
            placeholder="Enter your book title..."
            value={bookTitle}
            onChange={(e) => setBookTitle(e.target.value)}
            className="w-full p-3 rounded-xl text-black bg-white dark:bg-white-800 focus:outline-none"
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

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl hover:opacity-90 disabled:opacity-50"
          >
            {loading ? 'Summarizing...' : 'Generate Summary'}
          </button>

          {summary && (
            <div className="mt-4 p-4 bg-white text-black rounded-md">
              <h3 className="font-semibold mb-2">Summary:</h3>
              <pre className="whitespace-pre-wrap">{summary}</pre>
            </div>
          )}
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
