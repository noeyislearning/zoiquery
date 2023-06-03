import React from 'react'
import Link from "next/link";

export default function NavMenu() {
  return (
    <>
      <div className="hidden lg:flex items-center w-full lg:w-auto">
        <ul className="p-0 mt-0 flex flex-row font-normal text-black">
          <li>
            <Link href={"/"}
               className="block py-2 pl-3 pr-4 hover:underline underline-offset-4">Home
            </Link>
          </li>
          <li>
            <Link href={"/"}
                  className="block py-2 pl-3 pr-4 hover:underline underline-offset-4">Generate
            </Link>
          </li>
          <li>
            <Link href={"/"}
                  className="block py-2 pl-3 pr-4 hover:underline underline-offset-4">Pricing
            </Link>
          </li>
          <li>
            <Link href={"/"}
                  className="block py-2 pl-3 pr-4 hover:underline underline-offset-4">About
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}
