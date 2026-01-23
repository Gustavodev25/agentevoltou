"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const founders = [
    {
        id: 1,
        role: "Co-Founder & Head de Estratégia",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        id: 2,
        role: "Co-Founder & Diretor Criativo",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nullam ac odio et ante tincidunt efficitur. Maecenas tincidunt lacus at velit. Nulla facilisi. Curabitur suscipit, nunc sit amet varius mollis, erat lacus blandit est, non interdum metus nunc ut elit. Sed tincidunt, nisl eget faucibus ornare, diam lorem sollicitudin sem, in varius quam eros sed velit.",
    }
];

import { AuroraBackground } from "./AuroraBackground";

export function FoundersSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % founders.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + founders.length) % founders.length);
    };

    return (
        <section className="relative w-full border-t border-emerald-900/10">
            <AuroraBackground className="h-auto w-full py-24 sm:py-32 bg-[#0a0a0a]">
                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">

                        {/* Content Area */}
                        <div className="flex flex-col items-center justify-center">
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-sans mb-4">
                                    Quem <span className="text-emerald-400">somos</span>
                                </h2>
                                <div className="h-1 w-20 bg-emerald-500 rounded-full mx-auto" />
                            </div>

                            <div className="relative min-h-[250px] flex flex-col items-center">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentIndex}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.4 }}
                                        className="flex flex-col items-center"
                                    >
                                        <h3 className="text-3xl font-semibold text-white mb-8">
                                            {founders[currentIndex].role}
                                        </h3>
                                        <p className="text-lg leading-relaxed text-gray-400 max-w-2xl mx-auto italic">
                                            "{founders[currentIndex].bio}"
                                        </p>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Controls */}
                            <div className="flex items-center gap-8 mt-12">
                                <button
                                    onClick={handlePrev}
                                    className="group flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all hover:border-emerald-500 hover:bg-emerald-500 hover:text-white focus:outline-none"
                                    aria-label="Anterior"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 transition-transform group-hover:-translate-x-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                                    </svg>
                                </button>

                                <div className="flex gap-3">
                                    {founders.map((_, idx) => (
                                        <div
                                            key={idx}
                                            className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-10 bg-emerald-500' : 'w-2 bg-white/20'}`}
                                        />
                                    ))}
                                </div>

                                <button
                                    onClick={handleNext}
                                    className="group flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all hover:border-emerald-500 hover:bg-emerald-500 hover:text-white focus:outline-none"
                                    aria-label="Próximo"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 transition-transform group-hover:translate-x-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </AuroraBackground>
        </section>
    );
}
