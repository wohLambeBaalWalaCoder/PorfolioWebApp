import { useState } from 'react';
import { reactData } from '../data/reactQuestions';
import { ChevronDown, Atom, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ReactQuestions() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleQuestion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto min-h-screen">
            {/* Header Section */}
            <div className="mb-12">
                <Link to="/learn" className="inline-flex items-center text-sm font-semibold text-slate-400 hover:text-purple-400 mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Categories
                </Link>

                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 p-[1px] shadow-lg shadow-cyan-500/20">
                        <div className="w-full h-full bg-slate-950 rounded-2xl flex items-center justify-center">
                            <Atom className="w-8 h-8 text-white" />
                        </div>
                    </div>
                    <div>
                        <h1 className="text-3xl md:text-5xl font-bold text-white">
                            {reactData.title}
                        </h1>
                        <div className="flex items-center gap-3 mt-2 text-sm text-slate-400 font-medium">
                            <span className="px-3 py-1 bg-slate-800 rounded-full border border-slate-700">Level: {reactData.level.replace(/-/g, ' ')}</span>
                            <span className="px-3 py-1 bg-slate-800 rounded-full border border-slate-700">{reactData.totalQuestions} Questions</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Questions Accordion */}
            <div className="space-y-4">
                {reactData.questions.map((q, index) => {
                    const isOpen = openIndex === index;

                    return (
                        <div
                            key={q.id}
                            className={`group relative bg-slate-900/50 backdrop-blur-sm border rounded-2xl transition-all duration-300 overflow-hidden
                                ${isOpen
                                    ? 'border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.15)] bg-slate-800/80'
                                    : 'border-white/5 hover:border-white/10 hover:bg-slate-800/50'
                                }`}
                        >
                            <button
                                onClick={() => toggleQuestion(index)}
                                className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 relative z-10"
                            >
                                <div className="flex gap-4 items-start pr-8">
                                    <span className={`text-sm font-bold mt-1 min-w-[28px] ${isOpen ? 'text-cyan-400' : 'text-slate-500 group-hover:text-slate-400'}`}>
                                        {q.questionNumber.toString().padStart(2, '0')}.
                                    </span>
                                    <h3 className={`text-lg font-semibold leading-relaxed transition-colors duration-200 ${isOpen ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                                        {q.question}
                                    </h3>
                                </div>
                                <div className={`shrink-0 mt-1 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-cyan-500/20 text-cyan-400 rotate-180' : 'bg-slate-800 text-slate-400 group-hover:bg-slate-700 group-hover:text-slate-300'}`}>
                                    <ChevronDown className="w-5 h-5" />
                                </div>
                            </button>

                            {/* Tags Configuration */}
                            <div className="px-6 pb-4 ml-[52px] flex items-center gap-2">
                                <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded-md border
                                    ${q.difficulty === 'beginner' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                                        q.difficulty === 'intermediate' ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' :
                                            'bg-rose-500/10 text-rose-400 border-rose-500/20'}`}>
                                    {q.difficulty}
                                </span>
                                {q.tags.map(tag => (
                                    <span key={tag} className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded-md border bg-slate-800 border-slate-700 text-slate-400">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div
                                className={`transition-all duration-300 ease-in-out relative z-10
                                    ${isOpen ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="w-[calc(100%-64px)] mx-auto h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent mb-6"></div>
                                <div className="px-6 ml-[52px] pr-8 text-slate-300/90 leading-relaxed font-medium">
                                    {q.answer}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
