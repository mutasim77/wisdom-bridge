import { UserProfile } from "@/services/userProfileService";
import { GraduationCap, Mail, Calendar, Edit, User } from "lucide-react";

interface ProfileHeaderProps {
    profile: UserProfile;
    onEdit: () => void;
}

export default function ProfileHeader({ profile, onEdit }: ProfileHeaderProps) {
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    return (
        <div className="bg-[#f5e9c9] border-2 border-[#b39f7d] rounded-xl shadow-md p-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="flex-shrink-0">
                    <div className="relative">
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#e6d1a7] border-4 border-[#b39f7d] flex items-center justify-center overflow-hidden">
                            <User className="w-16 h-16 md:w-20 md:h-20 text-[#6b4c35]" />
                        </div>
                        <button
                            onClick={onEdit}
                            className="absolute bottom-0 right-0 bg-[#8ab77d] text-white p-2 rounded-full border-2 border-[#5e8c61] hover:bg-[#5e8c61] transition-colors"
                        >
                            <Edit className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                <div className="flex-grow text-center md:text-left">
                    <h1 className="text-2xl md:text-3xl font-bold text-[#6b4c35]">
                        {profile.name || "Learning Enthusiast"}
                    </h1>

                    {profile.bio && (
                        <p className="text-[#6b4c35]/80 mt-2 max-w-lg">
                            {profile.bio}
                        </p>
                    )}

                    <div className="mt-4 flex flex-wrap gap-3 justify-center md:justify-start">
                        {profile.email && (
                            <div className="flex items-center text-sm text-[#6b4c35]/70">
                                <Mail className="w-4 h-4 mr-1" />
                                <span>{profile.email}</span>
                            </div>
                        )}

                        <div className="flex items-center text-sm text-[#6b4c35]/70">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span>Joined {formatDate(profile.joinedDate)}</span>
                        </div>

                        <div className="flex items-center text-sm text-[#6b4c35]/70">
                            <GraduationCap className="w-4 h-4 mr-1" />
                            <span>Lifelong Learner</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}