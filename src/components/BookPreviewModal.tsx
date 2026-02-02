import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, BookOpen, CheckCircle } from 'lucide-react';
import { content, type ContentMode } from '../data/content';

interface Props {
    isOpen: boolean;
    onClose: () => void;
    mode: ContentMode;
}

export const BookPreviewModal: React.FC<Props> = ({ isOpen, onClose, mode }) => {
    const data = content[mode].preview;
    const theme = content[mode].theme;

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    >
                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className={`bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl relative ${mode === 'student' ? 'border-2 border-purple-100' : 'border border-gray-200'}`}
                        >
                            {/* Header */}
                            <div className={`p-6 md:p-8 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white/95 backdrop-blur z-10`}>
                                <div className="flex items-center gap-3">
                                    <div className={`p-2 rounded-xl ${theme.iconBg}`}>
                                        <BookOpen size={24} />
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-slate-900">{data.title}</h3>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-gray-100 rounded-full transition-colors text-slate-500 hover:text-slate-800"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Body */}
                            <div className="p-6 md:p-8 space-y-6">
                                <div className="grid gap-4">
                                    {data.chapters.map((chapter, index) => (
                                        <div key={index} className={`p-4 rounded-xl transition-colors hover:bg-gray-50 flex gap-4 items-start group`}>
                                            <div className="mt-1">
                                                <CheckCircle size={20} className={mode === 'student' ? 'text-purple-500' : 'text-blue-600'} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 mb-1 group-hover:text-purple-700 transition-colors">{chapter.title}</h4>
                                                <p className="text-slate-500 text-sm leading-relaxed">{chapter.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="p-6 md:p-8 bg-gray-50 border-t border-gray-100 flex justify-end">
                                <button
                                    onClick={onClose}
                                    className={`px-6 py-3 rounded-xl font-bold text-sm ${theme.button}`}
                                >
                                    Am Înțeles
                                </button>
                            </div>

                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
