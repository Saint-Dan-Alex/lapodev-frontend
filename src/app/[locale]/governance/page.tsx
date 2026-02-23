import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import { Mail, User, Users, GraduationCap, Gavel, Beaker, Briefcase } from 'lucide-react';

export async function generateMetadata({
    params
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Metadata' });

    return {
        title: t('governance'),
    };
}

export default function GovernancePage() {
    const t = useTranslations('GovernancePage');

    return (
        <div className="flex flex-col min-h-screen">
            {/* Header Section */}
            <section className="relative pt-32 pb-20 bg-[#5b1887] text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
                    <h1 className="text-4xl lg:text-6xl font-black mb-4 tracking-tighter uppercase italic">
                        {t('title')}
                    </h1>
                    <p className="text-lg lg:text-xl font-serif font-light text-white/80 max-w-2xl mx-auto">
                        {t('subtitle')}
                    </p>
                </div>
            </section>

            {/* Organigram Section */}
            <section id="chart" className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex flex-col gap-12 items-center max-w-7xl mx-auto">

                        {/* 1. Direction Générale */}
                        <div className="w-full max-w-2xl bg-white border-2 border-primary rounded-2xl p-8 shadow-xl relative animate-in fade-in slide-in-from-top-8 duration-700">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-1 rounded-full text-xs font-black uppercase tracking-widest">
                                {t('general_direction.title')}
                            </div>
                            <div className="space-y-4 pt-2">
                                <div className="flex items-center gap-4 p-3 hover:bg-slate-50 rounded-xl transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <User className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-black text-primary uppercase tracking-tighter">{t('general_direction.director')}</p>
                                        <p className="font-bold text-gray-900">{t('general_direction.director_name')}</p>
                                        <a href="mailto:joseph.indeka@gmail.com" className="text-xs text-muted-foreground hover:text-primary flex items-center gap-1">
                                            <Mail className="h-3 w-3" /> joseph.indeka@gmail.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-3 hover:bg-slate-50 rounded-xl transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <User className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-black text-primary uppercase tracking-tighter">{t('general_direction.secretary')}</p>
                                        <p className="font-bold text-gray-900">{t('general_direction.secretary_name')}</p>
                                        <a href="mailto:bampembearthur@gmail.com" className="text-xs text-muted-foreground hover:text-primary flex items-center gap-1">
                                            <Mail className="h-3 w-3" /> bampembearthur@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mid Row with 3 Boxes */}
                        <div id="board" className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full relative">
                            {/* Decorative Lines for Desktop */}
                            <div className="hidden lg:block absolute -top-12 left-1/2 -translate-x-1/2 w-px h-12 bg-primary/20"></div>

                            {/* a. Conseil des Sages */}
                            <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 shadow-lg h-full relative group hover:border-primary/30 transition-all">
                                <div className="bg-slate-800 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block">
                                    {t('advisory_council.title')}
                                </div>
                                <div className="space-y-6">
                                    {[
                                        { label: t('advisory_council.president'), name: t('advisory_council.president_name'), email: 'basile.osokonda@gmail.com', icon: Gavel },
                                        { label: t('advisory_council.advisor'), name: t('advisory_council.advisor_name'), email: 'rose.gato@unikin.ac.cd', icon: User },
                                        { label: t('advisory_council.member'), name: t('advisory_council.member_name'), email: 'delphinituku@gmail.com', icon: User }
                                    ].map((person, i) => (
                                        <div key={i} className="flex gap-4">
                                            <person.icon className="h-5 w-5 text-slate-400 shrink-0 mt-1" />
                                            <div>
                                                <p className="text-[10px] font-black text-slate-400 uppercase">{person.label}</p>
                                                <p className="font-bold text-gray-900 text-sm">{person.name}</p>
                                                <a href={`mailto:${person.email}`} className="text-[10px] text-muted-foreground hover:text-primary truncate block max-w-[180px]">
                                                    {person.email}
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* b. Direction du Comité Scientifique */}
                            <div className="bg-white border-2 border-primary/50  rounded-2xl p-6 shadow-lg h-full relative group hover:border-primary transition-all">
                                <div className="bg-primary text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block">
                                    {t('scientific_committee.title')}
                                </div>
                                <div className="space-y-6">
                                    {[
                                        { label: t('scientific_committee.director'), name: t('scientific_committee.director_name'), email: 'abertinbeya@yahoo.fr', icon: Beaker },
                                        { label: t('scientific_committee.deputy_director'), name: t('scientific_committee.deputy_director_name'), email: 'damienmottier@gmail.com', icon: GraduationCap },
                                        { label: t('scientific_committee.editor_in_chief'), name: t('scientific_committee.editor_in_chief_name'), email: 'gregoire.ngalamulume@gmail.com', icon: GraduationCap },
                                        { label: t('scientific_committee.diffusion_marketing'), name: t('scientific_committee.diffusion_marketing_name'), email: 'nicole.mpwekela@unikin.ac.cd', icon: Globe2 },
                                        { label: t('scientific_committee.media_library_doc'), name: t('scientific_committee.media_library_doc_name'), email: 'mpereng.jerry@gmail.com', icon: GraduationCap },
                                        { label: t('scientific_committee.media_library_doc_deputy'), name: t('scientific_committee.media_library_doc_deputy_name'), email: 'francoismomindo@gmail.com', icon: GraduationCap }
                                    ].map((person, i) => (
                                        <div key={i} className="flex gap-4">
                                            <person.icon className="h-4 w-4 text-primary shrink-0 mt-1" />
                                            <div>
                                                <p className="text-[10px] font-black text-primary/60 uppercase">{person.label}</p>
                                                <p className="font-bold text-gray-900 text-sm leading-tight">{person.name}</p>
                                                <a href={`mailto:${person.email}`} className="text-[10px] text-muted-foreground hover:text-primary truncate block max-w-[200px]">
                                                    {person.email}
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* c. Direction Administrative et Financière */}
                            <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 shadow-lg h-full relative group hover:border-primary/30 transition-all">
                                <div className="bg-slate-800 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block">
                                    {t('admin_finance.title')}
                                </div>
                                <div className="space-y-6">
                                    {[
                                        { label: t('admin_finance.manager'), name: t('admin_finance.manager_name'), email: 'victor.muamba@unikin.ac.cd', icon: Briefcase },
                                        { label: t('admin_finance.assistant'), name: t('admin_finance.assistant_name'), email: 'merveilletib@gmail.com', icon: User }
                                    ].map((person, i) => (
                                        <div key={i} className="flex gap-4">
                                            <person.icon className="h-5 w-5 text-slate-400 shrink-0 mt-1" />
                                            <div>
                                                <p className="text-[10px] font-black text-slate-400 uppercase">{person.label}</p>
                                                <p className="font-bold text-gray-900 text-sm">{person.name}</p>
                                                <a href={`mailto:${person.email}`} className="text-[10px] text-muted-foreground hover:text-primary truncate block max-w-[180px]">
                                                    {person.email}
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* 3. Assemblée Générale */}
                        <div className="w-full bg-slate-900 text-white rounded-3xl p-10 shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[100px] group-hover:bg-primary/40 transition-colors"></div>
                            <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
                                <div className="flex-none p-5 bg-white/5 rounded-2xl border border-white/10">
                                    <Users className="h-12 w-12 text-primary" />
                                </div>
                                <div className="text-center md:text-left">
                                    <h3 className="text-3xl font-black uppercase tracking-tighter italic mb-4">
                                        {t('general_assembly.title')}
                                    </h3>
                                    <p className="text-white/60 font-serif text-lg leading-relaxed max-w-4xl italic">
                                        {t('general_assembly.content')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

function Globe2(props: any) {
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
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20" />
            <path d="M2 12h20" />
        </svg>
    );
}
