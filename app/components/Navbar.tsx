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
                        <span>Versão: <span className="text-cyan-400">v0.1.1 (BETA)</span></span>
                    </div>

                    <div className="hidden md:block">
                        <span>Status: <span className="text-yellow-500">WIP</span></span>
                    </div>

                    <div>
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

                        <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                            {patchNotes.patches.map((note: { version: string; date: string; desc: string }) => (
                                <div key={note.version} className="border-l-2 border-cyan-900 pl-4">
                                    <p className="text-white text-xs">{note.version} — {note.date}</p>
                                    <p className="text-gray-400 text-[11px] leading-relaxed mt-1">
                                        {note.desc}
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