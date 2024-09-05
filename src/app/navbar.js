'use client'

import { useLayoutEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { voteJesusImg } from '../../public/voteJesus.png'
import { rLogo } from '../../public/r-logo.png'

export default function Navbar() {
  return (
      <nav className="w-full py-4 px-6 bg-gray-300 flex items-center justify-around shadow-lg sm:px-12 px-2 sm:rounded-b-md">
        {/* Left - Logo */}
        <Link href='https://refresh.church/' rel="noopener noreferrer" target="_blank" className="flex items-center sm:w-[400px] w-[80px] sm:h-[35px] h-[20px]">
          <Image
            src="/r-logo.png" // Corrected path to start with "/"
            alt="Vote Jesus"
            width={35}
            height={35}
            className="object-cover rounded" // "object-cover" to fill the box, "rounded" to add rounded corners if needed
          />
        </Link>

        {/* Middle - Sermons Link */}
        <div className="flex items-base text-center w-[400px] justify-center">
            <div className="text-black lg:text-lg md:text-base text-sm font-semibold sm:font-medium hover:text-gray-700">
            <div className="hidden md:inline">In partnership with</div> <a href="https://refresh.church/" className="hover:font-semibold hover:underline hover:pointer">Refresh Church</a>
            </div>
        </div>

        {/* Right - Social Media Icons */}
        <div className="flex items-center sm:space-x-4  space-x-2 justify-end sm:w-[400px] w-[80px]">
          <a
            href="https://www.instagram.com/refreshchurchtv/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80"
          >
            <svg class="sm:w-8 sm:h-8 w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/myrefreshchurch"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80"
          >
            <svg class="sm:w-7 sm:h-7  w-5 h-5 sm:mb-1 mb-0.5 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
      </nav>
  );
}
