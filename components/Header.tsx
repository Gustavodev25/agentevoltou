"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export function Header() {
    const navLinks = [
        { name: "Funcionalidades", href: "#features" },
        { name: "Depoimentos", href: "#testimonials" },
        { name: "Preços", href: "#pricing" },
        { name: "FAQ", href: "#faq" },
    ];

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out ${isScrolled
                ? "top-5 w-[95%] max-w-4xl rounded-full bg-white/90 backdrop-blur-md shadow-2xl border border-white/20 py-2 px-6"
                : "top-0 w-full max-w-full rounded-none bg-transparent px-6 py-6 sm:px-10 lg:px-16"
                }`}
        >
            <nav
                className={`flex items-center justify-between w-full transition-all duration-500`}
            >
                <div className="flex items-center gap-2">
                    <div
                        className={`relative transition-all duration-300 hover:scale-105 ${isScrolled ? "h-8 w-28" : "h-10 w-36"
                            }`}
                    >
                        <Image
                            src={isScrolled ? "/logo-black.webp" : "/logo.png"}
                            alt="Public Logo"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </div>

                <div className={`hidden md:flex items-center rounded-full px-1.5 py-1 gap-1 transition-all duration-300 ${isScrolled ? "" : "bg-white/10 backdrop-blur-md border border-white/10"
                    }`}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`px-5 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${isScrolled
                                ? "text-gray-600 hover:bg-gray-100 hover:text-black"
                                : "text-gray-300 hover:bg-white/10 hover:text-white"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="https://wa.me/5547997486808"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`ml-2 px-5 py-1.5 text-sm font-semibold rounded-full transition-all duration-300 ${isScrolled
                            ? "bg-black text-white hover:bg-gray-800"
                            : "bg-white text-black hover:bg-gray-200"
                            }`}
                    >
                        Contato
                    </a>
                </div>

                <button className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors md:hidden ${isScrolled
                    ? "bg-gray-100 text-black hover:bg-gray-200"
                    : "bg-white/10 text-white hover:bg-white/20 border border-white/10"
                    }`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                    </svg>
                </button>
            </nav>
        </header>
    );
}
