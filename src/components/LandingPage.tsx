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
import { QA } from './QA';
import { Slogans } from './Slogans';

export const LandingPage = () => {
    const [mode, setMode] = useState<ContentMode>('student');
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);
    const theme = content[mode].theme;

    return (
        <div className={`min-h-screen relative transition-colors duration-700 ${theme.bgApp} ${theme.text} selection:bg-purple-200 selection:text-purple-900`}>
            
            {/* Ambient background for Student Mode */}
            {mode === 'student' && (
                <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                    <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-purple-300/20 blur-[120px] mix-blend-multiply opacity-70 animate-blob"></div>
                    <div className="absolute top-[20%] -right-[20%] w-[60vw] h-[60vw] rounded-full bg-pink-300/20 blur-[120px] mix-blend-multiply opacity-70 animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-[10%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-indigo-300/20 blur-[120px] mix-blend-multiply opacity-70 animate-blob animation-delay-4000"></div>
                </div>
            )}

            <div className="relative z-10 hidden md:block">
                <Navbar mode={mode} setMode={setMode} />
            </div>
            
            <div className="relative z-10 md:hidden sticky top-0 bg-white/95 backdrop-blur-md shadow-sm">
                <Navbar mode={mode} setMode={setMode} isMobile />
            </div>

            <BookPreviewModal isOpen={isPreviewOpen} onClose={() => setIsPreviewOpen(false)} mode={mode} />

            <main className="pt-16 pb-10">
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
                            <h1
                                className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight text-slate-900"
                                dangerouslySetInnerHTML={{ __html: content[mode].hero.headline }}
                            />

                            <p className="text-lg md:text-xl text-slate-600 max-w-xl mx-auto md:mx-0 leading-relaxed">
                                {content[mode].hero.subheadline}
                            </p>



                            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                                <a
                                    href={content[mode].hero.ctaLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`inline-block px-10 py-4 text-lg text-center rounded-xl font-bold transition-all transform hover:scale-105 active:scale-95 w-full sm:w-auto ${theme.button}`}
                                >
                                    {content[mode].hero.cta}
                                </a>

                                <a
                                    href={content[mode].hero.sampleCtaLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`inline-block px-10 py-4 text-lg text-center rounded-xl font-bold transition-all transform hover:scale-105 active:scale-95 w-full sm:w-auto bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-200`}
                                >
                                    {content[mode].hero.sampleCta}
                                </a>
                            </div>

                            <div className="pt-2 flex justify-center md:justify-start">
                                <GoodreadsWidget />
                            </div>
                        </div>

                        {/* Book Visual Area */}
                        <div className="flex-1 w-full max-w-md relative group cursor-pointer" onClick={() => setIsPreviewOpen(true)}>
                            <div className={`absolute inset-0 bg-gradient-to-tr ${theme.gradient} opacity-20 blur-3xl rounded-full transform scale-90`}></div>

                            <div className="relative aspect-[3/4] bg-transparent flex items-center justify-center transition-all duration-500 group-hover:scale-105 group-hover:-rotate-2">
                                <img
                                    src="/book-cover.jpg"
                                    alt="Secretul Banilor - Coperta"
                                    loading="lazy"
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

                    {/* Trust Metrics Section */}
                    <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            { label: 'au învățat alfabetizarea financiară.', value: 'Peste 5.000 de elevi' },
                            { label: 'pe platformele de recenzii.', value: 'Rating 4.8/5' },
                            { label: 'a autorilor în sistemul bancar.', value: '10+ ani de expertiză' }
                        ].map((stat, i) => (
                            <div key={i} className="text-center group px-2">
                                <div className={`text-2xl md:text-3xl font-black mb-2 ${theme.primary} transition-transform group-hover:scale-110 duration-300`}>{stat.value}</div>
                                <div className="text-slate-500 font-medium text-sm md:text-base">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <AsSeenOn mode={mode} />

                <Press mode={mode} />
                <Authors mode={mode} />
                <Benefits mode={mode} />
                <Slogans mode={mode} />
                <Reviews mode={mode} />
                <QA mode={mode} />

                {/* Bottom CTA */}
                <section className="pt-20 pb-4 text-center px-4">
                    <blockquote className={`mb-12 border-l-4 pl-6 italic text-xl md:text-2xl max-w-3xl mx-auto text-slate-700 text-left bg-slate-50/50 p-6 rounded-r-2xl border-current ${theme.primary} shadow-sm`}>
                        „Secretul banilor: investește în tine, în obiceiuri financiare sănătoase și nu renunța — drumul de la zero la erou financiar începe cu disciplina ta.”
                    </blockquote>
                    
                    <div className="flex flex-col items-center gap-6">
                        <div className={`p-8 md:p-12 rounded-3xl border-2 ${theme.card} max-w-3xl w-full shadow-lg bg-white relative overflow-hidden flex flex-col md:flex-row items-center md:items-start justify-between gap-8 text-left`}>
                            {/* Decorative background element */}
                            <div className={`absolute -top-10 -right-10 w-64 h-64 opacity-10 rounded-full blur-3xl ${theme.gradient} bg-gradient-to-tr`}></div>
                            
                            <div className="relative z-10 flex-1 flex items-center md:items-start flex-col">
                                <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase ${theme.iconBg} mb-6`}>
                                    🎁 Ofertă specială
                                </span>
                                
                                <p className="text-slate-600 text-lg md:text-xl text-center md:text-left leading-relaxed">
                                    Comandă cartea cu doar <span className={`font-bold text-2xl ${theme.primary}`}>70 lei</span> folosind codul de reducere{' '}
                                    <span className="inline-block mt-2 md:mt-0 font-mono bg-slate-100 px-3 py-1 md:ml-2 rounded-md text-slate-800 font-bold border border-slate-300 tracking-wider text-xl shadow-inner">
                                        FINZOOM
                                    </span>
                                </p>
                            </div>

                            <div className="relative z-10 w-full md:w-auto self-center">
                                <a
                                    href={content[mode].hero.ctaLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`inline-block px-10 py-5 w-full md:w-auto whitespace-nowrap text-center rounded-2xl font-bold text-lg transition-all transform hover:scale-105 active:scale-95 shadow-xl ${theme.button}`}
                                >
                                    {content[mode].hero.cta}
                                </a>
                            </div>
                        </div>

                        {/* Trust Badges */}
                        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-4 w-full max-w-4xl mx-auto pt-6">
                            {[
                                { name: '🔒 Plată securizată prin PayU / Netopia' },
                                { name: '📚 Partener oficial Editura Corint' },
                                { name: '🚚 Livrare prin Curierat Rapid' }
                            ].map((badge, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <span className="text-sm font-bold text-slate-700 bg-slate-100 px-5 py-2.5 rounded-xl border border-slate-200 shadow-sm">{badge.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer mode={mode} />

            {/* Sticky Mobile CTA */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl z-50 transform transition-all">
                <div className="flex items-center justify-between gap-4">
                    <div className="flex flex-col">
                        <span className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-0.5">Ofertă specială</span>
                        <span className={`text-sm font-bold ${theme.primary} leading-tight`}>70 lei cu codul FINZOOM</span>
                    </div>
                    <a
                        href={content[mode].hero.ctaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`whitespace-nowrap px-6 py-2.5 rounded-xl font-bold text-sm shadow-md transition-all active:scale-95 ${theme.button}`}
                    >
                        {content[mode].hero.cta}
                    </a>
                </div>
            </div>
        </div>
    );
};
