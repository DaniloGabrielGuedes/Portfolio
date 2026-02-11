"use client";

import { useState } from 'react';
import patchNotes from '../../public/PatchNotes.json';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <footer className="fixed top-0 left-0 w-full z-50 px-6 py-3 border-b border-white/10 bg-black/40 backdrop-blur-md">
                <div className="max-w-7xl mx-auto flex justify-between items-center text-[10px] md:text-xs uppercase tracking-widest text-gray-400 font-mono">
                    <div>
                        <span>Versão: <span className="text-cyan-400">
                            {patchNotes.patches.length > 0 ? patchNotes.patches[0].version : 'N/A'} (BETA)
                        </span></span>
                    </div>

                    <div className="flex items-center gap-3">
                        <a
                            href="/Danilo Gabriel Guedes - Desenvolvedor.pdf"
                            download="Danilo Gabriel Guedes - Desenvolvedor.pdf"
                            className="hover:text-white transition-colors flex items-center gap-2 border border-white/20 px-2 py-1 rounded bg-white/5 hover:bg-white/10 pointer-events-auto"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                className="w-3 h-3 text-cyan-400"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                            <span>Currículo</span>
                        </a>

                        <button
                            onClick={() => setIsOpen(true)}
                            className="hover:text-white transition-colors flex items-center gap-2 border border-white/20 px-2 py-1 rounded bg-white/5 hover:bg-white/10 pointer-events-auto">
                            <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
                            Patch Notes
                        </button>
                    </div>
                </div>
            </footer>

            {isOpen && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                    <div className="bg-zinc-900 border border-white/20 p-6 rounded-lg max-w-md w-full font-mono shadow-2xl">
                        <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-2">
                            <h2 className="text-cyan-400 text-sm tracking-tighter">Notas da versão</h2>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-gray-500 hover:text-white"
                            >
                                [X]
                            </button>
                        </div>

                        <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                            {patchNotes.patches.map((note: { version: string; date: string | null; desc: string[] }) => (
                                <div key={note.version} className="border-l-2 border-cyan-900 pl-4">
                                    <p className="text-white text-xs">
                                        {note.version}
                                        <span className="text-gray-500 text-[10px] ml-2">{note.date ? `- publicado em ${note.date}` : ''}</span>

                                    </p>
                                    <p className="text-gray-400 text-[11px] leading-relaxed mt-1">
                                        {note.desc.map((line, i) => (
                                            <span key={i}>• {line}<br /></span>
                                        ))}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={() => setIsOpen(false)}
                            className="w-full mt-6 py-2 border border-cyan-500/50 text-cyan-400 text-[10px] hover:bg-cyan-500/10 transition-colors uppercase"
                        >
                            Fechar
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}