import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

export default function FeaturedProjects() {
    return (
        <section id="lab" className="py-24 px-6 relative">
            <div className="max-w-6xl mx-auto">
                <RevealOnScroll>
                    <h2 className="text-3xl md:text-5xl font-black mb-24 text-center text-white tracking-tight leading-tight uppercase animate-float">Personal Projects</h2>
                </RevealOnScroll>

                <div className="flex flex-col gap-32">
                    {/* Project 1: News Aggregator */}
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <div className="flex-1 space-y-6">
                            <h3 className="text-2xl md:text-4xl font-bold text-white">News Aggregator Web Application</h3>
                            <p className="text-slate-400 leading-relaxed text-lg">
                                Developed a responsive news web application using React.js integrating News API to display real-time news updates. Implemented dynamic content rendering and category-based filtering using modern React concepts.
                            </p>
                            <div className="flex gap-4 pt-4">
                                <a href="#" className="flex items-center gap-2 text-sm font-semibold text-white bg-white/5 hover:bg-purple-600/20 border border-white/10 hover:border-purple-500/50 px-5 py-2.5 rounded-lg transition-all">
                                    <ExternalLink className="w-4 h-4" /> Live Demo
                                </a>
                                <a href="#" className="flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white px-5 py-2.5 hover:bg-white/5 rounded-lg transition-all">
                                    <Github className="w-4 h-4" /> Source
                                </a>
                            </div>
                        </div>
                        <div className="flex-1 relative w-full group">
                            {/* Large soft purple glow */}
                            <div className="absolute inset-0 bg-violet-600/20 blur-[100px] rounded-full group-hover:bg-purple-600/30 transition-colors duration-700 pointer-events-none" />
                            <div className="relative aspect-[4/3] w-full rounded-2xl bg-slate-900 border border-white/10 overflow-hidden shadow-2xl group-hover:-translate-y-2 transition-transform duration-500">
                                <img
                                    src="/news_app_ui.png"
                                    alt="News Aggregator UI"
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Project 2: College Web Portal */}
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
                        <div className="flex-1 space-y-6">
                            <h3 className="text-2xl md:text-4xl font-bold text-white">College Web Portal</h3>
                            <p className="text-slate-400 leading-relaxed text-lg">
                                Designed and developed a responsive college website using Bootstrap for modern UI and cross-device compatibility. Integrated basic JavaScript events for dynamic interactions and improved website usability.
                            </p>
                            <div className="flex gap-4 pt-4">
                                <a href="#" className="flex items-center gap-2 text-sm font-semibold text-white bg-white/5 hover:bg-purple-600/20 border border-white/10 hover:border-purple-500/50 px-5 py-2.5 rounded-lg transition-all">
                                    <ExternalLink className="w-4 h-4" /> Live Demo
                                </a>
                                <a href="#" className="flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white px-5 py-2.5 hover:bg-white/5 rounded-lg transition-all">
                                    <Github className="w-4 h-4" /> Source
                                </a>
                            </div>
                        </div>
                        <div className="flex-1 relative w-full group">
                            {/* Large soft purple glow */}
                            <div className="absolute inset-0 bg-purple-600/20 blur-[100px] rounded-full group-hover:bg-violet-600/30 transition-colors duration-700 pointer-events-none" />
                            <div className="relative aspect-[4/3] w-full rounded-2xl bg-slate-900 border border-white/10 overflow-hidden shadow-2xl group-hover:-translate-y-2 transition-transform duration-500">
                                <img
                                    src="/college_portal_ui.png"
                                    alt="College Portal UI"
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Project 3: Real-Time Chat App */}
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <div className="flex-1 space-y-6">
                            <h3 className="text-2xl md:text-4xl font-bold text-white">Real-Time Chat Application</h3>
                            <p className="text-slate-400 leading-relaxed text-lg">
                                Developed a real-time chat application using the MERN stack (MongoDB, Express.js, React.js, Node.js) enabling instant messaging between users. Implemented Socket.io for real-time communication and efficient message handling with dynamic UI updates.
                            </p>
                            <div className="flex gap-4 pt-4">
                                <a href="#" className="flex items-center gap-2 text-sm font-semibold text-white bg-white/5 hover:bg-purple-600/20 border border-white/10 hover:border-purple-500/50 px-5 py-2.5 rounded-lg transition-all">
                                    <ExternalLink className="w-4 h-4" /> Live Demo
                                </a>
                                <a href="#" className="flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white px-5 py-2.5 hover:bg-white/5 rounded-lg transition-all">
                                    <Github className="w-4 h-4" /> Source
                                </a>
                            </div>
                        </div>
                        <div className="flex-1 relative w-full group">
                            {/* Large soft purple glow */}
                            <div className="absolute inset-0 bg-violet-600/20 blur-[100px] rounded-full group-hover:bg-purple-600/30 transition-colors duration-700 pointer-events-none" />
                            <div className="relative aspect-[4/3] w-full rounded-2xl bg-slate-900 border border-white/10 overflow-hidden shadow-2xl group-hover:-translate-y-2 transition-transform duration-500">
                                <img
                                    src="/chat_app_ui.png"
                                    alt="Chat App UI"
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
