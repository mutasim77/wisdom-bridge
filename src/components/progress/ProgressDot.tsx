interface ProgressDotProps {
    completed: boolean;
    onClick?: () => void;
    size?: "sm" | "md" | "lg";
    className?: string;
}

export default function ProgressDot({
    completed,
    onClick,
    size = "md",
    className = "",
}: ProgressDotProps) {
    const sizes = {
        sm: "w-3 h-3",
        md: "w-4 h-4",
        lg: "w-5 h-5",
    };

    return (
        <div
            onClick={onClick}
            className={`
                ${sizes[size]} rounded-full 
                ${completed ? "bg-[#5e8c61] border-2 border-[#8ab77d]" : "bg-[#f8f3e3] border-2 border-[#b39f7d]"}
                ${onClick ? "cursor-pointer hover:opacity-80" : ""}
                transition-colors duration-300
                ${className}
            `}
        >
        </div>
    );
}