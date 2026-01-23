"use client"

import React from "react"
import { cn } from "@/lib/utils"

// Avatar Components simplified
function Avatar({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)} {...props}>
            {children}
        </div>
    )
}

function AvatarImage({ src, alt, className, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) {
    return (
        <img
            src={src}
            alt={alt}
            className={cn("aspect-square h-full w-full object-cover", className)}
            {...props}
        />
    )
}

// Testimonial Types & Components
export interface TestimonialAuthor {
    name: string
    handle: string
    avatar: string
}

export interface TestimonialCardProps {
    author: TestimonialAuthor
    text: string
    href?: string
    className?: string
}

function TestimonialCard({
    author,
    text,
    href,
    className
}: TestimonialCardProps) {
    const Card = href ? 'a' : 'div'

    return (
        // @ts-ignore
        <Card
            {...(href ? { href } : {})}
            className={cn(
                "flex flex-col rounded-lg border-t border-gray-100",
                "bg-gradient-to-b from-gray-50/50 to-white",
                "p-4 text-start sm:p-6 shadow-sm",
                "hover:from-gray-100/60 hover:to-gray-50/20",
                "max-w-[320px] sm:max-w-[320px] w-[320px]",
                "transition-colors duration-300",
                className
            )}
        >
            <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12 border border-gray-200">
                    <AvatarImage src={author.avatar} alt={author.name} />
                </Avatar>
                <div className="flex flex-col items-start">
                    <h3 className="text-md font-semibold leading-none text-gray-900">
                        {author.name}
                    </h3>
                    <p className="text-sm text-emerald-600 font-medium">
                        {author.handle}
                    </p>
                </div>
            </div>
            <p className="sm:text-md mt-4 text-sm text-gray-600 leading-relaxed">
                {text}
            </p>
        </Card>
    )
}

const testimonialsData = [
    {
        author: {
            name: "Carlos Mendes",
            handle: "CEO de Empresa de Tecnologia",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        },
        text: "A agência transformou completamente nossa presença digital. O tráfego qualificado aumentou 300% em apenas 3 meses."
    },
    {
        author: {
            name: "Fernanda Oliveira",
            handle: "Diretora de Empresa de Moda",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        },
        text: "Profissionalismo impecável. A equipe entendeu nossa identidade e criou campanhas que realmente convertem."
    },
    {
        author: {
            name: "Ricardo Souza",
            handle: "Fundador de Startup",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        },
        text: "O ROI que tivemos com as campanhas de Google Ads superou todas as nossas expectativas. Parceiros estratégicos."
    },
    {
        author: {
            name: "Juliana Costa",
            handle: "Gerente de E-commerce",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        },
        text: "A melhor decisão que tomamos foi contratar a agência. O suporte é rápido e os resultados são consistentes."
    },
    {
        author: {
            name: "André Pires",
            handle: "CTO de Software House",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        },
        text: "Além de entregar um site incrível, a estratégia de SEO nos colocou na primeira página para palavras-chave essenciais."
    },
];

export function TestimonialsSection() {
    return (
        <section className="bg-white text-gray-900 py-12 sm:py-24 md:py-32 px-0 font-sans border-t border-gray-100">
            <div className="mx-auto flex w-full flex-col items-center gap-4 text-center sm:gap-16">
                <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
                    <h2 className="max-w-[720px] text-3xl font-bold leading-tight sm:text-5xl sm:leading-tight">
                        O que dizem <span className="text-emerald-600">nossos parceiros</span>
                    </h2>
                    <p className="text-md max-w-[600px] font-medium text-gray-500 sm:text-xl">
                        Histórias reais de empresas que escalaram seus resultados conosco.
                    </p>
                </div>

                <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                    <div className="group flex overflow-hidden p-2 [--gap:1rem] flex-row w-full [--duration:40s]">
                        <div className="flex shrink-0 justify-start [gap:var(--gap)] pr-[var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
                            {[...testimonialsData, ...testimonialsData].map((testimonial, i) => (
                                <TestimonialCard
                                    key={`1-${i}`}
                                    author={testimonial.author}
                                    text={testimonial.text}
                                />
                            ))}
                        </div>
                        <div className="flex shrink-0 justify-start [gap:var(--gap)] pr-[var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
                            {[...testimonialsData, ...testimonialsData].map((testimonial, i) => (
                                <TestimonialCard
                                    key={`2-${i}`}
                                    author={testimonial.author}
                                    text={testimonial.text}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-white sm:block" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-white sm:block" />
                </div>
            </div>
        </section>
    )
}
