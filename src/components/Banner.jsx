'useclient'
import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
    <section className="bg-linear-to-r from-gray-100 to-gray-200 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">

        
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800">
            SKILLSPHERE
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 mt-4">
            Empowering your future with industry skills
          </p>

          <p className="mt-4 text-slate-700 max-w-xl">
            Empowering learners worldwide with industry-relevant skills.
          </p>

          <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition">
            EXPLORE OUR COURSES
          </button>
        </div>

        
        <div className="flex-1 flex justify-center">
          <Image
            src="/bimage.png"
            alt="Hero Illustration"
            width={500}
            height={500}
            className="w-[320px] md:w-[420px] lg:w-[500px] rounded-2xl"
            priority
          />
        </div>
      </div>
    </section>
    );
};

export default Banner;