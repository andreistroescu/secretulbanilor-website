import React from 'react';
import { motion } from 'framer-motion';
import { content, type ContentMode } from '../data/content';
import { GraduationCap, Award } from 'lucide-react';

interface Props {
    mode: ContentMode;
}

export const Authors: React.FC<Props> = ({ mode }) => {
    const data = content[mode].authors;
    const theme = content[mode].theme;

    return (
        <section className="py-24 px-4 bg-white overflow-hidden">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-16 text-slate-900 leading-tight">
                    {data.title}
                </h2>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {data.list.map((author, index) => (
                        <motion.div
                            key={author.name}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className={`relative p-8 rounded-3xl ${theme.card} flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left`}
                        >
                            <div className="relative w-40 h-40 shrink-0">
                                <div className={`absolute -inset-2 bg-gradient-to-tr ${theme.gradient} opacity-20 rounded-2xl blur-lg`}></div>
                                <img
                                    src={author.image}
                                    alt={author.name}
                                    className="relative w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500 shadow-md"
                                />
                            </div>

                            <div className="space-y-4">
                                <div className="space-y-1">
                                    <h3 className="text-2xl font-black text-slate-900 tracking-tight">{author.name}</h3>
                                    <p className={`text-sm font-bold uppercase tracking-widest ${mode === 'student' ? 'text-purple-600' : 'text-blue-700'}`}>
                                        {author.role}
                                    </p>
                                </div>

                                <p className="text-slate-500 leading-relaxed text-sm">
                                    {author.bio}
                                </p>

                                <div className="flex gap-4 justify-center md:justify-start">
                                    <div className={`p-2 rounded-lg ${theme.iconBg}`}>
                                        <GraduationCap size={18} />
                                    </div>
                                    <div className={`p-2 rounded-lg ${theme.iconBg}`}>
                                        <Award size={18} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
