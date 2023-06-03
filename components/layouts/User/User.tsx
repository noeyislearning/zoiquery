"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function User() {
  // Define state for whether dropdown is shown
  const [isDropdownShown, setIsDropdownShown] = useState(false);

  // Reference to the dropdown
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Function to toggle dropdown
  const toggleDropdown = () => {
    setIsDropdownShown(!isDropdownShown);
  };

  // Function to handle click outside of dropdown
  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsDropdownShown(false);
    }
  };

  // Add event listener for clicks
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className=" flex items-center">
        <div className="fixed">
          <Image onClick={toggleDropdown} className="w-10 h-10 border border-black rounded-full cursor-pointer" width={500} height={500} src="" alt="useravatar"/>
            {isDropdownShown && (
              <div ref={dropdownRef} className="mt-2 absolute right-0 z-50 text-base list-none bg-white border border-black rounded-lg shadow-lg">
                <div className="px-4 py-3">
                  <span className="block text-sm text-gray-900">Francis Ignacio</span>
                  <span className="block text-sm text-gray-500 truncate">hello@noeyislearning.dev</span>
                </div>
                <ul className="" aria-labelledby="user-menu-button">
                  <li>
                    <a href="#"
                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-black hover:text-white">Dashboard</a>
                  </li>
                  <li>
                    <a href="#"
                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-black hover:text-white">Settings</a>
                  </li>
                  <li>
                    <a href="#"
                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-black hover:text-white">Sign out</a>
                  </li>
                </ul>
              </div>
            )}
        </div>
      </div>
    </>
  )
}
