
import { Button } from "@/components/ui/button";
import { Award, GraduationCap, User } from "lucide-react";

interface WelcomeSetupProps {
    onGetStarted: () => void;
}

export const WelcomeSetup: React.FC<WelcomeSetupProps> = ({ onGetStarted }) => {
    return (
        <div className="bg-[#f5e9c9] border-2 border-[#b39f7d] rounded-xl shadow-md p-8 text-center">
            <div className="inline-block mb-6">
                <div className="w-24 h-24 rounded-full bg-[#8ab77d]/20 flex items-center justify-center border-4 border-[#8ab77d]">
                    <User className="w-14 h-14 text-[#5e8c61]" />
                </div>
            </div>

            <h1 className="text-3xl font-bold text-[#6b4c35] mb-4">Welcome to Your Learning Journey!</h1>

            <p className="text-[#6b4c35]/80 mb-6 max-w-lg mx-auto">
                Set up your profile to personalize your learning experience and track your progress across all courses.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-2xl mx-auto">
                <div className="bg-white rounded-lg p-4 border-2 border-[#b39f7d]/40">
                    <div className="w-12 h-12 rounded-full bg-[#a7d1c5]/30 flex items-center justify-center mx-auto mb-3">
                        <User className="w-6 h-6 text-[#5e8c61]" />
                    </div>
                    <h3 className="text-[#6b4c35] font-medium mb-2">Profile Setup</h3>
                    <p className="text-sm text-[#6b4c35]/70">Create your personalized learning profile</p>
                </div>

                <div className="bg-white rounded-lg p-4 border-2 border-[#b39f7d]/40">
                    <div className="w-12 h-12 rounded-full bg-[#a7d1c5]/30 flex items-center justify-center mx-auto mb-3">
                        <Award className="w-6 h-6 text-[#5e8c61]" />
                    </div>
                    <h3 className="text-[#6b4c35] font-medium mb-2">Earn Badges</h3>
                    <p className="text-sm text-[#6b4c35]/70">Track achievements as you learn</p>
                </div>

                <div className="bg-white rounded-lg p-4 border-2 border-[#b39f7d]/40">
                    <div className="w-12 h-12 rounded-full bg-[#a7d1c5]/30 flex items-center justify-center mx-auto mb-3">
                        <GraduationCap className="w-6 h-6 text-[#5e8c61]" />
                    </div>
                    <h3 className="text-[#6b4c35] font-medium mb-2">Monitor Progress</h3>
                    <p className="text-sm text-[#6b4c35]/70">See completion status of all courses</p>
                </div>
            </div>

            <Button
                onClick={onGetStarted}
                className="bg-[#8ab77d] hover:bg-[#5e8c61] text-white px-8 py-3 rounded-lg text-lg border-2 border-[#5e8c61] shadow-[0_4px_0_#5e8c61] hover:shadow-[0_2px_0_#5e8c61] hover:translate-y-[2px] active:shadow-none active:translate-y-[4px] transition-all"
            >
                Get Started
            </Button>
        </div>
    );
};