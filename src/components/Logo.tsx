import React from 'react';

export const Logo: React.FC = () => {
    return (
        <div className="flex items-center gap-2">
            <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* House / Bank Structure */}
                <path d="M20 50L50 25L80 50V90H20V50Z" fill="#1e293b" />
                <rect x="35" y="65" width="10" height="25" fill="#e2e8f0" />
                <rect x="55" y="65" width="10" height="25" fill="#e2e8f0" />

                {/* Open Book Overlaying the bottom */}
                <path d="M10 80C10 80 30 85 50 80C70 85 90 80 90 80V95C90 95 70 100 50 95C30 100 10 95 10 95V80Z" fill="#8E4A9C" />
                <path d="M50 80V95" stroke="white" strokeWidth="2" />
            </svg>
            <div className="flex flex-col leading-none">
                <span className="font-black text-lg text-slate-900 tracking-tight">Secretul</span>
                <span className="font-bold text-sm text-slate-500 uppercase tracking-widest">Banilor</span>
            </div>
        </div>
    );
};
