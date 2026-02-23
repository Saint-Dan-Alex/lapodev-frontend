import { useTranslations } from 'next-intl';
import {
    ShieldCheck,
    Globe2,
    Scale,
    Lightbulb,
    Microscope,
    Briefcase,
    CheckCircle2,
    Users2,
    Baby,
    Bird,
    HeartPulse,
    Tent
} from 'lucide-react';

export default function ExpertisePage() {
    const t = useTranslations('ExpertisePage');

    return (
        <div className="flex flex-col min-h-screen">
            {/* Header Section */}
            <section className="relative pt-32 pb-24 bg-[#5b1887] text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                <div className="container mx-auto px-4 md:px-8 relative z-10">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                            Expertise & Innovation
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-black mb-4 tracking-tighter uppercase italic drop-shadow-2xl">
                            {t('title')}
                        </h1>
                        <p className="text-xl lg:text-2xl font-serif font-light text-white/90 leading-relaxed max-w-2xl border-l-4 border-[#ee1c25] pl-6">
                            {t('subtitle')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Domains Section */}
            <section id="research" className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6 uppercase tracking-tight">
                            {t('research.title')}
                        </h2>
                        <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 gap-24">
                        {/* Domain 1: Politics */}
                        <div id="politics" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                            <div className="space-y-6">
                                <div className="inline-flex p-4 bg-primary/5 rounded-2xl text-primary mb-2">
                                    <Scale className="h-10 w-10" />
                                </div>
                                <h3 className="text-3xl font-black text-gray-900 uppercase leading-none">
                                    {t('research.politics.title')}
                                </h3>
                                <p className="text-xl font-serif text-primary italic">
                                    {t('research.politics.subtitle')}
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    {t('research.politics.intro')}
                                </p>
                                <div className="grid grid-cols-1 gap-4 pt-4">
                                    {['polity', 'politics', 'policy'].map((concept) => (
                                        <div key={concept} className="p-5 rounded-xl bg-slate-50 border border-slate-100 border-l-4 border-l-primary">
                                            <span className="block font-black text-primary uppercase text-xs mb-1 tracking-widest">{concept}</span>
                                            <p className="text-sm text-gray-700 font-medium leading-snug">
                                                {t(`research.politics.concepts.${concept}`)}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100">
                                <h4 className="text-lg font-bold text-gray-900 mb-8 uppercase tracking-wider">Objectifs de recherche</h4>
                                <ul className="space-y-6">
                                    {[0, 1, 2, 3, 4].map((i) => (
                                        <li key={i} className="flex gap-4 group">
                                            <CheckCircle2 className="h-6 w-6 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                                            <p className="text-gray-700 leading-relaxed font-medium">
                                                {t(`research.politics.goals.${i}`)}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Domain 2: Development */}
                        <div id="development" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                            <div className="lg:order-2 space-y-6">
                                <div className="inline-flex p-4 bg-[#fdb913]/10 rounded-2xl text-[#fdb913] mb-2">
                                    <Globe2 className="h-10 w-10" />
                                </div>
                                <h3 className="text-3xl font-black text-gray-900 uppercase leading-none">
                                    {t('research.development.title')}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {t('research.development.intro')}
                                </p>
                                <div className="relative p-8 bg-primary rounded-3xl text-white overflow-hidden">
                                    <Lightbulb className="absolute bottom-[-20px] right-[-20px] h-32 w-32 opacity-10" />
                                    <p className="relative z-10 text-lg font-serif">
                                        "L’anthropologie politique et du développement offre une perspective unique pour analyser les interactions entre les institutions politiques, les acteurs sociaux et les processus de développement."
                                    </p>
                                </div>
                            </div>
                            <div className="lg:order-1 bg-slate-50 p-10 rounded-[3rem] border border-slate-100">
                                <h4 className="text-lg font-bold text-gray-900 mb-8 uppercase tracking-wider">Axes d'intervention</h4>
                                <ul className="space-y-6">
                                    {[0, 1, 2, 3, 4].map((i) => (
                                        <li key={i} className="flex gap-4 group">
                                            <div className="flex-none w-8 h-8 rounded-full bg-[#fdb913] flex items-center justify-center text-white font-black">
                                                {i + 1}
                                            </div>
                                            <p className="text-gray-700 leading-relaxed font-medium">
                                                {t(`research.development.goals.${i}`)}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Domain 3: Vulnerabilities */}
                        <div id="vulnerabilities" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                            <div className="space-y-6">
                                <div className="inline-flex p-4 bg-[#ee1c25]/10 rounded-2xl text-[#ee1c25] mb-2">
                                    <ShieldCheck className="h-10 w-10" />
                                </div>
                                <h3 className="text-3xl font-black text-gray-900 uppercase leading-none">
                                    {t('research.vulnerabilities.title')}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {t('research.vulnerabilities.intro')}
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        { key: 'children', icon: Baby },
                                        { key: 'minorities', icon: Users2 },
                                        { key: 'women', icon: Bird },
                                        { key: 'handicap_hiv_lgbt', icon: HeartPulse },
                                        { key: 'displaced', icon: Tent }
                                    ].map((group) => (
                                        <div key={group.key} className="p-4 rounded-2xl border border-slate-200 hover:border-[#ee1c25]/30 transition-all group">
                                            <group.icon className="h-6 w-6 text-[#ee1c25] mb-3 group-hover:scale-110 transition-transform" />
                                            <p className="text-xs font-bold text-gray-800 leading-snug">
                                                {t(`research.vulnerabilities.groups.${group.key}`)}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100">
                                <h4 className="text-lg font-bold text-gray-900 mb-8 uppercase tracking-wider">Objectifs d'analyse</h4>
                                <ul className="space-y-6">
                                    {[0, 1, 2].map((i) => (
                                        <li key={i} className="flex gap-4 group">
                                            <div className="w-2 h-10 bg-[#ee1c25] shrink-0 rounded-full opacity-30 group-hover:opacity-100 transition-opacity"></div>
                                            <p className="text-gray-700 leading-relaxed font-medium">
                                                {t(`research.vulnerabilities.goals.${i}`)}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Research Axes Section */}
            <section id="axes" className="py-24 bg-slate-900 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 transform translate-x-1/2"></div>
                <div className="container mx-auto px-4 md:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/3">
                            <h2 className="text-4xl lg:text-5xl font-black mb-6 uppercase tracking-tight italic text-[#fdb913]">
                                {t('axes.title')}
                            </h2>
                            <p className="text-white/60 leading-relaxed">
                                Dix axes et thèmes de recherches sur lesquels travaillent les chercheur-e-s du Centre.
                            </p>
                        </div>
                        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                                <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                                    <span className="text-2xl font-black text-white/20 group-hover:text-[#fdb913] transition-colors">{(i + 1).toString().padStart(2, '0')}</span>
                                    <span className="font-bold text-sm tracking-wide">{t(`axes.items.${i}`)}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Consultancy Section */}
            <section id="consultancy" className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        <div className="lg:w-1/3 space-y-6">
                            <div className="inline-flex p-4 bg-primary/10 rounded-2xl text-primary">
                                <Briefcase className="h-10 w-10" />
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 uppercase tracking-tight leading-none">
                                {t('consultancy.title')}
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                Le LAPODEV propose ses services de consultance spécialisée aux organisations nationales et internationales.
                            </p>
                        </div>
                        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                            {[0, 1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="flex gap-5 p-8 rounded-3xl bg-white shadow-xl shadow-slate-200/50 border border-slate-100 group hover:-translate-y-1 transition-all">
                                    <div className="w-1.5 h-full bg-primary/20 group-hover:bg-primary transition-colors shrink-0 rounded-full"></div>
                                    <p className="text-gray-800 font-bold leading-relaxed">{t(`consultancy.items.${i}`)}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
