import { Code2 } from 'lucide-react';

export default function Navbar() {
    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50">
            <nav className="bg-slate-900/60 backdrop-blur-2xl border border-white/10 rounded-full px-6 md:px-8 py-3 flex items-center justify-between shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_20px_rgba(168,85,247,0.15)] transition-all duration-300">

                {/* Logo Section */}
                <div className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-violet-600 to-purple-500 p-[1px] shadow-[0_0_15px_rgba(139,92,246,0.4)] group-hover:shadow-[0_0_25px_rgba(139,92,246,0.7)] transition-shadow duration-300">
                        <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center relative z-10">
                            <Code2 className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                        </div>
                    </div>
                    <span className="text-xl font-bold tracking-wider text-slate-200 hidden sm:block">
                        AVINASH<span className="text-purple-500 text-2xl leading-none">.</span>
                    </span>
                </div>

                {/* Navigation Links - Pill Design */}
                <div className="hidden md:flex items-center gap-1 bg-slate-950/60 p-1.5 rounded-full border border-white/5 shadow-inner">
                    <a href="#home" className="px-5 py-2 text-sm font-semibold rounded-full text-white bg-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all">
                        Home
                    </a>
                    <a href="#experience" className="px-5 py-2 text-sm font-semibold rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                        Work
                    </a>
                    <a href="#lab" className="px-5 py-2 text-sm font-semibold rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                        Lab
                    </a>
                </div>

                {/* Action Button */}
                <div className="flex items-center">
                    <a href="mailto:hello@avinash.dev" className="text-xs md:text-sm font-bold tracking-widest text-white border border-purple-500/50 bg-purple-500/10 rounded-full px-5 md:px-6 py-2.5 hover:bg-purple-500 hover:text-white hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] transition-all duration-300">
                        CONTACT
                    </a>
                </div>

            </nav>
        </div>
    )
}
