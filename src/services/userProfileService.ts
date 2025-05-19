export interface UserProfile {
    name: string;
    email: string;
    bio: string;
    joinedDate: string;
    preferences: {
        darkMode: boolean;
        emailNotifications: boolean;
    };
}

const USER_PROFILE_KEY = 'wisdom_bridge_user_profile';

const DEFAULT_PROFILE: UserProfile = {
    name: '',
    email: '',
    bio: '',
    joinedDate: new Date().toISOString(),
    preferences: {
        darkMode: false,
        emailNotifications: true
    }
}

export const userProfileService = {
    getProfile(): UserProfile {
        try {
            const data = localStorage.getItem(USER_PROFILE_KEY);
            return data ? JSON.parse(data) : DEFAULT_PROFILE;
        } catch (error) {
            console.error(error);
            return DEFAULT_PROFILE;
        }
    },

    saveProfile(profile: UserProfile): void {
        try {
            localStorage.setItem(USER_PROFILE_KEY, JSON.stringify(profile));
        } catch (error) {
            console.error('Failed to save user profile:', error);
        }
    },

    updateProfile(updates: Partial<UserProfile>): UserProfile {
        const currentProfile = this.getProfile();
        const updatedProfile = { ...currentProfile, ...updates };
        this.saveProfile(updatedProfile);
        return updatedProfile;
    },

    hasProfile(): boolean {
        const profile = this.getProfile();
        return !!profile.name && !!profile.email;
    },

    clearProfile(): void {
        localStorage.removeItem(USER_PROFILE_KEY);
    }
}