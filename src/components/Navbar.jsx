import { Code2, Menu, X, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useEffect, useState } from 'react';

export default function Navbar() {
    const location = useLocation();
    const [activeSection, setActiveSection] = useState('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        if (location.pathname === '/learn') {
            setActiveSection('learn');
        } else if (location.hash === '#experience') {
            setActiveSection('experience');
        } else if (location.hash === '#lab') {
            setActiveSection('lab');
        } else {
            setActiveSection('home');
        }
        // Always close mobile menu when route/hash changes
        setIsMobileMenuOpen(false);
    }, [location]);

    const getLinkClasses = (section, isMobile = false) => {
        const baseClasses = `font-semibold transition-all ${isMobile ? 'block px-4 py-3 rounded-xl text-center w-full' : 'px-5 py-2 text-sm rounded-full'}`;

        if (section === 'learn') {
            const activeLearnClasses = "text-white bg-gradient-to-r from-cyan-500/20 to-blue-500/20 shadow-[0_0_15px_rgba(6,182,212,0.4)] border border-cyan-500/30";
            const inactiveLearnClasses = "text-cyan-400 hover:text-white hover:bg-cyan-500/20 border border-cyan-500/30 shadow-[0_0_10px_rgba(6,182,212,0.15)]";
            return `${baseClasses} ${activeSection === section ? activeLearnClasses : inactiveLearnClasses}`;
        }

        const activeClasses = "text-white bg-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.3)] border border-purple-500/20";
        const inactiveClasses = "text-slate-400 hover:text-white hover:bg-white/10 border border-transparent";

        return `${baseClasses} ${activeSection === section ? activeClasses : inactiveClasses}`;
    };

    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50">
            <nav className="relative z-50 bg-slate-900/60 backdrop-blur-2xl border border-white/10 rounded-full px-6 md:px-8 py-3 flex items-center justify-between shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_20px_rgba(168,85,247,0.15)] transition-all duration-300">

                {/* Interactive Physics Logo Section */}
                <Link to="/" onClick={() => setActiveSection('home')} className="flex items-center gap-2 lg:gap-3 cursor-pointer group">
                    {/* The Icon Container with Spring Physics */}
                    <div className="relative w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 p-[1px] shadow-[0_0_15px_rgba(168,85,247,0.3)] group-hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] group-active:shadow-[0_0_10px_rgba(236,72,153,0.8)] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-2 group-hover:rotate-12 group-active:translate-y-1">
                        <div className="w-full h-full bg-slate-950/90 backdrop-blur-md rounded-xl flex items-center justify-center relative z-10 overflow-hidden transform transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:rotate-180 group-active:scale-75 group-active:rotate-[360deg] group-active:bg-slate-900">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <Code2 className="w-4 h-4 md:w-5 md:h-5 text-cyan-400 group-hover:text-pink-300 transition-colors duration-500 relative z-20" />
                        </div>
                    </div>

                    {/* The Text Section */}
                    <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold tracking-tight text-slate-100 flex items-baseline">
                        <span className="inline-block transition-all duration-300 relative bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300 group-hover:from-cyan-400 group-hover:via-purple-400 group-hover:to-pink-500">
                            CodingVibes<span className="font-light text-xs sm:text-sm md:text-base opacity-70 transition-opacity duration-500 text-slate-300 group-hover:text-transparent">With</span>Avinash

                            {/* Hidden glow that fades in underneath the text */}
                            <span className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-700 rounded-full -z-10"></span>
                        </span>

                        {/* Bouncing Dot */}
                        <span className="text-cyan-400 text-lg sm:text-xl md:text-2xl leading-none animate-bounce inline-block ml-0.5 group-hover:text-pink-500 transition-colors duration-500 transform group-hover:translate-y-[-2px] group-active:translate-y-[4px]">.</span>
                    </span>
                </Link>

                {/* Desktop Navigation Links - Premium Learn Button */}
                <div className="hidden md:flex items-center">
                    <Link to="/learn" onClick={() => {
                        setActiveSection('learn');
                        window.scrollTo(0, 0);
                    }} className={`
                        group relative flex items-center gap-2 px-6 py-2.5 rounded-full overflow-hidden transition-all duration-500
                        ${activeSection === 'learn'
                            ? 'bg-gradient-to-r from-purple-600 to-pink-600 shadow-[0_0_30px_rgba(168,85,247,0.5)] text-white border-none scale-105'
                            : 'bg-slate-950/80 border border-purple-500/30 text-purple-300 hover:text-white hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:bg-slate-900'}
                    `}>
                        {/* Inner glow on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <Sparkles className={`w-4 h-4 relative z-10 ${activeSection === 'learn' ? 'animate-pulse text-white' : 'text-purple-400 group-hover:text-pink-300 transition-colors'}`} />
                        <span className="relative z-10 font-bold tracking-wider text-sm">LearnWithMe</span>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center shrink-0 ml-auto">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-slate-300 hover:text-white transition-colors bg-white/5 p-2 rounded-full border border-white/10 pointer-events-auto"
                    >
                        {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>

            </nav>

            {/* Mobile Dropdown Menu */}
            <div className={`md:hidden absolute top-full left-0 right-0 mt-3 transition-all duration-300 origin-top
                ${isMobileMenuOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}>
                <div className="bg-slate-900/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl flex flex-col gap-2 relative z-40 relative shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
                    <HashLink smooth to="/#home" onClick={() => setActiveSection('home')} className={getLinkClasses('home', true)}>
                        Home
                    </HashLink>
                    <Link to="/learn" onClick={() => {
                        setActiveSection('learn');
                        window.scrollTo(0, 0);
                    }} className={`
                        group relative flex items-center justify-center gap-2 w-full py-4 rounded-xl overflow-hidden transition-all duration-300
                        ${activeSection === 'learn'
                            ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]'
                            : 'bg-slate-950/50 border border-purple-500/30 text-purple-300 hover:text-white hover:border-purple-400'}
                    `}>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <Sparkles className={`w-5 h-5 relative z-10 ${activeSection === 'learn' ? 'animate-pulse' : 'text-purple-400 group-hover:text-pink-300'}`} />
                        <span className="relative z-10 font-bold tracking-widest text-sm">LearnWithMe</span>
                    </Link>

                    <div className="h-[1px] bg-white/10 w-full my-3"></div>

                    <a href="mailto:hello@avinash.dev" className="text-center text-sm font-bold tracking-widest text-white border border-purple-500/50 bg-purple-500/10 rounded-xl px-4 py-3 hover:bg-purple-500 hover:text-white transition-all shadow-lg hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] block w-full">
                        CONTACT
                    </a>
                </div>
            </div>
        </div>
    )
}
