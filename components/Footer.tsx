import React from "react";

export function Footer() {
    return (
        <footer className="w-full py-8 bg-black border-t border-white/5">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

                <div className="text-sm text-gray-500">
                    © {new Date().getFullYear()} Agente Voltou. Todos os direitos reservados.
                </div>

                <div className="flex items-center gap-6 text-sm text-gray-500">
                    <span className="cursor-pointer hover:text-white transition-colors">Politica de Privacidade</span>
                    <span className="cursor-pointer hover:text-white transition-colors">Termos de Uso</span>
                </div>

            </div>
        </footer>
    );
}
