import { getTranslations } from 'next-intl/server';
import { getMembers } from '@/lib/data/members';
import { notFound } from 'next/navigation';
import { User, Mail, Briefcase, GraduationCap, ArrowLeft, Download, FileText, Globe, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { Metadata } from 'next';

export async function generateMetadata({
    params
}: {
    params: Promise<{ locale: string; memberId: string }>;
}): Promise<Metadata> {
    const { locale, memberId } = await params;
    const t = await getTranslations({ locale, namespace: 'ResourcesPage' });
    const members = getMembers(t);
    const member = members.find(m => m.id === memberId);

    if (!member) return { title: 'Member Not Found' };

    return {
        title: `${member.name} - LAPODEV`,
        description: member.bio?.substring(0, 160)
    };
}

export default async function MemberDetailPage({
    params
}: {
    params: Promise<{ locale: string; memberId: string }>;
}) {
    const { locale, memberId } = await params;
    const t = await getTranslations({ locale, namespace: 'ResourcesPage' });
    const members = getMembers(t);
    const member = members.find(m => m.id === memberId);

    if (!member) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-screen bg-slate-50/50">
            {/* Header Section */}
            <section className="relative pt-32 pb-24 bg-[#5b1887] text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                <div className="container mx-auto px-4 md:px-8 relative z-10">
                    <Link
                        href="/resources"
                        className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 group"
                    >
                        <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-xs font-bold uppercase tracking-widest">{t('human_resources.title')}</span>
                    </Link>
                    <div className="max-w-4xl">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 tracking-tighter uppercase italic drop-shadow-2xl">
                            {member.name}
                        </h1>
                        <div className="inline-flex px-4 py-2 rounded-full bg-[#fdb913] text-slate-900 text-xs font-black uppercase tracking-[0.2em]">
                            {member.grade || t('human_resources.modal.member_grade')}
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 md:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left Sidebar - Info Card */}
                    <div className="lg:col-span-4 select-none">
                        <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl shadow-slate-200/50 border border-slate-100 sticky top-32">
                            <div className="aspect-square bg-slate-50 rounded-[2rem] flex items-center justify-center text-primary mb-8 border border-slate-100 shadow-inner">
                                <User className="w-24 h-24 opacity-20" />
                            </div>

                            <div className="space-y-8">
                                <div>
                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-4 border-b border-slate-100 pb-2">
                                        Contact & Info
                                    </span>
                                    <div className="space-y-6">
                                        {member.email && (
                                            <div className="flex items-center gap-4 group">
                                                <div className="h-10 w-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                                                    <Mail className="h-5 w-5" />
                                                </div>
                                                <div className="overflow-hidden">
                                                    <p className="text-[9px] font-black text-slate-400 uppercase mb-0.5">Email</p>
                                                    <a href={`mailto:${member.email}`} className="font-bold text-gray-900 truncate block hover:text-primary transition-colors">
                                                        {member.email}
                                                    </a>
                                                </div>
                                            </div>
                                        )}
                                        {member.office && (
                                            <div className="flex items-center gap-4 group">
                                                <div className="h-10 w-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                                                    <Briefcase className="h-5 w-5" />
                                                </div>
                                                <div>
                                                    <p className="text-[9px] font-black text-slate-400 uppercase mb-0.5">{t('human_resources.modal.office')}</p>
                                                    <p className="font-bold text-gray-900">{member.office}</p>
                                                </div>
                                            </div>
                                        )}
                                        <div className="flex items-center gap-4 group">
                                            <div className="h-10 w-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                                                <GraduationCap className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <p className="text-[9px] font-black text-slate-400 uppercase mb-0.5">Catégorie</p>
                                                <p className="font-bold text-gray-900 uppercase tracking-wider text-xs">
                                                    {t(`human_resources.categories.${member.category}`)}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-8 border-t border-slate-100">
                                    <Button className="w-full h-14 rounded-2xl bg-[#5b1887] hover:bg-[#4a146d] text-white font-black uppercase tracking-widest gap-3 shadow-lg shadow-purple-200">
                                        <Download className="h-5 w-5" />
                                        {t('human_resources.modal.dossier')}
                                    </Button>
                                </div>

                                {/* Social placeholders for premium look */}
                                <div className="flex items-center justify-center gap-4">
                                    <button className="h-10 w-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all">
                                        <Linkedin className="h-4 w-4" />
                                    </button>
                                    <button className="h-10 w-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all">
                                        <Twitter className="h-4 w-4" />
                                    </button>
                                    <button className="h-10 w-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all">
                                        <Globe className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content Area */}
                    <div className="lg:col-span-8 space-y-16">
                        {/* Biography Section */}
                        <section className="bg-white rounded-[2.5rem] p-10 md:p-12 shadow-sm border border-slate-100 overflow-hidden relative">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
                            <h2 className="text-2xl font-black text-gray-900 uppercase mb-8 flex items-center gap-4">
                                <span className="h-8 w-1.5 bg-[#fdb913] rounded-full"></span>
                                {t('human_resources.modal.biography')}
                            </h2>
                            <div className="prose prose-slate max-w-none">
                                <p className="text-gray-700 leading-relaxed font-serif text-xl opacity-90 whitespace-pre-line italic">
                                    {member.bio || t('human_resources.modal.default_bio')}
                                </p>
                            </div>
                        </section>

                        {/* Bibliography Section */}
                        {member.bibliography && (
                            <section className="bg-white rounded-[2.5rem] p-10 md:p-12 shadow-sm border border-slate-100">
                                <h2 className="text-2xl font-black text-gray-900 uppercase mb-10 flex items-center gap-4">
                                    <span className="h-8 w-1.5 bg-[#ee1c25] rounded-full"></span>
                                    {t('human_resources.modal.bibliography')}
                                </h2>
                                <div className="space-y-8">
                                    {/* Parsing a bit of bibliography if it has headers */}
                                    <div
                                        className="member-bibliography prose prose-slate max-w-none"
                                        dangerouslySetInnerHTML={{
                                            __html: member.bibliography
                                                .replace(/^### (.*$)/gim, '<h4 className="font-black text-primary uppercase text-xs tracking-[0.2em] mt-12 first:mt-0 mb-6 pb-2 border-b border-slate-100">$1</h4>')
                                                .replace(/^- (.*$)/gim, '<div className="flex gap-4 mb-4 items-start"><span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0"></span><p className="m-0 text-gray-700 font-medium">$1</p></div>')
                                        }}
                                    />
                                </div>
                            </section>
                        )}

                        {/* Additional info placeholder */}
                        {!member.bibliography && (
                            <div className="py-20 text-center bg-white rounded-[2.5rem] border-2 border-dashed border-slate-100">
                                <FileText className="h-12 w-12 text-slate-200 mx-auto mb-4" />
                                <p className="text-slate-400 italic">Détails académiques supplémentaires en cours de numérisation.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
