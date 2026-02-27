import { Cloud, Server, Atom, FileCode2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const interviewCards = [
    {
        title: "AWS Interview Questions",
        description: "Ace your AWS cloud architecture and DevOps interviews with these essential questions.",
        icon: Cloud,
        color: "from-orange-500 to-amber-500",
        delay: "0",
        path: "/learn/aws"
    },
    {
        title: "Node.js Interview Questions",
        description: "Master backend JavaScript concepts, Event Loop, streams, and performance tuning.",
        icon: Server,
        color: "from-green-500 to-emerald-500",
        delay: "100",
        path: "/learn/nodejs"
    },
    {
        title: "React.js Interview Questions",
        description: "Deep dive into Hooks, state management, lifecycle, and component optimization.",
        icon: Atom,
        color: "from-cyan-500 to-blue-500",
        delay: "200",
        path: "/learn/react"
    },
    {
        title: "JavaScript Interview Questions",
        description: "Brush up on closures, prototypes, async/await, and core JS fundamentals.",
        icon: FileCode2,
        color: "from-yellow-400 to-yellow-600",
        delay: "300",
        path: "/learn/javascript"
    }
];

export default function LearnWithMe() {
    return (
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Wanted to prep for <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">interview?</span>
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                    Level up your skills and crush your next technical interview with these curated question sets.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {interviewCards.map((card, index) => (
                    <Link
                        to={card.path}
                        key={index}
                        className="group relative bg-slate-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:bg-slate-800/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(168,85,247,0.15)] cursor-pointer overflow-hidden block"
                    >
                        {/* Background Gradient Glow */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                        <div className="relative z-10">
                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.color} p-[1px] mb-6 inline-block shadow-lg`}>
                                <div className="w-full h-full bg-slate-950 rounded-xl flex items-center justify-center">
                                    <card.icon className="w-7 h-7 text-white" />
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                                {card.title}
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                {card.description}
                            </p>

                            <div className="mt-6 flex items-center text-sm font-semibold text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300">
                                Start Prepping <span className="ml-2">→</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
