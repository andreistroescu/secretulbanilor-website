import React from 'react';
import { content, type ContentMode } from '../data/content';

interface Props {
    mode: ContentMode;
}

export const AsSeenOn: React.FC<Props> = ({ mode }) => {
    const logos = content[mode].asSeenOn;

    return (
        <div className="py-8 border-y border-slate-100 bg-slate-50/50">
            <div className="container mx-auto px-4">
                <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
                    Văzută și recomandată la
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    {logos.map((logo) => (
                        <span
                            key={logo.name}
                            className={`text-lg md:text-xl font-black italic tracking-tighter ${logo.color} select-none`}
                        >
                            {logo.name}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};
