import { Code2, Server, Terminal, ArrowRight, BrainCircuit, Rocket, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const journeyCards = [
    {
        title: "The Architect",
        description: "I don't just write code; I design systems. From resilient Node.js microservices to highly optimized MongoDB schemas, I build the engines that power modern web applications.",
        icon: Server,
        color: "from-blue-500 to-indigo-500",
        shadow: "shadow-blue-500/20",
        link: null,
        tags: ["Node.js", "MongoDB", "System Design"]
    },
    {
        title: "The Mentor",
        description: "Knowledge is meant to be shared. I've curated a comprehensive collection of interview questions and practical coding challenges to help developers master their craft.",
        icon: BrainCircuit,
        color: "from-purple-500 to-pink-500",
        shadow: "shadow-purple-500/20",
        link: "/learn",
        linkText: "Explore Interview Prep",
        tags: ["React", "Express.js", "AWS"]
    },
    {
        title: "The Innovator",
        description: "Always exploring the bleeding edge of web technologies. Whether it's implementing seamless glassmorphic UIs or optimizing WebSockets for real-time collaboration.",
        icon: Rocket,
        color: "from-emerald-400 to-teal-500",
        shadow: "shadow-emerald-500/20",
        link: null,
        tags: ["React", "Tailwind", "WebSockets"]
    }
];

export default function InteractiveJourney() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative cursor-default">
            {/* Background elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="text-center mb-20 relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
                    <Terminal className="w-4 h-4" />
                    <span>Why explore my portfolio?</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
                    Beyond the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Resume</span>
                </h2>
                <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                    I believe in showing, not just telling. Dive into my ecosystem to discover how I build, think, and solve complex engineering problems.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                {journeyCards.map((card, index) => (
                    <div
                        key={index}
                        className="group relative bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:bg-slate-800/60 transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col h-full"
                    >
                        {/* Hover Gradient Background */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />

                        {/* Glow Effect behind icon */}
                        <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${card.color} rounded-full blur-[50px] opacity-10 group-hover:opacity-30 transition-opacity duration-500`} />

                        <div className="relative z-10 flex-grow">
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.color} p-[1px] mb-8 shadow-lg ${card.shadow} transform group-hover:scale-110 transition-transform duration-500`}>
                                <div className="w-full h-full bg-slate-950 rounded-2xl flex items-center justify-center">
                                    <card.icon className="w-6 h-6 text-white" />
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">
                                {card.title}
                            </h3>

                            <p className="text-slate-400 leading-relaxed mb-8">
                                {card.description}
                            </p>
                        </div>

                        <div className="relative z-10 mt-auto">
                            <div className="flex flex-wrap gap-2 mb-6">
                                {card.tags.map((tag, i) => (
                                    <span key={i} className="px-3 py-1 text-xs font-medium text-slate-300 bg-white/5 rounded-full border border-white/10">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {card.link && (
                                <Link
                                    to={card.link}
                                    className="inline-flex items-center justify-center w-full gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 border border-purple-500/20 hover:border-purple-500/40 text-purple-300 font-semibold transition-all duration-300 group/btn"
                                >
                                    {card.linkText}
                                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                </Link>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Global CTA */}
            <div className="mt-24 text-center relative z-10">
                <div className="inline-flex flex-col items-center p-8 sm:p-12 bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-3xl w-full max-w-4xl shadow-[0_0_50px_rgba(168,85,247,0.1)] relative overflow-hidden group">
                    {/* Animated background glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700 animate-[gradient_8s_ease_infinite]" style={{ backgroundSize: '200% 200%' }} />

                    <div className="relative z-10">
                        <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mb-6 shadow-inner border border-white/10 group-hover:scale-110 transition-transform duration-500">
                            <Sparkles className="w-8 h-8 text-purple-400 group-hover:text-pink-400 transition-colors duration-500" />
                        </div>

                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                            Experience the craftsmanship.
                        </h3>

                        <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
                            Don't just take my word for it. Navigate through the site to see real-world performance tuning, fluid animations, and a focus on premium user experience.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <Link
                                to="/learn"
                                className="group/btn flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-[0_0_30px_rgba(236,72,153,0.3)] hover:shadow-[0_0_40px_rgba(236,72,153,0.5)] transform hover:-translate-y-1"
                            >
                                Enter Interview Prep
                                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
