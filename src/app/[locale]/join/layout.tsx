import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import { ReactNode } from 'react';

export async function generateMetadata({
    params
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Metadata' });

    return {
        title: t('join'),
    };
}

export default function JoinLayout({ children }: { children: ReactNode }) {
    return <>{children}</>;
}
