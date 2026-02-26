import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import HomePageClient from '@/components/home/HomePageClient';

export async function generateMetadata({
    params
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Metadata' });

    return {
        title: t('title'),
        description: t('description')
    };
}

export default async function HomePage({
    params
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const newsT = await getTranslations({ locale, namespace: 'NewsPage' });

    // Fetch raw data from translations on the server
    const newsData = newsT.raw('data.events') as any[];
    const pubsData = newsT.raw('data.publications') as any[];

    return (
        <HomePageClient
            newsData={newsData}
            pubsData={pubsData}
        />
    );
}
