import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { progressTracker } from "@/services/progressTracker";
import { coursesData } from "@/data/courses_data";
import { CheckCircle, Award, BookOpen } from "lucide-react";
import ProgressBar from "./progress/ProgressBar";

export const UserProgressOverview: React.FC = () => {
    const [progressData, setProgressData] = useState<{
        totalLessons: number;
        completedLessons: number;
        totalPercentage: number;
        courseProgress: {
            courseId: string;
            title: string;
            completed: number;
            total: number;
            percentage: number;
        }[];
    }>({
        totalLessons: 0,
        completedLessons: 0,
        totalPercentage: 0,
        courseProgress: [],
    });

    useEffect(() => {
        const calculateTotalProgress = () => {
            const progress = progressTracker.getProgress();
            let totalLessons = 0;
            let completedLessonsCount = 0;
            const courseProgressDetails = [];

            for (const course of coursesData) {
                const { completed, total, percentage } = progressTracker.getCourseProgress(course.id);
                totalLessons += total;
                completedLessonsCount += completed;

                if (completed > 0) {
                    courseProgressDetails.push({
                        courseId: course.id,
                        title: course.title,
                        completed,
                        total,
                        percentage,
                    });
                }
            }

            const totalPercentage = totalLessons > 0
                ? Math.round((completedLessonsCount / totalLessons) * 100)
                : 0;

            // Sort courses by percentage completed (descending)
            courseProgressDetails.sort((a, b) => b.percentage - a.percentage);

            setProgressData({
                totalLessons,
                completedLessons: completedLessonsCount,
                totalPercentage,
                courseProgress: courseProgressDetails,
            });
        };

        calculateTotalProgress();

        const handleStorageChange = () => {
            calculateTotalProgress();
        };

        window.addEventListener('storage', handleStorageChange);
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    const hasStarted = progressData.completedLessons > 0;

    return (
        <div className="bg-[#f5e9c9] border-2 border-[#b39f7d] rounded-xl shadow-md p-5">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-[#6b4c35]">Learning Progress</h2>
                {hasStarted && (
                    <button
                        onClick={() => {
                            if (window.confirm("Are you sure you want to reset all your progress?")) {
                                progressTracker.clearAllProgress();
                                window.dispatchEvent(new Event('storage'));
                            }
                        }}
                        className="text-xs text-[#6b4c35]/70 hover:text-[#b39f7d] underline"
                    >
                        Reset Progress
                    </button>
                )}
            </div>

            {hasStarted ? (
                <>
                    <div className="mb-6">
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-sm text-[#6b4c35]/70">Overall Progress</span>
                            <span className="text-sm font-medium text-[#6b4c35]">
                                {progressData.completedLessons}/{progressData.totalLessons} lessons
                            </span>
                        </div>
                        <ProgressBar percentage={progressData.totalPercentage} size="lg" showPercentage={false} />
                        <div className="mt-2 text-center">
                            <div className="text-2xl font-bold text-[#5e8c61]">{progressData.totalPercentage}%</div>
                            <div className="text-sm text-[#6b4c35]/70">Total Completion</div>
                        </div>
                    </div>

                    <div className="mb-4">
                        <h3 className="text-md font-semibold text-[#6b4c35] mb-2">Your Courses</h3>
                        <div className="space-y-4">
                            {progressData.courseProgress.map((course) => (
                                <Link
                                    key={course.courseId}
                                    to={`/courses/${course.courseId}`}
                                    className="block hover:bg-[#e6d1a7]/30 p-2 rounded-lg transition-colors"
                                >
                                    <div className="flex justify-between items-center mb-1">
                                        <div className="flex items-center">
                                            <BookOpen className="h-4 w-4 text-[#6b4c35] mr-2" />
                                            <span className="text-sm font-medium text-[#6b4c35]">{course.title}</span>
                                        </div>
                                        <span className="text-xs text-[#6b4c35]/70">
                                            {course.completed}/{course.total} lessons
                                        </span>
                                    </div>
                                    <ProgressBar percentage={course.percentage} size="sm" showPercentage={false} />
                                    {course.percentage === 100 && (
                                        <div className="flex items-center text-[#5e8c61] text-xs mt-1">
                                            <CheckCircle className="h-3 w-3 mr-1" />
                                            <span>Course completed</span>
                                        </div>
                                    )}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {progressData.courseProgress.some(course => course.percentage === 100) && (
                        <div className="mt-6 text-center">
                            <div className="inline-block bg-[#5e8c61]/10 rounded-full p-3">
                                <Award className="h-8 w-8 text-[#5e8c61]" />
                            </div>
                            <p className="mt-2 text-[#6b4c35] font-medium">
                                Congratulations on completing {progressData.courseProgress.filter(c => c.percentage === 100).length} course(s)!
                            </p>
                        </div>
                    )}
                </>
            ) : (
                <div className="text-center py-8">
                    <div className="inline-block bg-[#e6d1a7]/30 rounded-full p-6 mb-4">
                        <BookOpen className="h-12 w-12 text-[#b39f7d]" />
                    </div>
                    <h3 className="text-lg font-medium text-[#6b4c35] mb-2">Start Your Learning Journey</h3>
                    <p className="text-[#6b4c35]/70 mb-4">
                        You haven't marked any lessons as completed yet.
                        Start a course and track your progress here!
                    </p>
                    <Link
                        to="/courses"
                        className="inline-flex items-center bg-[#8ab77d] text-white hover:bg-[#5e8c61] px-4 py-2 rounded-lg border-2 border-[#5e8c61] transition-colors"
                    >
                        Browse Courses
                    </Link>
                </div>
            )}
        </div>
    );
};