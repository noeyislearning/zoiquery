 import React from 'react'

/** Components */
import Logo from "@/components/common/Logos/Logo";
import NavMenu from "@/components/layouts/Menu/NavMenu";

/** Models */
import menuItems from "@/assets/models/navMenu.json"

export default function Navbar() {
  return (
    <>
      <nav className="bg-gray-950">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 text-white">
          <Logo />
          <NavMenu navMenuItems={[]}/>
        </div>
      </nav>
    </>
  )
}
