import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import { ArrowLeft, ArrowRight, Play, Check } from "lucide-react";
import { courses } from "@/data/courses";
import { coursesData } from "@/data/courses_data";
import { progressTracker } from "@/services/progressTracker";
import ChapterProgress from "@/components/progress/ChapterProgress";
import CompletionBadge from "@/components/progress/CompletionBadge";
import CourseProgress from "@/components/progress/CourseProgress";

export default function ChapterPage() {
    const { courseId, chapterId } = useParams<{ courseId: string; chapterId: string }>();
    const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
    const [completedLessons, setCompletedLessons] = useState<Record<string, boolean>>({});

    const courseData = coursesData.find(c => c.id === courseId);
    const chapterData = courseData?.chapters.find(ch => ch.id === chapterId);
    const course = courses.find(c => c.id === courseId);

    useEffect(() => {
        const progress = progressTracker.getProgress();
        setCompletedLessons(progress.completedLessons);

        const handleStorageChange = () => {
            const updatedProgress = progressTracker.getProgress();
            setCompletedLessons(updatedProgress.completedLessons);
        };

        window.addEventListener('storage', handleStorageChange);
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    if (!course || !courseData || !chapterData) {
        return (
            <div className="py-12 px-4 text-center">
                <div className="container mx-auto max-w-6xl">
                    <h1 className="text-3xl font-bold text-[#6b4c35]">Chapter not found</h1>
                    <Link to="/courses" className="mt-4 inline-block text-[#5e8c61] hover:underline">
                        Back to Courses
                    </Link>
                </div>
            </div>
        );
    }

    const currentLesson = chapterData.lessons.find(l => l.id === selectedLesson) || chapterData.lessons[0];
    const isCurrentLessonCompleted = completedLessons[currentLesson.id] || false;

    const handleToggleCompletion = () => {
        const newState = progressTracker.toggleLessonCompletion(currentLesson.id);
        setCompletedLessons({
            ...completedLessons,
            [currentLesson.id]: newState
        });

        window.dispatchEvent(new Event('storage'));
    };

    const navigateToLesson = (lessonId: string) => {
        setSelectedLesson(lessonId);
        const lessonElement = document.getElementById(`lesson-${lessonId}`);
        if (lessonElement) {
            lessonElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const currentIndex = chapterData.lessons.findIndex(l => l.id === (selectedLesson || chapterData.lessons[0].id));
    const previousLesson = currentIndex > 0 ? chapterData.lessons[currentIndex - 1] : null;
    const nextLesson = currentIndex < chapterData.lessons.length - 1 ? chapterData.lessons[currentIndex + 1] : null;

    return (
        <div className="py-12 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="mb-8">
                    <Link
                        to={`/courses/${courseId}`}
                        className="inline-flex items-center text-[#5e8c61] hover:text-[#8ab77d] transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to {course.title}
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="order-2 lg:order-1">
                        <div className="bg-[#f5e9c9] border-2 border-[#b39f7d] rounded-xl shadow-md overflow-hidden sticky top-20">
                            <div className="p-4 border-b-2 border-[#b39f7d]">
                                <h2 className="text-xl font-bold text-[#6b4c35]">{chapterData.title}</h2>
                                <p className="text-sm text-[#6b4c35]/70 mb-3">
                                    {chapterData.lessons.length} lessons
                                </p>
                                <ChapterProgress
                                    courseId={courseId || ""}
                                    chapterId={chapterId || ""}
                                />
                            </div>

                            <div className="max-h-[60vh] overflow-y-auto p-2">
                                {chapterData.lessons.map((lesson, index) => {
                                    const isCompleted = completedLessons[lesson.id] || false;
                                    const isActive = selectedLesson === lesson.id || (!selectedLesson && index === 0);

                                    return (
                                        <button
                                            id={`lesson-${lesson.id}`}
                                            key={lesson.id}
                                            className={`w-full p-3 rounded-lg text-left mb-2 flex items-start ${isActive
                                                ? 'bg-[#8ab77d]/20 border-2 border-[#8ab77d]'
                                                : 'bg-[#f8f3e3] border-2 border-[#b39f7d]/40 hover:border-[#b39f7d]'
                                                }`}
                                            onClick={() => navigateToLesson(lesson.id)}
                                        >
                                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#f8f3e3] border-2 border-[#b39f7d] flex items-center justify-center mr-3 mt-1">
                                                {isCompleted ? (
                                                    <Check className="h-3 w-3 text-[#5e8c61]" />
                                                ) : (
                                                    <span className="text-xs font-medium text-[#6b4c35]">{index + 1}</span>
                                                )}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-sm font-medium text-[#6b4c35] line-clamp-2">{lesson.title}</h3>
                                                {isCompleted && (
                                                    <span className="inline-block text-xs text-[#5e8c61] mt-1">Completed</span>
                                                )}
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-2 order-1 lg:order-2">
                        <div className="bg-[#f5e9c9] border-2 border-[#b39f7d] rounded-xl shadow-md overflow-hidden">
                            {currentLesson ? (
                                <>
                                    <div className="aspect-video w-full bg-black relative">
                                        {currentLesson.youtubeId ? (
                                            <iframe
                                                src={`https://www.youtube.com/embed/${currentLesson.youtubeId}`}
                                                title={currentLesson.title}
                                                allowFullScreen
                                                className="w-full h-full"
                                            ></iframe>
                                        ) : (
                                            <div className="flex items-center justify-center h-full">
                                                <div className="text-white text-center">
                                                    <Play className="h-12 w-12 mx-auto mb-2" />
                                                    <p>No video available</p>
                                                    <a
                                                        href={currentLesson.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="mt-2 inline-block px-4 py-2 bg-[#8ab77d] rounded-lg hover:bg-[#5e8c61] transition-colors"
                                                    >
                                                        View on YouTube
                                                    </a>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-4">
                                            <h1 className="text-2xl font-bold text-[#6b4c35]">{currentLesson.title}</h1>
                                            <CompletionBadge
                                                completed={isCurrentLessonCompleted}
                                                onClick={handleToggleCompletion}
                                            />
                                        </div>

                                        <div className="mt-8 border-t border-[#b39f7d]/30 pt-4">
                                            <CourseProgress courseId={courseId || ""} className="mb-6" />

                                            <div className="flex justify-between items-center">
                                                <div className="flex gap-4">
                                                    {previousLesson && (
                                                        <button
                                                            className="inline-flex items-center bg-[#f8f3e3] text-[#6b4c35] hover:bg-[#e6d1a7] px-4 py-2 rounded-lg border-2 border-[#b39f7d] transition-colors"
                                                            onClick={() => navigateToLesson(previousLesson.id)}
                                                        >
                                                            <ArrowLeft className="h-4 w-4 mr-2" />
                                                            Previous
                                                        </button>
                                                    )}

                                                    {nextLesson && (
                                                        <button
                                                            className="inline-flex items-center bg-[#8ab77d] text-white hover:bg-[#5e8c61] px-4 py-2 rounded-lg border-2 border-[#5e8c61] transition-colors"
                                                            onClick={() => navigateToLesson(nextLesson.id)}
                                                        >
                                                            Next
                                                            <ArrowRight className="h-4 w-4 ml-2" />
                                                        </button>
                                                    )}
                                                </div>

                                                {/* External link */}
                                                <a
                                                    href={currentLesson.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-[#5e8c61] hover:text-[#8ab77d] transition-colors text-sm"
                                                >
                                                    Watch on YouTube
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <div className="p-6 text-center">
                                    <p className="text-[#6b4c35]">No lesson selected.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}