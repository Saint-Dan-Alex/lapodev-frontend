'use client';

import React from 'react';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function LanguageSwitcher({ variant = 'light' }: { variant?: 'default' | 'light' }) {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    const switchLocale = (newLocale: string) => {
        router.replace(pathname, { locale: newLocale });
    };

    // Before mounting, always use the neutral state to match server
    const isLight = variant === 'light';

    return (
        <div className="flex items-center gap-1">
            <Button
                variant={locale === 'fr' ? (isLight ? 'default' : 'secondary') : 'ghost'}
                size="sm"
                onClick={() => switchLocale('fr')}
                className={cn(
                    "text-[10px] font-black h-7 px-2 rounded-md transition-all",
                    locale === 'fr'
                        ? (isLight ? "bg-white text-primary" : "bg-primary text-white")
                        : (isLight ? "text-white hover:bg-white/10" : "text-slate-600 hover:bg-slate-100")
                )}
            >
                FR
            </Button>
            <Button
                variant={locale === 'en' ? (isLight ? 'default' : 'secondary') : 'ghost'}
                size="sm"
                onClick={() => switchLocale('en')}
                className={cn(
                    "text-[10px] font-black h-7 px-2 rounded-md transition-all",
                    locale === 'en'
                        ? (isLight ? "bg-white text-primary" : "bg-primary text-white")
                        : (isLight ? "text-white hover:bg-white/10" : "text-slate-600 hover:bg-slate-100")
                )}
            >
                EN
            </Button>
        </div>
    );
}
