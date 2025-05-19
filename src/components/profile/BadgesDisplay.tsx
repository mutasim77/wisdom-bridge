import React, { useState } from "react";
import { Award, LucideIcon, BookOpen, GraduationCap, CheckCircle, Trophy, Milestone, Lightbulb } from "lucide-react";
import { Badge } from "@/services/badgeService";

interface BadgesDisplayProps {
    unlockedBadges: Badge[];
    lockedBadges: Badge[];
}

const getBadgeIcon = (iconName: string): React.ReactNode => {
    const icons: Record<string, LucideIcon> = {
        Award,
        BookOpen,
        GraduationCap,
        Trophy,
        Milestone,
        Lightbulb
    };

    const Icon = icons[iconName as keyof typeof icons] || Award;
    return <Icon className="w-full h-full" />;
}

export const BadgesDisplay: React.FC<BadgesDisplayProps> = ({
    unlockedBadges,
    lockedBadges
}) => {
    const [activeTab, setActiveTab] = useState<'earned' | 'locked'>('earned');

    const formatDate = (dateString: string | null) => {
        if (!dateString) return "";
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    };

    return (
        <div className="bg-[#f5e9c9] border-2 border-[#b39f7d] rounded-xl shadow-md overflow-hidden">
            <div className="border-b-2 border-[#b39f7d]">
                <div className="flex">
                    <button
                        className={`px-4 py-3 text-[#6b4c35] font-medium flex-1 text-center ${activeTab === 'earned' ? 'bg-[#e6d1a7]/50 border-b-2 border-[#8ab77d]' : ''
                            }`}
                        onClick={() => setActiveTab('earned')}
                    >
                        Earned Badges ({unlockedBadges.length})
                    </button>
                    <button
                        className={`px-4 py-3 text-[#6b4c35] font-medium flex-1 text-center ${activeTab === 'locked' ? 'bg-[#e6d1a7]/50 border-b-2 border-[#8ab77d]' : ''
                            }`}
                        onClick={() => setActiveTab('locked')}
                    >
                        Available Badges ({lockedBadges.length})
                    </button>
                </div>
            </div>

            <div className="p-6">
                {activeTab === 'earned' && (
                    <>
                        {unlockedBadges.length === 0 ? (
                            <div className="text-center py-8">
                                <div className="inline-block bg-[#e6d1a7]/30 rounded-full p-6 mb-4">
                                    <Trophy className="h-12 w-12 text-[#b39f7d]" />
                                </div>
                                <h3 className="text-lg font-medium text-[#6b4c35] mb-2">No Badges Yet</h3>
                                <p className="text-[#6b4c35]/70 mb-4">
                                    Complete lessons and courses to earn badges.
                                </p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {unlockedBadges.map(badge => (
                                    <div
                                        key={badge.id}
                                        className="bg-white rounded-lg border-2 border-[#b39f7d] p-4 flex flex-col items-center text-center hover:shadow-md transition-shadow"
                                    >
                                        <div className="w-16 h-16 rounded-full bg-[#8ab77d]/20 p-3 mb-3 border-2 border-[#8ab77d]">
                                            {getBadgeIcon(badge.icon)}
                                        </div>
                                        <h3 className="text-[#6b4c35] font-semibold mb-1">{badge.name}</h3>
                                        <p className="text-[#6b4c35]/70 text-sm mb-2">{badge.description}</p>
                                        <div className="mt-auto pt-2 text-xs text-[#5e8c61] flex items-center">
                                            <CheckCircle className="w-3 h-3 mr-1" />
                                            Earned on {formatDate(badge.unlockedAt)}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </>
                )}

                {activeTab === 'locked' && (
                    <>
                        {lockedBadges.length === 0 ? (
                            <div className="text-center py-8">
                                <div className="inline-block bg-[#8ab77d]/20 rounded-full p-6 mb-4">
                                    <CheckCircle className="h-12 w-12 text-[#5e8c61]" />
                                </div>
                                <h3 className="text-lg font-medium text-[#6b4c35] mb-2">All Badges Earned!</h3>
                                <p className="text-[#6b4c35]/70">
                                    Congratulations! You've earned all available badges.
                                </p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {lockedBadges.map(badge => (
                                    <div
                                        key={badge.id}
                                        className="bg-white/60 rounded-lg border-2 border-[#b39f7d]/40 p-4 flex flex-col items-center text-center opacity-80"
                                    >
                                        <div className="w-16 h-16 rounded-full bg-[#e6d1a7]/30 p-3 mb-3 border-2 border-[#b39f7d]/30">
                                            {getBadgeIcon(badge.icon)}
                                        </div>
                                        <h3 className="text-[#6b4c35]/80 font-semibold mb-1">{badge.name}</h3>
                                        <p className="text-[#6b4c35]/60 text-sm mb-2">{badge.description}</p>
                                        <div className="mt-auto pt-2 text-xs text-[#6b4c35]/60 italic">
                                            {badge.criteria}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}