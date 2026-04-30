import Image from 'next/image';
import React from 'react';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

const Footer = () => {
    return (
 <footer className="bg-black border-t border-base-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/loogo.png" alt="SkillSphere" width={60} height={36} className='rounded-full' />
              <span className="text-xl font-bold text-white">
                Skill<span className="text-brand-500">Sphere</span>
              </span>
            </div>

            <p className="text-slate-400 text-sm">
              Empowering learners worldwide with industry-relevant skills.
            </p>
          </div>

          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">Courses</li>
              <li className="hover:text-white cursor-pointer">Profile</li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-white font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="hover:text-white cursor-pointer">Web Dev</li>
              <li className="hover:text-white cursor-pointer">Design</li>
              <li className="hover:text-white cursor-pointer">Data</li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex gap-2">
                <FiMail /> support@skillsphere.com
              </li>
              <li className="flex gap-2">
                <FiPhone /> +1 234 567
              </li>
              <li className="flex gap-2">
                <FiMapPin /> San Francisco
              </li>
            </ul>
          </div>

        </div>

      </div>
    </footer>
    );
};

export default Footer;