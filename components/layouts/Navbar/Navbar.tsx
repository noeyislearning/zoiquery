import React from 'react'

/** Components */
import Logo from "@/components/common/Logos/Logo";
import User from "@/components/layouts/User/User";
import NavMenu from "@/components/layouts/Menu/NavMenu";
import GetStartedButton from "@/components/common/Buttons/GetStartedButton";

export default function Navbar() {
  return (
    <>
      <nav className="bg-white">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Logo />
          <NavMenu />
          {/* If the user is logged in.*/}
          {/*<User />*/}
          {/* If the user is not logged in.*/}
          <GetStartedButton />
        </div>
      </nav>
    </>
  )
}
