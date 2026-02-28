import { Instagram, Github, Chrome } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="py-16 px-6 border-t border-white/5 relative bg-slate-950 mt-12">
            <div className="max-w-6xl mx-auto flex flex-col items-start gap-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide">Say Hello</h2>
                <a href="mailto:hello@avinash.dev" className="text-xl md:text-2xl font-light text-purple-400 hover:text-purple-300 transition-colors mb-6 drop-shadow-[0_0_10px_rgba(168,85,247,0.3)]">
                    hello@avinash.dev
                </a>

                <div className="flex gap-4">
                    <a href="#" className="text-slate-500 hover:text-purple-400 hover:bg-purple-500/10 transition-all p-3 rounded-xl border border-transparent hover:border-purple-500/30">
                        <Instagram className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-slate-500 hover:text-purple-400 hover:bg-purple-500/10 transition-all p-3 rounded-xl border border-transparent hover:border-purple-500/30">
                        <Github className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-slate-500 hover:text-purple-400 hover:bg-purple-500/10 transition-all p-3 rounded-xl border border-transparent hover:border-purple-500/30">
                        <Chrome className="w-6 h-6" />
                    </a>
                </div>

                <p className="text-sm text-slate-600 mt-12 w-full border-t border-white/5 pt-8 flex justify-between items-center">
                    <span>© {new Date().getFullYear()} Avinash. All rights reserved.</span>
                    <span className="text-purple-500/50">Designed in the dark.</span>
                </p>
            </div>
        </footer>
    )
}
