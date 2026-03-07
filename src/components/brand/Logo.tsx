import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
    className?: string;
    variant?: 'default' | 'light';
}

export const Logo: React.FC<LogoProps> = ({ className, variant = 'default' }) => {
    return (
        <div className={cn("flex items-center gap-2 lg:gap-3", className)}>
            <Image
                src="/logo.png"
                alt="Lapodev Logo"
                width={150}
                height={50}
                className="h-9 lg:h-10 w-auto object-contain"
                priority
            />
            <div className="w-px h-6 lg:h-8 bg-current opacity-20"></div>
            <Image
                src="/unikin.png"
                alt="UNIKIN Logo"
                width={100}
                height={50}
                className="h-8 lg:h-9 w-auto object-contain"
                priority
            />
        </div>
    );
};
