import { progressTracker } from "@/services/progressTracker";
import ProgressBar from "./ProgressBar";

interface ChapterProgressProps {
    courseId: string;
    chapterId: string;
    className?: string;
}

export default function ChapterProgress({
    courseId,
    chapterId,
    className = ""
}: ChapterProgressProps) {
    const { completed, total, percentage } = progressTracker.getChapterProgress(courseId, chapterId);

    return (
        <div className={`${className}`}>
            <div className="mb-2 flex items-center justify-between">
                <h3 className="text-sm font-medium text-[#6b4c35]">Chapter Progress</h3>
                <span className="text-xs text-[#6b4c35]/70">
                    {completed}/{total} lessons
                </span>
            </div>
            <ProgressBar percentage={percentage} size="sm" />
        </div>
    );
}