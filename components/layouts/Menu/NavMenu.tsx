import React from 'react'
import Link from "next/link";

/** Interfaces/Props */
import { NavMenuItemsProps } from "@/assets/interfaces/menu"

/** Models */
import menuItems from "@/assets/models/navMenu.json"

export default function NavMenu({}: NavMenuItemsProps) {

  const navMenuItems = menuItems.menu;

  return (
    <>
      <div className="hidden lg:flex items-center w-full lg:w-auto">
        <ul className="p-0 mt-0 flex flex-row gap-5 font-normal">
          {navMenuItems.map((menu, index) => (
          <li key={index}>
            <Link href={`/${menu.link}`}>
              <div className="flex flex-row gap-1 items-center">
                <div className="block py-2">{menu.name}</div>
                {menu.isBeta && <span className="inline-block px-2 py-0.5 text-xs font-semibold tracking-wide uppercase rounded-full border border-white text-white">Beta</span>}
              </div>
            </Link>
          </li>
          ))}
        </ul>
      </div>
    </>
  )
}
