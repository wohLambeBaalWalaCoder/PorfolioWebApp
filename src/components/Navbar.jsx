import { Code2, Menu, X } from 'lucide-react';
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
        const activeClasses = "text-white bg-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.3)] border border-purple-500/20";
        const inactiveClasses = "text-slate-400 hover:text-white hover:bg-white/10 border border-transparent";

        return `${baseClasses} ${activeSection === section ? activeClasses : inactiveClasses}`;
    };

    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50">
            <nav className="relative z-50 bg-slate-900/60 backdrop-blur-2xl border border-white/10 rounded-full px-6 md:px-8 py-3 flex items-center justify-between shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_20px_rgba(168,85,247,0.15)] transition-all duration-300">

                {/* Logo Section */}
                <Link to="/" onClick={() => setActiveSection('home')} className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-violet-600 to-purple-500 p-[1px] shadow-[0_0_15px_rgba(139,92,246,0.4)] group-hover:shadow-[0_0_25px_rgba(139,92,246,0.7)] transition-shadow duration-300">
                        <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center relative z-10">
                            <Code2 className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                        </div>
                    </div>
                    <span className="text-xl font-bold tracking-wider text-slate-200 hidden sm:block">
                        <span className="inline-block hover:animate-pulse transition-all duration-300 relative group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-600">
                            AVINASH
                            <span className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300"></span>
                        </span>
                        <span className="text-purple-500 text-2xl leading-none animate-bounce inline-block ml-0.5">.</span>
                    </span>
                </Link>

                {/* Desktop Navigation Links - Pill Design */}
                <div className="hidden md:flex items-center gap-1 bg-slate-950/60 p-1.5 rounded-full border border-white/5 shadow-inner">
                    <HashLink smooth to="/#home" onClick={() => setActiveSection('home')} className={getLinkClasses('home')}>
                        Home
                    </HashLink>
                    <HashLink smooth to="/#experience" onClick={() => setActiveSection('experience')} className={getLinkClasses('experience')}>
                        Work
                    </HashLink>
                    <HashLink smooth to="/#lab" onClick={() => setActiveSection('lab')} className={getLinkClasses('lab')}>
                        Lab
                    </HashLink>
                    <Link to="/learn" onClick={() => {
                        setActiveSection('learn');
                        window.scrollTo(0, 0);
                    }} className={getLinkClasses('learn')}>
                        Learn With me
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

                {/* Desktop Action Button */}
                <div className="hidden md:flex items-center ml-4 md:ml-0">
                    <a href="mailto:hello@avinash.dev" className="text-xs md:text-sm font-bold tracking-widest text-white border border-purple-500/50 bg-purple-500/10 rounded-full px-5 md:px-6 py-2.5 hover:bg-purple-500 hover:text-white hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] transition-all duration-300">
                        CONTACT
                    </a>
                </div>

            </nav>

            {/* Mobile Dropdown Menu */}
            <div className={`md:hidden absolute top-full left-0 right-0 mt-3 transition-all duration-300 origin-top
                ${isMobileMenuOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}>
                <div className="bg-slate-900/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl flex flex-col gap-2 relative z-40 relative shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
                    <HashLink smooth to="/#home" onClick={() => setActiveSection('home')} className={getLinkClasses('home', true)}>
                        Home
                    </HashLink>
                    <HashLink smooth to="/#experience" onClick={() => setActiveSection('experience')} className={getLinkClasses('experience', true)}>
                        Work
                    </HashLink>
                    <HashLink smooth to="/#lab" onClick={() => setActiveSection('lab')} className={getLinkClasses('lab', true)}>
                        Lab
                    </HashLink>
                    <Link to="/learn" onClick={() => {
                        setActiveSection('learn');
                        window.scrollTo(0, 0);
                    }} className={getLinkClasses('learn', true)}>
                        Learn With me
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
