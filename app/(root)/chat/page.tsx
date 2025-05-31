'use client'

import React, { useState } from 'react'
import Options from '@/app/components/Options'
import { languageOptions, summarizationOptions } from '@/utils/Contants'

const Page: React.FC = () => {
  const [format, setFormat] = useState<string>('')
  const [language, setLanguage] = useState<string>('')

  return (
    <section className="h-screen flex text-white font-medium">
      {/* Left Sidebar */}
      <aside className="w-[20%] bg-gradient-to-b from-purple-800 via-purple-700 to-purple-900 p-6 pt-12 shadow-lg">
        <h2 className="text-lg font-semibold">Side Nav</h2>
      </aside>

      {/* Main Content */}
      <main className="w-[60%] bg-gradient-to-br from-[#5f00ba] via-[#d2008f] to-[#6c00ff] pt-12 flex flex-col items-center relative">
        <section className="w-11/12 md:w-3/4 lg:w-2/3 absolute bottom-12 bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-2xl space-y-6 border border-white/20">
          <input
            type="text"
            placeholder="Enter your topic or content..."
            className="w-full p-3 text-black rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white/80"
          />

          <div className="flex flex-col md:flex-row gap-4">
            <Options
              id="summarization-format"
              padding={2}
              label="Format"
              options={summarizationOptions}
              value={format}
              onChange={(val) => {
                setFormat(val)
                console.log('Format selected:', val)
              }}
            />

            <Options
              id="summarization-language"
              padding={7}
              label="Language"
              options={languageOptions}
              value={language}
              onChange={(val) => {
                setLanguage(val)
                console.log('Language selected:', val)
              }}
            />
          </div>
        </section>
      </main>

      {/* Right Sidebar */}
      <aside className="w-[20%] bg-gradient-to-b from-indigo-800 via-indigo-700 to-indigo-900 p-6 pt-12 shadow-lg">
        <h2 className="text-lg font-semibold">Library</h2>
      </aside>
    </section>
  )
}

export default Page
