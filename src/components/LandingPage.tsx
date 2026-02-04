import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { content, type ContentMode } from '../data/content';
import { motion } from 'framer-motion';
import { Benefits } from './Benefits';
import { Footer } from './Footer';
import { Press } from './Press';
import { GoodreadsWidget } from './GoodreadsWidget';
import { BookPreviewModal } from './BookPreviewModal';
import { Authors } from './Authors';
import { AsSeenOn } from './AsSeenOn';
import { Reviews } from './Reviews';

export const LandingPage = () => {
    const [mode, setMode] = useState<ContentMode>('student');
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);
    const theme = content[mode].theme;

    return (
        <div className={`min-h-screen transition-colors duration-700 ${theme.bgApp} ${theme.text} selection:bg-purple-200 selection:text-purple-900`}>
            <Navbar mode={mode} setMode={setMode} />
            <BookPreviewModal isOpen={isPreviewOpen} onClose={() => setIsPreviewOpen(false)} mode={mode} />

            <main className="pt-16 pb-24">
                <div className="container mx-auto px-4">
                    <motion.div
                        key={mode}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="flex flex-col md:flex-row items-center justify-between gap-12"
                    >
                        {/* Text Area */}
                        <div className="flex-1 text-center md:text-left space-y-6">
                            <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase ${theme.iconBg} mb-4`}>
                                {content[mode].hero.badge}
                            </span>

                            <GoodreadsWidget />

                            <h1
                                className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight text-slate-900"
                                dangerouslySetInnerHTML={{ __html: content[mode].hero.headline }}
                            />

                            <p className="text-lg md:text-xl text-slate-600 max-w-xl mx-auto md:mx-0 leading-relaxed">
                                {content[mode].hero.subheadline}
                            </p>

                            <div className="pt-4">
                                <a
                                    href={content[mode].hero.ctaLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`inline-block px-10 py-4 text-lg rounded-xl font-bold transition-all transform hover:scale-105 active:scale-95 ${theme.button}`}
                                >
                                    {content[mode].hero.cta}
                                </a>
                            </div>
                        </div>

                        {/* Book Visual Area */}
                        <div className="flex-1 w-full max-w-md relative group cursor-pointer" onClick={() => setIsPreviewOpen(true)}>
                            <div className={`absolute inset-0 bg-gradient-to-tr ${theme.gradient} opacity-20 blur-3xl rounded-full transform scale-90`}></div>

                            <div className="relative aspect-[3/4] bg-transparent flex items-center justify-center transition-all duration-500 group-hover:scale-105 group-hover:-rotate-2">
                                <img
                                    src="/book-cover.jpg"
                                    alt="Secretul Banilor - Coperta"
                                    className="rounded-r-xl rounded-l-md shadow-2xl object-cover h-full w-full"
                                />

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-black/60 rounded-r-xl rounded-l-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-6 text-center backdrop-blur-sm">
                                    <span className="text-4xl mb-4">📖</span>
                                    <span className="font-bold text-lg">Citește ideile principale</span>
                                    <span className="text-xs text-gray-300 mt-2 uppercase tracking-widest">Click pentru preview</span>
                                </div>
                            </div>
                        </div>

                    </motion.div>
                </div>

                <AsSeenOn mode={mode} />

                <Press mode={mode} />
                <Authors mode={mode} />
                <Benefits mode={mode} />
                <Reviews mode={mode} />
            </main>

            <Footer mode={mode} />
        </div>
    );
};
