import { Heart, Code, LucideShield, Database, Palette } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="container mx-auto py-10 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="bg-[#f5e9c9] p-8 rounded-xl border-2 border-[#b39f7d] shadow-md mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#6b4c35] mb-4 font-['Varela_Round',_sans-serif]">About Wisdom Bridge</h1>
                    <p className="text-lg text-[#6b4c35]/80 mb-6">
                        A personal project born from the love of learning and the desire to create a distraction-free educational platform.
                    </p>
                    <div className="flex items-center text-[#5e8c61]">
                        <Heart className="h-5 w-5 mr-2" />
                        <span className="font-medium">Built with passion for education</span>
                    </div>
                </div>

                <div className="bg-[#f5e9c9] p-8 rounded-xl border-2 border-[#b39f7d] shadow-md mb-8">
                    <h2 className="text-2xl font-bold text-[#6b4c35] mb-4">The Origin Story</h2>
                    <div className="space-y-4 text-[#6b4c35]/90">
                        <p>
                            Wisdom Bridge started as a personal solution to a common problem. While reviewing calculus and organic chemistry, I found myself constantly distracted by YouTube's algorithms and recommendations. The educational content was excellent, but the platform wasn't designed for focused learning.
                        </p>
                        <p>
                            I wanted to revisit lectures from channels like Organic Chemistry Tutor, but found myself losing track of which videos I had watched and where I left off in the course progression. YouTube doesn't provide a structured way to follow educational content as a cohesive course.
                        </p>
                        <p>
                            That's when the idea for Wisdom Bridge was born — a platform that takes the excellent educational content available on YouTube and organizes it into structured, distraction-free courses with progress tracking and a clean interface.
                        </p>
                        <p>
                            What started as a personal project to enhance my own learning experience has evolved into something I hope others will find valuable in their educational journeys.
                        </p>
                    </div>
                </div>

                {/* How It Works */}
                <div className="bg-[#f5e9c9] p-8 rounded-xl border-2 border-[#b39f7d] shadow-md mb-8">
                    <h2 className="text-2xl font-bold text-[#6b4c35] mb-4">How Wisdom Bridge Works</h2>
                    <div className="space-y-4 text-[#6b4c35]/90">
                        <p>
                            Wisdom Bridge curates high-quality educational content from YouTube and organizes it into structured courses. Each course contains chapters and lessons that follow a logical progression, making it easier to learn complex subjects.
                        </p>
                        <p>
                            All videos remain the property of their original creators, and we link directly to their YouTube channels. We simply provide a better interface for consuming their content in a learning-focused environment.
                        </p>
                        <p>
                            Some key features that enhance your learning experience:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Structured course organization with chapters and lessons</li>
                            <li>Progress tracking to remember completed lessons</li>
                            <li>Achievement badges to motivate your learning journey</li>
                            <li>Distraction-free video player without endless recommendations</li>
                            <li>Beautiful, calm interface designed specifically for learning</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-[#f5e9c9] p-8 rounded-xl border-2 border-[#b39f7d] shadow-md mb-8">
                    <h2 className="text-2xl font-bold text-[#6b4c35] mb-4">Our Tech Stack</h2>
                    <div className="mb-4 text-[#6b4c35]/90">
                        <p>
                            Wisdom Bridge is built with modern web technologies, focusing on performance, accessibility, and user experience:
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="flex p-3 bg-white rounded-lg border border-[#b39f7d]/40">
                            <div className="mr-3 w-10 h-10 flex items-center justify-center rounded-full bg-[#e6d1a7]/30">
                                <Code className="w-5 h-5 text-[#6b4c35]" />
                            </div>
                            <div>
                                <h3 className="font-medium text-[#6b4c35]">React & TypeScript</h3>
                                <p className="text-sm text-[#6b4c35]/70">For a robust, type-safe frontend application</p>
                            </div>
                        </div>
                        <div className="flex p-3 bg-white rounded-lg border border-[#b39f7d]/40">
                            <div className="mr-3 w-10 h-10 flex items-center justify-center rounded-full bg-[#e6d1a7]/30">
                                <Palette className="w-5 h-5 text-[#6b4c35]" />
                            </div>
                            <div>
                                <h3 className="font-medium text-[#6b4c35]">Tailwind CSS</h3>
                                <p className="text-sm text-[#6b4c35]/70">For beautiful, responsive styling</p>
                            </div>
                        </div>
                        <div className="flex p-3 bg-white rounded-lg border border-[#b39f7d]/40">
                            <div className="mr-3 w-10 h-10 flex items-center justify-center rounded-full bg-[#e6d1a7]/30">
                                <svg className="w-5 h-5 text-[#6b4c35]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 22V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M19 7L12 14L5 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-medium text-[#6b4c35]">shadcn/ui</h3>
                                <p className="text-sm text-[#6b4c35]/70">For accessible, customizable UI components</p>
                            </div>
                        </div>
                        <div className="flex p-3 bg-white rounded-lg border border-[#b39f7d]/40">
                            <div className="mr-3 w-10 h-10 flex items-center justify-center rounded-full bg-[#e6d1a7]/30">
                                <Database className="w-5 h-5 text-[#6b4c35]" />
                            </div>
                            <div>
                                <h3 className="font-medium text-[#6b4c35]">LocalStorage</h3>
                                <p className="text-sm text-[#6b4c35]/70">For client-side data persistence</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-[#f5e9c9] p-8 rounded-xl border-2 border-[#b39f7d] shadow-md mb-8">
                    <h2 className="text-2xl font-bold text-[#6b4c35] mb-4">Your Privacy Matters</h2>
                    <div className="flex items-start mb-4">
                        <div className="mr-4 flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-[#8ab77d]/20 border-2 border-[#5e8c61]">
                            <LucideShield className="w-6 h-6 text-[#5e8c61]" />
                        </div>
                        <div className="text-[#6b4c35]/90 space-y-3">
                            <p>
                                <strong>Wisdom Bridge respects your privacy completely.</strong> We don't use cookies, we don't collect analytics, and we don't track your usage.
                            </p>
                            <p>
                                All your profile information and progress data is stored exclusively in your browser's localStorage. This means:
                            </p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>No data is ever sent to any server</li>
                                <li>Your learning progress stays private on your device</li>
                                <li>No account creation or login required</li>
                                <li>No personal information is collected</li>
                            </ul>
                            <p>
                                This approach gives you complete control over your data, though it does mean your progress won't sync between devices. We believe this is a fair trade-off for maintaining absolute privacy.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}