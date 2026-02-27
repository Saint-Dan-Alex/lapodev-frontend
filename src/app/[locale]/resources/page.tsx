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
    Mail,
    Image as ImageIcon
} from 'lucide-react';
import Image from 'next/image';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { cn } from "@/lib/utils";

interface Member {
    id: number;
    name: string;
    category: 'academic' | 'scientific' | 'administrative' | 'technical';
    grade?: string;
    biography?: string;
    bibliography?: string;
    email?: string;
    office?: string;
    dossierUrl?: string;
}

export default function ResourcesPage() {
    const t = useTranslations('ResourcesPage');
    const [selectedMember, setSelectedMember] = useState<Member | null>(null);
    const [activeModalTab, setActiveModalTab] = useState('identity');

    const members: Member[] = [
        // ACADEMIC
        {
            id: 1,
            name: "Pr. INDEKA NKOSO Joseph",
            category: 'academic',
            grade: t('human_resources.grades.director'),
            email: "joseph.indeka@gmail.com",
            biography: t('human_resources.bios.indeka'),
            bibliography: t('human_resources.bibliographies.indeka'),
            office: t('human_resources.offices.indeka')
        },
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
        { id: 12, name: "Pr. KAVIRA WANGAHEMUKA Julienne", category: 'academic', grade: t('human_resources.grades.assoc_prof'), biography: t('human_resources.bios.kavira') },
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
    ];

    const galleryItems = [
        { id: 1, title: "Session de Travail", category: "team", image: "/Carousel/1.jpeg" },
        { id: 2, title: "Mission de Recherche", category: "research", image: "/Carousel/2.jpeg" },
        { id: 3, title: "Assemblée Générale", category: "events", image: "/Carousel/3.jpeg" },
        { id: 4, title: "Conférence Scientifique", category: "events", image: "/Carousel/1.jpeg" },
        { id: 5, title: "Analyse de Terrain", category: "research", image: "/Carousel/2.jpeg" },
        { id: 6, title: "Réunion DG", category: "team", image: "/Carousel/3.jpeg" },
    ];

    const [galleryFilter, setGalleryFilter] = useState('all');
    const filteredGallery = galleryFilter === 'all'
        ? galleryItems
        : galleryItems.filter(item => item.category === galleryFilter);

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
                    <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 mb-12 bg-slate-100 p-1 h-auto sm:h-14 rounded-2xl gap-1">
                        <TabsTrigger value="members" className="rounded-xl data-[state=active]:bg-primary data-[state=active]:text-white font-bold uppercase tracking-widest text-[10px] sm:text-xs transition-all py-3 sm:py-0">
                            {t('human_resources.title')}
                        </TabsTrigger>
                        <TabsTrigger value="documents" className="rounded-xl data-[state=active]:bg-primary data-[state=active]:text-white font-bold uppercase tracking-widest text-[10px] sm:text-xs transition-all py-3 sm:py-0">
                            {t('documents.title')}
                        </TabsTrigger>
                        <TabsTrigger value="gallery" className="rounded-xl data-[state=active]:bg-primary data-[state=active]:text-white font-bold uppercase tracking-widest text-[10px] sm:text-xs transition-all py-3 sm:py-0 text-center">
                            {t('gallery.title')}
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
                                            onClick={() => {
                                                setSelectedMember(member);
                                                setActiveModalTab('identity');
                                            }}
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

                    {/* GALLERY CONTENT */}
                    <TabsContent value="gallery" className="space-y-12">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-black text-gray-900 mb-4 uppercase">
                                {t('gallery.subtitle')}
                            </h2>
                            <p className="text-gray-600 leading-relaxed font-medium italic">
                                "{t('gallery.description')}"
                            </p>
                        </div>

                        {/* Category Filter */}
                        <div className="flex flex-wrap gap-2">
                            {['all', 'events', 'research', 'team'].map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setGalleryFilter(cat)}
                                    className={cn(
                                        "px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all",
                                        galleryFilter === cat
                                            ? "bg-primary text-white shadow-lg shadow-primary/20"
                                            : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                                    )}
                                >
                                    {t(`gallery.categories.${cat}`)}
                                </button>
                            ))}
                        </div>

                        {/* Image Grid */}
                        {filteredGallery.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredGallery.map((item) => (
                                    <div
                                        key={item.id}
                                        onClick={() => window.open(item.image, '_blank')}
                                        className="group relative aspect-[4/3] rounded-3xl overflow-hidden bg-slate-100 shadow-xl shadow-slate-200/40 cursor-pointer"
                                    >
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                            <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                                {t(`gallery.categories.${item.category}`)}
                                            </span>
                                            <h4 className="text-white font-black text-xl uppercase tracking-tighter transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                                                {item.title}
                                            </h4>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="py-20 text-center bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200">
                                <ImageIcon className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                                <p className="text-slate-500 font-medium italic">
                                    {t('gallery.no_images')}
                                </p>
                            </div>
                        )}
                    </TabsContent>
                </Tabs >
            </div >



            {/* MEMBER MODAL */}
            <Dialog open={!!selectedMember} onOpenChange={(open) => !open && setSelectedMember(null)}>
                <DialogContent className="sm:max-w-3xl p-0 overflow-hidden rounded-[2rem] border-none shadow-2xl flex flex-col max-h-[90vh]">
                    {selectedMember && (
                        <>
                            {/* Header Gradient - Non-scrollable */}
                            <div className="h-32 bg-gradient-to-br from-[#5b1887] to-[#8b2fc9] relative flex-none">
                                <div className="absolute -bottom-12 left-8 p-1 bg-white rounded-3xl shadow-xl z-20">
                                    <div className="w-24 h-24 bg-slate-100 rounded-2xl flex items-center justify-center text-[#5b1887]">
                                        <User className="w-12 h-12" />
                                    </div>
                                </div>
                            </div>

                            {/* Scrollable Body */}
                            <div className="pt-16 pb-10 px-8 md:px-12 overflow-y-auto custom-scrollbar">
                                <div className="mb-8">
                                    <div className="flex items-start justify-between gap-4 mb-2">
                                        <DialogTitle className="text-3xl font-black text-gray-900 tracking-tighter uppercase leading-tight">
                                            {selectedMember.name}
                                        </DialogTitle>
                                        <DialogDescription className="sr-only">
                                            Détails pour {selectedMember.name}
                                        </DialogDescription>
                                        {selectedMember.email && (
                                            <Button variant="ghost" size="sm" asChild className="rounded-full h-8 text-primary shrink-0 transition-transform hover:scale-110">
                                                <a href={`mailto:${selectedMember.email}`} title={t('human_resources.modal.send_email')}>
                                                    <Mail className="h-4 w-4" />
                                                </a>
                                            </Button>
                                        )}
                                    </div>
                                    <div className="inline-flex px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest">
                                        {selectedMember.grade || t('human_resources.modal.member_grade')}
                                    </div>
                                </div>

                                <Tabs value={activeModalTab} onValueChange={setActiveModalTab} className="w-full">
                                    <TabsList className="grid w-full grid-cols-3 mb-8 bg-slate-100/50 p-1.5 h-12 rounded-xl border border-slate-100">
                                        <TabsTrigger value="identity" className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm font-bold uppercase tracking-widest text-[10px]">
                                            {t('human_resources.modal.identity')}
                                        </TabsTrigger>
                                        <TabsTrigger value="biography" className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm font-bold uppercase tracking-widest text-[10px]">
                                            {t('human_resources.modal.biography')}
                                        </TabsTrigger>
                                        <TabsTrigger value="bibliography" className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm font-bold uppercase tracking-widest text-[10px]">
                                            {t('human_resources.modal.bibliography')}
                                        </TabsTrigger>
                                    </TabsList>

                                    {/* IDENTITÉ */}
                                    <TabsContent value="identity" className="space-y-6 focus-visible:outline-none">
                                        <div className="bg-slate-50/50 p-6 rounded-2xl border border-slate-100 space-y-4">
                                            <div className="flex items-center gap-4">
                                                <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm border border-slate-100">
                                                    <User className="h-5 w-5" />
                                                </div>
                                                <div>
                                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-0.5">Nom Complet</span>
                                                    <p className="font-bold text-gray-900">{selectedMember.name}</p>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-4">
                                                <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm border border-slate-100">
                                                    <GraduationCap className="h-5 w-5" />
                                                </div>
                                                <div>
                                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-0.5">Grade / Fonction</span>
                                                    <p className="font-bold text-gray-900">{selectedMember.grade || t('human_resources.modal.member_grade')}</p>
                                                </div>
                                            </div>

                                            {selectedMember.email && (
                                                <div className="flex items-center gap-4">
                                                    <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm border border-slate-100">
                                                        <Mail className="h-5 w-5" />
                                                    </div>
                                                    <div>
                                                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-0.5">Email</span>
                                                        <p className="font-bold text-gray-900">{selectedMember.email}</p>
                                                    </div>
                                                </div>
                                            )}

                                            {selectedMember.office && (
                                                <div className="flex items-center gap-4">
                                                    <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm border border-slate-100">
                                                        <Briefcase className="h-5 w-5" />
                                                    </div>
                                                    <div>
                                                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-0.5">{t('human_resources.modal.office')}</span>
                                                        <p className="font-bold text-gray-900">{selectedMember.office}</p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </TabsContent>

                                    {/* BIOGRAPHIE */}
                                    <TabsContent value="biography" className="space-y-6 focus-visible:outline-none">
                                        <div className="prose prose-slate max-w-none">
                                            <p className="text-gray-700 leading-relaxed font-serif italic text-lg opacity-90 whitespace-pre-line">
                                                {selectedMember.biography || t('human_resources.modal.default_bio')}
                                            </p>
                                        </div>
                                    </TabsContent>

                                    {/* BIBLIOGRAPHIE */}
                                    <TabsContent value="bibliography" className="space-y-6 focus-visible:outline-none">
                                        <div className="prose prose-sm prose-slate max-w-none">
                                            {selectedMember.bibliography ? (
                                                <div className="text-gray-700 leading-relaxed whitespace-pre-line bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                                    <div dangerouslySetInnerHTML={{
                                                        __html: selectedMember.bibliography
                                                            .replace(/^### (.*$)/gim, '<h4 className="font-black text-primary uppercase text-xs tracking-widest mt-6 first:mt-0 mb-3">$1</h4>')
                                                            .replace(/^- (.*$)/gim, '<li className="mb-2">$1</li>')
                                                    }} />
                                                </div>
                                            ) : (
                                                <p className="text-slate-400 italic text-center py-8">
                                                    {t('human_resources.modal.default_bio')}
                                                </p>
                                            )}
                                        </div>
                                    </TabsContent>
                                </Tabs>

                                {/* <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <Button
                                        onClick={() => {
                                            if (selectedMember.dossierUrl) {
                                                window.open(selectedMember.dossierUrl, '_blank');
                                            } else {
                                                alert(t('human_resources.modal.dossier_not_available'));
                                            }
                                        }}
                                        className="h-14 rounded-2xl bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest gap-3 shadow-xl shadow-primary/20 transition-all hover:-translate-y-1"
                                    >
                                        <Download className="h-5 w-5" />
                                        {t('human_resources.modal.dossier')}
                                    </Button>
                                    <Button
                                        onClick={() => setActiveModalTab('bibliography')}
                                        variant="outline"
                                        className="h-14 rounded-2xl border-slate-200 text-slate-500 font-bold uppercase tracking-widest hover:bg-slate-50 transition-all"
                                    >
                                        {t('human_resources.modal.publications')}
                                    </Button>
                                </div> */}
                            </div>
                        </>
                    )}
                </DialogContent>
            </Dialog>
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
