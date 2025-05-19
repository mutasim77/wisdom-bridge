import { coursesData } from "@/data/courses_data";

export interface ProgressData {
    completedLessons: Record<string, boolean>;
}

const STORAGE_KEY = 'wisdom_bridge_progress';

export const progressTracker = {
    getProgress(): ProgressData {
        try {
            const data = localStorage.getItem(STORAGE_KEY);
            return data ? JSON.parse(data) : { completedLessons: {} };
        } catch (error) {
            console.error(error);
            return { completedLessons: {} };
        }
    },

    saveProgress(data: ProgressData): void {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        } catch (error) {
            console.error('Failed to save progress:', error);
        }
    },

    toggleLessonCompletion(lessonId: string): boolean {
        const progress = this.getProgress();
        const isCompleted = !!progress.completedLessons[lessonId];

        progress.completedLessons[lessonId] = !isCompleted;

        if (!progress.completedLessons[lessonId]) {
            delete progress.completedLessons[lessonId];
        }

        this.saveProgress(progress);
        return !isCompleted;
    },

    isLessonCompleted(lessonId: string): boolean {
        const progress = this.getProgress();
        return !!progress.completedLessons[lessonId];
    },

    getCourseProgress(courseId: string): { completed: number; total: number; percentage: number } {
        const progress = this.getProgress();
        const courseData = coursesData.find(c => c.id === courseId);

        if (!courseData) {
            return { completed: 0, total: 0, percentage: 0 };
        }

        let totalLessons = 0;
        let completedLessons = 0;

        courseData.chapters.forEach(chapter => {
            totalLessons += chapter.lessons.length;

            chapter.lessons.forEach(lesson => {
                if (progress.completedLessons[lesson.id]) {
                    completedLessons++;
                }
            });
        });

        const percentage = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

        return {
            completed: completedLessons,
            total: totalLessons,
            percentage
        };
    },

    getChapterProgress(courseId: string, chapterId: string): { completed: number; total: number; percentage: number } {
        const progress = this.getProgress();
        const courseData = coursesData.find(c => c.id === courseId);
        const chapterData = courseData?.chapters.find(ch => ch.id === chapterId);

        if (!chapterData) {
            return { completed: 0, total: 0, percentage: 0 };
        }

        const totalLessons = chapterData.lessons.length;
        let completedLessons = 0;

        chapterData.lessons.forEach(lesson => {
            if (progress.completedLessons[lesson.id]) {
                completedLessons++;
            }
        });

        const percentage = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

        return {
            completed: completedLessons,
            total: totalLessons,
            percentage
        };
    },

    clearAllProgress(): void {
        localStorage.removeItem(STORAGE_KEY);
    }
}