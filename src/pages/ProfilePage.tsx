import { useState, useEffect } from "react";
import { userProfileService, UserProfile } from "@/services/userProfileService";
import { badgeService } from "@/services/badgeService";
import { progressTracker } from "@/services/progressTracker";
import { coursesData } from "@/data/courses_data";
import { WelcomeSetup } from "@/components/profile/WelcomeSetup";
import { ProfileTabs } from "@/components/profile/ProfileTabs";
import { BadgesDisplay } from "@/components/profile/BadgesDisplay";
import { LearningStats, ProfileSettings } from "@/components/profile/ProfileSettings";
import ProfileEditForm from "@/components/profile/ProfileEditForm";
import ProfileHeader from "@/components/profile/ProfileHeader";
import { Award } from "lucide-react";
import CourseProgressList from "@/components/profile/CourseProgressList";

export default function ProfilePage() {
    const [profile, setProfile] = useState<UserProfile>(userProfileService.getProfile());
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [hasProfile, setHasProfile] = useState<boolean>(userProfileService.hasProfile());
    const [activeTab, setActiveTab] = useState<'dashboard' | 'badges' | 'settings'>('dashboard');

    const [unlockedBadges, setUnlockedBadges] = useState(badgeService.getUnlockedBadges());
    const [lockedBadges, setLockedBadges] = useState(badgeService.getLockedBadges());

    const [progressStats, setProgressStats] = useState({
        completedLessons: 0,
        completedCourses: 0
    });

    useEffect(() => {
        const updateStats = () => {
            const progress = progressTracker.getProgress();
            const completedLessons = Object.keys(progress.completedLessons).length;

            let completedCourses = 0;
            coursesData.forEach(course => {
                const courseProgress = progressTracker.getCourseProgress(course.id);
                if (courseProgress.percentage === 100) {
                    completedCourses++;
                }
            });

            setProgressStats({
                completedLessons,
                completedCourses
            });

            const newlyUnlockedBadges = badgeService.checkAndUpdateBadges();
            if (newlyUnlockedBadges.length > 0) {
                setUnlockedBadges(badgeService.getUnlockedBadges());
                setLockedBadges(badgeService.getLockedBadges());
            }
        }

        updateStats();

        const handleStorageChange = () => {
            updateStats();
        }

        window.addEventListener('storage', handleStorageChange);
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        }
    }, []);

    const handleSaveProfile = (updatedProfile: UserProfile) => {
        userProfileService.saveProfile(updatedProfile);
        setProfile(updatedProfile);
        setIsEditing(false);
        setHasProfile(true);
    }

    const handleProfileReset = () => {
        window.dispatchEvent(new Event('storage'));

        setUnlockedBadges(badgeService.getUnlockedBadges());
        setLockedBadges(badgeService.getLockedBadges());
    }

    const handleSetupProfile = () => {
        setIsEditing(true);
    }

    if (!hasProfile && !isEditing) {
        return (
            <div className="py-10 px-4">
                <div className="container mx-auto max-w-6xl">
                    <WelcomeSetup onGetStarted={handleSetupProfile} />
                </div>
            </div>
        );
    }

    return (
        <div className="py-10 px-4">
            <div className="container mx-auto max-w-6xl">
                {isEditing ? (
                    <ProfileEditForm
                        profile={profile}
                        onSave={handleSaveProfile}
                        onCancel={() => setIsEditing(false)}
                    />
                ) : (
                    <ProfileHeader
                        profile={profile}
                        onEdit={() => setIsEditing(true)}
                    />
                )}

                {/* Stats and Content */}
                {!isEditing && (
                    <div className="mt-6">
                        <LearningStats
                            completedLessons={progressStats.completedLessons}
                            completedCourses={progressStats.completedCourses}
                            earnedBadges={unlockedBadges.length}
                        />

                        <ProfileTabs
                            activeTab={activeTab}
                            onTabChange={setActiveTab}
                        />

                        {activeTab === 'dashboard' && (
                            <div className="space-y-6">
                                {unlockedBadges.length > 0 && (
                                    <div className="bg-[#f5e9c9] border-2 border-[#b39f7d] rounded-xl shadow-md p-6">
                                        <div className="flex justify-between items-center mb-4">
                                            <h2 className="text-xl font-bold text-[#6b4c35]">Recent Badges</h2>
                                            <button
                                                className="text-[#5e8c61] hover:text-[#3d7b71] text-sm font-medium"
                                                onClick={() => setActiveTab('badges')}
                                            >
                                                View All
                                            </button>
                                        </div>

                                        <div className="flex flex-wrap gap-4">
                                            {unlockedBadges.slice(0, 3).map(badge => (
                                                <div
                                                    key={badge.id}
                                                    className="bg-white rounded-lg border border-[#b39f7d]/40 p-3 flex items-center"
                                                >
                                                    <div className="w-10 h-10 rounded-full bg-[#8ab77d]/20 p-2 mr-3 border border-[#8ab77d]">
                                                        <Award className="w-full h-full text-[#5e8c61]" />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-sm font-medium text-[#6b4c35]">{badge.name}</h3>
                                                        <p className="text-xs text-[#6b4c35]/70">{badge.description}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <CourseProgressList />
                            </div>
                        )}

                        {activeTab === 'badges' && (
                            <BadgesDisplay
                                unlockedBadges={unlockedBadges}
                                lockedBadges={lockedBadges}
                            />
                        )}

                        {activeTab === 'settings' && (
                            <ProfileSettings
                                profile={profile}
                                onUpdate={handleSaveProfile}
                                onReset={handleProfileReset}
                            />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}