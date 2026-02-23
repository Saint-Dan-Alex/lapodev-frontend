import React from 'react';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';

interface LogoProps {
    className?: string;
    variant?: 'default' | 'light';
}

export const Logo: React.FC<LogoProps> = ({ className, variant = 'default' }) => {
    const isLight = variant === 'light';
    const t = useTranslations('Brand');

    return (
        <div className={cn("flex items-center gap-3", className)}>
            <div className="flex items-center relative gap-3">
                {/* Emblem - Always keeping a hint of brand Purple or respecting the variant */}
                <div className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center border-2 shrink-0 overflow-hidden",
                    isLight ? "bg-white border-white/20" : "bg-primary border-primary/20"
                )}>
                    {/* The 'L' is the brand centerpiece - if light bg, use purple L. if purple bg, use white L */}
                    <span className={cn(
                        "text-2xl font-serif font-bold",
                        isLight ? "text-[#8b2fc9]" : "text-white"
                    )}>L</span>
                </div>

                {/* Text Block */}
                <div className="flex flex-col">
                    <div className="flex items-baseline gap-1">
                        <span className={cn(
                            "text-sm font-bold uppercase tracking-tight leading-tight",
                            isLight ? "text-white" : "text-primary"
                        )}>
                            {t('name')}
                        </span>
                    </div>
                    <span className={cn(
                        "text-[9px] font-medium uppercase tracking-widest leading-tight opacity-80",
                        isLight ? "text-white/80" : "text-muted-foreground"
                    )}>
                        {t('slogan')}
                    </span>
                    <span className={cn(
                        "text-[8px] font-normal uppercase tracking-[0.2em] leading-tight opacity-60",
                        isLight ? "text-white/60" : "text-muted-foreground/60"
                    )}>
                        {t('institution')}
                    </span>
                </div>
            </div>
        </div>
    );
};
