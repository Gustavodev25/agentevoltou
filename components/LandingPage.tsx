"use client";

import React from "react";
import { BlurTextEffect } from "./BlurTextEffect";
import { SocialProofHero } from "./SocialProofHero";
import { ShadowOverlay } from "./ShadowOverlay";
import { ServicesSection } from "./ServicesSection";
import { StatsSection } from "./StatsSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { Header } from "./Header";
import { FoundersSection } from "./FoundersSection";
import { CTASection } from "./CTASection";
import { Footer } from "./Footer";

export default function LandingPage() {
    return (
        <div className="min-h-screen w-full bg-black font-sans selection:bg-[#05662C]/30 selection:text-[#05662C]">
            <Header />

            <main className="w-full">
                <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-20">
                    <div className="absolute inset-0 pointer-events-none overflow-hidden bg-[#0a0a0a]">
                        <ShadowOverlay
                            color="rgba(5, 102, 44, 1)" // Brand green
                            className="w-full h-full opacity-60"
                            animation={{
                                scale: 50,
                                speed: 20, // Slow movement
                            }}
                        />
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
                            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                <a
                                    href="https://wa.me/5547997486808"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95 inline-flex items-center justify-center"
                                >
                                    <span className="relative z-10">Falar no WhatsApp</span>
                                    <div className="absolute inset-0 bg-gray-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                                </a>
                                {/* Optional secondary button
                                <button className="px-8 py-4 text-white font-semibold rounded-full border border-white/20 hover:bg-white/10 transition-colors">
                                    Ver Projetos
                                </button> 
                                */}
                            </div>
                        </div>

                        <div className="flex justify-center lg:col-span-5 lg:justify-end">
                            <SocialProofHero />
                        </div>
                    </div>
                </section>

                <ServicesSection />
                <StatsSection />
                <TestimonialsSection />
                <FoundersSection />
                <CTASection />
                <Footer />
            </main>
        </div >
    );
}
