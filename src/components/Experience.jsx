import { Laptop, Briefcase, MapPin, Calendar } from 'lucide-react';

const experiences = [
    {
        icon: <Laptop className="w-6 h-6 text-purple-400" />,
        title: "Systems Engineer (Node.js Developer)",
        company: "Tata Consultancy Services",
        period: "09/2022 - Present",
        location: "Pune",
        responsibilities: [
            "Designed, developed, and maintained high performance REST APIs using Node.js and Express.js.",
            "Played a key role in migrating backend services from on-premise servers to AWS cloud infrastructure.",
            "Supported CI/CD deployment processes and automated application releases.",
            "Implemented performance optimizations improving API efficiency and system stability.",
            "Participated in troubleshooting production issues and ensuring high system availability post-migration."
        ]
    },
    {
        icon: <Briefcase className="w-6 h-6 text-violet-400" />,
        title: "Graduate Trainee",
        company: "Tata Consultancy Services",
        period: "05/2022 - 09/2022",
        location: "Chennai",
        responsibilities: [
            "Served as SPOC between team members and management, facilitating effective communication and workflow coordination.",
            "Organized and hosted company cultural event (Onam Festival), managing coordination and execution.",
            "Chosen as Trainee Assistant – Chennai location, recognizing adaptability and performance during training period."
        ]
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-32 px-6 relative">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-black mb-16 text-center tracking-tight flex justify-center uppercase">
                    {"Work Experience".split("").map((char, index) => (
                        <span
                            key={index}
                            className={`${char === " " ? "ml-4" : ""} inline-block animate-[cascade_1.5s_ease-in-out_infinite_alternate] text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-500`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {char}
                        </span>
                    ))}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="group relative p-8 md:p-10 rounded-3xl bg-slate-900/40 backdrop-blur-xl border border-white/10 overflow-hidden shadow-[inset_0_0_20px_rgba(168,85,247,0.05),0_0_30px_rgba(168,85,247,0.15)] hover:shadow-[inset_0_0_40px_rgba(168,85,247,0.2),0_0_50px_rgba(168,85,247,0.3)] transition-all duration-500 flex flex-col h-full"
                        >
                            {/* Radial glow background effect inside card */}
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-violet-600/20 rounded-full blur-3xl group-hover:bg-violet-600/30 group-hover:scale-110 transition-all duration-700 pointer-events-none" />

                            <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-8 flex-grow">
                                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-slate-950 border border-purple-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.2)] group-hover:border-purple-500/60 group-hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] transition-all duration-500 mt-2">
                                    {exp.icon}
                                </div>
                                <div className="flex flex-col flex-grow">
                                    <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                                    <div className="text-lg text-purple-400 font-semibold mb-3">{exp.company}</div>
                                    <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400 mb-6 font-medium">
                                        <div className="flex items-center gap-1.5 bg-white/5 py-1 px-3 rounded-full border border-white/5">
                                            <Calendar className="w-4 h-4 text-purple-400" />
                                            <span>{exp.period}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 bg-white/5 py-1 px-3 rounded-full border border-white/5">
                                            <MapPin className="w-4 h-4 text-violet-400" />
                                            <span>{exp.location}</span>
                                        </div>
                                    </div>
                                    <ul className="text-slate-300 text-sm md:text-base leading-relaxed space-y-4 relative before:absolute before:inset-y-0 before:left-[7px] before:w-[1px] before:bg-white/10 pl-6 mt-2">
                                        {exp.responsibilities.map((resp, i) => (
                                            <li key={i} className="relative before:absolute before:left-[-24px] before:top-[10px] before:w-[6px] before:h-[6px] before:rounded-full before:bg-purple-500 before:shadow-[0_0_10px_rgba(168,85,247,0.6)]">
                                                {resp}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
