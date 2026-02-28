import { Cloud, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AwsQuestions() {
    return (
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto min-h-screen">
            {/* Header Section */}
            <div className="mb-8">
                <Link to="/learn" className="inline-flex items-center text-sm font-semibold text-slate-400 hover:text-orange-400 mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Categories
                </Link>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 p-[1px] shadow-lg shadow-orange-500/20">
                            <div className="w-full h-full bg-slate-950 rounded-2xl flex items-center justify-center">
                                <Cloud className="w-8 h-8 text-orange-400" />
                            </div>
                        </div>
                        <div>
                            <h1 className="text-3xl md:text-5xl font-bold text-white">
                                AWS Interview Questions
                            </h1>
                            <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-slate-400 font-medium">
                                <span className="px-4 py-1.5 bg-gradient-to-r from-slate-800 to-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700/50 shadow-inner flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.8)]"></span>
                                    Level: <span className="text-slate-200 font-semibold">Coming Soon</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Body */}
            <div className="relative group bg-slate-900/50 backdrop-blur-sm border border-orange-500/20 rounded-3xl p-8 sm:p-12 overflow-hidden text-center shadow-[0_0_40px_rgba(249,115,22,0.1)]">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5 transition-opacity duration-300 pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto">
                    <div className="w-20 h-20 bg-orange-500/10 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(249,115,22,0.2)] animate-[pulse_3s_ease-in-out_infinite]">
                        <Cloud className="w-10 h-10 text-orange-400" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400 mb-4 leading-tight">
                        Get ready for the questions...
                    </h2>
                    <p className="text-lg sm:text-xl text-slate-300/90 leading-relaxed font-medium">
                        You're going to <span className="italic text-orange-300">enjoy</span> it!
                    </p>
                    <p className="mt-6 text-sm text-slate-500">
                        We are currently compiling the best questions. Check back soon.
                    </p>
                </div>
            </div>
        </section>
    );
}
