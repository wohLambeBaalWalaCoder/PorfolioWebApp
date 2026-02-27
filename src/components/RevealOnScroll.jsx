import { useEffect, useRef, useState } from 'react';

export default function RevealOnScroll({ children }) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    return (
        <div ref={ref} className="overflow-hidden w-full pb-4 -mb-4">
            <div
                className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-[120%] opacity-0"
                    }`}
            >
                {children}
            </div>
        </div>
    );
}
