 import React from 'react'

/** Components */
import Logo from "@/components/common/Logos/Logo";
import NavMenu from "@/components/layouts/Menu/NavMenu";

/** Models */
import menuItems from "@/assets/models/navMenu.json"

export default function Navbar() {
  return (
    <>
      <nav className="p-0 md:px-0 lg:px-36 bg-gray-950">
        <div className="max-w-screen-xl flex flex-col lg:flex-row gap-2 items-center justify-center md:justify-between lg:justify-between mx-auto p-4 text-white">
          <Logo />
          <NavMenu navMenuItems={[]}/>
        </div>
      </nav>
    </>
  )
}
