import React from 'react';
import { content, type ContentMode } from '../data/content';
import { PlayCircle } from 'lucide-react';

interface Props {
    mode: ContentMode;
}

export const Press: React.FC<Props> = ({ mode }) => {
    const data = content[mode].press;

    return (
        <section className="py-20 mt-12 bg-gray-50 rounded-3xl border border-gray-100">
            <div className="container mx-auto px-6">
                <p className="text-center text-sm font-bold uppercase tracking-widest mb-12 text-slate-400">
                    {data.title}
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    {data.videos.map((video, index) => (
                        <a
                            key={index}
                            href={video.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative block overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white"
                        >
                            {/* Thumbnail Wrapper */}
                            <div className="relative aspect-video overflow-hidden">
                                <img
                                    src={video.thumbnail}
                                    alt={video.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                    <PlayCircle className="text-white opacity-80 group-hover:opacity-100 w-12 h-12" />
                                </div>
                            </div>

                            {/* Title */}
                            <div className="p-4">
                                <h4 className="font-bold text-slate-800 text-sm line-clamp-2 leading-tight group-hover:text-blue-700 transition-colors">
                                    {video.title}
                                </h4>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};
