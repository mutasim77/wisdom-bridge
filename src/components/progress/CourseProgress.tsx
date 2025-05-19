import { progressTracker } from "@/services/progressTracker";
import ProgressBar from "./ProgressBar";

interface CourseProgressProps {
    courseId: string;
    className?: string;
}

export default function CourseProgress({ courseId, className = "" }: CourseProgressProps) {
    const { completed, total, percentage } = progressTracker.getCourseProgress(courseId);

    return (
        <div className={`${className}`}>
            <div className="mb-2 flex items-center justify-between">
                <h3 className="text-sm font-medium text-[#6b4c35]">Course Progress</h3>
                <span className="text-xs text-[#6b4c35]/70">
                    {completed}/{total} lessons
                </span>
            </div>
            <ProgressBar percentage={percentage} />
        </div>
    );
}