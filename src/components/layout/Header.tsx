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
            {/* <button className="rounded-lg px-4 py-2 text-white font-semibold hover:bg-red-700" style={{ backgroundColor: '#e5484d' }}>
              Login
            </button> */}
            {/* <Link
              target="_blank"
              href="https://groups.google.com/g/socialist-party-india"
              className="rounded-lg border border-white px-4 py-3 font-semibold hover:bg-white hover:text-black"
               style={{ backgroundColor: '#e5484d' }}
            >
              Join Our Mailing List
            </Link> */}
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
      <div className={`hidden lg:flex flex-col gap-4 fixed top-52 left-0 z-40 transition-transform duration-300 justify-center items-center ${hideHeader ? '-translate-x-full' : 'translate-x-0'}`}>
        <Link href="/volunteer" className="flex items-center">
          <div className="flex flex-col items-center" style={{ background: '#e5484d', color: '#fff' , borderRadius: '0 0.5rem 0.5rem 0', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' , width: '5rem', height: '6.5rem', padding: '0.5rem 0.5rem', justifyContent: 'center' }}>
            <span className="text-2xl mb-1">
              <img src="./5.png" width={35} />
            </span>
            <span className="text-xs font-bold text-center">VOLUNTEER WITH US </span>
          </div>
        </Link>
        <Link href="/donate" className="flex items-center">
          <div className="flex flex-col items-center" style={{ background: '#fff', color: '#e5484d', borderRadius: '0 0.5rem 0.5rem 0', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', width: '5rem', height: '6.5rem', padding: '0.5rem 0.5rem', justifyContent: 'center' }}>
            <span className="text-2xl mb-1">
              <img src="./4.png" width={35} />
            </span>
            <span className="text-xs font-bold text-center">DONATE</span>
          </div>
        </Link>
        <Link href="/press-release" className="flex items-center">
          <div className="flex flex-col items-center" style={{ background: '#0c4cb4', color: '#fff', borderRadius: '0 0.5rem 0.5rem 0', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', width: '5rem', height: '6.5rem', padding: '0.5rem 0.5rem', justifyContent: 'center' }}>
            <span className="text-2xl mb-1">
              <img src="./2.png" width={35} />
            </span>
            <span className="text-xs font-bold text-center">PRESS RELEASES</span>
          </div>
        </Link>
      </div>

      {/* Fixed Vertical Social Sidebar Buttons with animation (right) */}
      <div className={`hidden lg:flex flex-col gap-4 fixed top-72 right-0 z-40 transition-transform duration-300 justify-center items-center ${hideHeader ? 'translate-x-full' : 'translate-x-0'}`}>
        <a href="https://www.facebook.com/socialistpartyindia/" target="_blank" rel="noopener noreferrer" className="flex items-center">
          <div className="flex flex-col items-center" style={{ background: '#1877f3', color: '#fff', borderRadius: '0.5rem 0 0 0.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', width: '4rem', height: '4rem', padding: '0.5rem', justifyContent: 'center' }}>
            <span className="text-2xl mb-1">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/>
              </svg>
            </span>
            <span className="text-xs font-bold">Facebook</span>
          </div>
        </a>
        <a href="https://www.instagram.com/socialistpartyindia/" target="_blank" rel="noopener noreferrer" className="flex items-center">
          <div className="flex flex-col items-center" style={{ background: 'radial-gradient(circle at 30% 110%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)', color: '#fff', borderRadius: '0.5rem 0 0 0.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', width: '4rem', height: '4rem', padding: '0.5rem', justifyContent: 'center' }}>
            <span className="text-2xl mb-1">
              {/* Instagram SVG */}
              <svg width="18" height="18" viewBox="0 0 448 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9 114.9-51.3 114.9-114.9S287.7 141 224.1 141zm0 186c-39.5 0-71.5-32-71.5-71.5s32-71.5 71.5-71.5 71.5 32 71.5 71.5-32 71.5-71.5 71.5zm146.4-194.3c0 14.9-12 26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9zm76.1 27.2c-1.7-35.3-9.9-66.7-36.2-92.1C388.7 9.9 357.3 1.7 322 0 285.7-1.7 162.3-1.7 126 0 90.7 1.7 59.3 9.9 33.9 36.2 9.9 59.3 1.7 90.7 0 126c-1.7 36.3-1.7 159.7 0 196 1.7 35.3 9.9 66.7 36.2 92.1 23.1 23.1 54.5 31.3 89.8 33C162.3 513.7 285.7 513.7 322 512c35.3-1.7 66.7-9.9 92.1-36.2 23.1-23.1 31.3-54.5 33-89.8 1.7-36.3 1.7-159.7 0-196zM398.8 388c-7.8 19.6-23.1 35-42.7 42.7-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-35-23.1-42.7-42.7-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 23.1-35 42.7-42.7 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 35 23.1 42.7 42.7 11.7 29.5 9 99.5 9 132.1s2.6 102.7-9 132.1z"/>
              </svg>
            </span>
            <span className="text-xs font-bold">Instagram</span>
          </div>
        </a>
        <a href="https://x.com/spiInfo" target="_blank" rel="noopener noreferrer" className="flex items-center">
          <div className="flex flex-col items-center" style={{ background: '#000', color: '#fff', borderRadius: '0.5rem 0 0 0.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', width: '4rem', height: '4rem', padding: '0.5rem', justifyContent: 'center' }}>
            <span className="text-2xl mb-1">
              {/* X (Twitter) SVG */}
              <svg width="18" height="18" viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M459.4 151.7c.32 4.54.32 9.1.32 13.66 0 138.72-105.58 298.56-298.56 298.56-59.5 0-114.68-17.22-161.14-47.11 8.44.97 16.87 1.44 25.6 1.44 49.06 0 94.21-16.63 132.1-44.84-46.13-.86-84.8-31.18-98.1-72.77 6.5.97 13.01 1.62 19.81 1.62 9.42 0 18.84-1.3 27.61-3.61-48.08-9.7-84.14-51.98-84.14-102.98v-1.3c14.08 7.83 30.18 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.42 5.2-37.36 14.3-52.95 51.87 63.67 129.3 105.58 216.36 110.13-1.62-7.83-2.6-15.99-2.6-24.15 0-58.72 47.43-106.15 106.15-106.15 30.59 0 58.23 12.67 77.56 33.14 24.15-4.54 46.78-13.66 67.13-25.6-7.83 24.48-24.48 44.84-46.13 57.76 21.36-2.28 41.83-8.21 60.67-16.56-14.3 21.04-32.36 39.59-53.25 54.45z"/>
              </svg>
            </span>
            <span className="text-xs font-bold">X</span>
          </div>
        </a>
      </div>
    </>
  );
}
