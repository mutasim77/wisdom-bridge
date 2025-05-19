import { progressTracker } from "./progressTracker";
import { coursesData } from "@/data/courses_data";

export interface Badge {
    id: string;
    name: string;
    description: string;
    icon: string;
    unlockedAt: string | null;
    criteria: string;
}

export interface CourseBadge extends Badge {
    courseId: string;
    courseTitle: string;
}

const BADGES_KEY = 'wisdom_bridge_badges';

export const BADGE_TYPES = {
    COURSE_COMPLETED: 'course_completed',
    STREAK: 'streak',
    MILESTONES: 'milestones'
}

const DEFAULT_BADGES: Badge[] = [
    {
        id: 'first_lesson',
        name: 'First Step',
        description: 'Completed your first lesson',
        icon: 'BookOpen',
        unlockedAt: null,
        criteria: 'Complete any lesson'
    },
    {
        id: 'five_lessons',
        name: 'Getting Started',
        description: 'Completed 5 lessons',
        icon: 'Milestone',
        unlockedAt: null,
        criteria: 'Complete any 5 lessons'
    },
    {
        id: 'ten_lessons',
        name: 'Consistent Learner',
        description: 'Completed 10 lessons',
        icon: 'Award',
        unlockedAt: null,
        criteria: 'Complete any 10 lessons'
    },
    {
        id: 'twenty_five_lessons',
        name: 'Knowledge Seeker',
        description: 'Completed 25 lessons',
        icon: 'Lightbulb',
        unlockedAt: null,
        criteria: 'Complete any 25 lessons'
    },
    {
        id: 'fifty_lessons',
        name: 'Scholar',
        description: 'Completed 50 lessons',
        icon: 'GraduationCap',
        unlockedAt: null,
        criteria: 'Complete any 50 lessons'
    },
    {
        id: 'hundred_lessons',
        name: 'Master Learner',
        description: 'Completed 100 lessons',
        icon: 'Trophy',
        unlockedAt: null,
        criteria: 'Complete any 100 lessons'
    }
]

export const badgeService = {
    getBadges(): Badge[] {
        try {
            const data = localStorage.getItem(BADGES_KEY);
            const savedBadges: Badge[] = data ? JSON.parse(data) : DEFAULT_BADGES;

            const courseBadges = this.generateCourseBadges();

            return [...savedBadges, ...courseBadges.filter(cb =>
                !savedBadges.some(sb => sb.id === cb.id)
            )];
        } catch (error) {
            console.error(error);
            return DEFAULT_BADGES;
        }
    },

    saveBadges(badges: Badge[]): void {
        try {
            localStorage.setItem(BADGES_KEY, JSON.stringify(badges));
        } catch (error) {
            console.error('Failed to save badges:', error);
        }
    },

    generateCourseBadges(): CourseBadge[] {
        const courseBadges: CourseBadge[] = [];

        coursesData.forEach(course => {
            courseBadges.push({
                id: `course_${course.id}_complete`,
                name: `${course.title} Master`,
                description: `Completed the entire ${course.title} course`,
                icon: 'Award',
                unlockedAt: null,
                criteria: `Complete all lessons in ${course.title}`,
                courseId: course.id,
                courseTitle: course.title
            });
        });

        return courseBadges;
    },

    getUnlockedBadges(): Badge[] {
        return this.getBadges().filter(badge => badge.unlockedAt !== null);
    },

    getLockedBadges(): Badge[] {
        return this.getBadges().filter(badge => badge.unlockedAt === null);
    },

    unlockBadge(badgeId: string): Badge | null {
        const badges = this.getBadges();
        const badgeIndex = badges.findIndex(b => b.id === badgeId);

        if (badgeIndex === -1) return null;

        badges[badgeIndex].unlockedAt = new Date().toISOString();
        this.saveBadges(badges);

        return badges[badgeIndex];
    },

    checkAndUpdateBadges(): Badge[] {
        const progress = progressTracker.getProgress();
        const completedLessonsCount = Object.keys(progress.completedLessons).length;
        const badges = this.getBadges();
        const unlockedBadges: Badge[] = [];

        if (completedLessonsCount >= 1) {
            const firstLessonBadge = badges.find(b => b.id === 'first_lesson');
            if (firstLessonBadge && !firstLessonBadge.unlockedAt) {
                firstLessonBadge.unlockedAt = new Date().toISOString();
                unlockedBadges.push(firstLessonBadge);
            }
        }

        if (completedLessonsCount >= 5) {
            const fiveLessonsBadge = badges.find(b => b.id === 'five_lessons');
            if (fiveLessonsBadge && !fiveLessonsBadge.unlockedAt) {
                fiveLessonsBadge.unlockedAt = new Date().toISOString();
                unlockedBadges.push(fiveLessonsBadge);
            }
        }

        if (completedLessonsCount >= 10) {
            const tenLessonsBadge = badges.find(b => b.id === 'ten_lessons');
            if (tenLessonsBadge && !tenLessonsBadge.unlockedAt) {
                tenLessonsBadge.unlockedAt = new Date().toISOString();
                unlockedBadges.push(tenLessonsBadge);
            }
        }

        if (completedLessonsCount >= 25) {
            const twentyFiveLessonsBadge = badges.find(b => b.id === 'twenty_five_lessons');
            if (twentyFiveLessonsBadge && !twentyFiveLessonsBadge.unlockedAt) {
                twentyFiveLessonsBadge.unlockedAt = new Date().toISOString();
                unlockedBadges.push(twentyFiveLessonsBadge);
            }
        }

        if (completedLessonsCount >= 50) {
            const fiftyLessonsBadge = badges.find(b => b.id === 'fifty_lessons');
            if (fiftyLessonsBadge && !fiftyLessonsBadge.unlockedAt) {
                fiftyLessonsBadge.unlockedAt = new Date().toISOString();
                unlockedBadges.push(fiftyLessonsBadge);
            }
        }

        if (completedLessonsCount >= 100) {
            const hundredLessonsBadge = badges.find(b => b.id === 'hundred_lessons');
            if (hundredLessonsBadge && !hundredLessonsBadge.unlockedAt) {
                hundredLessonsBadge.unlockedAt = new Date().toISOString();
                unlockedBadges.push(hundredLessonsBadge);
            }
        }

        // Check course completion badges
        coursesData.forEach(course => {
            const courseProgress = progressTracker.getCourseProgress(course.id);
            if (courseProgress.percentage === 100) {
                const courseBadgeId = `course_${course.id}_complete`;
                const courseBadge = badges.find(b => b.id === courseBadgeId);

                if (courseBadge && !courseBadge.unlockedAt) {
                    courseBadge.unlockedAt = new Date().toISOString();
                    unlockedBadges.push(courseBadge);
                }
            }
        });

        if (unlockedBadges.length > 0) {
            this.saveBadges(badges);
        }

        return unlockedBadges;
    },

    resetBadges(): void {
        localStorage.removeItem(BADGES_KEY);
    }
}