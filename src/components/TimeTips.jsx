import React from 'react';
import { FaClock, FaBookOpen, FaBrain, FaTasks } from 'react-icons/fa';

const TimeTips = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-16 ">
            <h2 className="text-4xl font-bold text-center text-black mb-4">
                Study Success Guide
            </h2>

            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
                Master your academic journey with proven study techniques and
                practical time management strategies that help you stay focused,
                productive, and stress-free.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* Study Techniques Card */}
                <div className=" bg-linear-to-r from-red-200 to-sky-300 rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="bg-blue-100 p-4 rounded-full text-blue-600 text-2xl">
                            <FaBrain />
                        </div>
                        <h3 className="text-2xl font-bold text-black">
                            Effective Study Techniques
                        </h3>
                    </div>

                    <p className="text-gray-600 mb-6">
                        Strong study habits can improve understanding,
                        retention, and confidence. Instead of passive reading,
                        focus on active learning methods that engage your brain.
                    </p>

                    <ul className="space-y-4 text-gray-600">
                        <li className="flex items-start gap-3">
                            <FaBookOpen className="text-blue-500 mt-1" />
                            <span>
                                <strong>Active Recall:</strong> Test yourself
                                regularly instead of rereading notes.
                            </span>
                        </li>

                        <li className="flex items-start gap-3">
                            <FaBookOpen className="text-blue-500 mt-1" />
                            <span>
                                <strong>Spaced Repetition:</strong> Review
                                topics over increasing intervals for long-term
                                memory.
                            </span>
                        </li>

                        <li className="flex items-start gap-3">
                            <FaBookOpen className="text-blue-500 mt-1" />
                            <span>
                                <strong>Focused Sessions:</strong> Study in
                                blocks of 25–50 minutes with short breaks.
                            </span>
                        </li>

                        <li className="flex items-start gap-3">
                            <FaBookOpen className="text-blue-500 mt-1" />
                            <span>
                                <strong>Teach Others:</strong> Explaining
                                concepts strengthens your own understanding.
                            </span>
                        </li>
                    </ul>
                </div>

                {/* Time Management Card */}
                <div className=" bg-linear-to-r from-red-200 to-sky-300 rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="bg-green-100 p-4 rounded-full text-green-600 text-2xl">
                            <FaClock  />
                        </div>
                        <h3 className="text-2xl font-bold text-black">
                            Smart Time Management
                        </h3>
                    </div>

                    <p className="text-gray-600 mb-6">
                        Managing your time effectively helps reduce stress and
                        ensures steady progress. A balanced schedule leads to
                        better productivity and healthier study habits.
                    </p>

                    <ul className="space-y-6 text-gray-600">
                        <li className="flex items-start gap-3">
                            <FaTasks className="text-green-500 mt-1" />
                            <span className=''>
                                <strong className=''>Set Priorities:</strong> Identify the
                                most important tasks first.
                            </span>
                        </li>

                        <li className="flex items-start gap-3">
                            <FaTasks className="text-green-500 mt-1" />
                            <span>
                                <strong>Use a Planner:</strong> Organize study
                                goals, deadlines, and revisions.
                            </span>
                        </li>

                        <li className="flex items-start gap-3">
                            <FaTasks className="text-green-500 mt-1" />
                            <span>
                                <strong>Avoid Multitasking:</strong> Focus on
                                one task at a time for better efficiency.
                            </span>
                        </li>

                        <li className="flex items-start gap-3">
                            <FaTasks className="text-green-500 mt-1" />
                            <span>
                                <strong>Schedule Breaks:</strong> Rest is
                                essential for maintaining concentration.
                            </span>
                        </li>
                    </ul>
                </div>

            </div>
        </section>

    );
};

export default TimeTips;