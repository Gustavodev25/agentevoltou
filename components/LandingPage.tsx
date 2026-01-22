import Image from "next/image";
import Link from "next/link";

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

                <div className="relative z-10 flex min-h-[80vh] w-full max-w-7xl flex-col justify-center px-6 sm:px-8">

                    <div className="w-full max-w-4xl text-left">

                        <h1 className="flex flex-col text-6xl font-bold tracking-tighter text-white sm:text-7xl md:text-8xl lg:text-9xl">
                            <span className="opacity-90">Sua Agência</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-white/60">Digital</span>
                            <span className="opacity-90">Parceira</span>
                        </h1>
                    </div>

                    <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden md:block lg:right-16 xl:right-24">
                        <div className="relative flex h-32 w-32 lg:h-36 lg:w-36 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm transition-all hover:scale-110 hover:border-emerald-500/30">
                            <div className="absolute inset-0 animate-[spin_12s_linear_infinite]">
                                <svg className="h-full w-full" viewBox="0 0 100 100">
                                    <defs>
                                        <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                                    </defs>
                                    <text fontSize="10" fill="rgba(255,255,255,0.85)" fontWeight="600" letterSpacing="3">
                                        <textPath xlinkHref="#circle">
                                            MARKETING DIGITAL • AGÊNCIA •
                                        </textPath>
                                    </text>
                                </svg>
                            </div>

                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400/20 to-emerald-600/10 border border-emerald-400/30">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6 text-emerald-300">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
