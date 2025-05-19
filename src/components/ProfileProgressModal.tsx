import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { X, Award, BookOpen, Trash2 } from "lucide-react";
import { progressTracker } from "@/services/progressTracker";
import { coursesData } from "@/data/courses_data";
import ProgressBar from "./progress/ProgressBar";

interface ProfileProgressModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ProfileProgressModal: React.FC<ProfileProgressModalProps> = ({
    isOpen,
    onClose,
}) => {
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

                courseProgressDetails.push({
                    courseId: course.id,
                    title: course.title,
                    completed,
                    total,
                    percentage,
                });
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
                courseProgress: courseProgressDetails.filter(c => c.percentage > 0),
            });
        };

        if (isOpen) {
            calculateTotalProgress();
        }

        const handleStorageChange = () => {
            calculateTotalProgress();
        };

        window.addEventListener('storage', handleStorageChange);
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const handleResetAllProgress = () => {
        if (window.confirm("Are you sure you want to reset all your progress? This action cannot be undone.")) {
            progressTracker.clearAllProgress();
            window.dispatchEvent(new Event('storage'));
        }
    };

    const completedCoursesCount = progressData.courseProgress.filter(c => c.percentage === 100).length;
    const hasStartedLearning = progressData.completedLessons > 0;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-[#f5e9c9] border-2 border-[#b39f7d] rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
                <div className="p-4 border-b border-[#b39f7d] flex justify-between items-center">
                    <h2 className="text-xl font-bold text-[#6b4c35]">Your Learning Progress</h2>
                    <button
                        onClick={onClose}
                        className="text-[#6b4c35] hover:text-[#8c7744] rounded-full p-1"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <div className="p-6 overflow-y-auto max-h-[calc(90vh-4rem)]">
                    {hasStartedLearning ? (
                        <>
                            <div className="mb-8">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-[#6b4c35] font-medium">Overall Progress</span>
                                    <span className="text-sm text-[#6b4c35]/70">
                                        {progressData.completedLessons}/{progressData.totalLessons} lessons completed
                                    </span>
                                </div>
                                <ProgressBar percentage={progressData.totalPercentage} size="lg" />

                                {completedCoursesCount > 0 && (
                                    <div className="flex items-center mt-2 text-[#5e8c61]">
                                        <Award className="h-4 w-4 mr-2" />
                                        <span className="text-sm">
                                            {completedCoursesCount} {completedCoursesCount === 1 ? 'course' : 'courses'} completed
                                        </span>
                                    </div>
                                )}
                            </div>

                            <h3 className="text-lg font-semibold text-[#6b4c35] mb-3">Course Progress</h3>

                            <div className="space-y-4 mb-6">
                                {progressData.courseProgress.map(course => (
                                    <div key={course.courseId} className="bg-white/70 rounded-lg p-4 border border-[#b39f7d]/40">
                                        <div className="flex justify-between items-center mb-1">
                                            <Link
                                                to={`/courses/${course.courseId}`}
                                                className="text-[#6b4c35] font-medium hover:text-[#5e8c61]"
                                                onClick={onClose}
                                            >
                                                {course.title}
                                            </Link>
                                            <span className="text-xs text-[#6b4c35]/70">
                                                {course.completed}/{course.total} lessons
                                            </span>
                                        </div>
                                        <ProgressBar percentage={course.percentage} size="md" />
                                        {course.percentage === 100 && (
                                            <div className="flex justify-end mt-1">
                                                <span className="text-xs text-[#5e8c61] flex items-center">
                                                    <Award className="h-3 w-3 mr-1" />
                                                    Completed
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-[#b39f7d]/40 pt-4 mt-6 flex justify-between">
                                <div className="text-sm text-[#6b4c35]/70">
                                    Progress is saved locally in your browser
                                </div>
                                <button
                                    onClick={handleResetAllProgress}
                                    className="flex items-center text-sm text-[#b39f7d] hover:text-[#8c7744]"
                                >
                                    <Trash2 className="h-4 w-4 mr-1" />
                                    Reset All Progress
                                </button>
                            </div>
                        </>
                    ) : (
                        <div className="text-center py-10">
                            <div className="inline-block bg-[#a7d1c5]/20 rounded-full p-6 mb-4">
                                <BookOpen className="h-16 w-16 text-[#5e8c61]/70" />
                            </div>
                            <h3 className="text-xl font-semibold text-[#6b4c35] mb-2">
                                Start Your Learning Journey
                            </h3>
                            <p className="text-[#6b4c35]/70 mb-6 max-w-md mx-auto">
                                You haven't completed any lessons yet. Begin a course and mark
                                lessons as completed to track your progress.
                            </p>
                            <Link
                                to="/courses"
                                onClick={onClose}
                                className="inline-flex items-center bg-[#8ab77d] text-white hover:bg-[#5e8c61] px-6 py-3 rounded-lg border-2 border-[#5e8c61] transition-colors font-medium"
                            >
                                Explore Courses
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};