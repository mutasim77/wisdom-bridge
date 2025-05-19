import { Link } from "react-router";
import { ArrowRight, BookOpen, ChevronRight, Shapes, BookOpenCheck, Award, Youtube, GraduationCap, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HomePage() {
    return (
        <div className="py-6 px-4">
            <div className="container mx-auto max-w-6xl">
                {/* Main Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                    {/* Hero Section - Spans 4 columns */}
                    <div className="md:col-span-4 relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#8ab77d] to-[#5e8c61] rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative bg-[#f5e9c9] border-2 border-[#b39f7d] rounded-xl shadow-md p-6 h-full flex flex-col justify-between">
                            <div>
                                <h1 className="text-3xl font-bold mb-3 text-[#6b4c35] font-['Varela_Round',_sans-serif]">
                                    Your Educational Journey, Simplified
                                </h1>
                                <p className="text-lg text-[#6b4c35] mb-4">
                                    A distraction-free learning platform that curates the best educational content in one place
                                </p>
                                <p className="text-[#6b4c35]/80 mb-6 text-sm">
                                    Wisdom Bridge organizes YouTube's educational treasures into structured courses,
                                    making it easier to learn complex subjects like Calculus and Organic Chemistry.
                                </p>
                            </div>
                            <Button
                                size="lg"
                                className="bg-[#8ab77d] hover:bg-[#6b9a5e] text-[#f5e9c9] border-2 border-[#6b4c35] rounded-lg shadow-[0_4px_0_#6b4c35] hover:shadow-[0_2px_0_#6b4c35] hover:translate-y-[2px] active:shadow-none active:translate-y-[4px] transition-all w-full md:w-auto"
                                asChild
                            >
                                <Link to="/courses">
                                    Start Learning Now
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* About Card - Spans 2 columns */}
                    <div className="md:col-span-2 relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#5e8c61] to-[#3d7b71] rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative bg-[#f5e9c9] border-2 border-[#b39f7d] rounded-xl shadow-md p-6 h-full">
                            <div className="w-12 h-12 bg-[#a7d1c5]/50 rounded-full flex items-center justify-center mb-4 border-2 border-[#5e8c61]">
                                <BookOpen className="w-6 h-6 text-[#6b4c35]" />
                            </div>
                            <h2 className="text-xl font-semibold mb-2 text-[#6b4c35]">Our Mission</h2>
                            <p className="text-[#6b4c35]/80 text-sm mb-4">
                                Simplifying educational content access with a focus on structure and ease of use.
                            </p>
                            <Link to="/about" className="inline-flex items-center text-[#5e8c61] hover:text-[#3d7b71] font-medium text-sm">
                                Learn more
                                <ChevronRight className="ml-1 h-4 w-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Course Preview Card - Main Grid */}
                    {/* <div className="md:col-span-6 relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#d1e7a7] to-[#8ab77d] rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative bg-[#f5e9c9] border-2 border-[#b39f7d] rounded-xl shadow-md p-6 h-full">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-semibold text-[#6b4c35]">Featured Courses</h2>
                                <Link to="/courses" className="text-sm font-medium text-[#5e8c61] hover:text-[#3d7b71] inline-flex items-center">
                                    View all courses
                                    <ChevronRight className="ml-1 h-4 w-4" />
                                </Link>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {featuredCourses.map((course) => (
                                    <Link
                                        key={course.id}
                                        to={`/courses/${course.id}`}
                                        className="group/card bg-white rounded-lg overflow-hidden border border-[#b39f7d]/40 hover:border-[#b39f7d] shadow-sm hover:shadow-md transition-all"
                                    >
                                        <div className="relative overflow-hidden h-36">
                                            <img
                                                src={course.thumbnail}
                                                alt={course.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110"
                                                onError={(e) => {
                                                    const target = e.target as HTMLImageElement;
                                                    target.src = "/placeholder.svg";
                                                }}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                            <div className="absolute bottom-2 right-2 bg-[#5e8c61]/80 text-white text-xs px-2 py-1 rounded-full border border-[#8ab77d]">
                                                {course.subject}
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <h3 className="text-[#6b4c35] font-medium line-clamp-2 min-h-[40px]">{course.title}</h3>
                                            <p className="text-xs text-[#6b4c35]/70 line-clamp-2 mt-1 min-h-[32px]">{course.description}</p>
                                            <div className="flex justify-end mt-2">
                                                <div className="w-7 h-7 rounded-full bg-[#f8f3e3] border border-[#b39f7d] flex items-center justify-center group-hover/card:bg-[#8ab77d] group-hover/card:border-[#5e8c61] transition-colors">
                                                    <ArrowRight className="h-3.5 w-3.5 text-[#6b4c35] group-hover/card:text-white transition-colors" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div> */}

                    {/* Features Card - Spans 3 columns */}
                    <div className="md:col-span-3 relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#e6d1a7] to-[#b39f7d] rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative bg-[#f5e9c9] border-2 border-[#b39f7d] rounded-xl shadow-md h-full">
                            <div className="p-4 border-b border-[#b39f7d]">
                                <h2 className="text-xl font-semibold text-[#6b4c35]">Why Choose Us</h2>
                            </div>
                            <div className="p-4 space-y-3">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#a7d1c5]/40 flex items-center justify-center mr-3">
                                        <BookOpenCheck className="w-4 h-4 text-[#5e8c61]" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium text-[#6b4c35]">Structured Learning Path</h3>
                                        <p className="text-xs text-[#6b4c35]/80">Clear progression through complex topics</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#a7d1c5]/40 flex items-center justify-center mr-3">
                                        <Shapes className="w-4 h-4 text-[#5e8c61]" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium text-[#6b4c35]">Track Your Progress</h3>
                                        <p className="text-xs text-[#6b4c35]/80">Mark lessons as completed and monitor your journey</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#a7d1c5]/40 flex items-center justify-center mr-3">
                                        <Award className="w-4 h-4 text-[#5e8c61]" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium text-[#6b4c35]">Quality Content</h3>
                                        <p className="text-xs text-[#6b4c35]/80">Featuring top educational YouTube channels</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* YouTube Attribution Card - Spans 3 columns */}
                    <div className="md:col-span-3 relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#f08080] to-[#c46954] rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative bg-[#f5e9c9] border-2 border-[#b39f7d] rounded-xl shadow-md h-full p-6">
                            <div className="flex items-start">
                                <div className="w-10 h-10 rounded-full bg-[#ffecec] flex items-center justify-center mr-4 border-2 border-[#f08080]">
                                    <Youtube className="w-5 h-5 text-[#f08080]" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-[#6b4c35] mb-2">Educational Content Attribution</h3>
                                    <p className="text-sm text-[#6b4c35]/80 mb-3">
                                        All videos are sourced from amazing educators on YouTube. We simply organize their content into a distraction-free learning environment.
                                    </p>
                                    <Link
                                        to="/about#attributions"
                                        className="inline-flex items-center text-[#c46954] hover:text-[#f08080] font-medium text-sm"
                                    >
                                        Learn about our content creators
                                        <ChevronRight className="ml-1 h-4 w-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Get Started Card - Spans 6 columns */}
                    <div className="md:col-span-6 relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4a7dbd] to-[#3d6ca9] rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative bg-[#f5e9c9] border-2 border-[#b39f7d] rounded-xl shadow-md overflow-hidden">
                            <div className="absolute inset-0 opacity-10">
                                <svg width="100%" height="100%">
                                    <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                                        <circle cx="10" cy="10" r="2" fill="#6b4c35" />
                                    </pattern>
                                    <rect width="100%" height="100%" fill="url(#dots)" />
                                </svg>
                            </div>
                            <div className="relative md:flex items-center">
                                <div className="p-6 md:w-1/2">
                                    <h2 className="text-2xl font-bold text-[#6b4c35] mb-3">Ready to Start Learning?</h2>
                                    <p className="text-[#6b4c35]/80 mb-6">
                                        Dive into our collection of high-quality courses designed to help you master new skills at your own pace, in a distraction-free environment.
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        <Button
                                            className="bg-[#8ab77d] hover:bg-[#6b9a5e] text-[#f5e9c9] border-2 border-[#6b4c35] rounded-lg shadow-[0_4px_0_#6b4c35] hover:shadow-[0_2px_0_#6b4c35] hover:translate-y-[2px] active:shadow-none active:translate-y-[4px] transition-all"
                                            asChild
                                        >
                                            <Link to="/courses">
                                                Browse Courses
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </Link>
                                        </Button>
                                        <Button
                                            variant="outline"
                                            className="border-2 border-[#6b4c35] text-[#6b4c35] hover:bg-[#e6d1a7]/50"
                                            asChild
                                        >
                                            <Link to="/about">
                                                Learn About Us
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                                <div className="hidden md:flex md:w-1/2 justify-center items-center p-6">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="w-16 h-16 bg-[#8ab77d]/20 rounded-full flex items-center justify-center border-2 border-[#5e8c61]">
                                            <GraduationCap className="w-8 h-8 text-[#5e8c61]" />
                                        </div>
                                        <div className="w-16 h-16 bg-[#e6d1a7]/30 rounded-full flex items-center justify-center border-2 border-[#b39f7d]">
                                            <BookOpen className="w-8 h-8 text-[#b39f7d]" />
                                        </div>
                                        <div className="w-16 h-16 bg-[#4a7dbd]/20 rounded-full flex items-center justify-center border-2 border-[#3d6ca9]">
                                            <Play className="w-8 h-8 text-[#3d6ca9]" />
                                        </div>
                                        <div className="w-16 h-16 bg-[#f08080]/20 rounded-full flex items-center justify-center border-2 border-[#c46954]">
                                            <Award className="w-8 h-8 text-[#c46954]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}