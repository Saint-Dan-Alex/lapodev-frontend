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
                        <div className="max-w-xl">
                            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-4 animate-in fade-in slide-in-from-left-8 duration-1000">
                                {t('hero.title')}
                            </h1>

                            {/* Reference Style Color Bar (DRC Flag colors) */}
                            <div className="flex h-1.5 w-40 mb-10 overflow-hidden rounded-full animate-in fade-in slide-in-from-left-4 duration-700 delay-300">
                                <div className="w-1/3 bg-[#00a2ed]"></div> {/* Blue */}
                                <div className="w-1/3 bg-[#fdb913]"></div> {/* Yellow */}
                                <div className="w-1/3 bg-[#ee1c25]"></div> {/* Red */}
                            </div>

                            <p className="text-xl text-white/80 mb-12 leading-relaxed animate-in fade-in slide-in-from-left-12 duration-1000 delay-500">
                                {t('hero.subtitle')}
                            </p>

                            <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700">
                                <Button asChild size="lg" className="h-14 px-8 text-base font-bold bg-primary text-white hover:bg-primary/90 rounded-md transition-all shadow-lg shadow-primary/20">
                                    <Link href="/join" className="flex items-center gap-2">
                                        <span>S'enregistrer</span>
                                        <ArrowRight className="h-5 w-5" />
                                    </Link>
                                </Button>
                                <Button asChild variant="outline" size="lg" className="h-14 px-8 text-base font-bold border-white/20 text-white hover:bg-white/10 rounded-md bg-white/5 backdrop-blur-sm">
                                    <Link href="/about" className="flex items-center gap-2">
                                        <Play className="h-4 w-4 fill-current" />
                                        <span>Comment ça marche?</span>
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
            <section className="bg-white py-24">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre Impact en RDC</h2>
                        <div className="h-1 w-20 bg-primary mx-auto"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { label: "Projets de Recherche", value: "25+", icon: BookOpen },
                            { label: "Chercheurs Partenaires", value: "150+", icon: Users },
                            { label: "Politiques Analysées", value: "12", icon: BarChart3 }
                        ].map((stat, i) => (
                            <div key={i} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 text-center hover:shadow-lg transition-all">
                                <div className="inline-flex p-4 bg-primary/10 rounded-xl text-primary mb-6">
                                    <stat.icon className="h-8 w-8" />
                                </div>
                                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                                <div className="text-muted-foreground font-medium">{stat.label}</div>
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
