import Link from 'next/link'
import React, { ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <nav className='bg-gray-800 text-gray-400 font-medium text-sm flex justify-between items-center px-7 w-[60%] mt-3.5 mx-auto py-2 rounded-2xl'>

                <Link className='hover:text-gray-300 hover:font-bold duration-500' href={"/"}>BookSnap</Link>
                <Link className='hover:text-gray-300 hover:font-bold duration-500' href={"/"}>Pricing</Link>
                <Link className='hover:text-gray-300 hover:font-bold duration-500' href={"/"}>New Book's</Link>
                <Link className='hover:text-gray-300 hover:font-bold duration-500' href={"/"}>New Chat</Link>
                <Link className='hover:text-gray-300 hover:font-bold duration-500' href={"/"}>Contact</Link>
                <Link className='text-gray-200 border border-white p-1.5 px-4  rounded' href={"/"}>Sign-In</Link>
                <Link className='bg-yellow-200 p-1.5 rounded text-black' href={"/"}>Get-Started</Link>
            </nav>

            {children}

        </div>
    )
}

export default layout