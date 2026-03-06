import React, { useState } from 'react';
import { content, type ContentMode } from '../data/content';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        id: "q1",
        question: "Care este Secretul banilor?",
        answer: "„Secretul banilor: investește în tine, în obiceiuri financiare sănătoase și nu renunța — drumul de la zero la erou financiar începe cu disciplina ta.”",
        isQuote: true
    },
    {
        id: "q2",
        question: "De ce e importantă educația financiară?",
        answer: "Pentru că îți oferă libertatea de a alege. Te ferește de capcanele datoriilor, te ajută să înțelegi cum funcționează economia și, cel mai important, îți dă instrumentele cu care să-ți construiești un viitor sigur și independent. Banii nu vin cu instrucțiuni, așa că trebuie să le înveți tu."
    },
    {
        id: "q3",
        question: "De ce am scris această carte?",
        answer: "Pentru că ne-am dorit să acoperim acel gol lăsat de școală. Ne-am dorit să explicăm pe limba tuturor conceptele economice complicate și să oferim un ghid practic, adaptat realității din România, care să ajute tinerii și părinții să ia decizii financiare mai bune încă de la primii bani."
    }
];

export const QA = ({ mode }: { mode: ContentMode }) => {
    const theme = content[mode].theme;
    const [openId, setOpenId] = useState<string | null>("q1");

    return (
        <section className={`py-16 ${theme.bgApp} transition-colors duration-700`}>
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">Întrebări Frecvente</h2>
                    <p className="text-xl text-slate-600">Răspunsuri rapide la curiozitățile tale.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq) => (
                        <div key={faq.id} className={`border rounded-2xl overflow-hidden transition-all ${theme.card}`}>
                            <button
                                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                                className="w-full px-6 py-5 text-left flex justify-between items-center bg-white hover:bg-slate-50 transition-colors"
                            >
                                <span className="font-bold text-lg text-slate-900 pr-4">{faq.question}</span>
                                <span className={`transform transition-transform duration-300 text-xl font-bold flex-shrink-0 ${openId === faq.id ? 'rotate-180' : ''} ${theme.primary}`}>
                                    🔽
                                </span>
                            </button>
                            
                            <AnimatePresence>
                                {openId === faq.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-5 pt-2 text-slate-700 border-t border-slate-100 bg-white">
                                            <p className={`${faq.isQuote ? 'italic text-lg' : 'text-base leading-relaxed'}`}>
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
