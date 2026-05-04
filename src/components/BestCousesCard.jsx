'use client'
import { Button, Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { toast } from 'react-toastify';

const BestCousesCard = ({ datas, course }) => {
    const handletoast = () => {
    toast.success('All Courses Here')
}
    return (
        <div
            key={course.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-xl transition-shadow  bg-linear-to-r from-red-200 to-sky-300"
        >
            {/* Image */}
            <div className='relative'>
                   <Image
                src={course.image}
                alt={course.title}
                height={200}
                width={400}
                className='w-full h-48 object-cover'
            />

            <Chip className='absolute top-3 right-3 bg-linear-to-r from-emerald-400 to-red-400'>{course.category}</Chip>

            </div>
         
            {/* Content */}
            <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">
                    {course.title}
                </h3>

                <p className="text-sm text-gray-500 mb-1">
                    Instructor: {course.instructor}
                </p>

                <p className="text-sm text-gray-500 mb-1">
                    Duration: {course.duration}
                </p>

                <p className="text-sm text-gray-500 mb-3">
                    Level: {course.level}
                </p>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {course.description}
                </p>

                {/* Bottom section with Button */}
                <div className="mt-auto flex justify-between items-center">
                    <span className="text-yellow-500 font-semibold flex gap-2 items-center">
                        <FaStar /> {course.rating}
                    </span>

                    <Link  href='/courses'>
                        <Button onClick={handletoast} className=" hover:bg-blue-700 ">
                        Details
                    </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BestCousesCard;