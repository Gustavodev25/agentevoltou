import React from "react";

export function CTASection() {
    return (
        <section className="relative w-full py-24 bg-[#0a0a0a] border-t border-white/5 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-3xl opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-[#05662C] to-transparent blur-[100px]" />
            </div>

            <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-6">
                    Pronto para escalar seu negócio?
                </h2>

                <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
                    Transforme sua visão em realidade com nossa expertise.
                    Vamos criar algo extraordinário juntos.
                </p>

                <a
                    href="https://wa.me/5547997486808"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95 inline-block"
                >
                    <span className="relative z-10">Agendar Consultoria</span>
                    <div className="absolute inset-0 bg-gray-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                </a>
            </div>
        </section>
    );
}
