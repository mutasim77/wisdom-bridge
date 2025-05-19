import { Check } from "lucide-react";

interface CompletionBadgeProps {
    completed: boolean;
    onClick?: () => void;
    className?: string;
}

export default function CompletionBadge({
    completed,
    onClick,
    className = "",
}: CompletionBadgeProps) {
    return (
        <button
            onClick={onClick}
            className={`
        inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium
        ${completed
                    ? "bg-[#8ab77d]/20 text-[#5e8c61] border border-[#5e8c61]"
                    : "bg-[#e6d1a7]/20 text-[#b39f7d] border border-[#b39f7d]"
                }
        transition-colors duration-300
        ${onClick ? "cursor-pointer hover:opacity-80" : ""}
        ${className}
      `}
        >
            {completed ? (
                <>
                    <Check className="h-3 w-3 mr-1" />
                    Completed
                </>
            ) : (
                "Mark as Completed"
            )}
        </button>
    );
}