import React from 'react'
import Link from "next/link";

export default function NavMenu() {
  return (
    <>
      <div className="hidden lg:flex items-center w-full lg:w-auto">
        <ul className="p-0 mt-0 flex flex-row gap-5 font-normal text-black">
          <li>
            <Link href={"/"}>
              <div className="block py-2">Home</div>
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <div className="flex flex-row gap-1 items-center">
                <div className="block py-2">Generate</div>
                <div className="px-2 text-xs border border-blue-500 rounded-full">Beta</div>
              </div>
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <div className="flex flex-row gap-1 items-center">
                <div className="block py-2">Pricing</div>
                <div className="px-2 text-xs border border-blue-500 rounded-full">Beta</div>
              </div>
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <div className="block py-2">About</div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}
