'use client'

import { OptionsProps } from '@/utils/types'
import React from 'react'

const Options: React.FC<OptionsProps> = ({
  id,
  padding,
  label,
  options,
  value,
  onChange,
}) => {
  const paddingX = typeof padding === 'number' ? `px-${padding}` : 'px-4'

  return (
    <div className="flex flex-col items-start w-full text-black">
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`
          w-full py-2 ${paddingX}
          bg-white text-gray-900 text-bl
          rounded-lg border border-gray-300 dark:border-gray-600
          focus:outline-none focus:ring-2 focus:ring-indigo-500
          shadow-sm text-xs transition duration-200
        `}
      >
        <option value="" disabled>
          Select {label}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Options
