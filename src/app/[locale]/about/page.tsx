import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import { BookOpen, Users, Shield, Globe, Award, Target, Landmark, Heart } from 'lucide-react';

export async function generateMetadata({
    params
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Metadata' });

    return {
        title: t('about'),
    };
}

export default function AboutPage() {
    const t = useTranslations('AboutPage');

    const missions = [
        { icon: BookOpen, text: t('values.m1') },
        { icon: Users, text: t('values.m2') },
        { icon: Landmark, text: t('values.m3') },
        { icon: Heart, text: t('values.m4') },
        { icon: Globe, text: t('values.m5') },
    ];

    const objectives = [
        t('objectives.o1'),
        t('objectives.o2'),
        t('objectives.o3'),
        t('objectives.o4'),
        t('objectives.o5'),
        t('objectives.o6'),
        t('objectives.o7'),
        t('objectives.o8'),
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Header Section */}
            <section className="relative pt-32 pb-20 bg-[#5b1887] text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                <div className="container mx-auto px-4 md:px-8 relative z-10">
                    <div className="max-w-4xl">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-4 tracking-tighter uppercase italic drop-shadow-2xl">
                            {t('title')}
                        </h1>
                        <p className="text-lg md:text-xl lg:text-2xl font-serif font-light text-white/90 leading-relaxed max-w-2xl border-l-4 border-[#fdb913] pl-6">
                            {t('subtitle')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Introduction & Social Object */}
            <section id="identity" className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div className="space-y-8">
                            <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight">
                                {t('intro.title')}
                            </h2>
                            <div className="h-1.5 w-20 bg-primary rounded-full"></div>
                            <p className="text-lg text-gray-700 leading-relaxed first-letter:text-5xl first-letter:font-black first-letter:mr-3 first-letter:float-left first-letter:text-primary">
                                {t('intro.content')}
                            </p>
                        </div>
                        <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                    <Target className="h-8 w-8" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">{t('intro.social_object_title')}</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed italic text-lg">
                                "{t('intro.social_object')}"
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values & Missions */}
            <section id="values" className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6 uppercase tracking-tight italic">
                            {t('values.title')}
                        </h2>
                        <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mb-8"></div>
                        <p className="text-gray-600 leading-relaxed">
                            {t('values.content')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="md:col-span-2 lg:col-span-1 flex items-center">
                            <h3 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight uppercase">
                                {t('values.missions_label')}
                            </h3>
                        </div>
                        {missions.map((mission, i) => (
                            <div key={i} className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">
                                <div className="p-4 bg-primary/5 rounded-xl text-primary mb-6 group-hover:scale-110 transition-transform inline-block">
                                    <mission.icon className="h-6 w-6" />
                                </div>
                                <div className="flex gap-4">
                                    <span className="text-3xl font-black text-primary/20 leading-none">{i + 1}</span>
                                    <p className="text-sm font-bold text-gray-800 leading-relaxed">
                                        {mission.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Objectives */}
            <section id="objectives" className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-6 mb-16">
                            <div className="p-5 bg-primary rounded-2xl text-white shadow-2xl shadow-primary/20">
                                <Award className="h-10 w-10" />
                            </div>
                            <div>
                                <h2 className="text-3xl lg:text-4xl font-black text-gray-900 uppercase tracking-tight leading-none mb-2">
                                    {t('objectives.title')}
                                </h2>
                                <p className="text-muted-foreground font-medium">
                                    {t('objectives.intro')}
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                            {objectives.map((obj, i) => (
                                <div key={i} className="flex gap-8 group p-6 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                                    <div className="flex-none">
                                        <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-primary font-black text-xl group-hover:bg-primary group-hover:text-white transition-all">
                                            {i + 1}
                                        </div>
                                    </div>
                                    <div className="pt-2">
                                        <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                                            {obj}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
