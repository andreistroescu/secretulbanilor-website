import React from 'react';
import { motion } from 'framer-motion';
import { content, type ContentMode } from '../data/content';
import { Quote } from 'lucide-react';

interface Props {
    mode: ContentMode;
}

export const Reviews: React.FC<Props> = ({ mode }) => {
    const data = content[mode].reviews;
    const theme = content[mode].theme;

    return (
        <section className="py-24 px-4 bg-transparent">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-16 text-slate-900 leading-tight">
                    {data.title}
                </h2>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {data.list.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`p-8 rounded-3xl ${theme.card} relative flex flex-col justify-between group`}
                        >
                            <div className="absolute -top-4 -left-4 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-slate-300 group-hover:text-purple-500 transition-colors">
                                <Quote size={20} fill="currentColor" />
                            </div>

                            <p className="text-slate-600 leading-relaxed italic mb-8 relative z-10">
                                "{review.text}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-2xl shadow-inner">
                                    {review.avatar}
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">{review.author}</h4>
                                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">{review.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
