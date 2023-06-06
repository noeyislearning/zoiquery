import React from 'react'
import Link from "next/link";

/** React Icons */
import { FaGithub } from "react-icons/fa";

export default function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="fixed px-36 py-4 bottom-0 left-0 z-20 w-full">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 text-gray-400">
        <span className="text-sm sm:text-center">&copy; {currentYear} <Link href={"/"} className="underline underline-offset-2">Zoiquery</Link>. All Rights Reserved.
        </span>
        <div className="flex gap-5 text-sm items-center">
          <Link href={"https://github.com/noeyislearning/zoiquery"} target={"_blank"}>
            <div className="flex gap-2 hover:underline underline-offset-4 items-center">
              <FaGithub className="w-5 h-5"/>
              <div>GitHub</div>
            </div>
          </Link>
        </div>
        </div>
      </footer>
    </>
  )
}
