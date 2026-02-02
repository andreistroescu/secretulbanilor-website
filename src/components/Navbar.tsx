import React from 'react';
import { content, type ContentMode } from '../data/content';
import { Logo } from './Logo';

interface NavbarProps {
    mode: ContentMode;
    setMode: (mode: ContentMode) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ mode, setMode }) => {
    const theme = content[mode].theme;

    return (
        <nav className={`w-full p-4 flex justify-between items-center transition-all duration-500 bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50`}>
            <Logo />

            <div className="flex items-center gap-4">
                {/* Toggle - Cleaner, pill shape */}
                <button
                    onClick={() => setMode(mode === 'student' ? 'parent' : 'student')}
                    className={`relative flex items-center px-1 bg-gray-100 rounded-full h-10 w-36 cursor-pointer overflow-hidden transition-all duration-300 hover:bg-gray-200 ring-1 ring-gray-200`}
                >
                    <div className={`absolute w-[50%] h-[80%] bg-white rounded-full shadow-sm transition-all duration-500 transform ${mode === 'student' ? 'translate-x-[2px]' : 'translate-x-[68px]'}`}></div>

                    <span className={`z-10 w-1/2 text-center text-xs font-bold transition-colors ${mode === 'student' ? 'text-gray-900' : 'text-gray-400'}`}>
                        Liceeni
                    </span>
                    <span className={`z-10 w-1/2 text-center text-xs font-bold transition-colors ${mode === 'parent' ? 'text-gray-900' : 'text-gray-400'}`}>
                        Părinți
                    </span>
                </button>

                <a
                    href="https://bookzone.ro/carte/secretul-banilor-irina-chitu?srsltid=AfmBOoq7DUhciLu3P0fsZh0SNaIi0Nshv6AbZJZDSN9Y4me4LAaFHt2h"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`hidden md:block px-6 py-2.5 rounded-xl font-bold text-sm transition-all transform hover:-translate-y-0.5 ${theme.button}`}
                >
                    {mode === 'student' ? 'Comandă Acum' : 'Cumpără Cartea'}
                </a>
            </div>
        </nav>
    );
};
