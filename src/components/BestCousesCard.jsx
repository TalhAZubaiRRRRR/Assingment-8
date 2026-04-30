import Image from 'next/image';
import React from 'react';

const BestCousesCard = ({datas , course}) => {
    console.log(datas)
    return (
<div
                        key={course.id}
                        className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-xl transition"
                    >
                        {/* Image
                        <Image
                        src={course.image}
                        alt={course.title}
                        height={20}
                        width={20}
                        /> */}
                     

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

                            {/* Bottom area */}
                            <div className="mt-auto flex justify-between items-center">
                                <span className="text-yellow-500 font-semibold">
                                    ⭐ {course.rating}
                                </span>

                                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">
                                    Details
                                </button>
                            </div>
                        </div>
                    </div>
    );
};

export default BestCousesCard;