import React from 'react';
import { content, type ContentMode } from '../data/content';

export const Slogans = ({ mode }: { mode: ContentMode }) => {
    const theme = content[mode].theme;

    return (
        <section className={`py-12 bg-gradient-to-br from-slate-50 to-white relative`}>
            {/* Background decorative elements */}
            <div className={`absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] ${theme.gradient} to-transparent blur-3xl`} />

            <div className="container mx-auto px-4 max-w-4xl relative z-10">
                <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 text-center">
                    
                    {/* First Slogan */}
                    <div className="flex-1 p-8 rounded-3xl border border-slate-100 bg-white/70 backdrop-blur shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                        <div className={`absolute -right-4 -top-4 text-8xl opacity-10 ${theme.primary} font-serif leading-none group-hover:scale-110 transition-transform`}>
                            "
                        </div>
                   
                        <h3 className={`text-2xl md:text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r ${theme.gradient} mb-2`}>
                            Investește în TINE!
                        </h3>
                        <p className="text-slate-500 font-medium">Cea mai sigură investiție</p>
                    </div>

                    {/* Second Slogan */}
                    <div className="flex-1 p-8 rounded-3xl border border-slate-100 bg-white/70 backdrop-blur shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                        <div className={`absolute -right-4 -top-4 text-8xl opacity-10 text-slate-800 font-serif leading-none group-hover:scale-110 transition-transform`}>
                            "
                        </div>

                        <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-800 mb-2">
                            Fii SMART cu banii tăi!
                        </h3>
                        <p className="text-slate-500 font-medium">Acționează cu un plan</p>
                    </div>

                </div>
            </div>
        </section>
    );
};
