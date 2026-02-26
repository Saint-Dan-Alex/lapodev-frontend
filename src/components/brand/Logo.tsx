import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
    className?: string;
    variant?: 'default' | 'light';
}

export const Logo: React.FC<LogoProps> = ({ className, variant = 'default' }) => {
    return (
        <div className={cn("flex items-center", className)}>
            < Image
                src="/logo.png"
                alt="Lapodev Logo"
                width={180}
                height={60}
                className="h-12 w-auto object-contain"
                priority
            />
        </div >
    );
};
