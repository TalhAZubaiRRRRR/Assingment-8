
import Image from 'next/image';
import React from 'react';
import BestCousesCard from './BestCousesCard';

const BestCourses = async () => {
    const res = await fetch('https://assingment-8-phi.vercel.app/data.json')
    const datas = await res.json()
    console.log(datas)

    const topCouses = datas.slice(0, 3)
    console.log(topCouses)
    return (
        <section className="py-12 px-4">
            <h2 className="text-3xl font-bold text-center mb-10 animate-bounce">
                Top 3 Best Courses
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto ">
                {topCouses.map((course) => (
                    <BestCousesCard key={course.id} datas={datas} course={course}/>
                ))}
            </div>
        </section>
    );
};

export default BestCourses;