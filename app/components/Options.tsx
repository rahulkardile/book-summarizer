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
  return (
    <div className="flex flex-col items-start w-full">
      <label htmlFor={id} className="mb-1 text-sm font-semibold mx-3 text-white">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`
          w-full px-${padding} py-2
          bg-white/10 text-white
          rounded-lg border border-white/30
          focus:outline-none focus:ring-2 focus:ring-white/80
          backdrop-blur-md shadow-md text-sm transition duration-200
        `}
      >
        <option value="" className="text-gray-300">
          Select {label}
        </option>
        {options.map((opt) => (
          <option
            key={opt.value}
            value={opt.value}
            className="text-black"
          >
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Options
