'use client';


import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className=" border-b border-base-300 bg-linear-to-r from-red-200 to-sky-300">
      <div className="max-w-7xl mx-auto px-4">

        
        <div className="flex justify-between items-center h-16">

          
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/loogo.png"
              alt="SkillSphere"
              width={60}
              height={60}
              className="object-contain rounded-full"
            />
            <span className="text-lg sm:text-xl font-bold text-white">
              Skill<span className="text-brand-500 bg-linear-to-r from-sky-400 to-red-300 bg-clip-text text-transparent">Sphere</span>
            </span>
          </Link>

          
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-slate-400 hover:text-black">
              Home
            </Link>
            <Link href="/courses" className="text-gray-400 hover:text-black">
              Courses
            </Link>
            
            <Link href="/contact" className="text-gray-400 hover:text-black">
              My profile
            </Link>
          </div>

          
          <div className="hidden md:flex items-center gap-2">
            <Link href="/login" className="btn btn-sm btn-ghost">
              Login
            </Link>
            <Link href="/register" className="btn btn-sm btn-primary">
              Register
            </Link>
          </div>

          
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
        
        <div
          className={`md:hidden duration-300 overflow-hidden ${
            menuOpen ? 'max-h-[400px]  py-4' : 'max-h-0 '
          }`}
        >
          <div className="flex flex-col gap-4">

            <Link href="/" onClick={() => setMenuOpen(false)} className="text-gray-500 hover:text-black">
              Home
            </Link>

            <Link href="/courses" onClick={() => setMenuOpen(false)} className="text-gray-500 hover:text-black">
              Courses
            </Link>

            <Link href="/" onClick={() => setMenuOpen(false)} className="text-gray-500 hover:text-black">
              My Profile
            </Link>

           

            <div className="border-t border-base-300 pt-3"></div>

            <Link href="/login" className="btn btn-sm btn-outline w-full text-gray-400 hover:text-rose-700">
              Login
            </Link>

            <Link href="/register" className="btn btn-sm btn-primary w-full text-gray-400 hover:text-rose-700">
              Register
            </Link>

          </div>
        </div>

      </div>
    </nav>
  );
}