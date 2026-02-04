"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
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
  );
}
