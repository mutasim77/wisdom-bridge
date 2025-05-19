import { Link } from "react-router";
import { coursesData } from "@/data/courses_data";
import { progressTracker } from "@/services/progressTracker";
import { BookOpen, CheckCircle } from "lucide-react";

interface CourseWithProgress {
    id: string;
    title: string;
    completed: number;
    total: number;
    percentage: number;
}

export default function CourseProgressList() {
    const coursesWithProgress: CourseWithProgress[] = coursesData.map(course => {
        const progress = progressTracker.getCourseProgress(course.id);
        return {
            id: course.id,
            title: course.title,
            completed: progress.completed,
            total: progress.total,
            percentage: progress.percentage
        };
    });

    // Filter to only show courses with progress
    const inProgressCourses = coursesWithProgress.filter(c => c.percentage > 0 && c.percentage < 100);
    const completedCourses = coursesWithProgress.filter(c => c.percentage === 100);
    const hasAnyCourseProgress = inProgressCourses.length > 0 || completedCourses.length > 0;

    return (
        <div className="bg-[#f5e9c9] border-2 border-[#b39f7d] rounded-xl shadow-md overflow-hidden">
            <div className="p-4 border-b-2 border-[#b39f7d]">
                <h2 className="text-xl font-bold text-[#6b4c35]">Course Progress</h2>
            </div>

            <div className="p-6">
                {!hasAnyCourseProgress ? (
                    <div className="text-center py-8">
                        <div className="inline-block bg-[#e6d1a7]/30 rounded-full p-6 mb-4">
                            <BookOpen className="h-12 w-12 text-[#b39f7d]" />
                        </div>
                        <h3 className="text-lg font-medium text-[#6b4c35] mb-2">No Courses Started</h3>
                        <p className="text-[#6b4c35]/70 mb-4">
                            Begin a course to track your progress here.
                        </p>
                        <Link
                            to="/courses"
                            className="inline-flex items-center bg-[#8ab77d] text-white hover:bg-[#5e8c61] px-4 py-2 rounded-lg border-2 border-[#5e8c61] transition-colors"
                        >
                            Browse Courses
                        </Link>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {inProgressCourses.length > 0 && (
                            <div>
                                <h3 className="text-lg font-medium text-[#6b4c35] mb-3">In Progress</h3>
                                <div className="space-y-3">
                                    {inProgressCourses.map(course => (
                                        <CourseProgressItem key={course.id} course={course} />
                                    ))}
                                </div>
                            </div>
                        )}

                        {completedCourses.length > 0 && (
                            <div>
                                <h3 className="text-lg font-medium text-[#6b4c35] mb-3">Completed</h3>
                                <div className="space-y-3">
                                    {completedCourses.map(course => (
                                        <CourseProgressItem key={course.id} course={course} />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

function CourseProgressItem({ course }: { course: CourseWithProgress }) {
    const isCompleted = course.percentage === 100;

    return (
        <Link
            to={`/courses/${course.id}`}
            className="block bg-white rounded-lg border border-[#b39f7d]/40 p-4 hover:shadow-md transition-shadow"
        >
            <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium text-[#6b4c35]">{course.title}</h4>
                <span className="text-sm font-semibold text-[#5e8c61]">{course.percentage}%</span>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-[#e6d1a7]/50 h-2 rounded-full mb-2">
                <div
                    className="bg-gradient-to-r from-[#8ab77d] to-[#5e8c61] h-full rounded-full"
                    style={{ width: `${course.percentage}%` }}
                ></div>
            </div>

            <div className="flex justify-between items-center text-xs text-[#6b4c35]/70">
                <span>
                    {course.completed}/{course.total} lessons completed
                </span>
                {isCompleted && (
                    <span className="flex items-center text-[#5e8c61]">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Completed
                    </span>
                )}
            </div>
        </Link>
    );
}