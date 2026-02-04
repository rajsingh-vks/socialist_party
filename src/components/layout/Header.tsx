"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

export default function Header() {
  // open: false | 'about' | 'ideas' | 'affiliate' | 'documents' (for mobile submenu)
  const [open, setOpen] = useState<false | 'about' | 'ideas' | 'affiliate' | 'documents'>(false);
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
            {/* <Link href="/" className="text-black font-semibold hover:text-blue-600">Home</Link> */}
            {/* About with submenu */}
            <div className="relative group">
              <button className="text-black font-semibold hover:text-blue-600 flex items-center gap-1 focus:outline-none">
                About
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div className="absolute left-0 top-full mt-0 w-64 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-200 z-50 invisible group-hover:visible group-focus-within:visible">
                <Link href="/about/national-executive-committee" className="block px-4 py-2 text-black font-semibold hover:bg-gray-100">National Executive Committee 2025-2027</Link>
                <Link href="/about/objectives" className="block px-4 py-2 text-black font-semibold hover:bg-gray-100">Objectives</Link>
                <Link href="/about/history" className="block px-4 py-2 text-black font-semibold hover:bg-gray-100">History</Link>
                <Link href="/about/structure" className="block px-4 py-2 text-black font-semibold hover:bg-gray-100">Structure</Link>
                <Link href="/about/membership" className="block px-4 py-2 text-black font-semibold hover:bg-gray-100">Membership</Link>
                <Link href="/about/policy-positions" className="block px-4 py-2 text-black font-semibold hover:bg-gray-100">Policy Positions</Link>
                <Link href="/about/political-resolution" className="block px-4 py-2 text-black font-semibold hover:bg-gray-100">Political Resolution</Link>
              </div>
            </div>
            {/* Socialist Ideas with submenu */}
            <div className="relative group">
              <button className="text-black font-semibold hover:text-blue-600 flex items-center gap-1 focus:outline-none">
                Socialist Ideas
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div className="absolute left-0 top-full mt-0 w-72 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-200 z-50 invisible group-hover:visible group-focus-within:visible">
                <Link href="/ideas/updates" className="block px-4 py-2 text-black font-semibold hover:bg-gray-100">Updates</Link>
                <Link href="/ideas/commentary" className="block px-4 py-2 text-black font-semibold hover:bg-gray-100">Commentary</Link>
                <Link href="/ideas/press-releases" className="block px-4 py-2 text-black font-semibold hover:bg-gray-100">Press Releases</Link>
                <Link href="/ideas/events" className="block px-4 py-2 text-black font-semibold hover:bg-gray-100">Events</Link>
                <Link href="/ideas/letters-petitions" className="block px-4 py-2 text-black font-semibold hover:bg-gray-100">Letters and Petitions</Link>
                <Link href="/ideas/fundraising-appeals" className="block px-4 py-2 text-black font-semibold hover:bg-gray-100">Fundraising Appeals</Link>
                <Link href="/ideas/videos" className="block px-4 py-2 text-black font-semibold hover:bg-gray-100">Videos</Link>
                <Link href="/ideas/states" className="block px-4 py-2 text-black font-semibold hover:bg-gray-100">States</Link>
                <Link href="/ideas/satyagraha" className="block px-4 py-2 text-black font-semibold hover:bg-gray-100">Satyagraha: Online Discussions</Link>
                <Link href="/ideas/save-ganga" className="block px-4 py-2 text-black font-semibold hover:bg-gray-100">Save the Ganga Campaign</Link>
                <Link href="/ideas/socialist-ideas" className="block px-4 py-2 text-black font-semibold hover:bg-gray-100">Socialist Ideas</Link>
              </div>
            </div>
            {/* Affiliate and Partner Organizations with submenu */}
            <div className="relative group">
              <button className="text-black font-semibold hover:text-blue-600 flex items-center gap-1 focus:outline-none">
                Affiliate and Partner Organizations
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div className="absolute left-0 top-full mt-0 w-80 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-200 z-50 invisible group-hover:visible group-focus-within:visible">
                <Link href="/affiliate/organizations" className="block px-4 py-2 text-black font-semibold hover:bg-gray-100">Affiliate and Partner Organizations</Link>
                <Link href="/affiliate/eco-socialist-front" className="block px-4 py-2 text-black font-semibold hover:bg-gray-100">Eco-Socialist Front</Link>
                <Link href="/affiliate/socialist-yuvjan-sabha" className="block px-4 py-2 text-black font-semibold hover:bg-gray-100">Socialist Yuvjan Sabha</Link>
                <Link href="/affiliate/socialist-mazdoor-sabha" className="block px-4 py-2 text-black font-semibold hover:bg-gray-100">Socialist Mazdoor Sabha</Link>
                <Link href="/affiliate/socialist-kisan-sabha" className="block px-4 py-2 text-black font-semibold hover:bg-gray-100">Socialist Kisan Sabha</Link>
                <Link href="/affiliate/rihai-manch" className="block px-4 py-2 text-black font-semibold hover:bg-gray-100">Rihai Manch</Link>
              </div>
            </div>
            {/* Documents and Records with submenu */}
            <div className="relative group">
              <button className="text-black font-semibold hover:text-blue-600 flex items-center gap-1 focus:outline-none">
                Documents and Records
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div className="absolute right-0 top-full mt-0 w-80 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-200 z-50 invisible group-hover:visible group-focus-within:visible">
                <Link href="/documents/constitution" className="block px-4 py-2 text-black font-semibold hover:bg-gray-100">Constitution</Link>
                <Link href="/documents/audit-reports" className="block px-4 py-2 text-black font-semibold hover:bg-gray-100">Yearly Audit Reports</Link>
                <Link href="/documents/covid-relief-financials" className="block px-4 py-2 text-black font-semibold hover:bg-gray-100">Financial Details of UP Covid-19 Relief Work</Link>
                <Link href="/documents/election-candidates" className="block px-4 py-2 text-black font-semibold hover:bg-gray-100">Details of Election Candidates Fielded by SP(I)</Link>
                <Link href="/documents/loans-mazdoor-sabha" className="block px-4 py-2 text-black font-semibold hover:bg-gray-100">Loans Disbursed Through Socialist Mazdoor Sabha</Link>
                <Link href="/documents/domestic-violence" className="block px-4 py-2 text-black font-semibold hover:bg-gray-100">Domestic Violence Resources</Link>
                <Link href="/documents/helplines" className="block px-4 py-2 text-black font-semibold hover:bg-gray-100">Important Helpline/Complaint Numbers</Link>
                <Link href="/documents/bank-accounts" className="block px-4 py-2 text-black font-semibold hover:bg-gray-100">Party Bank Accounts</Link>
                <Link href="/documents/pan-card" className="block px-4 py-2 text-black font-semibold hover:bg-gray-100">Socialist Party (India) PAN Card</Link>
                <Link href="/documents/photo-gallery" className="block px-4 py-2 text-black font-semibold hover:bg-gray-100">Photo Gallery</Link>
              </div>
            </div>
            {/* <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700" style={{ backgroundColor: "358 75% 59%"}}>
              Login
            </button> */}
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setOpen(open ? false : 'about')}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="flex flex-col gap-4 border-t bg-white p-4 md:hidden">
            <Link href="/">Home</Link>
            <Link href="/dashboard">Dashboard</Link>
            {/* About with mobile submenu */}
            <div className="relative">
              <button
                className="flex w-full items-center justify-between px-2 py-2 hover:text-blue-600 focus:outline-none"
                onClick={() => setOpen(open === 'about' ? false : 'about')}
              >
                About
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
              </button>
              {open === 'about' && (
                <div className="flex flex-col gap-0 bg-white border border-gray-200 rounded-lg shadow-lg mt-1">
                  <Link href="/about/national-executive-committee" className="block px-4 py-2 hover:bg-gray-100">National Executive Committee 2025-2027</Link>
                  <Link href="/about/objectives" className="block px-4 py-2 hover:bg-gray-100">Objectives</Link>
                  <Link href="/about/history" className="block px-4 py-2 hover:bg-gray-100">History</Link>
                  <Link href="/about/structure" className="block px-4 py-2 hover:bg-gray-100">Structure</Link>
                  <Link href="/about/membership" className="block px-4 py-2 hover:bg-gray-100">Membership</Link>
                  <Link href="/about/policy-positions" className="block px-4 py-2 hover:bg-gray-100">Policy Positions</Link>
                  <Link href="/about/political-resolution" className="block px-4 py-2 hover:bg-gray-100">Political Resolution</Link>
                </div>
              )}
            </div>
            {/* Socialist Ideas with mobile submenu */}
            <div className="relative">
              <button
                className="flex w-full items-center justify-between px-2 py-2 hover:text-blue-600 focus:outline-none"
                onClick={() => setOpen(open === 'ideas' ? false : 'ideas')}
              >
                Socialist Ideas
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
              </button>
              {open === 'ideas' && (
                <div className="flex flex-col gap-0 bg-white border border-gray-200 rounded-lg shadow-lg mt-1">
                  <Link href="/ideas/updates" className="block px-4 py-2 hover:bg-gray-100">Updates</Link>
                  <Link href="/ideas/commentary" className="block px-4 py-2 hover:bg-gray-100">Commentary</Link>
                  <Link href="/ideas/press-releases" className="block px-4 py-2 hover:bg-gray-100">Press Releases</Link>
                  <Link href="/ideas/events" className="block px-4 py-2 hover:bg-gray-100">Events</Link>
                  <Link href="/ideas/letters-petitions" className="block px-4 py-2 hover:bg-gray-100">Letters and Petitions</Link>
                  <Link href="/ideas/fundraising-appeals" className="block px-4 py-2 hover:bg-gray-100">Fundraising Appeals</Link>
                  <Link href="/ideas/videos" className="block px-4 py-2 hover:bg-gray-100">Videos</Link>
                  <Link href="/ideas/states" className="block px-4 py-2 hover:bg-gray-100">States</Link>
                  <Link href="/ideas/satyagraha" className="block px-4 py-2 hover:bg-gray-100">Satyagraha: Online Discussions</Link>
                  <Link href="/ideas/save-ganga" className="block px-4 py-2 hover:bg-gray-100">Save the Ganga Campaign</Link>
                  <Link href="/ideas/socialist-ideas" className="block px-4 py-2 hover:bg-gray-100">Socialist Ideas</Link>
                </div>
              )}
            </div>
            {/* Affiliate and Partner Organizations with mobile submenu */}
            <div className="relative">
              <button
                className="flex w-full items-center justify-between px-2 py-2 hover:text-blue-600 focus:outline-none"
                onClick={() => setOpen(open === 'affiliate' ? false : 'affiliate')}
              >
                Affiliate and Partner Organizations
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
              </button>
              {open === 'affiliate' && (
                <div className="flex flex-col gap-0 bg-white border border-gray-200 rounded-lg shadow-lg mt-1">
                  <Link href="/affiliate/organizations" className="block px-4 py-2 hover:bg-gray-100">Affiliate and Partner Organizations</Link>
                  <Link href="/affiliate/eco-socialist-front" className="block px-4 py-2 hover:bg-gray-100">Eco-Socialist Front</Link>
                  <Link href="/affiliate/socialist-yuvjan-sabha" className="block px-4 py-2 hover:bg-gray-100">Socialist Yuvjan Sabha</Link>
                  <Link href="/affiliate/socialist-mazdoor-sabha" className="block px-4 py-2 hover:bg-gray-100">Socialist Mazdoor Sabha</Link>
                  <Link href="/affiliate/socialist-kisan-sabha" className="block px-4 py-2 hover:bg-gray-100">Socialist Kisan Sabha</Link>
                  <Link href="/affiliate/rihai-manch" className="block px-4 py-2 hover:bg-gray-100">Rihai Manch</Link>
                </div>
              )}
            </div>
            {/* Documents and Records with mobile submenu */}
            <div className="relative">
              <button
                className="flex w-full items-center justify-between px-2 py-2 hover:text-blue-600 focus:outline-none"
                onClick={() => setOpen(open === 'documents' ? false : 'documents')}
              >
                Documents and Records
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
              </button>
              {open === 'documents' && (
                <div className="flex flex-col gap-0 bg-white border border-gray-200 rounded-lg shadow-lg mt-1">
                  <Link href="/documents/constitution" className="block px-4 py-2 hover:bg-gray-100">Constitution</Link>
                  <Link href="/documents/audit-reports" className="block px-4 py-2 hover:bg-gray-100">Yearly Audit Reports</Link>
                  <Link href="/documents/covid-relief-financials" className="block px-4 py-2 hover:bg-gray-100">Financial Details of UP Covid-19 Relief Work</Link>
                  <Link href="/documents/election-candidates" className="block px-4 py-2 hover:bg-gray-100">Details of Election Candidates Fielded by SP(I)</Link>
                  <Link href="/documents/loans-mazdoor-sabha" className="block px-4 py-2 hover:bg-gray-100">Loans Disbursed Through Socialist Mazdoor Sabha</Link>
                  <Link href="/documents/domestic-violence" className="block px-4 py-2 hover:bg-gray-100">Domestic Violence Resources</Link>
                  <Link href="/documents/helplines" className="block px-4 py-2 hover:bg-gray-100">Important Helpline/Complaint Numbers</Link>
                  <Link href="/documents/bank-accounts" className="block px-4 py-2 hover:bg-gray-100">Party Bank Accounts</Link>
                  <Link href="/documents/pan-card" className="block px-4 py-2 hover:bg-gray-100">Socialist Party (India) PAN Card</Link>
                  <Link href="/documents/photo-gallery" className="block px-4 py-2 hover:bg-gray-100">Photo Gallery</Link>
                </div>
              )}
            </div>
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
