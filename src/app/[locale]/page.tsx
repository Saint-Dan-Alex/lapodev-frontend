import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import {
    ArrowRight,
    Play,
    BookOpen,
    Users,
    BarChart3,
    Calendar,
    FileText,
    ChevronRight,
    Search,
    Newspaper,
    Download,
    LandmarkIcon
} from 'lucide-react';
import { Badge } from "@/components/ui/badge";

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

export default function HomePage() {
    const t = useTranslations('HomePage');
    const newsT = useTranslations('NewsPage');

    // Use raw data from translations for events and publications previews
    const newsData = newsT.raw('data.events') as any[];
    const pubsData = newsT.raw('data.publications') as any[];

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#5b1887] bg-gradient-to-br from-[#8b2fc9] via-[#7221a8] to-[#5b1887] text-white pt-20">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

                <div className="container mx-auto px-4 md:px-8 relative z-10 py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="max-w-2xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] font-bold uppercase tracking-[0.2em] mb-6 animate-in fade-in slide-in-from-left-4 duration-700">
                                <span className="w-2 h-2 rounded-full bg-[#fdb913] animate-pulse"></span>
                                {t('hero.topLabel')}
                            </div>

                            <h1 className="text-6xl lg:text-8xl font-black leading-none mb-2 animate-in fade-in slide-in-from-left-8 duration-1000">
                                {t('hero.title')}
                            </h1>

                            <h2 className="text-xl lg:text-2xl font-serif font-light leading-snug mb-6 text-white/90 max-w-xl animate-in fade-in slide-in-from-left-10 duration-1000 delay-200">
                                {t('hero.subtitle')}
                            </h2>

                            <div className="flex h-1 w-32 mb-8 overflow-hidden rounded-full animate-in fade-in slide-in-from-left-4 duration-700 delay-300">
                                <div className="w-1/3 bg-[#00a2ed]"></div>
                                <div className="w-1/3 bg-[#fdb913]"></div>
                                <div className="w-1/3 bg-[#ee1c25]"></div>
                            </div>

                            <p className="text-base lg:text-lg text-white/70 mb-10 leading-relaxed max-w-xl animate-in fade-in slide-in-from-left-12 duration-1000 delay-500">
                                {t('hero.description')}
                            </p>

                            <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700">
                                <Button asChild size="lg" className="h-14 px-8 text-sm font-black uppercase tracking-widest bg-white text-primary hover:bg-white/90 rounded-sm transition-all shadow-2xl shadow-black/20">
                                    <Link href="/news" className="flex items-center gap-2">
                                        <span>{t('hero.cta_primary')}</span>
                                        <ArrowRight className="h-5 w-5" />
                                    </Link>
                                </Button>
                                <Button asChild variant="outline" size="lg" className="h-14 px-8 text-sm font-black uppercase tracking-widest border-white/30 text-white hover:bg-white/10 rounded-sm bg-white/5 backdrop-blur-md">
                                    <Link href="/about" className="flex items-center gap-2">
                                        <Play className="h-4 w-4 fill-current" />
                                        <span>{t('hero.cta_secondary')}</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>

                        <div className="hidden lg:flex justify-center relative animate-in fade-in zoom-in duration-1000 delay-500">
                            <div className="relative w-full max-w-lg aspect-square">
                                <div className="absolute inset-0 border-[40px] border-white/5 rounded-full animate-pulse"></div>
                                <div className="absolute inset-10 border-[1px] border-white/20 rounded-full"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="relative">
                                        <div className="text-[12rem] text-white opacity-20 font-serif font-bold select-none">L</div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="grid grid-cols-2 gap-4 p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 shadow-2xl">
                                                <div className="bg-white/10 p-4 rounded-xl"><BarChart3 className="h-8 w-8 text-[#a855f7]" /></div>
                                                <div className="bg-white/10 p-4 rounded-xl"><Users className="h-8 w-8 text-[#fdb913]" /></div>
                                                <div className="bg-white/10 p-4 rounded-xl"><BookOpen className="h-8 w-8 text-[#ee1c25]" /></div>
                                                <div className="bg-white/10 p-4 rounded-xl"><LandmarkIcon className="h-8 w-8 text-white" /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-slate-50 py-24 relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                        {[
                            { label: t('stats.research_projects'), value: "25+", icon: BookOpen },
                            { label: t('stats.partner_researchers'), value: "150+", icon: Users },
                            { label: t('stats.analyzed_policies'), value: "12", icon: BarChart3 }
                        ].map((stat, i) => (
                            <div key={i} className="group p-10 rounded-[2rem] bg-white border border-slate-100 text-center hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
                                <div className="inline-flex p-5 bg-primary/5 rounded-2xl text-primary mb-8 group-hover:scale-110 transition-transform">
                                    <stat.icon className="h-10 w-10" />
                                </div>
                                <div className="text-5xl font-black text-gray-900 mb-2 tracking-tighter">{stat.value}</div>
                                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Latest News Preview */}
                    <div className="mb-20">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                            <div className="max-w-xl">
                                <h2 className="text-4xl font-black text-gray-900 mb-4 uppercase tracking-tighter italic leading-none">
                                    {t('news_section.title')}
                                </h2>
                                <p className="text-slate-500 font-medium">{t('news_section.subtitle')}</p>
                            </div>
                            <Button variant="link" asChild className="text-[#5b1887] font-black uppercase tracking-widest text-xs gap-2 p-0 h-auto">
                                <Link href="/news">
                                    {t('news_section.view_all')}
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {newsData.slice(0, 3).map((item, i) => (
                                <div key={i} className="group bg-white rounded-[2rem] p-8 border border-slate-100 hover:shadow-xl transition-all">
                                    <div className="flex items-center gap-2 text-[#5b1887] font-black text-[10px] uppercase tracking-widest mb-6">
                                        <Calendar className="h-3.5 w-3.5" />
                                        {item.date}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors line-clamp-2">
                                        {item.title}
                                    </h3>
                                    <Link href="/news" className="inline-flex items-center gap-2 text-xs font-black text-primary/60 uppercase tracking-widest group-hover:text-primary transition-colors">
                                        {newsT('events.read_more')} <ChevronRight className="h-3.5 w-3.5" />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Featured Publications Preview */}
                    <div className="bg-white rounded-[3rem] p-12 md:p-16 border border-slate-100 shadow-xl shadow-slate-200/50">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                            <div className="max-w-xl">
                                <h2 className="text-4xl font-black text-gray-900 mb-4 uppercase tracking-tighter italic leading-none">
                                    {t('publications_section.title')}
                                </h2>
                                <p className="text-slate-500 font-medium">{t('publications_section.subtitle')}</p>
                            </div>
                            <Button variant="link" asChild className="text-[#5b1887] font-black uppercase tracking-widest text-xs gap-2 p-0 h-auto">
                                <Link href="/news">
                                    {t('publications_section.view_all')}
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </Button>
                        </div>

                        <div className="space-y-6">
                            {pubsData.slice(0, 2).map((pub, i) => (
                                <div key={i} className="flex items-center gap-6 p-6 rounded-2xl border border-transparent hover:border-slate-100 hover:bg-slate-50/50 transition-all group">
                                    <div className="h-14 w-14 bg-primary/5 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                        <FileText className="h-6 w-6" />
                                    </div>
                                    <div className="flex-grow">
                                        <h4 className="font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                                            {pub.title}
                                        </h4>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                                            {pub.author} • {pub.date}
                                        </p>
                                    </div>
                                    <Button
                                        onClick={() => alert(`${newsT('publications.download')} : ${pub.title}`)}
                                        variant="ghost" size="icon" className="rounded-full hover:bg-white hover:shadow-lg"
                                    >
                                        <Download className="h-5 w-5 text-slate-400" />
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

