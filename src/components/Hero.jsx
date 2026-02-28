import { useState, useEffect } from 'react';

const titles = ["Software Engineer.", "Backend Developer.", "Node.js Expert."];

export default function Hero() {
    const [titleIndex, setTitleIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        let timer;
        const fullText = titles[titleIndex];

        if (isDeleting) {
            timer = setTimeout(() => {
                setCurrentText(fullText.substring(0, currentText.length - 1));
                setTypingSpeed(50);
            }, typingSpeed);
        } else {
            timer = setTimeout(() => {
                setCurrentText(fullText.substring(0, currentText.length + 1));
                setTypingSpeed(150);
            }, typingSpeed);
        }

        if (!isDeleting && currentText === fullText) {
            timer = setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && currentText === "") {
            setIsDeleting(false);
            setTitleIndex((prev) => (prev + 1) % titles.length);
            setTypingSpeed(500);
        }

        return () => clearTimeout(timer);
    }, [currentText, isDeleting, titleIndex, typingSpeed]);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
            {/* Background glowing orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
                {/* Avatar with soft pulsing purple glow */}
                <div className="relative mb-10 group">
                    <div className="absolute -inset-2 bg-gradient-to-tr from-violet-600 to-purple-500 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-1000 animate-pulse" />
                    <div className="relative w-36 h-36 rounded-full border border-white/10 bg-slate-900 overflow-hidden flex items-center justify-center shadow-inner">
                        <img
                            src="/ProfileAvatar.jpg"
                            alt="Avatar Placeholder"
                            className="w-full h-full object-cover rounded-full"
                        />
                    </div>
                </div>

                {/* Text content */}
                <p className="text-lg md:text-xl text-slate-400 mb-6 font-medium tracking-wide">
                    Hello! I am <span className="inline-block text-purple-500 font-semibold drop-shadow-[0_0_10px_rgba(168,85,247,0.5)] animate-pulse hover:animate-none hover:scale-110 hover:text-purple-400 hover:drop-shadow-[0_0_20px_rgba(168,85,247,0.9)] transition-all duration-300 cursor-default">Avinash</span>
                </p>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter animate-float min-h-[1.2em] flex flex-wrap justify-center items-center">
                    <span className="bg-gradient-to-b from-white via-slate-200 to-slate-500 text-transparent bg-clip-text">I'm a {currentText}</span>
                    <span className="text-purple-500 animate-[pulse_0.8s_ease-in-out_infinite] font-light -translate-y-1 select-none">|</span>
                </h1>

                <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed animate-float" style={{ animationDelay: '0.3s' }}>
                    Backend Engineer specializing in Node.js and MongoDB, crafting scalable architectures and performance-optimized APIs that enable modern, resilient React-based digital products.
                </p>
            </div>
        </section>
    )
}
