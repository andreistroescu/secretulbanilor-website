import React from 'react';
import { content, type ContentMode } from '../data/content';
import { TrendingUp, ShieldAlert, Zap, PiggyBank, ShieldCheck, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

const icons = {
    TrendingUp,
    ShieldAlert,
    Zap,
    PiggyBank,
    ShieldCheck,
    AlertTriangle
};

interface BenefitsProps {
    mode: ContentMode;
}

export const Benefits: React.FC<BenefitsProps> = ({ mode }) => {
    const data = content[mode].benefits;
    const theme = content[mode].theme;

    return (
        <section className="py-24 px-4 bg-transparent">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-16 text-slate-900 leading-tight">
                    {mode === 'student' ? (
                        <>De ce să citești <span className={`text-transparent bg-clip-text bg-gradient-to-r ${theme.gradient}`}>Secretul Banilor</span>?</>
                    ) : (
                        <>Beneficii reale pentru <span className="text-blue-800">viitorul copilului</span></>
                    )}
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {data.map((benefit, index) => {
                        const Icon = icons[benefit.icon as keyof typeof icons] || Zap;

                        return (
                            <motion.div
                                key={benefit.title + mode}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className={`p-8 rounded-3xl ${theme.card} transition-all duration-300 group`}
                            >
                                <div className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center ${theme.iconBg} transform group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-slate-900">{benefit.title}</h3>
                                <p className="text-slate-500 leading-relaxed">{benefit.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
