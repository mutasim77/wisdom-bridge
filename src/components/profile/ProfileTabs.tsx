import { Award, Cog, UserCircle } from "lucide-react";

interface ProfileTabsProps {
    activeTab: 'dashboard' | 'badges' | 'settings';
    onTabChange: (tab: 'dashboard' | 'badges' | 'settings') => void;
}

export const ProfileTabs: React.FC<ProfileTabsProps> = ({ activeTab, onTabChange }) => {
    return (
        <div className="bg-[#f5e9c9] border-2 border-[#b39f7d] rounded-xl shadow-md overflow-hidden mb-6">
            <div className="flex flex-wrap">
                <TabButton
                    isActive={activeTab === 'dashboard'}
                    onClick={() => onTabChange('dashboard')}
                    icon={<UserCircle className="h-5 w-5 mr-2" />}
                >
                    Dashboard
                </TabButton>
                <TabButton
                    isActive={activeTab === 'badges'}
                    onClick={() => onTabChange('badges')}
                    icon={<Award className="h-5 w-5 mr-2" />}
                >
                    Badges
                </TabButton>
                <TabButton
                    isActive={activeTab === 'settings'}
                    onClick={() => onTabChange('settings')}
                    icon={<Cog className="h-5 w-5 mr-2" />}
                >
                    Settings
                </TabButton>
            </div>
        </div>
    );
}

interface TabButtonProps {
    isActive: boolean;
    onClick: () => void;
    icon: React.ReactNode;
    children: React.ReactNode;
}

const TabButton: React.FC<TabButtonProps> = ({ isActive, onClick, icon, children }) => {
    return (
        <button
            className={`flex items-center px-6 py-4 text-[#6b4c35] font-medium transition-colors ${isActive
                ? 'bg-[#e6d1a7]/50 border-b-2 border-[#8ab77d]'
                : 'hover:bg-[#e6d1a7]/30'
                }`}
            onClick={onClick}
        >
            {icon}
            {children}
        </button>
    );
}