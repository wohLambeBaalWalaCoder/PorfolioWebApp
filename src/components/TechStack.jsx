import { Github, Figma, Codepen, Framer, Cpu, Monitor, Zap, Hexagon } from 'lucide-react';

const techs = [
    { icon: <Zap className="w-8 h-8" /> },
    { icon: <Cpu className="w-8 h-8" /> },
    { icon: <Figma className="w-8 h-8" /> },
    { icon: <Monitor className="w-8 h-8" /> },
    { icon: <Hexagon className="w-8 h-8" /> },
    { icon: <Framer className="w-8 h-8" /> },
    { icon: <Codepen className="w-8 h-8" /> },
    { icon: <Github className="w-8 h-8" /> },
];

export default function TechStack() {
    return (
        <section className="py-24 px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
                <p className="text-2xl md:text-3xl text-slate-300 font-medium mb-16 leading-relaxed">
                    I'm currently looking to join a <span className="text-purple-400 font-semibold drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">cross-functional</span> team that values improving people's lives through accessible UI.
                </p>

                <div className="relative inline-flex items-center justify-center w-full">
                    {/* Faint purple background glow */}
                    <div className="absolute inset-0 bg-violet-600/10 blur-[80px] rounded-full pointer-events-none" />

                    <div className="relative flex flex-wrap justify-center gap-4 md:gap-6">
                        {techs.map((tech, index) => (
                            <div
                                key={index}
                                className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-slate-900 border border-white/5 flex items-center justify-center text-slate-500 hover:text-white hover:bg-slate-800 hover:border-purple-500/50 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                            >
                                {tech.icon}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
