'use client'

import React, { useState, useRef, useEffect } from 'react'
import Options from '@/app/components/Options'
import { languageOptions, summarizationOptions } from '@/utils/Contants'
import Link from 'next/link'
import { Sun, Moon } from 'lucide-react'
import { SummaryItem } from '@/utils/types'

const TypingEffectWithFormatting = ({ text, speed = 15 }: { text: string; speed?: number }) => {
  const tokens = tokenize(text)
  const [output, setOutput] = useState<React.ReactNode[]>([])
  const [tokenIndex, setTokenIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    if (tokenIndex >= tokens.length) return

    const current = tokens[tokenIndex]
    const currentText = current.value

    if (charIndex < currentText.length) {
      const updated = [...output]
      const partial = currentText.slice(0, charIndex + 1)

      updated[tokenIndex] = renderToken(current.type, partial)
      setOutput(updated)

      const timeout = setTimeout(() => setCharIndex((c) => c + 1), speed)
      return () => clearTimeout(timeout)
    } else {
      const updated = [...output]
      updated[tokenIndex] = renderToken(current.type, currentText)
      setOutput(updated)

      setTokenIndex((i) => i + 1)
      setCharIndex(0)
    }
  }, [tokenIndex, charIndex])

  return (
    <div className="whitespace-pre-wrap leading-relaxed text-gray-800 text-sm">
      {output.map((token, i) => (
        <React.Fragment key={i}>{token}</React.Fragment>
      ))}
    </div>
  )
}

function tokenize(text: string) {
  const tokens = []
  let remaining = text

  const regex = /(\*\*(.*?)\*\*|"([^"]+?)")/g
  let match
  let lastIndex = 0

  while ((match = regex.exec(remaining)) !== null) {
    if (match.index > lastIndex) {
      tokens.push({ type: 'text', value: remaining.slice(lastIndex, match.index) })
    }

    if (match[2]) {
      tokens.push({ type: 'bold', value: match[2] })
    } else if (match[3]) {
      tokens.push({ type: 'italic', value: match[3] })
    }

    lastIndex = regex.lastIndex
  }

  if (lastIndex < remaining.length) {
    tokens.push({ type: 'text', value: remaining.slice(lastIndex) })
  }

  return tokens
}

function renderToken(type: string, value: string) {
  if (type === 'bold') return <strong>{value}</strong>
  if (type === 'italic') return <em>{value}</em>
  return value
}

const Page: React.FC = () => {
  const [format, setFormat] = useState<string>('')
  const [language, setLanguage] = useState<string>('')
  const [bookTitle, setBookTitle] = useState<string>('')
  const [summaries, setSummaries] = useState<SummaryItem[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [darkMode, setDarkMode] = useState<boolean>(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [summaries])

  const handleSubmit = async () => {
    if (!bookTitle || !format || !language) {
      alert('Please fill all fields.')
      return
    }

    setLoading(true)
    try {
      const res = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ bookTitle, summaryFormat: format, language })
      })

      const data: SummaryItem = await res.json()
      setSummaries((prev) => [...prev, { bookTitle: data.bookTitle, content: data?.content, type: data?.type || 'No summary returned.' }])
    } catch (err) {
      console.error('Error fetching summary:', err)
      setSummaries((prev) => [...prev, { bookTitle, type: format, content: 'No summary returned.' }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} h-screen flex transition-colors duration-300 font-medium`}>
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

      <main className="w-[60%] flex flex-col items-center pt-12 relative bg-transparent overflow-y-auto">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="absolute top-6 right-6 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white hover:scale-105 transition"
          title="Toggle Dark Mode"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {summaries.length > 0 && (
          <div className="mt-6 w-11/12 md:w-3/4 lg:w-2/3 max-h-[400px] overflow-y-auto space-y-6 p-2">
            {summaries.map((summary, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-300 dark:border-gray-700 rounded-xl shadow-sm p-4 transition-all"
              >
                <h3 className="text-lg font-semibold text-purple-700 mb-3">
                  {summary.bookTitle} #{idx + 1}
                </h3>
                <TypingEffectWithFormatting key={idx} text={summary.content.trim()} />
              </div>
            ))}
            <div ref={bottomRef} />
          </div>
        )}

        <section className={`${darkMode ? 'bg-black text-xs text-white' : 'bg-white text-xs text-gray-900'} backdrop-blur-md w-11/12 md:w-3/4 lg:w-2/3 absolute bottom-12 p-6 rounded-xl space-y-6 border border-gray-300`}>
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
        </section>
      </main>

      <aside className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} w-[20%] border-l p-6 pt-12 shadow-md`}>
        <h2 className="text-lg font-semibold">Library</h2>
        <p className="mt-4 text-sm text-gray-500 dark:text-gray-300">Your saved notes will appear here.</p>
      </aside>
    </section>
  )
}

export default Page
