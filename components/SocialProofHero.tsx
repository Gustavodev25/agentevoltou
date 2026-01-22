"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const avatars = [
    "https://i.pravatar.cc/100?img=1",
    "https://i.pravatar.cc/100?img=8",
    "https://i.pravatar.cc/100?img=12",
    "https://i.pravatar.cc/100?img=33",
];

const notifications = [
    "Novos leads gerados hoje",
    "Venda realizada: R$ 2.450",
    "Novo cliente fechado",
    "Meta mensal batida"
];

export function SocialProofHero() {
    const [currentNotification, setCurrentNotification] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentNotification((prev) => (prev + 1) % notifications.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col gap-6 scale-110 origin-right">
            {/* Main Card */}
            <motion.div
                initial={{ opacity: 0, x: 50, rotate: -2 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative flex items-center gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-2xl shadow-emerald-900/20"
            >
                {/* Animated Border Gradient Pulsing */}
                <motion.div
                    animate={{ opacity: [0.1, 0.6, 0.1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-r from-emerald-500/20 via-transparent to-emerald-500/20"
                />

                {/* Avatar Stack */}
                <div className="flex items-center -space-x-5">
                    {avatars.map((src, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + i * 0.15, type: "spring" }}
                            className="relative h-14 w-14 rounded-full border-[3px] border-[#0a0a0a] bg-neutral-800 shadow-lg"
                        >
                            <Image
                                src={src}
                                alt={`User ${i + 1}`}
                                fill
                                className="rounded-full object-cover"
                            />
                        </motion.div>
                    ))}
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.2, type: "spring" }}
                        className="relative flex h-14 w-14 items-center justify-center rounded-full border-[3px] border-[#0a0a0a] bg-emerald-500 text-sm font-bold text-black shadow-lg"
                    >
                        +200
                    </motion.div>
                </div>

                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <motion.svg
                                key={star}
                                initial={{ opacity: 0, scale: 0, rotate: -30 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                transition={{ delay: 1.4 + star * 0.1, type: "spring" }}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-5 w-5 text-yellow-400 drop-shadow-md"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                    clipRule="evenodd"
                                />
                            </motion.svg>
                        ))}
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2 }}
                    >
                        <p className="text-base font-bold text-white leading-tight">
                            Empresas Escalando
                        </p>
                        <p className="text-xs text-emerald-400 font-medium">
                            Resultados comprovados
                        </p>
                    </motion.div>
                </div>
            </motion.div>

            {/* Dynamic Notification Stack */}
            <div className="relative h-16 w-72 self-end">
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={currentNotification}
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1, zIndex: 10 }}
                        exit={{ opacity: 0, y: -20, scale: 0.9, zIndex: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="absolute inset-0 flex items-center rounded-xl border border-emerald-500/30 bg-emerald-950/80 px-4 backdrop-blur-md shadow-lg shadow-emerald-900/20"
                    >
                        <div className="mr-3 flex h-2 w-2 items-center justify-center">
                            <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                        </div>

                        <p className="text-sm font-semibold text-emerald-100 truncate">
                            {notifications[currentNotification]}
                        </p>
                    </motion.div>
                </AnimatePresence>

                {/* Stack "phantom" cards for visual depth */}
                <div className="absolute inset-0 top-2 scale-95 opacity-50 -z-10 rounded-xl bg-emerald-950/50 border border-emerald-500/10" />
                <div className="absolute inset-0 top-4 scale-90 opacity-30 -z-20 rounded-xl bg-emerald-950/30 border border-emerald-500/5" />
            </div>
        </div>
    );
}
