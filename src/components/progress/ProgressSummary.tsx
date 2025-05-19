import { progressTracker } from "@/services/progressTracker";

interface ProgressSummaryProps {
    courseId: string;
    className?: string;
}

export default function ProgressSummary({ courseId, className = "" }: ProgressSummaryProps) {
    const { completed, total, percentage } = progressTracker.getCourseProgress(courseId);

    const getStatusColor = (percent: number) => {
        if (percent === 0) return "text-[#b39f7d]";
        if (percent < 30) return "text-[#b39f7d]";
        if (percent < 70) return "text-[#8c7744]";
        if (percent < 100) return "text-[#5e8c61]";
        return "text-[#3d7b71]";
    };

    const getStatusText = (percent: number) => {
        if (percent === 0) return "Not Started";
        if (percent < 30) return "Just Beginning";
        if (percent < 70) return "Making Progress";
        if (percent < 100) return "Almost There";
        return "Completed";
    };

    const statusColor = getStatusColor(percentage);
    const statusText = getStatusText(percentage);

    return (
        <div className={`p-4 rounded-lg bg-[#f5e9c9] border-2 border-[#b39f7d] ${className}`}>
            <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg font-semibold text-[#6b4c35]">Your Progress</h2>
                <div className="text-2xl font-bold text-[#6b4c35]">{percentage}%</div>
            </div>

            <div className="w-full bg-[#e6d1a7] h-3 rounded-full overflow-hidden mb-3">
                <div
                    className="bg-gradient-to-r from-[#8ab77d] to-[#5e8c61] h-full rounded-full transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>

            <div className="flex justify-between items-center">
                <div>
                    <span className="text-xs text-[#6b4c35]/70">
                        {completed} of {total} lessons completed
                    </span>
                </div>
                <div className={`text-sm font-medium ${statusColor}`}>
                    {statusText}
                </div>
            </div>
        </div>
    );
};