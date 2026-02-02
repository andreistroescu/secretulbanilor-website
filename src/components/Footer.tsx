import React from 'react';
import { content, type ContentMode } from '../data/content';

interface Props {
    mode: ContentMode;
}



export const Footer: React.FC<Props> = ({ mode }) => {
    return (
        <footer className={`py-12 ${mode === 'student' ? 'bg-black text-gray-400' : 'bg-slate-900 text-slate-400'}`}>
            <div className="container mx-auto px-4 text-center">
                <p>&copy; {new Date().getFullYear()} Secretul Banilor. Toate drepturile rezervate.</p>
            </div>
        </footer>
    )
}
