import { courses } from "@/data/courses";
import CourseGrid from "@/components/CourseGrid";
import { BookOpen, GraduationCap, BrainCircuit, Sparkles } from "lucide-react";

export default function CoursesPage() {
    return (
        <div className="py-10 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="md:col-span-2 relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#8ab77d] to-[#5e8c61] rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative bg-[#f5e9c9] border-2 border-[#b39f7d] rounded-xl shadow-md p-6 h-full flex flex-col justify-between">
                            <div>
                                <h1 className="text-3xl md:text-4xl font-bold mb-3 text-[#6b4c35] font-['Varela_Round',_sans-serif]">
                                    Learning Library
                                </h1>
                                <p className="text-lg text-[#6b4c35]/80 max-w-xl">
                                    Discover carefully curated educational journeys that transform
                                    complex subjects into clear, structured learning paths.
                                </p>
                            </div>

                            <div className="mt-4 flex flex-wrap gap-3">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#d1e7a7]/40 text-[#5e8c61] border border-[#8ab77d]">
                                    <BookOpen className="w-3 h-3 mr-1" />
                                    Mathematics
                                </span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#a7d1c5]/40 text-[#3d7b71] border border-[#5e9c90]">
                                    <GraduationCap className="w-3 h-3 mr-1" />
                                    Chemistry
                                </span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#e6d1a7]/40 text-[#8c7744] border border-[#b39f7d]">
                                    <BrainCircuit className="w-3 h-3 mr-1" />
                                    Physics
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-1 relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#b39f7d] to-[#8c7744] rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative bg-[#f5e9c9] border-2 border-[#b39f7d] rounded-xl shadow-md p-6 h-full">
                            <div className="w-12 h-12 bg-[#e6d1a7]/50 rounded-full flex items-center justify-center mb-4 border-2 border-[#b39f7d]">
                                <Sparkles className="w-6 h-6 text-[#6b4c35]" />
                            </div>
                            <h2 className="text-xl font-semibold mb-2 text-[#6b4c35]">Why Learn Here?</h2>
                            <ul className="space-y-2 text-[#6b4c35]/80 text-sm">
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 w-4 h-4 rounded-full bg-[#a7d1c5]/40 flex items-center justify-center mr-2 mt-0.5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#5e8c61]"></div>
                                    </div>
                                    <span>Distraction-free environment</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 w-4 h-4 rounded-full bg-[#a7d1c5]/40 flex items-center justify-center mr-2 mt-0.5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#5e8c61]"></div>
                                    </div>
                                    <span>Structured learning paths</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 w-4 h-4 rounded-full bg-[#a7d1c5]/40 flex items-center justify-center mr-2 mt-0.5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#5e8c61]"></div>
                                    </div>
                                    <span>Quality educational content</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-10">
                    {[
                        { count: courses.length, label: "Courses" },
                        { count: "100+", label: "Lessons" },
                        { count: "24/7", label: "Access" }
                    ].map((stat, index) => (
                        <div key={index} className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#8ab77d] to-[#5e8c61] rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                            <div className="relative bg-[#f5e9c9] border-2 border-[#b39f7d] rounded-lg p-3 text-center">
                                <div className="text-xl md:text-2xl font-bold text-[#6b4c35]">{stat.count}</div>
                                <div className="text-xs text-[#6b4c35]/70">{stat.label}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mb-6">
                    <div className="relative inline-block mb-8">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#8ab77d] to-[#5e8c61] rounded-xl blur opacity-25"></div>
                        <h2 className="relative bg-[#f5e9c9] px-6 py-3 rounded-xl border-2 border-[#b39f7d] shadow-md text-2xl font-bold text-[#6b4c35] font-['Varela_Round',_sans-serif]">
                            Browse All Courses
                        </h2>
                    </div>
                    <CourseGrid courses={courses} />
                </div>
            </div>
        </div>
    );
}