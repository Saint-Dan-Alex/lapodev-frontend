'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import {
    Calendar as CalendarIcon,
    ArrowRight,
    FileText,
    Download,
    Search,
    Filter,
    Clock,
    MapPin,
    ChevronLeft,
    ChevronRight,
    TrendingUp,
    X
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from 'framer-motion';

interface NewsEvent {
    id: number;
    title: string;
    date: string;
    isoDate: string;
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
    const [selectedEvent, setSelectedEvent] = useState<NewsEvent | null>(null);
    const [currentDate, setCurrentDate] = useState(new Date());

    // Embla Carousel setup
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'start',
        slidesToScroll: 1,
        breakpoints: {
            '(min-width: 768px)': { slidesToScroll: 2 },
            '(min-width: 1024px)': { slidesToScroll: 3 }
        }
    }, [Autoplay({ delay: 5000, stopOnInteraction: false })]);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

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

    // Calendar logic
    const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = (year: number, month: number) => {
        const day = new Date(year, month, 1).getDay();
        return day === 0 ? 6 : day - 1; // Adjust for Monday start
    };

    const renderCalendar = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const days = [];
        const totalDays = daysInMonth(year, month);
        const startDay = firstDayOfMonth(year, month);

        // Previous month days
        const prevMonthTotalDays = daysInMonth(year, month - 1);
        for (let i = startDay - 1; i >= 0; i--) {
            days.push({ day: prevMonthTotalDays - i, currentMonth: false });
        }

        // Current month days
        for (let i = 1; i <= totalDays; i++) {
            days.push({ day: i, currentMonth: true });
        }

        // Next month days
        const remainingCells = 42 - days.length;
        for (let i = 1; i <= remainingCells; i++) {
            days.push({ day: i, currentMonth: false });
        }

        return days;
    };

    const getEventsForDate = (day: number, isCurrentMonth: boolean) => {
        if (!isCurrentMonth) return [];
        const formattedDate = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        return events.filter(e => e.isoDate === formattedDate);
    };

    const monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

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
                    <div className="bg-white p-2 rounded-3xl shadow-2xl shadow-purple-900/10 border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4 mb-12 overflow-hidden">
                        <TabsList className="bg-transparent h-auto p-0 flex w-full md:w-auto overflow-x-auto no-scrollbar scroll-smooth p-1 gap-2">
                            <TabsTrigger
                                value="events"
                                className="px-6 md:px-8 py-3 rounded-2xl data-[state=active]:bg-[#5b1887] data-[state=active]:text-white text-slate-500 font-black uppercase tracking-widest text-[10px] md:text-xs transition-all flex-shrink-0"
                            >
                                {t('events.title')}
                            </TabsTrigger>
                            <TabsTrigger
                                value="publications"
                                className="px-6 md:px-8 py-3 rounded-2xl data-[state=active]:bg-[#5b1887] data-[state=active]:text-white text-slate-500 font-black uppercase tracking-widest text-[10px] md:text-xs transition-all flex-shrink-0"
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
                    <TabsContent value="events" className="mt-0 outline-none space-y-16">
                        {/* CALENDAR & INFO SECTION */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                            {/* MINI CALENDAR */}
                            <div className="lg:col-span-4 bg-white rounded-[2.5rem] p-8 shadow-2xl shadow-purple-900/5 border border-slate-100">
                                <div className="flex items-center justify-between mb-8">
                                    <h3 className="font-black uppercase tracking-widest text-xs text-slate-400">Calendrier</h3>
                                    <div className="flex gap-2">
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="h-8 w-8 rounded-full"
                                            onClick={() => {
                                                const d = new Date(currentDate);
                                                d.setMonth(d.getMonth() - 1);
                                                setCurrentDate(d);
                                            }}
                                        >
                                            <ChevronLeft className="h-4 w-4" />
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="h-8 w-8 rounded-full"
                                            onClick={() => {
                                                const d = new Date(currentDate);
                                                d.setMonth(d.getMonth() + 1);
                                                setCurrentDate(d);
                                            }}
                                        >
                                            <ChevronRight className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>

                                <div className="text-center mb-6">
                                    <span className="text-2xl font-black uppercase tracking-tighter text-[#5b1887]">
                                        {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                                    </span>
                                </div>

                                <div className="grid grid-cols-7 gap-2 mb-4 text-center">
                                    {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((d, i) => (
                                        <span key={i} className="text-[10px] font-black text-slate-300 uppercase">{d}</span>
                                    ))}
                                </div>

                                <div className="grid grid-cols-7 gap-2">
                                    {renderCalendar().map((item, idx) => {
                                        const dateEvents = getEventsForDate(item.day, item.currentMonth);
                                        const hasEvents = dateEvents.length > 0;

                                        return (
                                            <button
                                                key={idx}
                                                onClick={() => hasEvents && setSelectedEvent(dateEvents[0])}
                                                disabled={!hasEvents}
                                                className={cn(
                                                    "aspect-square rounded-xl text-xs font-bold flex items-center justify-center transition-all relative",
                                                    item.currentMonth ? "text-slate-700" : "text-slate-300 opacity-20",
                                                    hasEvents && "bg-[#5b1887] text-white shadow-lg shadow-purple-900/30 cursor-pointer hover:scale-110",
                                                    !hasEvents && "hover:bg-slate-50"
                                                )}
                                            >
                                                {item.day}
                                                {hasEvents && (
                                                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full border-2 border-[#5b1887]"></span>
                                                )}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* ACTIVITÉS / CAROUSEL */}
                            <div className="lg:col-span-8 flex flex-col gap-8">
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-wrap gap-3">
                                        {['all', 'current', 'upcoming', 'past'].map((tab) => (
                                            <button
                                                key={tab}
                                                onClick={() => setActiveEventTab(tab as any)}
                                                className={cn(
                                                    "px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border",
                                                    activeEventTab === tab
                                                        ? 'bg-[#5b1887] text-white border-[#5b1887] shadow-lg shadow-purple-900/20'
                                                        : 'bg-white text-slate-500 border-slate-200 hover:border-primary/30'
                                                )}
                                            >
                                                {t(`events.${tab}`)}
                                            </button>
                                        ))}
                                    </div>

                                    <div className="hidden sm:flex gap-2">
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            className="h-12 w-12 rounded-2xl border-slate-200 hover:bg-slate-50"
                                            onClick={scrollPrev}
                                        >
                                            <ChevronLeft className="h-5 w-5" />
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            className="h-12 w-12 rounded-2xl border-slate-200 hover:bg-slate-50"
                                            onClick={scrollNext}
                                        >
                                            <ChevronRight className="h-5 w-5" />
                                        </Button>
                                    </div>
                                </div>

                                {filteredEvents.length > 0 ? (
                                    <div className="overflow-hidden" ref={emblaRef}>
                                        <div className="flex">
                                            {filteredEvents.map((event) => (
                                                <div key={event.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_50%] pl-6 first:pl-0 min-w-0">
                                                    <div className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/50 transition-all duration-500 flex flex-col h-full">
                                                        {/* Image Placeholder */}
                                                        <div className="h-52 bg-slate-100 relative overflow-hidden">
                                                            <div className="absolute inset-0 bg-gradient-to-br from-[#5b1887]/5 to-[#8b2fc9]/20 group-hover:scale-110 transition-transform duration-700"></div>
                                                            <div className="absolute top-6 left-6">
                                                                <Badge className={cn("px-4 py-1.5 border backdrop-blur-md font-black uppercase tracking-widest text-[10px]", getStatusColor(event.category))}>
                                                                    {t(`events.${event.category}`)}
                                                                </Badge>
                                                            </div>
                                                            <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                                                                <CalendarIcon className="w-24 h-24 text-slate-900" />
                                                            </div>
                                                        </div>

                                                        <div className="p-8 flex flex-col flex-grow">
                                                            <div className="flex items-center gap-2 text-[#5b1887] font-black text-[10px] uppercase tracking-[0.2em] mb-4">
                                                                <CalendarIcon className="h-3.5 w-3.5" />
                                                                {event.date}
                                                            </div>

                                                            <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors leading-tight line-clamp-2">
                                                                {event.title}
                                                            </h3>

                                                            <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8 flex-grow line-clamp-2">
                                                                {event.description}
                                                            </p>

                                                            <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                                                                <div className="flex items-center gap-2 text-slate-400 text-xs font-medium uppercase tracking-wider">
                                                                    <MapPin className="h-3.5 w-3.5" />
                                                                    {event.location}
                                                                </div>
                                                                <Button
                                                                    variant="ghost"
                                                                    onClick={() => setSelectedEvent(event)}
                                                                    className="ml-auto rounded-full group/btn text-[#5b1887] font-black uppercase text-[10px] tracking-widest gap-2"
                                                                >
                                                                    {t('events.read_more')}
                                                                    <ChevronRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="bg-white rounded-[2.5rem] p-20 text-center border border-dashed border-slate-300">
                                        <Clock className="h-16 w-16 text-slate-200 mx-auto mb-6" />
                                        <h3 className="text-2xl font-black text-slate-400 uppercase tracking-tighter">
                                            {t('events.no_events')}
                                        </h3>
                                    </div>
                                )}
                            </div>
                        </div>
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

            {/* EVENT DETAIL MODAL */}
            <Dialog open={!!selectedEvent} onOpenChange={(open) => !open && setSelectedEvent(null)}>
                <DialogContent className="sm:max-w-2xl p-0 overflow-hidden rounded-[2.5rem] border-none shadow-2xl">
                    {selectedEvent && (
                        <div className="flex flex-col">
                            {/* Header Image/Gradient */}
                            <div className="h-48 bg-gradient-to-br from-[#5b1887] to-[#8b2fc9] relative">
                                <div className="absolute top-8 left-8">
                                    <Badge className={cn("px-4 py-1.5 border backdrop-blur-md font-black uppercase tracking-widest text-[10px]", getStatusColor(selectedEvent.category))}>
                                        {t(`events.${selectedEvent.category}`)}
                                    </Badge>
                                </div>
                                <div className="absolute -bottom-8 right-12 w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center text-[#5b1887]">
                                    <CalendarIcon className="w-10 h-10" />
                                </div>
                            </div>

                            <div className="p-10 pt-12">
                                <div className="flex items-center gap-2 text-[#5b1887] font-black text-xs uppercase tracking-[0.3em] mb-4">
                                    <Clock className="h-4 w-4" />
                                    {selectedEvent.date}
                                </div>

                                <DialogTitle className="text-3xl font-black text-gray-900 tracking-tighter uppercase mb-6 leading-tight">
                                    {selectedEvent.title}
                                </DialogTitle>

                                <div className="flex items-center gap-2 text-slate-400 text-sm font-bold uppercase tracking-widest mb-8">
                                    <MapPin className="h-4 w-4 text-primary" />
                                    {selectedEvent.location}
                                </div>

                                <div className="prose prose-slate max-w-none mb-10">
                                    <DialogDescription className="text-gray-600 text-lg leading-relaxed font-medium">
                                        {selectedEvent.description}
                                    </DialogDescription>
                                </div>

                                <div className="flex justify-end gap-4">
                                    <Button
                                        className="h-14 px-8 rounded-2xl bg-[#5b1887] hover:bg-[#8b2fc9] text-white font-black uppercase tracking-widest text-xs transition-all shadow-xl shadow-purple-900/20"
                                        onClick={() => setSelectedEvent(null)}
                                    >
                                        Fermer
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </main>
    );
}
