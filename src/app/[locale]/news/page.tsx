'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import {
    Calendar,
    ArrowRight,
    FileText,
    Download,
    Search,
    Filter,
    Clock,
    MapPin,
    ChevronRight,
    TrendingUp
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

interface NewsEvent {
    id: number;
    title: string;
    date: string;
    location: string;
    category: 'past' | 'current' | 'upcoming';
    description: string;
    image?: string;
}

interface Publication {
    id: number;
    title: string;
    author: string;
    date: string;
    type: string;
}

export default function NewsPage() {
    const t = useTranslations('NewsPage');
    const [activeEventTab, setActiveEventTab] = useState<'all' | 'past' | 'current' | 'upcoming'>('all');

    // Use raw data from translations for events and publications
    const eventsData = t.raw('data.events') as any[];
    const publicationsData = t.raw('data.publications') as any[];


    const events: NewsEvent[] = eventsData.map((e, i) => ({
        ...e,
        id: i + 1,
        category: e.category || 'upcoming'
    }));

    const publications: Publication[] = publicationsData.map((p, i) => ({
        ...p,
        id: i + 1
    }));

    const filteredEvents = events.filter(event =>
        activeEventTab === 'all' || event.category === activeEventTab
    );

    const getStatusColor = (category: string) => {
        switch (category) {
            case 'upcoming': return 'bg-emerald-500/10 text-emerald-600 border-emerald-200';
            case 'current': return 'bg-amber-500/10 text-amber-600 border-amber-200';
            case 'past': return 'bg-slate-500/10 text-slate-600 border-slate-200';
            default: return 'bg-blue-500/10 text-blue-600 border-blue-200';
        }
    };

    return (
        <main className="min-h-screen bg-[#fafafa]">
            {/* HERO SECTION */}
            <div className="relative pt-32 pb-20 overflow-hidden bg-[#5b1887]">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/10 to-transparent skew-x-12 transform translate-x-20"></div>
                <div className="container mx-auto px-4 md:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <Badge className="mb-6 bg-white/20 text-white border-none backdrop-blur-md px-4 py-1.5 text-xs font-black uppercase tracking-widest">
                            {t('title')}
                        </Badge>
                        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-[0.9]">
                            {t('title')}
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 font-medium leading-relaxed max-w-2xl">
                            {t('subtitle')}
                        </p>
                    </div>
                </div>
            </div>

            {/* CONTENT SECTION */}
            <div className="container mx-auto px-4 md:px-8 -mt-10 mb-20 relative z-20">
                <Tabs defaultValue="events" className="w-full">
                    <div className="bg-white p-2 rounded-3xl shadow-2xl shadow-purple-900/10 border border-slate-100 flex flex-wrap items-center justify-between gap-4 mb-12">
                        <TabsList className="bg-transparent h-auto p-0 flex flex-wrap gap-2">
                            <TabsTrigger
                                value="events"
                                className="px-8 py-3 rounded-2xl data-[state=active]:bg-[#5b1887] data-[state=active]:text-white text-slate-500 font-black uppercase tracking-widest text-xs transition-all"
                            >
                                {t('events.title')}
                            </TabsTrigger>
                            <TabsTrigger
                                value="publications"
                                className="px-8 py-3 rounded-2xl data-[state=active]:bg-[#5b1887] data-[state=active]:text-white text-slate-500 font-black uppercase tracking-widest text-xs transition-all"
                            >
                                {t('publications.title')}
                            </TabsTrigger>
                        </TabsList>

                        <div className="flex items-center gap-3 px-2">
                            <div className="relative group">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-primary transition-colors" />
                                <input
                                    type="text"
                                    placeholder={t('search')}
                                    className="h-12 pl-12 pr-6 rounded-2xl bg-slate-50 border-none text-sm font-medium focus:ring-2 focus:ring-primary/20 transition-all w-64"
                                />
                            </div>
                        </div>
                    </div>

                    {/* EVENTS CONTENT */}
                    <TabsContent value="events" className="mt-0 outline-none">
                        <div className="flex flex-wrap gap-3 mb-12">
                            {['all', 'current', 'upcoming', 'past'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveEventTab(tab as any)}
                                    className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all border ${activeEventTab === tab
                                        ? 'bg-[#5b1887] text-white border-[#5b1887] shadow-lg shadow-purple-900/20'
                                        : 'bg-white text-slate-500 border-slate-200 hover:border-primary/30'
                                        }`}
                                >
                                    {t(`events.${tab}`)}
                                </button>
                            ))}
                        </div>

                        {filteredEvents.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filteredEvents.map((event) => (
                                    <div key={event.id} className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-all duration-500 flex flex-col h-full">
                                        {/* Image Placeholder */}
                                        <div className="h-52 bg-slate-100 relative overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-br from-[#5b1887]/5 to-[#8b2fc9]/20 group-hover:scale-110 transition-transform duration-700"></div>
                                            <div className="absolute top-6 left-6">
                                                <Badge className={`px-4 py-1.5 border backdrop-blur-md font-black uppercase tracking-widest text-[10px] ${getStatusColor(event.category)}`}>
                                                    {t(`events.${event.category}`)}
                                                </Badge>
                                            </div>
                                            <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                                                <Calendar className="w-24 h-24 text-slate-900" />
                                            </div>
                                        </div>

                                        <div className="p-8 flex flex-col flex-grow">
                                            <div className="flex items-center gap-2 text-[#5b1887] font-black text-[10px] uppercase tracking-[0.2em] mb-4">
                                                <Calendar className="h-3.5 w-3.5" />
                                                {event.date}
                                            </div>

                                            <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors leading-tight line-clamp-2">
                                                {event.title}
                                            </h3>

                                            <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow line-clamp-3">
                                                {event.description}
                                            </p>

                                            <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                                                <div className="flex items-center gap-2 text-slate-400 text-xs font-medium uppercase tracking-wider">
                                                    <MapPin className="h-3.5 w-3.5" />
                                                    {event.location}
                                                </div>
                                                <Button variant="ghost" className="ml-auto rounded-full group/btn text-[#5b1887] font-black uppercase text-[10px] tracking-widest gap-2">
                                                    {t('events.read_more')}
                                                    <ChevronRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="bg-white rounded-[2.5rem] p-20 text-center border border-dashed border-slate-300">
                                <Clock className="h-16 w-16 text-slate-200 mx-auto mb-6" />
                                <h3 className="text-2xl font-black text-slate-400 uppercase tracking-tighter">
                                    {t('events.no_events')}
                                </h3>
                            </div>
                        )}
                    </TabsContent>

                    {/* PUBLICATIONS CONTENT */}
                    <TabsContent value="publications" className="mt-0 outline-none">
                        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-200/40 p-10">
                            <div className="max-w-xl mb-12">
                                <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tighter mb-4">
                                    {t('publications.title')}
                                </h2>
                                <p className="text-slate-500 font-medium">
                                    {t('publications.description')}
                                </p>
                            </div>

                            <div className="space-y-4">
                                {publications.map((pub) => (
                                    <div key={pub.id} className="group flex flex-col md:flex-row md:items-center gap-6 p-6 rounded-3xl border border-transparent hover:border-primary/10 hover:bg-slate-50/50 transition-all">
                                        <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                            <FileText className="h-7 w-7" />
                                        </div>

                                        <div className="flex-grow">
                                            <div className="flex items-center gap-3 mb-2">
                                                <Badge variant="secondary" className="bg-slate-100 text-[10px] font-black uppercase tracking-widest px-3">
                                                    {pub.type}
                                                </Badge>
                                                <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">
                                                    {pub.date}
                                                </span>
                                            </div>
                                            <h4 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                                                {pub.title}
                                            </h4>
                                            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                                                <span className="text-slate-300">{t('publications.author')}:</span> {pub.author}
                                            </p>
                                        </div>

                                        <Button
                                            onClick={() => alert(`${t('publications.download')} : ${pub.title}`)}
                                            className="rounded-2xl h-14 px-8 bg-white border border-slate-200 text-slate-900 hover:bg-[#5b1887] hover:text-white group-hover:border-[#5b1887] hover:shadow-xl hover:shadow-purple-900/20 transition-all font-black uppercase tracking-widest text-xs gap-3"
                                        >
                                            <Download className="h-5 w-5" />
                                            {t('publications.download')}
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>

            {/* CTA SECTION */}
            <div className="container mx-auto px-4 md:px-8 pb-32">
                <div className="relative rounded-[3rem] bg-gradient-to-r from-[#5b1887] to-[#8b2fc9] p-12 md:p-20 overflow-hidden shadow-2xl shadow-purple-900/30">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-20"></div>
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="max-w-2xl text-center md:text-left">
                            <TrendingUp className="h-12 w-12 text-white/40 mb-8 mx-auto md:mx-0" />
                            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-6 uppercase leading-tight">
                                {t('cta.title')}
                            </h2>
                            <p className="text-lg text-white/70 font-medium">
                                {t('cta.description')}
                            </p>
                        </div>
                        <Button className="h-20 px-12 rounded-3xl bg-white text-[#5b1887] hover:bg-white/90 font-black uppercase tracking-[0.2em] text-sm shadow-2xl transition-all hover:scale-105 active:scale-95">
                            {t('cta.button')}
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    );
}
