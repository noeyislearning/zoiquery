import React from 'react';
import Link from "next/link";
import Image from "next/image";


const Logo = () => {
  return (
    <>
      <Link href={"/"} className="flex items-center">
        <span className="self-center text-2xl font-normal whitespace-nowrap">Zoiquery</span>
      </Link>
    </>
  );
};

export default Logo;