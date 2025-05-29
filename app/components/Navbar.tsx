'use client';

import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';

export default function Navbar() {
  const show = useSelector((state: RootState) => state.theme.show);

  return (
    <nav className={`bg-gray-800 ${show ? "visible" : "invisible"} text-gray-400 font-medium text-sm fixed top-4 left-1/2 transform -translate-x-1/2 flex justify-between items-center px-7 w-[60%] py-2 rounded-2xl`}>
      <Link className='hover:text-black rounded hover:bg-white p-1 duration-500' href={"/"}>BookSnap</Link>
      <Link className='hover:text-black rounded hover:bg-white p-1 duration-500' href={"/"}>Pricing</Link>
      <Link className='hover:text-black rounded hover:bg-white p-1 duration-500' href={"/"}>New Book's</Link>
      <Link className='hover:text-black rounded hover:bg-white p-1 duration-500' href={"/"}>New Chat</Link>
      <Link className='hover:text-black rounded hover:bg-white p-1 duration-500' href={"/"}>Contact</Link>
      <Link className='text-gray-200 border border-white p-1.5 px-4 rounded' href={"/"}>Sign-In</Link>
      <Link className='bg-yellow-200 p-1.5 rounded text-black' href={"/chat"}>Get-Started</Link>
    </nav>
  );
}
