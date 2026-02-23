import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { ArrowRight, Play, BookOpen, Users, BarChart3 } from 'lucide-react';

export default function HomePage() {
    const t = useTranslations('HomePage');
    const nav = useTranslations('Navigation');

    return (
        <div className="flex flex-col">
            {/* Hero Section - Following m-rsit-agismac style but in Mauve (Purple) */}
            <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#5b1887] bg-gradient-to-br from-[#8b2fc9] via-[#7221a8] to-[#5b1887] text-white pt-20">
                {/* Subtle Hexagon/Grid Pattern Overlay */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

                <div className="container mx-auto px-4 md:px-8 relative z-10 py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left Content */}
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

                            {/* Reference Style Color Bar (DRC Flag colors) */}
                            <div className="flex h-1 w-32 mb-8 overflow-hidden rounded-full animate-in fade-in slide-in-from-left-4 duration-700 delay-300">
                                <div className="w-1/3 bg-[#00a2ed]"></div> {/* Blue */}
                                <div className="w-1/3 bg-[#fdb913]"></div> {/* Yellow */}
                                <div className="w-1/3 bg-[#ee1c25]"></div> {/* Red */}
                            </div>

                            <p className="text-base lg:text-lg text-white/70 mb-10 leading-relaxed max-w-xl animate-in fade-in slide-in-from-left-12 duration-1000 delay-500">
                                {t('hero.description')}
                            </p>

                            <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700">
                                <Button asChild size="lg" className="h-14 px-8 text-sm font-black uppercase tracking-widest bg-white text-primary hover:bg-white/90 rounded-sm transition-all shadow-2xl shadow-black/20">
                                    <Link href="/join" className="flex items-center gap-2">
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

                        {/* Right Graphic Section (Mirroring the reference map/brain graphic) */}
                        <div className="hidden lg:flex justify-center relative animate-in fade-in zoom-in duration-1000 delay-500">
                            <div className="relative w-full max-w-lg aspect-square">
                                {/* Abstract Decorative Elements */}
                                <div className="absolute inset-0 border-[40px] border-white/5 rounded-full animate-pulse"></div>
                                <div className="absolute inset-10 border-[1px] border-white/20 rounded-full"></div>

                                {/* Main Icon/Graphic Placeholder */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="relative">
                                        <div className="text-[12rem] text-white opacity-20 font-serif font-bold select-none">L</div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="grid grid-cols-2 gap-4 p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 shadow-2xl">
                                                <div className="bg-white/10 p-4 rounded-xl">
                                                    <BarChart3 className="h-8 w-8 text-[#a855f7]" />
                                                </div>
                                                <div className="bg-white/10 p-4 rounded-xl">
                                                    <Users className="h-8 w-8 text-[#fdb913]" />
                                                </div>
                                                <div className="bg-white/10 p-4 rounded-xl">
                                                    <BookOpen className="h-8 w-8 text-[#ee1c25]" />
                                                </div>
                                                <div className="bg-white/10 p-4 rounded-xl">
                                                    <LandmarkIcon className="h-8 w-8 text-white" />
                                                </div>
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
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4 uppercase tracking-tighter italic">
                            {t('stats.title')}
                        </h2>
                        <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { label: t('stats.research_projects'), value: "25+", icon: BookOpen },
                            { label: t('stats.partner_researchers'), value: "150+", icon: Users },
                            { label: t('stats.analyzed_policies'), value: "12", icon: BarChart3 }
                        ].map((stat, i) => (
                            <div key={i} className="group p-10 rounded-3xl bg-white border border-slate-200 text-center hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">
                                <div className="inline-flex p-5 bg-primary/5 rounded-2xl text-primary mb-8 group-hover:scale-110 transition-transform">
                                    <stat.icon className="h-10 w-10" />
                                </div>
                                <div className="text-5xl font-black text-gray-900 mb-3 tracking-tighter">{stat.value}</div>
                                <div className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

function LandmarkIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="2" x2="22" y1="22" y2="22" />
            <line x1="8" x2="8" y1="18" y2="18" />
            <line x1="12" x2="12" y1="18" y2="18" />
            <line x1="16" x2="16" y1="18" y2="18" />
            <path d="M4 18V9c0-1 1-2 2-2h12c1 0 2 1 2 2v9" />
            <path d="M12 2 4 7v2h16V7l-8-5Z" />
        </svg>
    );
}
