import { useParams, Link } from "react-router";
import { ArrowRight, Check, Clock } from "lucide-react";
import { courses } from "@/data/courses";
import { coursesData } from "@/data/courses_data";
import { useState, useEffect } from "react";
import { progressTracker } from "@/services/progressTracker";
import CourseProgress from "@/components/progress/CourseProgress";
import ChapterProgress from "@/components/progress/ChapterProgress";
import { ChapterIcon } from "@/components/ui/chapter-icon";

export default function SingleCoursePage() {
    const { courseId } = useParams<{ courseId: string }>();
    const [, setProgress] = useState(progressTracker.getCourseProgress(courseId || ""));

    useEffect(() => {
        const updateProgress = () => {
            setProgress(progressTracker.getCourseProgress(courseId || ""));
        };

        window.addEventListener("storage", updateProgress);
        return () => {
            window.removeEventListener("storage", updateProgress);
        };
    }, [courseId]);

    const course = courses.find(c => c.id === courseId);
    const courseData = coursesData.find(c => c.id === courseId);

    if (!course) {
        return (
            <div className="py-12 px-4 text-center">
                <div className="container mx-auto max-w-6xl">
                    <h1 className="text-3xl font-bold text-[#6b4c35]">Course not found</h1>
                </div>
            </div>
        );
    }

    return (
        <div className="py-12 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="bg-[#f5e9c9] border-2 border-[#b39f7d] rounded-xl shadow-md p-6 mb-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div>
                            <h1 className="text-3xl font-bold text-[#6b4c35] mb-2">{course.title}</h1>
                            <p className="text-[#6b4c35]/80 mb-2">{course.description}</p>
                        </div>
                        <div className="flex-shrink-0 w-full md:w-64">
                            <CourseProgress courseId={courseId || ""} />
                        </div>
                    </div>
                </div>

                {!courseData || courseData.chapters.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-[#6b4c35]">No chapters found for this course.</p>
                    </div>
                ) : (
                    <>
                        <h2 className="text-2xl font-semibold text-[#6b4c35] mb-6">Chapters</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {courseData.chapters.map((chapter, index) => {
                                const chapterProgress = progressTracker.getChapterProgress(courseId || "", chapter.id);
                                return (
                                    <Link
                                        key={chapter.id}
                                        to={`/courses/${courseId}/chapters/${chapter.id}`}
                                        className="group"
                                    >
                                        <div className="relative">
                                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#8ab77d] to-[#5e8c61] rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                                            <div
                                                className="relative flex flex-col h-full bg-[#f5e9c9] border-2 border-[#b39f7d] rounded-xl shadow-md overflow-hidden"
                                            >
                                                <div className="p-4 pb-2 flex items-center justify-between">
                                                    <div className="flex items-center gap-3">
                                                        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-[#f8f3e3] rounded-full border-2 border-[#b39f7d]">
                                                            <ChapterIcon />
                                                        </div>
                                                        <span className="text-sm font-medium text-[#6b4c35]/70">Chapter {index + 1}</span>
                                                    </div>
                                                    {chapterProgress.percentage > 0 && (
                                                        <div className="flex items-center bg-[#8ab77d]/10 px-2 py-1 rounded-md">
                                                            {chapterProgress.percentage === 100 ? (
                                                                <Check className="h-4 w-4 text-[#5e8c61] mr-1" />
                                                            ) : (
                                                                <Clock className="h-4 w-4 text-[#6b4c35]/70 mr-1" />
                                                            )}
                                                            <span className="text-xs font-medium text-[#6b4c35]">
                                                                {chapterProgress.percentage}%
                                                            </span>
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="px-4">
                                                    <ChapterProgress
                                                        courseId={courseId || ""}
                                                        chapterId={chapter.id}
                                                        className="mb-3"
                                                    />
                                                </div>

                                                <div className="flex-grow p-4 pt-2">
                                                    <h3 className="text-xl font-semibold text-[#6b4c35] mb-2 flex items-start">
                                                        <span className="flex-1">{chapter.title}</span>
                                                    </h3>
                                                    <div className="flex items-center text-xs text-[#6b4c35]/70 mb-2">
                                                        <span>{chapter.lessons.length} lessons</span>
                                                        <span className="mx-2">•</span>
                                                        <span>{chapterProgress.completed} completed</span>
                                                    </div>
                                                </div>

                                                <div className="p-4 flex justify-end items-center border-t-2 border-[#b39f7d]/30 group-hover:border-[#b39f7d]/60 transition-colors">
                                                    <div className="w-8 h-8 flex items-center justify-center bg-[#f8f3e3] rounded-full border-2 border-[#b39f7d] group-hover:bg-[#8ab77d] group-hover:border-[#6b4c35] transition-colors">
                                                        <ArrowRight className="h-4 w-4 text-[#6b4c35] group-hover:text-[#f5e9c9] transition-colors" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}