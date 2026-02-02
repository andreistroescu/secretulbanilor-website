import React from 'react';

export const GoodreadsWidget = () => {
    return (
        <a
            href="https://www.goodreads.com/book/show/208611861-secretul-banilor"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#F4F1EA] px-4 py-2 rounded-lg border border-[#EBE8D5] hover:border-[#D6CAB0] transition-colors shadow-sm w-fit mx-auto md:mx-0 mb-6 group"
        >
            <div className="flex flex-col items-center">
                <span className="text-[#382110] font-bold font-serif leading-none tracking-tight">goodreads</span>
            </div>
            <div className="h-8 w-px bg-[#D6CAB0]"></div>
            <div className="flex items-center gap-1">
                <span className="font-bold text-slate-900 text-lg">4.62</span>
                <div className="flex text-yellow-500">
                    {'★'.repeat(4)}{'★'.slice(0, 1)} {/* Approximate stars */}
                    <span className="relative overflow-hidden w-[10px] inline-block">
                        <span className="absolute left-0">★</span>
                    </span>
                </div>
                <span className="text-xs text-slate-500 ml-1 group-hover:underline">Vezi recenzii</span>
            </div>
        </a>
    )
}
