import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { Menu, X, User } from "lucide-react";
import { progressTracker } from "@/services/progressTracker";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const goToProfile = () => {
        navigate('/profile');
        setIsMenuOpen(false);
    };

    const progress = progressTracker.getProgress();
    const hasProgress = Object.keys(progress.completedLessons).length > 0;

    return (
        <header className="sticky top-0 z-50 py-3 px-4 backdrop-blur-md bg-[#a7d1c5]/70">
            <div className="max-w-6xl mx-auto">
                <div className="bg-[#f5e9c9] border-2 border-[#b39f7d] rounded-xl shadow-md">
                    <div className="px-4 py-2 flex items-center justify-between">
                        <Link to="/" className="group flex-shrink-0">
                            <div className="flex items-center">
                                <div className="w-8 h-8 mr-2">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                                        <path
                                            d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"
                                            fill="#5e8c61"
                                            stroke="#6b4c35"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"
                                            stroke="#6b4c35"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <span className="text-xl font-bold text-[#6b4c35] font-['Varela_Round',_sans-serif]">
                                    Wisdom Bridge
                                </span>
                            </div>
                        </Link>

                        <nav className="hidden md:flex items-center space-x-1">
                            <NavLink
                                to="/"
                                isActive={location.pathname === '/'}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/courses"
                                isActive={location.pathname === '/courses' || location.pathname.startsWith('/courses/')}
                            >
                                Courses
                            </NavLink>
                            <NavLink
                                to="/about"
                                isActive={location.pathname === '/about'}
                            >
                                About
                            </NavLink>
                            <NavLink
                                to="/profile"
                                isActive={location.pathname === '/profile'}
                            >
                                <div className="relative">
                                    <User className="h-5 w-5 mr-1" />
                                    {hasProgress && location.pathname !== '/profile' && (
                                        <span className="absolute -top-1 -right-1 flex h-3 w-3">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5e8c61] opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#5e8c61]"></span>
                                        </span>
                                    )}
                                </div>
                            </NavLink>
                        </nav>

                        <div className="flex items-center md:hidden">
                            <button
                                className="relative mr-2 p-2 rounded-full bg-[#f8f3e3] hover:bg-[#e6d1a7] border-2 border-[#b39f7d] transition-colors"
                                onClick={goToProfile}
                                aria-label="Go to Profile"
                            >
                                <User className="h-5 w-5 text-[#6b4c35]" />
                                {hasProgress && location.pathname !== '/profile' && (
                                    <span className="absolute top-0 right-0 flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5e8c61] opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#5e8c61]"></span>
                                    </span>
                                )}
                            </button>

                            <button
                                className="rounded-lg p-2 hover:bg-[#e6d1a7] transition-colors"
                                onClick={toggleMenu}
                                aria-label="Toggle menu"
                            >
                                {isMenuOpen ? (
                                    <X className="h-6 w-6 text-[#6b4c35]" />
                                ) : (
                                    <Menu className="h-6 w-6 text-[#6b4c35]" />
                                )}
                            </button>
                        </div>
                    </div>

                    {isMenuOpen && (
                        <div className="md:hidden border-t-2 border-[#b39f7d]">
                            <nav className="flex flex-col p-4 space-y-2">
                                <MobileNavLink
                                    to="/"
                                    isActive={location.pathname === '/'}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Home
                                </MobileNavLink>
                                <MobileNavLink
                                    to="/courses"
                                    isActive={location.pathname === '/courses' || location.pathname.startsWith('/courses/')}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Courses
                                </MobileNavLink>
                                <MobileNavLink
                                    to="/about"
                                    isActive={location.pathname === '/about'}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    About
                                </MobileNavLink>
                                <MobileNavLink
                                    to="/profile"
                                    isActive={location.pathname === '/profile'}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Profile
                                </MobileNavLink>
                            </nav>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

interface NavLinkProps {
    to: string;
    children: React.ReactNode;
    isActive: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, isActive }) => {
    return (
        <Link
            to={to}
            className={`relative px-3 py-2 text-[#6b4c35] font-medium rounded-lg hover:bg-[#e6d1a7] transition-colors group ${isActive ? 'bg-[#e6d1a7]/50' : ''}`}
        >
            <span className="flex items-center">{children}</span>
            <span className={`absolute bottom-1 left-3 right-3 h-0.5 bg-[#5e8c61] transform ${isActive ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100 transition-transform origin-left duration-300`}></span>
        </Link>
    );
}

interface MobileNavLinkProps {
    to: string;
    isActive: boolean;
    onClick: () => void;
    children: React.ReactNode;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ to, isActive, onClick, children }) => {
    return (
        <Link
            to={to}
            className={`w-full px-3 py-2 text-[#6b4c35] font-medium rounded-lg hover:bg-[#e6d1a7] transition-colors flex items-center ${isActive ? 'bg-[#e6d1a7]/50' : ''}`}
            onClick={onClick}
        >
            {children}
        </Link>
    );
}