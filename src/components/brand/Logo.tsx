import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
    className?: string;
    variant?: 'default' | 'light';
}

export const Logo: React.FC<LogoProps> = ({ className, variant = 'default' }) => {
    return (
        <div className={cn("flex items-center gap-4 lg:gap-6 bg-white px-4 py-2 rounded-2xl shadow-xl shadow-black/10 border border-white/20", className)}>
            <div className="relative group">
                <Image
                    src="/logo.png"
                    alt="Lapodev Logo"
                    width={180}
                    height={60}
                    className="h-10 lg:h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                    priority
                />
            </div>
            <div className="w-px h-8 lg:h-10 bg-slate-200"></div>
            <div className="relative group">
                <Image
                    src="/unikin.png"
                    alt="UNIKIN Logo"
                    width={120}
                    height={60}
                    className="h-9 lg:h-11 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                    priority
                />
            </div>
        </div>
    );
};
