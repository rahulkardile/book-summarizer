import Link from 'next/link'
import React, { ReactNode } from 'react'

const layout = ({children}: { children: ReactNode}) => {
  return (
    <div>
        <nav>
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>About</Link>
            <Link href={"/"}>Books</Link>
        </nav>

        {children}

        </div>
  )
}

export default layout