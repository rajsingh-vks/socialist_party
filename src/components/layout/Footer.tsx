import Link from "next/link";
import { Mail, Facebook, Twitter } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t-4 border-red-600 bg-gradient-to-b text-gray-800" style={{ borderColor: '#e5484d', backgroundColor: "#0a4eb5"}}>

      {/* Top Section */}
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">

        {/* Column 1 */}
        <div>
          <h3 className="text-xl font-semibold text-white">
            <Image src="/socielist_logo-white.png" alt="Logo" width={300} height={160} /> 
          </h3>

          <p className="mt-4 text-sm text-gray-200">
            An effort towards the revival of socialism in India. Standing for
            equality, democracy, and social justice.
          </p>

          {/* Social */}
          <div className="mt-5 flex gap-4 text-gray-300">
            <Twitter size={18} className="cursor-pointer hover:text-red-500" />
            <Facebook size={18} className="cursor-pointer hover:text-red-500" />
            <Mail size={18} className="cursor-pointer hover:text-red-500" />
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="mb-4 font-semibold text-white">NAVIGATION</h4>

          <ul className="space-y-3 text-sm text-gray-200">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About the Party</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="mb-4 font-semibold text-white">GET INVOLVED</h4>

          <p className="text-sm text-gray-200">
            Join the movement. Stay updated with our activities and press releases.
          </p>

          <Link
            target="_blank"
            href="https://groups.google.com/g/socialist-party-india"
            className="mt-4 inline-block text-red-500 font-semibold hover:underline"
          >
            Join Mailing List →
          </Link>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-zinc-800 py-5 text-center text-xs text-gray-200">
        © {new Date().getFullYear()} Socialist Party (India). All rights reserved.
      </div>
    </footer>
  );
}
