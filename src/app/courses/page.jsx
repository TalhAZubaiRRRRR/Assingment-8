import { Button, Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';

const AllCards = async ({ searchParams }) => {
    const params = await searchParams;

    const res = await fetch('https://assingment-8-phi.vercel.app/data.json', {
        cache: 'no-store',
    });

    const courses = await res.json();

    const search = params?.search?.toLowerCase()?.trim() || '';

    const filteredCourses = search
        ? courses.filter((course) =>
              course.title.toLowerCase().includes(search)
          )
        : courses;

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-black">
                All Courses
            </h2>

            {/* Responsive Search Form */}
            <form
                action="/courses"
                method="GET"
                className="mb-10 flex flex-col sm:flex-row justify-center items-center gap-4"
            >
                <input
                    type="text"
                    name="search"
                    defaultValue={search}
                    placeholder="Search by title..."
                    className="w-[260px] sm:w-[400px] md:w-[500px] px-5 py-3 border rounded-xl shadow-sm focus:outline-none"
                />

                <Button
                    type="submit"
                    className=" sm:w-auto px-8 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition"
                >
                    Search
                </Button>
            </form>

            {filteredCourses.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCourses.map((course) => (
                        <div
                            key={course.id}
                            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl flex flex-col"
                        >
                            {/* Image */}
                            <div className="relative h-52 w-full">
                                <Image
                                    src={course.image}
                                    alt={course.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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

                                <p className="text-gray-600 text-sm mb-6 flex-1">
                                    {course.description}
                                </p>

                                <div className="mt-auto flex justify-between items-center">
                                    <div className="flex items-center gap-1 text-yellow-500 font-semibold">
                                        <FaStar /> {course.rating}
                                    </div>

                                    <Link href={`/courses/${course.id}`}>
                                        <Button className="px-5 py-2 bg-blue-600 text-white rounded-xl text-sm font-medium hover:bg-blue-700 transition">
                                            View Details
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-red-500 text-lg mt-10">
                    No courses found.
                </p>
            )}
        </div>
    );
};

export default AllCards;