import Image from 'next/image';
import React from 'react';

const BestTeachers = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold text-center mb-4 text-black animate-bounce">
                Our Best Mentors
            </h2>

            <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto ">
                Learn from industry-leading professionals who guide students
                toward success.
            </p>
            

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                {/* Card 1 */}
                <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">
                    <div className="relative  w-full">
                        <Image
                            src="https://i.ibb.co.com/238HVrVS/download-2.jpgttps://i.ibb.co/7QpKsCX/woman1.jpg"
                            alt="Sarah Johnson"
                            height={200}
                width={400}
                className='w-full h-80   object-cover'
                        />
                    </div>

                    <div className="p-6 text-center bg-linear-to-r from-red-200 to-sky-300">
                        <h3 className="text-2xl font-semibold text-black mb-2">
                            Sarah Johnson
                        </h3>
                        <p className="text-blue-600 font-medium mb-2">
                            UI/UX Design Expert
                        </p>
                        <p className="text-gray-500 text-sm">
                            8+ Years Experience
                        </p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">
                    <div className="relative  w-full">
                        <Image
                            src="https://i.ibb.co.com/FbWGhSXP/images-3.jpg"
                            alt="Emily Davis"
                            height={200}
                width={400}
                className='w-full h-80  object-cover'
                        />
                    </div>

                    <div className="p-6 text-center bg-linear-to-r from-red-200 to-sky-300">
                        <h3 className="text-2xl font-semibold text-black mb-2">
                            David Miller
                        </h3>
                        <p className="text-blue-600 font-medium mb-2">
                            Full Stack Developer
                        </p>
                        <p className="text-gray-500 text-sm">
                            10+ Years Experience
                        </p>
                    </div>
                </div>
                

                {/* Card 3 */}
                <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">
                    <div className="relative  w-full">
                        <Image
                            src="https://i.ibb.co.com/TDCXpN6h/download-3.jpg"
                            alt="Emily Davis"
                            height={200}
                width={400}
                className='w-full h-80  object-cover'
                        />
                    </div>

                    <div className="p-6 text-center bg-linear-to-r from-red-200 to-sky-300">
                        <h3 className="text-2xl font-semibold text-black mb-2">
                            Emily Davis
                        </h3>
                        <p className="text-blue-600 font-medium mb-2">
                            Digital Marketing Specialist
                        </p>
                        <p className="text-gray-500 text-sm">
                            6+ Years Experience
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default BestTeachers;