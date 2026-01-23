"use client";

import React, { useRef } from "react";
import NumberFlow, { useCanAnimate } from "@number-flow/react";
import { useInView } from "framer-motion";

// Métricas da empresa
const stats = [
    {
        name: "Investimento Gerenciado",
        value: 12500000,
        prefix: "R$",
        suffix: "mi+",
        compact: true,
        fractionDigits: 1,
        description: "Em mídia paga (Ads) anualmente"
    },
    {
        name: "Projetos Entregues",
        value: 450,
        prefix: "",
        suffix: "",
        compact: false,
        fractionDigits: 0,
        description: "Sites, Landing Pages e E-commerces"
    },
    {
        name: "Impacto em Vendas",
        value: 85000000,
        prefix: "R$",
        suffix: "mi+",
        compact: true,
        fractionDigits: 0,
        description: "Receita gerada para nossos clientes"
    },
    {
        name: "Leads Qualificados",
        value: 1200000,
        prefix: "",
        suffix: "mi+",
        compact: true,
        fractionDigits: 1,
        description: "Potenciais clientes conectados"
    },
];

export function StatsSection() {
    return (
        <section className="relative w-full bg-[#0a0a0a] py-24 sm:py-32 border-t border-white/5 overflow-hidden">
            {/* Background Grid Effect */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#15803d1a_1px,transparent_1px),linear-gradient(to_bottom,#15803d1a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            </div>

            {/* Radial Gradient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-900/20 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-white/90 sm:text-4xl font-sans">
                        Números que constroem <span className="text-emerald-400">autoridade</span>
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-gray-400 max-w-2xl mx-auto">
                        A transparência é um dos nossos maiores valores. Confira o impacto que geramos através de estratégias validadas.
                    </p>
                </div>

                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat) => (
                            <AnimatedStatCard key={stat.name} stat={stat} />
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
}

function AnimatedStatCard({ stat }: { stat: typeof stats[0] }) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const canAnimate = useCanAnimate();

    // Prepare value for formatting
    // If compact, specific logic might be needed, but NumberFlow handles normal formatting well.
    // However, the user wants suffixes like "mi+" and prefixes like "R$".
    // NumberFlow formats numbers. If we want "12,5" from 12500000, we need to pass 12.5 and suffix "mi+".

    let displayValue = stat.value;
    let finalSuffix = stat.suffix;

    if (stat.compact) {
        // Simple manual compact logic since NumberFlow animates the number value
        if (stat.value >= 1000000) {
            displayValue = stat.value / 1000000;
        }
    }

    return (
        <div
            ref={ref}
            className="relative flex flex-col items-center p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm group transition-all duration-500 ease-out hover:-translate-y-2 hover:border-emerald-500/30 hover:bg-white/10 hover:shadow-2xl hover:shadow-emerald-500/5"
        >
            <dt className="mt-2 text-base font-medium text-gray-400 text-center">{stat.name}</dt>
            <dd className="flex items-baseline justify-center gap-1 text-4xl font-bold tracking-tight text-white sm:text-5xl my-4 whitespace-nowrap">
                {stat.prefix && (
                    <span className="text-2xl text-emerald-400 font-medium mr-1 self-center mb-auto pt-2">
                        {stat.prefix}
                    </span>
                )}

                <NumberFlow
                    value={isInView ? displayValue : 0}

                    format={{
                        maximumFractionDigits: stat.fractionDigits,
                        minimumFractionDigits: stat.fractionDigits
                    }}
                    className="tabular-nums"
                />

                {finalSuffix && (
                    <span className="text-3xl text-emerald-400 ml-0.5 self-center mb-auto pt-2">
                        {finalSuffix}
                    </span>
                )}
            </dd>
            <dd className="text-xs text-gray-500 text-center uppercase tracking-wider leading-relaxed max-w-[80%] mx-auto">
                {stat.description}
            </dd>
        </div>
    );
}
