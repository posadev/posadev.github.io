import {useEffect, useState} from "react";
import {scrollToTop} from "@/lib/utils.ts";
import {useLocation} from "react-router-dom";
import AgendaHeader from "@/components/agenda/AgendaHeader.tsx";
import AgendaContent from "@/components/agenda/AgendaContent.tsx";

const Agenda = () => {
    const location = useLocation();
    const sessionId = location.state?.sessionId;
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        scrollToTop();
    }, []);

    useEffect(() => {
        if (sessionId) {
            const element = document.getElementById(`session-${sessionId}`);
            if (element) {
                setTimeout(() => {
                    const headerOffset = 120;
                    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                    const offsetPosition = elementPosition - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth",
                    });
                }, 100);
            }
        }
    }, [sessionId]);

    useEffect(() => {
        const handler = () => {
            if (window.scrollY > 300) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };

        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <section className="flex flex-col justify-center items-center gap-8 py-20 md:px-10 lg:px-20 relative">
            <AgendaHeader />
            <AgendaContent />
            {showScrollTop && (
                <button
                    onClick={handleScrollTop}
                    className="fixed flex justify-center items-center h-14 font-bold w-10 bottom-6 right-4  border border-primary-600 p-2 rounded-full shadow-2xl text-white bg-primary-600 transition-all z-40"
                >
                    ↑
                </button>
            )}
        </section>
    );
}

export default Agenda;