import { useState, useMemo } from 'react';
import { reactData } from '../data/reactQuestions';
import { ChevronDown, Atom, ArrowLeft, Search, Eye, EyeOff, CheckCircle2, Circle, FilterX, Copy, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function ReactQuestions() {
    const [openIndex, setOpenIndex] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [copiedId, setCopiedId] = useState(null);

    const [isFlashcardMode, setIsFlashcardMode] = useState(false);
    const [revealedAnswers, setRevealedAnswers] = useState(new Set());
    const [showNeedsReviewOnly, setShowNeedsReviewOnly] = useState(false);
    const [knownQuestions, setKnownQuestions] = useState(() => {
        const savedKnown = localStorage.getItem('react-known-questions');
        return savedKnown ? new Set(JSON.parse(savedKnown)) : new Set();
    });

    const toggleQuestion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const toggleKnown = (id, e) => {
        e.stopPropagation();
        const nextKnown = new Set(knownQuestions);
        if (nextKnown.has(id)) {
            nextKnown.delete(id);
        } else {
            nextKnown.add(id);
        }
        setKnownQuestions(nextKnown);
        localStorage.setItem('react-known-questions', JSON.stringify(Array.from(nextKnown)));
    };

    const toggleReveal = (id, e) => {
        e.stopPropagation();
        const nextRevealed = new Set(revealedAnswers);
        if (nextRevealed.has(id)) {
            nextRevealed.delete(id);
        } else {
            nextRevealed.add(id);
        }
        setRevealedAnswers(nextRevealed);
    };

    const handleCopyCode = (code, id, e) => {
        e.stopPropagation();
        navigator.clipboard.writeText(code);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };



    // Filtering logic
    const filteredQuestions = useMemo(() => {
        return reactData.questions.filter(q => {
            const matchesSearch = q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                q.answer.toLowerCase().includes(searchQuery.toLowerCase());

            const matchesNeedsReview = !showNeedsReviewOnly || !knownQuestions.has(q.id);

            return matchesSearch && matchesNeedsReview;
        });
    }, [searchQuery, showNeedsReviewOnly, knownQuestions]);

    const progressPercentage = Math.round((knownQuestions.size / reactData.totalQuestions) * 100) || 0;

    return (
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto min-h-screen">
            {/* Header Section */}
            <div className="mb-8">
                <Link to="/learn" className="inline-flex items-center text-sm font-semibold text-slate-400 hover:text-purple-400 mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Categories
                </Link>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 p-[1px] shadow-lg shadow-cyan-500/20">
                            <div className="w-full h-full bg-slate-950 rounded-2xl flex items-center justify-center">
                                <Atom className="w-8 h-8 text-white" />
                            </div>
                        </div>
                        <div>
                            <h1 className="text-3xl md:text-5xl font-bold text-white">
                                {reactData.title}
                            </h1>
                            <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-slate-400 font-medium">
                                <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20 shadow-[0_0_10px_rgba(6,182,212,0.2)]">
                                    Level: {reactData.level.replace(/-/g, ' ')}
                                </span>
                                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20 shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                                    {reactData.totalQuestions} Questions
                                </span>
                                <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20 shadow-[0_0_10px_rgba(168,85,247,0.2)]">
                                    {progressPercentage}% Mastered
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Controls & Toggles */}
                    <div className="flex flex-col sm:flex-row gap-3">
                        <button
                            onClick={() => setShowNeedsReviewOnly(!showNeedsReviewOnly)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-semibold transition-all duration-300
                                ${showNeedsReviewOnly
                                    ? 'bg-amber-500/10 border-amber-500/30 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.15)]'
                                    : 'bg-slate-900 border-white/10 text-slate-300 hover:bg-slate-800'}`}
                        >
                            <FilterX className="w-4 h-4" />
                            {showNeedsReviewOnly ? 'Needs Review Only' : 'Show All'}
                        </button>

                        <button
                            onClick={() => setIsFlashcardMode(!isFlashcardMode)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-semibold transition-all duration-300
                                ${isFlashcardMode
                                    ? 'bg-purple-500/10 border-purple-500/30 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.15)]'
                                    : 'bg-slate-900 border-white/10 text-slate-300 hover:bg-slate-800'}`}
                        >
                            {isFlashcardMode ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            Flashcard Mode
                        </button>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="relative mb-6">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-slate-500" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search questions or keywords..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="block w-full pl-11 pr-4 py-4 bg-slate-900/50 border border-white/10 rounded-2xl text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all backdrop-blur-sm shadow-inner"
                    />
                </div>


            </div>

            {/* Questions Accordion / List */}
            <div className="space-y-4">
                {filteredQuestions.length === 0 ? (
                    <div className="text-center py-12 bg-slate-900/50 rounded-2xl border border-white/5">
                        <Atom className="w-12 h-12 text-slate-600 mx-auto mb-4 opacity-50" />
                        <h3 className="text-xl font-bold text-white mb-2">No questions found</h3>
                        <p className="text-slate-400">Try adjusting your search or filters to find what you're looking for.</p>
                    </div>
                ) : (
                    filteredQuestions.map((q, index) => {
                        const isOpen = openIndex === index;
                        const isKnown = knownQuestions.has(q.id);
                        const isRevealed = revealedAnswers.has(q.id);
                        const isBlurred = isFlashcardMode && !isRevealed;

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
                                    className="w-full text-left px-4 sm:px-6 py-5 flex items-start sm:items-center justify-between gap-4 relative z-10"
                                >
                                    <div className="flex items-start sm:items-center gap-4 pr-4 sm:pr-8 flex-1">
                                        <button
                                            onClick={(e) => toggleKnown(q.id, e)}
                                            className="mt-1 sm:mt-0 focus:outline-none shrink-0"
                                            title={isKnown ? "Mark as needing review" : "Mark as known"}
                                        >
                                            {isKnown ? (
                                                <CheckCircle2 className="w-6 h-6 text-emerald-500 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)] transition-all" />
                                            ) : (
                                                <Circle className="w-6 h-6 text-slate-600 hover:text-cyan-400 transition-colors" />
                                            )}
                                        </button>

                                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 flex-1">
                                            <span className={`text-sm font-bold min-w-[28px] ${isOpen ? 'text-cyan-400' : 'text-slate-500 group-hover:text-slate-400'}`}>
                                                {q.questionNumber.toString().padStart(2, '0')}.
                                            </span>
                                            <h3 className={`text-base sm:text-lg font-semibold leading-relaxed transition-colors duration-200 ${isOpen ? 'text-white' : 'text-slate-300 group-hover:text-white'} ${isKnown && !isOpen ? 'opacity-50' : ''}`}>
                                                {q.question}
                                            </h3>
                                        </div>
                                    </div>
                                    <div className={`shrink-0 mt-1 sm:mt-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-cyan-500/20 text-cyan-400 rotate-180' : 'bg-slate-800 text-slate-400 group-hover:bg-slate-700 group-hover:text-slate-300'}`}>
                                        <ChevronDown className="w-5 h-5" />
                                    </div>
                                </button>

                                {/* Tags Configuration */}
                                <div className="px-4 sm:px-6 pb-4 sm:ml-[76px] flex flex-wrap items-center gap-2">
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
                                        ${isOpen ? 'max-h-[3000px] opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="w-[calc(100%-48px)] mx-auto h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent mb-6"></div>

                                    <div className="relative px-4 sm:px-6 sm:ml-[76px]">
                                        <div className={`pr-4 sm:pr-8 transition-all duration-500 ${isBlurred ? 'blur-md select-none opacity-50' : 'blur-none opacity-100'}`}>
                                            {/* Auto-Sentence Parser */}
                                            {q.answer.split(/(?<=\.|\?|\!)(?=\s+[A-Z])/).map((sentence, i) => (
                                                <div key={i} className={`flex items-start ${i !== 0 ? "mt-4" : ""}`}>
                                                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2.5 mr-3 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
                                                    <p className="leading-relaxed text-[15px] sm:text-base text-slate-200 font-medium">
                                                        {sentence.trim()}
                                                    </p>
                                                </div>
                                            ))}

                                            {q.codeSnippet && (
                                                <div className="mt-6 rounded-xl overflow-hidden border border-white/5 shadow-2xl bg-[#0f111a]">
                                                    {/* Code Header Bar */}
                                                    <div className="flex items-center justify-between px-4 py-2.5 bg-[#1a1d27] border-b border-white/5">
                                                        <div className="flex items-center gap-2">
                                                            <div className="flex gap-2 mr-4">
                                                                <div className="w-3 h-3 rounded-full bg-rose-500/80 shadow-[0_0_10px_rgba(244,63,94,0.4)]"></div>
                                                                <div className="w-3 h-3 rounded-full bg-amber-500/80 shadow-[0_0_10px_rgba(245,158,11,0.4)]"></div>
                                                                <div className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-[0_0_10px_rgba(16,185,129,0.4)]"></div>
                                                            </div>
                                                            <span className="text-xs font-mono font-medium text-slate-400">example.js</span>
                                                        </div>
                                                        <button
                                                            onClick={(e) => handleCopyCode(q.codeSnippet, q.id, e)}
                                                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 transition-all group"
                                                            title="Copy code"
                                                        >
                                                            {copiedId === q.id ? (
                                                                <>
                                                                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                                                                    <span className="text-xs font-medium text-emerald-400">Copied!</span>
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <Copy className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" />
                                                                    <span className="text-xs font-medium text-slate-400 group-hover:text-white transition-colors">Copy</span>
                                                                </>
                                                            )}
                                                        </button>
                                                    </div>

                                                    {/* Code Body */}
                                                    <div className="overflow-x-auto text-[13px] sm:text-sm">
                                                        <SyntaxHighlighter
                                                            language="jsx"
                                                            style={vscDarkPlus}
                                                            customStyle={{
                                                                margin: 0,
                                                                padding: '1.25rem',
                                                                background: 'transparent',
                                                                fontSize: 'inherit',
                                                                lineHeight: '1.6',
                                                            }}
                                                            wrapLines={true}
                                                            showLineNumbers={true}
                                                            lineNumberStyle={{ minWidth: '3em', paddingRight: '1em', color: '#6e7681', textAlign: 'right' }}
                                                        >
                                                            {q.codeSnippet}
                                                        </SyntaxHighlighter>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {isBlurred && (
                                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                                <button
                                                    onClick={(e) => toggleReveal(q.id, e)}
                                                    className="pointer-events-auto px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all hover:scale-105 flex items-center gap-2"
                                                >
                                                    <Eye className="w-5 h-5" />
                                                    Reveal Answer
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
        </section>
    );
}
