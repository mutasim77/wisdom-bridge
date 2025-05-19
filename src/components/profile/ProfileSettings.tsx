import React, { useState } from "react";
import { UserProfile } from "@/services/userProfileService";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Trash2, Info } from "lucide-react";
import { progressTracker } from "@/services/progressTracker";
import { badgeService } from "@/services/badgeService";

interface ProfileSettingsProps {
    profile: UserProfile;
    onUpdate: (updatedProfile: UserProfile) => void;
    onReset: () => void;
}

export const ProfileSettings: React.FC<ProfileSettingsProps> = ({
    profile,
    onUpdate,
    onReset
}) => {
    const [preferences, setPreferences] = useState({
        darkMode: profile.preferences.darkMode,
        emailNotifications: profile.preferences.emailNotifications
    });

    const handleToggle = (field: keyof typeof preferences) => {
        const updatedPreferences = {
            ...preferences,
            [field]: !preferences[field]
        };

        setPreferences(updatedPreferences);

        onUpdate({
            ...profile,
            preferences: updatedPreferences
        });
    };

    const handleResetProgress = () => {
        if (window.confirm("Are you sure you want to reset all your learning progress? This will delete all course completion data and badges. This action cannot be undone.")) {
            progressTracker.clearAllProgress();
            badgeService.resetBadges();
            onReset();
        }
    };

    return (
        <div className="bg-[#f5e9c9] border-2 border-[#b39f7d] rounded-xl shadow-md overflow-hidden">
            <div className="p-4 border-b-2 border-[#b39f7d]">
                <h2 className="text-xl font-bold text-[#6b4c35]">Settings</h2>
            </div>

            <div className="p-6 space-y-6">
                {/* Preference Section */}
                <div>
                    <h3 className="text-lg font-medium text-[#6b4c35] mb-4">Preferences</h3>

                    <div className="space-y-4">
                        <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-[#b39f7d]/40">
                            <div>
                                <h4 className="font-medium text-[#6b4c35]">Dark Mode</h4>
                                <p className="text-sm text-[#6b4c35]/70">Toggle dark mode for the application</p>
                            </div>
                            <Switch
                                checked={preferences.darkMode}
                                onCheckedChange={() => handleToggle('darkMode')}
                                className="data-[state=checked]:bg-[#5e8c61]"
                            />
                        </div>

                        <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-[#b39f7d]/40">
                            <div>
                                <h4 className="font-medium text-[#6b4c35]">Email Notifications</h4>
                                <p className="text-sm text-[#6b4c35]/70">Receive updates about new courses</p>
                            </div>
                            <Switch
                                checked={preferences.emailNotifications}
                                onCheckedChange={() => handleToggle('emailNotifications')}
                                className="data-[state=checked]:bg-[#5e8c61]"
                            />
                        </div>
                    </div>
                </div>

                {/* Data Management Section */}
                <div>
                    <h3 className="text-lg font-medium text-[#6b4c35] mb-4">Data Management</h3>

                    <div className="bg-[#fff0e9] border border-[#e19e8e] rounded-lg p-4 mb-4">
                        <div className="flex">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#ffd6c9] flex items-center justify-center mr-3">
                                <Info className="w-4 h-4 text-[#b24934]" />
                            </div>
                            <div>
                                <h4 className="font-medium text-[#b24934] mb-1">Data Storage Notice</h4>
                                <p className="text-sm text-[#b24934]/80">
                                    All your profile information and progress data is stored locally in your browser.
                                    Clearing your browser data or using a different browser/device will reset your progress.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-[#b39f7d]/40">
                        <h4 className="font-medium text-[#6b4c35] mb-2">Reset Learning Progress</h4>
                        <p className="text-sm text-[#6b4c35]/70 mb-3">
                            This will delete all your course progress and earned badges. Your profile information will be kept.
                        </p>
                        <Button
                            onClick={handleResetProgress}
                            className="bg-[#e19e8e] hover:bg-[#c46954] text-white border-2 border-[#b24934] inline-flex items-center"
                        >
                            <Trash2 className="h-4 w-4 mr-2" />
                            Reset All Progress
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// src/components/profile/LearningStats.tsx
import { GraduationCap, Video, Award, Clock } from "lucide-react";

interface LearningStatsProps {
    completedLessons: number;
    completedCourses: number;
    earnedBadges: number;
}

export const LearningStats: React.FC<LearningStatsProps> = ({
    completedLessons,
    completedCourses,
    earnedBadges
}) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            <div className="bg-[#f5e9c9] border-2 border-[#b39f7d] rounded-xl p-4 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#d1e7a7]/40 flex items-center justify-center mb-2 border-2 border-[#8ab77d]">
                    <Video className="h-5 w-5 text-[#5e8c61]" />
                </div>
                <div className="text-2xl font-bold text-[#6b4c35]">{completedLessons}</div>
                <div className="text-xs text-[#6b4c35]/70">Lessons Completed</div>
            </div>

            <div className="bg-[#f5e9c9] border-2 border-[#b39f7d] rounded-xl p-4 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#a7d1c5]/40 flex items-center justify-center mb-2 border-2 border-[#5e9c90]">
                    <GraduationCap className="h-5 w-5 text-[#3d7b71]" />
                </div>
                <div className="text-2xl font-bold text-[#6b4c35]">{completedCourses}</div>
                <div className="text-xs text-[#6b4c35]/70">Courses Completed</div>
            </div>

            <div className="bg-[#f5e9c9] border-2 border-[#b39f7d] rounded-xl p-4 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#e6d1a7]/40 flex items-center justify-center mb-2 border-2 border-[#b39f7d]">
                    <Award className="h-5 w-5 text-[#8c7744]" />
                </div>
                <div className="text-2xl font-bold text-[#6b4c35]">{earnedBadges}</div>
                <div className="text-xs text-[#6b4c35]/70">Badges Earned</div>
            </div>

            <div className="bg-[#f5e9c9] border-2 border-[#b39f7d] rounded-xl p-4 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#d1a7c5]/40 flex items-center justify-center mb-2 border-2 border-[#9f7db3]">
                    <Clock className="h-5 w-5 text-[#7c4496]" />
                </div>
                <div className="text-2xl font-bold text-[#6b4c35]">∞</div>
                <div className="text-xs text-[#6b4c35]/70">Lifetime Access</div>
            </div>
        </div>
    );
};