 import React from 'react'

/** Components */
import Logo from "@/components/common/Logos/Logo";
import User from "@/components/layouts/User/User";
import NavMenu from "@/components/layouts/Menu/NavMenu";
import GetStartedButton from "@/components/common/Buttons/GetStartedButton";

/** Models */
import menuItems from "@/assets/models/navMenu.json"

export default function Navbar() {
  return (
    <>
      <nav className="bg-gray-950">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 text-white">
          <Logo />
          <NavMenu navMenuItems={[]}/>
          {/* If the user is logged in.*/}
          {/*<User />*/}
          {/* If the user is not logged in.*/}
          {/*<GetStartedButton />*/}
        </div>
      </nav>
    </>
  )
}
