'use client'
import { Button, Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowLeft, FaExclamationCircle, FaStar } from 'react-icons/fa';
import { toast } from 'react-toastify';


const cardsDetails = async ({ params }) => {
    const { id } = await params;
    const res = await fetch('https://assingment-8-phi.vercel.app/data.json');
    const datas = await res.json();

    
    const course = datas.find(c => c.id == id);

    const handleEnroll =() =>{
        toast.success('Enrollment Successful')
    }

    

    
    if (!course) {
        return (
            <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center ">
                
                <div className="bg-gray-100 p-6 rounded-full mb-6">
                    <FaExclamationCircle className="text-gray-400 text-6xl" />
                </div>

                
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    Course Not Found
                </h2>
                <p className="text-gray-500 max-w-md mb-8 animate-bounce">
                    Oops! The course you are looking for does not exist or has been moved.
                    Check the URL or explore our other top-rated courses.
                </p>

                
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/">
                        <Button
                            variant="bordered"
                            startContent={<FaArrowLeft />}
                            className="font-medium"
                        >
                            Go Back Home
                        </Button>
                    </Link>

                    <Link href="/courses">
                        <Button
                            color="primary"
                            className="font-medium shadow-lg shadow-blue-500/30"
                        >
                            Browse All Courses
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-6 ">
            <h2 className="text-3xl font-bold mb-6 text-center">Course Details</h2>


            <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-gray-400">

                
                <div className="relative h-64 md:h-auto md:w-1/2">
                    <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <Chip className="absolute top-4 left-4 bg-linear-to-r from-green-400 to-blue-400 text-white border-none">
                        {course.category}
                    </Chip>
                </div>

                
                <div className="p-8 flex flex-col flex-1  bg-linear-to-r from-red-200 to-sky-300">
                    <h3 className="text-2xl font-bold mb-4">
                        {course.title}
                    </h3>

                    <div className="text-gray-600 space-y-2 mb-6">
                        <p><span className="font-semibold text-gray-800">Instructor:</span> {course.instructor}</p>
                        <p><span className="font-semibold text-gray-800">Duration:</span> {course.duration}</p>
                        <p><span className="font-semibold text-gray-800">Level:</span> {course.level}</p>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-8">
                        {course.description}
                    </p>

                    
                    <div className="mt-auto flex justify-between items-center pt-6 border-t">
                        <div className="flex items-center gap-2 text-yellow-500 text-lg font-bold">
                            <FaStar /> {course.rating}
                        </div>

                        <button onClick={handleEnroll} className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                            Enroll Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default cardsDetails;