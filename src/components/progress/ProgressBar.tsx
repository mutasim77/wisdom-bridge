interface ProgressBarProps {
    percentage: number;
    size?: "sm" | "md" | "lg";
    showPercentage?: boolean;
    className?: string;
}

export default function ProgressBar({
    percentage,
    size = "md",
    showPercentage = true,
    className = "",
}: ProgressBarProps) {
    const heights = {
        sm: "h-2",
        md: "h-3",
        lg: "h-4",
    };

    const textSizes = {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base",
    };

    return (
        <div className={`w-full ${className}`}>
            <div className="flex justify-between items-center mb-1">
                {showPercentage && (
                    <div className={`text-[#6b4c35] font-medium ${textSizes[size]}`}>
                        {percentage}% Complete
                    </div>
                )}
            </div>
            <div className={`w-full bg-[#e6d1a7] rounded-full overflow-hidden ${heights[size]}`}>
                <div
                    className="bg-gradient-to-r from-[#8ab77d] to-[#5e8c61] h-full rounded-full transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    );
}