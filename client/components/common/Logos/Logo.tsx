import React from 'react';
import Link from "next/link";
import Image from "next/image";


const Logo = () => {
  return (
    <>
      <Link href={"/"} className="flex items-center">
        <div className="self-center text-2xl font-bold tracking-wide uppercase">Zoi<span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">query</span></div>
      </Link>
    </>
  );
};

export default Logo;