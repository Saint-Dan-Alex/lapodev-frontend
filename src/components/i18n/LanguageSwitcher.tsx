'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { Button } from '@/components/ui/button';

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const switchLocale = (newLocale: string) => {
        router.replace(pathname, { locale: newLocale });
    };

    return (
        <div className="flex items-center gap-1">
            <Button
                variant={locale === 'fr' ? 'secondary' : 'ghost'}
                size="sm"
                onClick={() => switchLocale('fr')}
                className="text-[10px] font-bold h-7 px-2"
            >
                FR
            </Button>
            <Button
                variant={locale === 'en' ? 'secondary' : 'ghost'}
                size="sm"
                onClick={() => switchLocale('en')}
                className="text-[10px] font-bold h-7 px-2"
            >
                EN
            </Button>
        </div>
    );
}
