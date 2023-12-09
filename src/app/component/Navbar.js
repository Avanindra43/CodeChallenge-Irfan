"use client";

import { useState } from "react";
import Image from "next/image";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[#323232] sticky top-0 py-1 px-10">
      <div className="flex items-center justify-between px-0 p-3">
        <a href="/">
          <Image
            src="/logoipsum-311.svg"
            alt="logo"
            height={"128"}
            width={"128"}
          />
        </a>

        <div className="hidden md:flex space-x-6">
          <a href="/" className="hover:bg-black p-2 rounded-md">
            Home
          </a>
          <a href="/about" className="hover:bg-black p-2 rounded-md">
            About
          </a>
          <a href="/product" className="hover:bg-black p-2 rounded-md">
            Services
          </a>
          <a href="/team" className="hover:bg-black p-2 rounded-md">
            Team
          </a>
        </div>

        <div className="md:hidden">
          <button
            id="mobile-menu-button"
            className="text-white"
            onClick={toggleMobileMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          {isMobileMenuOpen && (
            <div className="flex flex-col items-start space-y-2 mt-2">
              <a href="/" className="hover:bg-black p-2 rounded-md">
                Home
              </a>
              <a href="/about" className="hover:bg-black p-2 rounded-md">
                About
              </a>
              <a href="/product" className="hover:bg-black p-2 rounded-md">
                Services
              </a>
              <a href="/team" className="hover:bg-black p-2 rounded-md">
                Team
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
