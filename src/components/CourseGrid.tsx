import { ArrowRight, BookOpen, Clock } from "lucide-react"
import type { Course } from "@/types"
import { Link } from "react-router"

export default function CourseGrid({ courses }: { courses: Course[] }) {
    const getSubjectColor = (subject: string) => {
        const colors = {
            Mathematics: "bg-[#d1e7a7]/30",
            Chemistry: "bg-[#a7d1c5]/30",
            Physics: "bg-[#e6d1a7]/30",
            Statistics: "bg-[#d1a7c5]/30",
        }
        return colors[subject as keyof typeof colors] || "bg-[#d1e7a7]/30"
    }

    const getSubjectBorderColor = (subject: string) => {
        const colors = {
            Mathematics: "border-[#8ab77d]",
            Chemistry: "border-[#5e9c90]",
            Physics: "border-[#b39f7d]",
            Statistics: "border-[#9f7db3]",
        }
        return colors[subject as keyof typeof colors] || "border-[#8ab77d]"
    }

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {courses.map((course) => (
                <Link key={course.id} to={`/courses/${course.id}`} className="group">
                    <div className="relative">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#8ab77d] to-[#5e8c61] rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                        <div
                            className={`relative flex flex-col h-full bg-[#f5e9c9] border-2 border-[#b39f7d] rounded-xl shadow-md overflow-hidden`}
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={course.thumbnail}
                                    alt={course.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.src = "/placeholder.svg";
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/60 to-transparent"></div>
                                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium text-white ${getSubjectBorderColor(course.subject)} border ${getSubjectColor(course.subject)}`}>
                                    {course.subject}
                                </div>
                            </div>

                            <div className={`p-5 flex-grow ${getSubjectColor(course.subject)} border-t-2 ${getSubjectBorderColor(course.subject)}`}>
                                <h3 className="text-xl font-semibold text-[#6b4c35] mb-3 line-clamp-2 min-h-[3.5rem]">
                                    {course.title}
                                </h3>

                                <p className="text-sm text-[#6b4c35]/80 mb-4 line-clamp-2 min-h-[2.5rem]">
                                    {course.description}
                                </p>

                                <div className="flex justify-between items-center">
                                    {/* Course details */}
                                    <div className="flex flex-col gap-1">
                                        {course.lessons && (
                                            <div className="flex items-center text-xs text-[#6b4c35]/70">
                                                <BookOpen className="h-3 w-3 mr-1" />
                                                <span>{course.lessons} lessons</span>
                                            </div>
                                        )}
                                        {course.duration && (
                                            <div className="flex items-center text-xs text-[#6b4c35]/70">
                                                <Clock className="h-3 w-3 mr-1" />
                                                <span>{course.duration}</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Arrow button */}
                                    <div className="flex items-center">
                                        <span className="text-sm font-medium mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-x-2 group-hover:translate-x-0 transition-transform duration-300 ease-out hidden md:inline">
                                            View Course
                                        </span>
                                        <div className={`w-9 h-9 flex items-center justify-center bg-[#f8f3e3] rounded-full border-2 ${getSubjectBorderColor(course.subject)} group-hover:bg-[#8ab77d] group-hover:border-[#6b4c35] transition-colors`}>
                                            <ArrowRight className="h-5 w-5 text-[#6b4c35] group-hover:text-[#f5e9c9] transition-colors" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}