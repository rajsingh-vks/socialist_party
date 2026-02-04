"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-white shadow-md transition-transform duration-300 ${hideHeader ? "-translate-y-full" : "translate-y-0"}`}
      >
        <div className="mx-auto flex h-22 max-w-7xl items-center justify-between px-4">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-blue-600">
            <Image src="/socielist_logo-red.png" alt="Logo" width={300} height={160} />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden items-center gap-8 md:flex">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <Link href="/dashboard" className="hover:text-blue-600">Dashboard</Link>
            <Link href="/about" className="hover:text-blue-600">About</Link>

            <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700" style={{ backgroundColor: "358 75% 59%"}}>
              Login
            </button>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="flex flex-col gap-4 border-t bg-white p-4 md:hidden">
            <Link href="/">Home</Link>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/about">About</Link>

            <button className="rounded-lg bg-blue-600 px-4 py-2 text-white">
              Login
            </button>
          </div>
        )}
      </header>

      {/* Fixed Vertical Sidebar Buttons with animation */}
      <div className={`hidden lg:flex flex-col gap-4 fixed top-22 left-0 z-40 transition-transform duration-300 ${hideHeader ? '-translate-x-full' : 'translate-x-0'}`}>
        <Link href="/volunteer" className="flex items-center">
          <div className="flex flex-col items-center bg-blue-500 text-white px-4 py-2 rounded-r-lg shadow hover:bg-blue-600 w-36 h-26">
            <span className="text-2xl mb-1">👤</span>
            <span className="text-xs font-bold">VOLUNTEER WITH US</span>
          </div>
        </Link>
        <Link href="/donate" className="flex items-center">
          <div className="flex flex-col items-center bg-white text-gray-900 border border-gray-300 px-4 py-2 rounded-r-lg shadow hover:bg-gray-100 w-36 h-26">
            <span className="text-2xl mb-1">🗳️</span>
            <span className="text-xs font-bold">DONATE</span>
          </div>
        </Link>
        <Link href="/press-release" className="flex items-center">
          <div className="flex flex-col items-center bg-gray-800 text-white px-4 py-2 rounded-r-lg shadow hover:bg-gray-900 w-36 h-26">
            <span className="text-2xl mb-1">📢</span>
            <span className="text-xs font-bold">PRESS RELEASES</span>
          </div>
        </Link>
      </div>
    </>
  );
}
