"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header id="navbar" className={`bg-[#ffffff27] backdrop-blur-2xl fixed top-0 z-50 w-full`}>
      <nav
        className="flex sm:justify-center justify-between p-2 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center px-4 sm:hidden">
          <Image src="https://res.cloudinary.com/dqbcbqcbr/image/upload/v1706376690/image_39_us9ao2.png" alt="OC" width={40} height={40} />
        </div>

        <div className="hidden flex-wrap sm:flex md:space-x-16 px-6 py-1">
          <ul className="flex space-x-8 text-xl gap-12">
            <Link href="/about">
              <li className="text-white hover:text-blue-600 transition delay-100">
                About
              </li>
            </Link>
            <Link href="/events">
              <li className="text-white hover:text-blue-600 transition delay-100">
                Events
              </li>
            </Link>
            <Link href="/projects">
              <li className="text-white hover:text-blue-600 transition delay-100">
                Projects
              </li>
            </Link>
            <Link href="/team">
              <li className="text-white hover:text-blue-600 transition delay-100">Team</li>
            </Link>
          </ul>
        </div>
        <div className="hidden sm:flex items-center px-4 ml-6">
          <Image src="https://res.cloudinary.com/dqbcbqcbr/image/upload/v1706376690/image_39_us9ao2.png" alt="OC" width={40} height={40} />
        </div>
        <div className="inline-flex justify-end items-end sm:hidden ">
          <button
            className="rounded-md bg-slate-100 cursor-pointer p-5 text-gray-900 icon-[fad--h-expand]"
            onClick={handleNav}
          ></button>
        </div>
        <div className={
          menuOpen
          ? "fixed text-xl right-0 top-[55px] w-[60%] sm:hidden h-screen bg-[#17171B] backdrop-blur-2xl px-10 py-4 ease-in duration-500"
          : "fixed right-[-500%] top-0 p-10 ease-in duration-500"
        }>
          <div className="flex-col">
          <ul>
            <Link href="/about">
              <li
                onClick={() => {setMenuOpen(false)}} 
                className="text-white py-4 cursor-pointer">
                About
              </li>
            </Link>
            <Link href="/events">
              <li
                onClick={() => {setMenuOpen(false)}} 
                className="text-white py-4 cursor-pointer">
                Events
              </li>
            </Link>
            <Link href="/projects">
              <li
                onClick={() => {setMenuOpen(false)}} 
                className="text-white py-4 cursor-pointer">
                Projects
              </li>
            </Link>
            <Link href="/team">
              <li
                onClick={() => {setMenuOpen(false)}} 
                className="text-white py-4 cursor-pointer">Team</li>
            </Link>
          </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
