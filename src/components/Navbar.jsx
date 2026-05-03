'use client';


import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';
import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';

export default function Navbar() {
  const userInfo = authClient.useSession()
  const user = userInfo.data?.user
  

  const handleSingOut = async() =>{
    await authClient.signOut()
  } 
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
            <Link href={"/"} className="text-slate-400 hover:text-black">
              Home
            </Link>
            <Link href={"/courses"} className="text-gray-400 hover:text-black">
              Courses
            </Link>

            <Link href={"/profile"} className="text-gray-400 hover:text-black">
              My profile
            </Link>



          </div>


          <div className="hidden md:flex items-center gap-2">
            {!user && (
              <>
                <Link href={"/singup"} className="btn btn-sm btn-ghost">
                  Sign Up
                </Link>

                <Link href={"/singin"} className="btn btn-sm btn-primary">
                  Login
                </Link>
              </>
            )}

            {
              user && <div className='flex gap-2'>
                <Avatar size='sm'>
                  <Avatar.Image alt="John Doe" src={user?.image} referrerPolicy="no-referrer" />

                  <Avatar.Fallback>{user.name[0]}</Avatar.Fallback>
                </Avatar>

                <Button onClick={handleSingOut} size='sm' variant='danger'>Sing Out </Button>

              </div>
            }
          </div>


          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>

        <div
          className={`md:hidden duration-300 overflow-hidden ${menuOpen ? 'max-h-[400px]  py-4' : 'max-h-0 '
            }`}
        >
          <div className="flex flex-col gap-4">

            <Link href={"/"} onClick={() => setMenuOpen(false)} className="text-gray-500 hover:text-black">
              Home
            </Link>

            <Link href={"/courses"} onClick={() => setMenuOpen(false)} className="text-gray-500 hover:text-black">
              Courses
            </Link>

            <Link href={"/profile"} onClick={() => setMenuOpen(false)} className="text-gray-500 hover:text-black">
              My Profile
            </Link>



            <div className="border-t border-base-300 pt-3"></div>

            {!user && (
              <>
                <Link href={"/singup"} className="btn btn-sm btn-ghost">
                  Sign Up
                </Link>

                <Link href={"/singin"} className="btn btn-sm btn-primary">
                  Login
                </Link>
              </>
            )}

            {
              user && <div className='flex gap-2'>
                <Avatar size='sm'>
                  <Avatar.Image alt="John Doe" src={user?.image} referrerPolicy="no-referrer" />

                  <Avatar.Fallback>{user.name[0]}</Avatar.Fallback>
                </Avatar>

                <Button onClick={handleSingOut} size='sm' variant='danger'>Sing Out </Button>


              </div>
            }

          </div>
        </div>

      </div>
    </nav>
  );
}