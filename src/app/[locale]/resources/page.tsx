"use client";

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import {
    Download,
    User,
    Users,
    FileText,
    Search,
    GraduationCap,
    Briefcase,
    Settings,
    ChevronRight,
    ExternalLink,
    Mail
} from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';

interface Member {
    id: number;
    name: string;
    category: 'academic' | 'scientific' | 'administrative' | 'technical';
    grade?: string;
    bio?: string;
    email?: string;
}

export default function ResourcesPage() {
    const t = useTranslations('ResourcesPage');
    const [selectedMember, setSelectedMember] = useState<Member | null>(null);

    const members: Member[] = [
        // ACADEMIC
        { id: 1, name: "Pr. INDEKA NKOSO Joseph", category: 'academic', grade: t('human_resources.grades.director'), email: "joseph.indeka@gmail.com", bio: t('human_resources.bios.indeka') },
        { id: 2, name: "Pr. OSOKONDA OKENGE Basile", category: 'academic', grade: t('human_resources.grades.president') },
        { id: 3, name: "Pr. MOTTIER Damien", category: 'academic', grade: t('human_resources.grades.deputy_scientific') },
        { id: 4, name: "Pr. MPERENG JERRY", category: 'academic', grade: t('human_resources.grades.media_head') },
        { id: 5, name: "Pr. BEYA MALENGU BERTIN", category: 'academic', grade: t('human_resources.grades.scientific_director') },
        { id: 6, name: "Pr. NGALAMULUME Grégoire", category: 'academic', grade: t('human_resources.grades.editor_in_chief') },
        { id: 7, name: "Pr. MOMINDO François", category: 'academic', grade: t('human_resources.grades.media_deputy') },
        { id: 8, name: "Pr. MUMBEMBELE SANGER Placide", category: 'academic' },
        { id: 9, name: "Pr. NEKA MBANGAZI Victorine", category: 'academic' },
        { id: 10, name: "Pr. EKALA BOKOSWA Pierre", category: 'academic' },
        { id: 11, name: "Pr. MULOMBA TSHITUMBA Elie", category: 'academic' },
        { id: 12, name: "Pr. KAVIRA WANGAHEMUKA Julienne", category: 'academic', grade: t('human_resources.grades.assoc_prof'), bio: t('human_resources.bios.kavira') },
        { id: 13, name: "Pr. BARAKA MUVUKA", category: 'academic' },
        { id: 14, name: "Pr. NGOY MUANA Emery", category: 'academic' },
        { id: 15, name: "Dr. TSHAMA KANUMBI", category: 'academic' },

        // SCIENTIFIC
        { id: 101, name: "LUNDUKU MASANDA Bauer", category: 'scientific' },
        { id: 102, name: "MUAMBA Victor", category: 'scientific', grade: t('human_resources.grades.daf') },
        { id: 103, name: "GATO MBONEZA Rose", category: 'scientific', grade: t('human_resources.grades.advisor') },
        { id: 104, name: "MPWEKELA KALALA Nicole", category: 'scientific', grade: t('human_resources.grades.marketing') },
        { id: 105, name: "BOPEDJI ITUKU Delphin", category: 'scientific', grade: t('human_resources.grades.board_member') },
        { id: 106, name: "MOSSI SEZENE Gradi", category: 'scientific' },
        { id: 107, name: "LIKENGO BONKONDO Nathalie", category: 'scientific' },
        { id: 108, name: "MBOLO BELAMBO Jean Bosco", category: 'scientific' },
        { id: 109, name: "BAMPEMBE BOTUNDULU Junior", category: 'scientific', grade: t('human_resources.grades.secretary') },
        { id: 110, name: "MBAY Serge", category: 'scientific' },
        { id: 111, name: "KINDAMBU Paulin", category: 'scientific' },
        { id: 112, name: "LUBINGA MULENGA Patrick", category: 'scientific' },
        { id: 113, name: "BAKENGA Wa BAKENGA PI-Cretsh", category: 'scientific' },
        { id: 114, name: "INDEKA NKOSO Grings", category: 'scientific' },
        { id: 115, name: "KASEREKA WANGAHEMUKA Shamba", category: 'scientific' },
        { id: 116, name: "LOOLA ESINGI Hervé", category: 'scientific' },
        { id: 117, name: "MBALE BASA Michel", category: 'scientific' },
        { id: 118, name: "MUSHANGALUSA BULEMPWE Prosper", category: 'scientific' },
        { id: 119, name: "TSHOMBE KABWIT Samuel", category: 'scientific' },
        { id: 120, name: "NUNGENDA ILONGOLONGO Romain", category: 'scientific' },
        { id: 121, name: "TSHIMANGA MAKENGA Alexr", category: 'scientific' },
        { id: 122, name: "MANENG Sandrine", category: 'scientific' },
        { id: 123, name: "LILEMBO KOLI Willy", category: 'scientific' },
        { id: 124, name: "EPOMI NKOSO Jean-Pierre", category: 'scientific' },
        { id: 125, name: "BAONDJE BELEMBE Hilaire", category: 'scientific' },

        // ADMINISTRATIVE
        { id: 201, name: "TIBA RAJABU Merveille", category: 'administrative', grade: t('human_resources.grades.admin_assistant') },
        { id: 202, name: "BELEMO NSIMBA", category: 'administrative' },
        { id: 203, name: "NGONGA DJESE Marie", category: 'administrative' },
        { id: 204, name: "BOPENDA BENGOYA Chardelle", category: 'administrative' },
        { id: 205, name: "TSHILOMBA Marie", category: 'administrative' },

        // TECHNICAL
        { id: 301, name: "MPEMBE LOKENYE Patrick", category: 'technical' },
        { id: 302, name: "IBINDA Menacé", category: 'technical' },
        { id: 303, name: "BASA DJONGWA Pierre", category: 'technical' },
        { id: 304, name: "MUBWISA Micheline", category: 'technical' },
        { id: 305, name: "KABONGO KABANGA Trésor", category: 'technical' },
    ];

    const documents = [
        { title: t('documents.items.0'), category: t('documents.categories.official') },
        { title: t('documents.items.1'), category: t('documents.categories.official') },
        { title: t('documents.items.2'), category: t('documents.categories.official') },
        { title: t('documents.items.3'), category: t('documents.categories.legal') },
        { title: t('documents.items.4'), category: t('documents.categories.membership') },
        { title: t('documents.items.5'), category: t('documents.categories.support') },
        { title: t('documents.items.6'), category: t('documents.categories.publications') },
        { title: t('documents.items.7'), category: t('documents.categories.archives') },
        { title: t('documents.items.8'), category: t('documents.categories.archives') },
    ];

    const filterMembers = (cat: string) => members.filter(m => m.category === cat);

    return (
        <div className="flex flex-col min-h-screen">
            {/* Header Section */}
            <section className="relative pt-32 pb-20 bg-[#5b1887] text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                <div className="container mx-auto px-4 md:px-8 relative z-10">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tighter uppercase italic">
                        {t('title')}
                    </h1>
                    <div className="h-1.5 w-20 md:w-24 bg-[#fdb913] rounded-full"></div>
                </div>
            </section>

            <div className="container mx-auto px-4 md:px-8 py-16">
                <Tabs defaultValue="members" className="w-full">
                    <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 mb-12 bg-slate-100 p-1 h-auto sm:h-14 rounded-2xl gap-1">
                        <TabsTrigger value="members" className="rounded-xl data-[state=active]:bg-primary data-[state=active]:text-white font-bold uppercase tracking-widest text-[10px] sm:text-xs transition-all py-3 sm:py-0">
                            {t('human_resources.title')}
                        </TabsTrigger>
                        <TabsTrigger value="documents" className="rounded-xl data-[state=active]:bg-primary data-[state=active]:text-white font-bold uppercase tracking-widest text-[10px] sm:text-xs transition-all py-3 sm:py-0">
                            {t('documents.title')}
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="members" className="space-y-12">
                        <div className="max-w-3xl mb-12">
                            <h2 className="text-3xl font-black text-gray-900 mb-4 uppercase">
                                {t('human_resources.subtitle')}
                            </h2>
                            <p className="text-gray-600 leading-relaxed font-medium italic">
                                "{t('human_resources.description')}"
                            </p>
                        </div>

                        {/* Categories */}
                        {['academic', 'scientific', 'administrative', 'technical'].map((cat) => (
                            <div key={cat} className="space-y-6">
                                <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                                    <div className="p-2 bg-primary/5 rounded-lg text-primary">
                                        {cat === 'academic' && <GraduationCap className="h-6 w-6" />}
                                        {cat === 'scientific' && <Search className="h-6 w-6" />}
                                        {cat === 'administrative' && <Briefcase className="h-6 w-6" />}
                                        {cat === 'technical' && <Settings className="h-6 w-6" />}
                                    </div>
                                    <h3 className="text-xl font-black text-gray-800 uppercase tracking-tighter">
                                        {t(`human_resources.categories.${cat}`)}
                                    </h3>
                                    <span className="ml-auto bg-slate-100 text-slate-500 text-[10px] font-black px-2 py-0.5 rounded-full">
                                        {filterMembers(cat).length} {t('human_resources.categories.' + cat).split(' ')[0].toUpperCase()}
                                    </span>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {filterMembers(cat).map((member) => (
                                        <div
                                            key={member.id}
                                            onClick={() => setSelectedMember(member)}
                                            className="group bg-white border border-slate-200 p-5 rounded-2xl hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all cursor-pointer relative overflow-hidden"
                                        >
                                            <div className="flex flex-col h-full">
                                                <span className="text-xs font-black text-primary/40 uppercase mb-2 group-hover:text-primary/60 transition-colors">
                                                    {member.grade || t('human_resources.modal.member_grade')}
                                                </span>
                                                <h4 className="font-bold text-gray-900 group-hover:text-primary transition-colors leading-tight">
                                                    {member.name}
                                                </h4>
                                                <div className="mt-4 pt-4 border-t border-slate-50 flex items-center justify-between">
                                                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-1 group-hover:text-gray-900">
                                                        {t('human_resources.download')} <ChevronRight className="h-3 w-3" />
                                                    </span>
                                                    <Download className="h-4 w-4 text-slate-300 group-hover:text-primary transition-colors" />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </TabsContent>

                    {/* DOCUMENTS CONTENT */}
                    <TabsContent value="documents">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {documents.map((doc, i) => (
                                <div key={i} className="flex items-center gap-6 p-8 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-200/40 hover:-translate-y-1 transition-all group">
                                    <div className="flex-none w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                        <FileText className="h-7 w-7" />
                                    </div>
                                    <div className="flex-grow">
                                        <span className="text-[9px] font-black text-primary uppercase tracking-[0.2em] mb-1 block">
                                            {doc.category}
                                        </span>
                                        <h4 className="font-bold text-gray-900 text-lg leading-tight mb-3">
                                            {doc.title}
                                        </h4>
                                        <Button
                                            onClick={() => alert(`${t('human_resources.download')} : ${doc.title}`)}
                                            variant="outline" size="sm" className="h-9 gap-2 rounded-lg border-primary/20 hover:border-primary hover:bg-primary hover:text-white transition-all"
                                        >
                                            <Download className="h-4 w-4" />
                                            <span className="text-xs font-bold uppercase tracking-wider">{t('human_resources.download')}</span>
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </TabsContent>
                </Tabs >
            </div >

            {/* MEMBER MODAL */}
            < Dialog open={!!selectedMember
            } onOpenChange={(open) => !open && setSelectedMember(null)}>
                <DialogContent className="sm:max-w-2xl p-0 overflow-hidden rounded-[2rem] border-none shadow-2xl">
                    {selectedMember && (
                        <div className="flex flex-col">
                            {/* Header Gradient */}
                            <div className="h-32 bg-gradient-to-br from-[#5b1887] to-[#8b2fc9] relative">
                                <div className="absolute -bottom-12 left-8 p-1 bg-white rounded-3xl shadow-xl">
                                    <div className="w-24 h-24 bg-slate-100 rounded-2xl flex items-center justify-center text-[#5b1887]">
                                        <User className="w-12 h-12" />
                                    </div>
                                </div>
                            </div>

                            <div className="pt-16 pb-10 px-10">
                                <div className="mb-8">
                                    <div className="flex items-start justify-between gap-4 mb-2">
                                        <DialogTitle className="text-3xl font-black text-gray-900 tracking-tighter uppercase leading-tight">
                                            {selectedMember.name}
                                        </DialogTitle>
                                        {selectedMember.email && (
                                            <Button variant="ghost" size="sm" asChild className="rounded-full h-8 text-primary">
                                                <a href={`mailto:${selectedMember.email}`} title={t('human_resources.modal.send_email')}>
                                                    <ExternalLink className="h-4 w-4" />
                                                </a>
                                            </Button>
                                        )}
                                    </div>
                                    <div className="inline-flex px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest">
                                        {selectedMember.grade || t('human_resources.modal.member_grade')}
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                                            <div className="h-px bg-slate-100 flex-grow"></div>
                                            {t('human_resources.modal.about')}
                                            <div className="h-px bg-slate-100 flex-grow"></div>
                                        </h4>
                                        <DialogDescription className="text-gray-700 leading-relaxed font-serif italic text-lg opacity-80">
                                            {selectedMember.bio || t('human_resources.modal.default_bio')}
                                        </DialogDescription>
                                    </div>

                                    {selectedMember.email && (
                                        <div className="pt-4 flex items-center gap-4 text-sm font-medium text-slate-500">
                                            <Mail className="h-4 w-4" />
                                            {selectedMember.email}
                                        </div>
                                    )}

                                    <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <Button
                                            onClick={() => alert(`${t('human_resources.download')} : ${selectedMember.name}`)}
                                            className="h-14 rounded-2xl bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest gap-3 shadow-xl shadow-primary/20"
                                        >
                                            <Download className="h-5 w-5" />
                                            {t('human_resources.modal.dossier')}
                                        </Button>
                                        <Button
                                            onClick={() => alert(`${t('human_resources.modal.publications')} : ${selectedMember.name}`)}
                                            variant="outline"
                                            className="h-14 rounded-2xl border-slate-200 text-slate-500 font-bold uppercase tracking-widest"
                                        >
                                            {t('human_resources.modal.publications')}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog >
        </div >
    );
}

function MailIcon(props: any) {
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
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
    );
}
