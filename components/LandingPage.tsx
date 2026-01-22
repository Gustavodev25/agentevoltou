"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BlurTextEffect } from "./BlurTextEffect";
import { SocialProofHero } from "./SocialProofHero";

export default function LandingPage() {
    const navLinks = [
        { name: "Funcionalidades", href: "#features" },
        { name: "Depoimentos", href: "#testimonials" },
        { name: "Preços", href: "#pricing" },
        { name: "FAQ", href: "#faq" },
    ];

    return (
        <div className="min-h-screen w-full bg-black font-sans selection:bg-[#05662C]/30 selection:text-[#05662C]">
            <header className="absolute top-0 z-50 w-full px-6 pt-6 sm:px-10 lg:px-16">
                <nav className="flex h-16 w-full items-center justify-between transition-all duration-300">

                    <div className="flex items-center gap-2">
                        <div className="relative h-10 w-36 transition-transform duration-300 hover:scale-105">
                            <Image
                                src="/logo.png"
                                alt="Logo"
                                fill
                                className="object-contain object-left"
                                priority
                            />
                        </div>
                    </div>

                    <div className="hidden md:flex items-center rounded-full bg-white/10 backdrop-blur-md border border-white/10 px-1.5 py-1 gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="px-5 py-1.5 text-sm font-medium text-gray-300 rounded-full transition-all duration-300 hover:bg-white/10 hover:text-white"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:hidden border border-white/10">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                        </svg>
                    </button>
                </nav>
            </header>

            <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0 pointer-events-none overflow-hidden bg-[#0a0a0a]">

                    <div
                        className="absolute"
                        style={{
                            width: '150%',
                            height: '120%',
                            top: '-40%',
                            left: '-50%',
                            background: 'radial-gradient(ellipse 80% 50% at 30% 20%, rgba(16, 185, 129, 0.5) 0%, rgba(5, 102, 44, 0.4) 25%, rgba(4, 80, 35, 0.25) 45%, transparent 70%)',
                            filter: 'blur(60px)',
                        }}
                    />

                    <div
                        className="absolute"
                        style={{
                            width: '60%',
                            height: '100%',
                            top: '0',
                            left: '-20%',
                            background: 'linear-gradient(180deg, rgba(5, 102, 44, 0.6) 0%, rgba(4, 80, 35, 0.4) 30%, rgba(3, 60, 26, 0.2) 60%, transparent 85%)',
                            filter: 'blur(80px)',
                        }}
                    />

                    <div
                        className="absolute"
                        style={{
                            width: '100%',
                            height: '40%',
                            top: '0',
                            left: '0',
                            background: 'linear-gradient(180deg, rgba(16, 185, 129, 0.35) 0%, rgba(5, 102, 44, 0.2) 40%, transparent 100%)',
                            filter: 'blur(50px)',
                        }}
                    />

                    <div
                        className="absolute"
                        style={{
                            width: '50%',
                            height: '40%',
                            bottom: '0',
                            left: '-10%',
                            background: 'radial-gradient(ellipse at bottom left, rgba(5, 102, 44, 0.3) 0%, rgba(3, 60, 26, 0.15) 40%, transparent 70%)',
                            filter: 'blur(70px)',
                        }}
                    />

                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(white 1px, transparent 1px)',
                        backgroundSize: '80px 80px',
                        opacity: 0.15,
                    }} />
                </div>

                <div className="relative z-10 grid min-h-[80vh] w-full max-w-screen-2xl grid-cols-1 items-center gap-8 px-6 sm:px-8 lg:grid-cols-12">

                    <div className="w-full text-left lg:col-span-7">
                        <h1 className="flex flex-col text-6xl font-bold tracking-tighter text-white sm:text-7xl md:text-8xl lg:text-8xl xl:text-9xl">
                            <BlurTextEffect className="opacity-90 mb-2 whitespace-nowrap">
                                Sua Agência
                            </BlurTextEffect>
                            <BlurTextEffect
                                className="mb-2 font-bold tracking-tighter whitespace-nowrap"
                                textGradient="linear-gradient(to right, #a7f3d0, rgba(255, 255, 255, 0.6))"
                            >
                                Digital
                            </BlurTextEffect>
                            <BlurTextEffect className="opacity-90 whitespace-nowrap">
                                Parceira
                            </BlurTextEffect>
                        </h1>
                    </div>

                    <div className="flex justify-center lg:col-span-5 lg:justify-end">
                        <SocialProofHero />
                    </div>
                </div>
            </main>
        </div>
    );
}
