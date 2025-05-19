import { useState } from "react";
import { Button } from "@/components/ui/button";
import { UserProfile } from "@/services/userProfileService";

interface ProfileEditFormProps {
    profile: UserProfile;
    onSave: (updatedProfile: UserProfile) => void;
    onCancel: () => void;
}

export default function ProfileEditForm({
    profile,
    onSave,
    onCancel,
}: ProfileEditFormProps) {
    const [formData, setFormData] = useState({
        name: profile.name,
        email: profile.email,
        bio: profile.bio
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave({
            ...profile,
            ...formData
        });
    };

    return (
        <div className="bg-[#f5e9c9] border-2 border-[#b39f7d] rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-[#6b4c35] mb-4">Edit Profile</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-[#6b4c35] text-sm font-medium mb-1">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-white border-2 border-[#b39f7d] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8ab77d] focus:border-[#8ab77d]"
                        placeholder="Your name"
                        required
                    />
                </div>

                <div>
                    <label className="block text-[#6b4c35] text-sm font-medium mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-white border-2 border-[#b39f7d] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8ab77d] focus:border-[#8ab77d]"
                        placeholder="Your email"
                        required
                    />
                </div>

                <div>
                    <label className="block text-[#6b4c35] text-sm font-medium mb-1">Bio</label>
                    <textarea
                        name="bio"
                        value={formData.bio}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-white border-2 border-[#b39f7d] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8ab77d] focus:border-[#8ab77d] min-h-[100px]"
                        placeholder="Tell us about yourself and your learning goals"
                    />
                </div>

                <div className="flex gap-3 justify-end">
                    <Button
                        type="button"
                        onClick={onCancel}
                        className="bg-[#e6d1a7] hover:bg-[#d1b982] text-[#6b4c35] border-2 border-[#b39f7d]"
                    >
                        Cancel
                    </Button>
                    <Button
                        type="submit"
                        className="bg-[#8ab77d] hover:bg-[#5e8c61] text-white border-2 border-[#5e8c61]"
                    >
                        Save Changes
                    </Button>
                </div>
            </form>
        </div>
    );
}