'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import {
    ArrowRight,
    BookOpen,
    Users,
    BarChart3,
    Calendar,
    FileText,
    ChevronRight,
    Download
} from 'lucide-react';
import HeroCarousel from '@/components/home/HeroCarousel';
import StatsCounter from '@/components/home/StatsCounter';
import AutoScrollCarousel from '@/components/home/AutoScrollCarousel';

interface HomePageClientProps {
    newsData: any[];
    pubsData: any[];
}

export default function HomePageClient({ newsData, pubsData }: HomePageClientProps) {
    const t = useTranslations('HomePage');
    const newsT = useTranslations('NewsPage');
    const navT = useTranslations('Navigation');
    const expertiseT = useTranslations('ExpertisePage');

    const slides = [
        {
            id: 1,
            topLabel: t('hero.topLabel'),
            title: t('hero.title'),
            subtitle: t('hero.subtitle'),
            description: t('hero.description'),
            ctaPrimary: t('hero.cta_primary'),
            ctaSecondary: t('hero.cta_secondary'),
            colorScheme: 'purple' as const,
            image: '/Carousel/1.jpeg'
        },
        {
            id: 2,
            topLabel: navT('expertise.title'),
            title: "EXPERTISE",
            subtitle: expertiseT('subtitle'),
            description: expertiseT('research.politics.intro'),
            ctaPrimary: navT('expertise.title'),
            ctaSecondary: navT('about.title'),
            colorScheme: 'blue' as const,
            image: '/Carousel/2.jpeg'
        },
        {
            id: 3,
            topLabel: navT('governance.title'),
            title: "EXCELLENCE",
            subtitle: "Un pôle d’excellence au service de l’Homme",
            description: "Une structure organisée pour l'excellence scientifique et le rayonnement international.",
            ctaPrimary: navT('governance.title'),
            ctaSecondary: navT('join'),
            colorScheme: 'gold' as const,
            image: '/Carousel/3.jpeg'
        }
    ];

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <HeroCarousel slides={slides} />

            {/* Stats Section */}
            <section className="bg-slate-50 py-24 relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-8 relative z-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 mb-32">
                        <StatsCounter
                            label={t('stats.research_projects')}
                            value="25+"
                            icon={BookOpen}
                            delay={0.1}
                        />
                        <StatsCounter
                            label={t('stats.partner_researchers')}
                            value="150+"
                            icon={Users}
                            delay={0.3}
                        />
                        <StatsCounter
                            label={t('stats.analyzed_policies')}
                            value="12"
                            icon={BarChart3}
                            delay={0.5}
                        />
                    </div>

                    {/* Latest News Preview */}
                    <div className="mb-24">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                            <div className="max-w-xl">
                                <h2 className="text-5xl font-black text-gray-900 mb-6 uppercase tracking-tighter italic leading-none">
                                    {t('news_section.title')}
                                </h2>
                                <p className="text-slate-500 font-medium text-lg">{t('news_section.subtitle')}</p>
                            </div>
                            <Button variant="link" asChild className="text-[#5b1887] font-black uppercase tracking-widest text-sm gap-2 p-0 h-auto hover:gap-4 transition-all">
                                <Link href="/news">
                                    {t('news_section.view_all')}
                                    <ArrowRight className="h-5 w-5" />
                                </Link>
                            </Button>
                        </div>

                        <AutoScrollCarousel autoplayDelay={4000}>
                            {newsData.map((item, i) => (
                                <div key={i} className="group bg-white rounded-[2.5rem] p-10 border border-slate-100 hover:shadow-2xl hover:shadow-primary/5 transition-all h-full flex flex-col">
                                    <div className="flex items-center gap-2 text-[#5b1887] font-black text-[11px] uppercase tracking-widest mb-8">
                                        <Calendar className="h-4 w-4" />
                                        {item.date}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm mb-8 line-clamp-3 leading-relaxed">
                                        {item.description}
                                    </p>
                                    <div className="mt-auto">
                                        <Link href="/news" className="inline-flex items-center gap-2 text-xs font-black text-primary uppercase tracking-widest group-hover:gap-4 transition-all">
                                            {newsT('events.read_more')} <ChevronRight className="h-4 w-4" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </AutoScrollCarousel>
                    </div>

                    {/* Featured Publications Preview */}
                    <div className="bg-white rounded-[4rem] p-12 md:p-20 border border-slate-100 shadow-2xl shadow-slate-200/50">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
                            <div className="max-w-xl">
                                <h2 className="text-5xl font-black text-gray-900 mb-6 uppercase tracking-tighter italic leading-none">
                                    {t('publications_section.title')}
                                </h2>
                                <p className="text-slate-500 font-medium text-lg">{t('publications_section.subtitle')}</p>
                            </div>
                            <Button variant="link" asChild className="text-[#5b1887] font-black uppercase tracking-widest text-sm gap-2 p-0 h-auto hover:gap-4 transition-all">
                                <Link href="/news">
                                    {t('publications_section.view_all')}
                                    <ArrowRight className="h-5 w-5" />
                                </Link>
                            </Button>
                        </div>

                        <AutoScrollCarousel autoplayDelay={5000} options={{ loop: true, align: 'start' }}>
                            {pubsData.map((pub, i) => (
                                <div key={i} className="flex flex-col p-8 rounded-[2.5rem] border border-slate-50 bg-slate-50/30 hover:bg-white hover:border-primary/20 hover:shadow-xl transition-all group h-full">
                                    <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all mb-8 shadow-inner">
                                        <FileText className="h-8 w-8" />
                                    </div>
                                    <div className="flex-grow">
                                        <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors leading-snug">
                                            {pub.title}
                                        </h4>
                                        <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">
                                            {pub.author}
                                        </p>
                                        <div className="flex items-center justify-between mt-auto">
                                            <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">{pub.date}</span>
                                            <Button
                                                variant="ghost" size="icon" className="rounded-full hover:bg-primary hover:text-white transition-all shadow-sm"
                                            >
                                                <Download className="h-5 w-5" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </AutoScrollCarousel>
                    </div>
                </div>
            </section>
        </div>
    );
}
