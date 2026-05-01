import BestCousesCard from '@/components/BestCousesCard';
import { Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const allCards = async () => {
    const res = await fetch('https://assingment-8-phi.vercel.app/data.json')
    const allCards = await res.json()
    console.log(allCards)
    return (
        <div>
            
            <div className="max-w-7xl mx-auto px-4 py-8">
                <h2 className="text-3xl font-bold text-center mb-10 text-black">
                    All Courses
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {allCards.map((course) => (
                        <div
                            key={course.id}
                            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl  flex flex-col"
                        >
                            {/* Image Section */}
                            <div className="relative h-52 w-full">
                                <Image
                                    src={course.image}
                                    alt={course.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 80vw, (max-width: 1200px) 80vw, 33vw"
                                />
                                <Chip className="absolute top-3 right-3 bg-linear-to-r from-sky-400 to-red-300">
                                    {course.category}
                                </Chip>
                            </div>

                            {/* Content */}
                            <div className="p-5 flex flex-col flex-1">
                                <h3 className="text-xl font-semibold mb-3 line-clamp-2">
                                    {course.title}
                                </h3>

                                <div className="text-sm text-gray-600 space-y-1 mb-4">
                                    <p>Instructor: {course.instructor}</p>
                                    <p>Duration: {course.duration}</p>
                                    <p>Level: {course.level}</p>
                                </div>

                                <p className="text-gray-600 text-sm line-clamp-3 mb-6 flex-1">
                                    {course.description}
                                </p>

                                {/* Rating + Button */}
                                <div className="mt-auto flex justify-between items-center">
                                    <div className="flex items-center gap-1 text-yellow-500 font-semibold">
                                        <FaStar /> {course.rating}
                                    </div>
                                    <Link href={`/courses/${course.id}`}>
                                    <button className="px-6 py-2 bg-blue-600 text-white rounded-xl text-sm font-medium hover:bg-blue-700 transition">
                                        View Details
                                    </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default allCards;