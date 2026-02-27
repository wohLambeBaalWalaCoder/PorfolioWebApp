import { Server, Cloud, Code, Wrench, Database, ShieldCheck } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const skillCategories = [
    {
        title: "Backend Development",
        icon: <Server className="w-6 h-6 text-purple-400" />,
        skills: ["Node.js", "Express.js", "RESTful API", "Microservices Architecture", "Asynchronous Programming", "Event-Driven Architecture", "Middleware Development", "API Versioning"]
    },
    {
        title: "Cloud & Infrastructure",
        icon: <Cloud className="w-6 h-6 text-violet-400" />,
        skills: ["AWS (EC2, SQS, SNS, DynamoDB)", "Queue-based Communication", "Asynchronous Processing", "CloudWatch", "Kibana (Monitoring)"]
    },
    {
        title: "Frontend Collaboration",
        icon: <Code className="w-6 h-6 text-purple-400" />,
        skills: ["React.js Basics", "API Integration", "CORS Handling"]
    },
    {
        title: "Tools & Ecosystem",
        icon: <Wrench className="w-6 h-6 text-violet-400" />,
        skills: ["Git / GitHub / GitLab", "Postman / Swagger", "Jira / Agile Workflow", "npm / yarn", "Logging & Monitoring", "Unit Testing (Jest/Mocha)", "API Testing", "Integration Testing"]
    },
    {
        title: "Database Management",
        icon: <Database className="w-6 h-6 text-purple-400" />,
        skills: ["MongoDB (Aggregation, Indexing)", "Database Design & Optimization", "Mongoose / ORM Usage"]
    },
    {
        title: "Authentication & Security",
        icon: <ShieldCheck className="w-6 h-6 text-violet-400" />,
        skills: ["JWT Authentication", "OAuth / Session Auth", "Role-Based Access Control (RBAC)", "API Security Best Practices", "Rate Limiting", "Data Validation (Joi/Zod)"]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 px-6 relative">
            <div className="max-w-6xl mx-auto">
                <RevealOnScroll>
                    <h2 className="text-3xl md:text-5xl font-black mb-16 text-center text-white tracking-tight leading-tight uppercase animate-float">
                        Technical Skills
                    </h2>
                </RevealOnScroll>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="group relative p-8 rounded-3xl bg-slate-900/40 backdrop-blur-xl border border-white/10 overflow-hidden shadow-[inset_0_0_20px_rgba(168,85,247,0.02)] hover:border-purple-500/30 hover:shadow-[inset_0_0_40px_rgba(168,85,247,0.1),0_0_30px_rgba(168,85,247,0.15)] transition-all duration-500 flex flex-col h-full"
                        >
                            {/* Soft top gradient line on hover */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-slate-950 border border-purple-500/20 flex items-center justify-center shadow-inner group-hover:border-purple-500/50 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-300">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                                    {category.title}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="text-sm font-semibold text-purple-200 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-1.5 hover:bg-purple-500 hover:border-purple-500 hover:text-white hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all duration-300 cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
