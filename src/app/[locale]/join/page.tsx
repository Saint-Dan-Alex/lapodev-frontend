'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { User, Phone, GraduationCap, Microscope, Send, CheckCircle2 } from 'lucide-react';

export default function JoinPage() {
    const t = useTranslations('JoinPage');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (submitted) {
        return (
            <div className="flex flex-col min-h-screen pt-32 pb-20">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-md mx-auto bg-white p-12 rounded-[3rem] shadow-2xl border border-slate-100 flex flex-col items-center">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-8">
                            <CheckCircle2 className="h-10 w-10" />
                        </div>
                        <h1 className="text-3xl font-black text-slate-900 mb-4 uppercase italic tracking-tighter">
                            {t('success.title')}
                        </h1>
                        <p className="text-slate-500 font-medium mb-8 leading-relaxed">
                            {t('success.message')}
                        </p>
                        <Button
                            onClick={() => setSubmitted(false)}
                            className="bg-primary text-white hover:bg-primary/90 rounded-xl px-8 h-12 font-bold uppercase tracking-widest text-xs"
                        >
                            OK
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen pt-32 pb-20">
            {/* Header section */}
            <section className="relative py-20 bg-[#5b1887] text-white mb-12">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                <div className="container mx-auto px-4 md:px-8 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase italic tracking-tighter">
                        {t('title')}
                    </h1>
                    <p className="text-lg text-white/80 max-w-2xl font-medium">
                        {t('subtitle')}
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 md:px-8 max-w-5xl">
                <form onSubmit={handleSubmit} className="space-y-12">
                    {/* 1. Identity */}
                    <Card className="rounded-[2.5rem] border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden">
                        <div className="bg-slate-50 p-8 border-b border-slate-100 flex items-center gap-4">
                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm">
                                <User className="h-6 w-6" />
                            </div>
                            <h2 className="text-2xl font-black text-slate-900 uppercase italic tracking-tight italic">
                                {t('form.identity.title')}
                            </h2>
                        </div>
                        <CardContent className="p-10">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="space-y-3">
                                    <Label htmlFor="last_name" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                                        {t('form.identity.last_name')}
                                    </Label>
                                    <Input id="last_name" required className="h-12 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-primary/20 transition-all font-medium" />
                                </div>
                                <div className="space-y-3">
                                    <Label htmlFor="post_name" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                                        {t('form.identity.post_name')}
                                    </Label>
                                    <Input id="post_name" className="h-12 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-primary/20 transition-all font-medium" />
                                </div>
                                <div className="space-y-3">
                                    <Label htmlFor="first_name" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                                        {t('form.identity.first_name')}
                                    </Label>
                                    <Input id="first_name" required className="h-12 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-primary/20 transition-all font-medium" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* 2. Contacts */}
                    <Card className="rounded-[2.5rem] border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden">
                        <div className="bg-slate-50 p-8 border-b border-slate-100 flex items-center gap-4">
                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm">
                                <Phone className="h-6 w-6" />
                            </div>
                            <h2 className="text-2xl font-black text-slate-900 uppercase italic tracking-tight italic">
                                {t('form.contacts.title')}
                            </h2>
                        </div>
                        <CardContent className="p-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div className="space-y-3">
                                    <Label htmlFor="email" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                                        {t('form.contacts.email')}
                                    </Label>
                                    <Input id="email" type="email" required className="h-12 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-primary/20 transition-all font-medium" />
                                </div>
                                <div className="space-y-3">
                                    <Label htmlFor="mobile" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                                        {t('form.contacts.mobile')}
                                    </Label>
                                    <Input id="mobile" required className="h-12 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-primary/20 transition-all font-medium" />
                                </div>
                            </div>

                            <div className="space-y-6 pt-6 border-t border-slate-100">
                                <Label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                                    {t('form.contacts.address')}
                                </Label>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <Input placeholder={t('form.contacts.street')} className="h-12 rounded-xl bg-slate-50 border-transparent transition-all font-medium" />
                                    <Input placeholder={t('form.contacts.quarter')} className="h-12 rounded-xl bg-slate-50 border-transparent transition-all font-medium" />
                                    <Input placeholder={t('form.contacts.cell')} className="h-12 rounded-xl bg-slate-50 border-transparent transition-all font-medium" />
                                    <Input placeholder={t('form.contacts.city')} required className="h-12 rounded-xl bg-slate-50 border-transparent transition-all font-medium" />
                                    <Input placeholder={t('form.contacts.zip')} className="h-12 rounded-xl bg-slate-50 border-transparent transition-all font-medium" />
                                    <Input placeholder={t('form.contacts.box')} className="h-12 rounded-xl bg-slate-50 border-transparent transition-all font-medium" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* 3. Education & Profession */}
                    <Card className="rounded-[2.5rem] border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden">
                        <div className="bg-slate-50 p-8 border-b border-slate-100 flex items-center gap-4">
                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm">
                                <GraduationCap className="h-6 w-6" />
                            </div>
                            <h2 className="text-2xl font-black text-slate-900 uppercase italic tracking-tight italic">
                                {t('form.studies.title')}
                            </h2>
                        </div>
                        <CardContent className="p-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <Label htmlFor="degree" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                                        {t('form.studies.degree')}
                                    </Label>
                                    <Input id="degree" className="h-12 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-primary/20 transition-all font-medium" />
                                </div>
                                <div className="space-y-3">
                                    <Label htmlFor="grade" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                                        {t('form.studies.grade')}
                                    </Label>
                                    <Input id="grade" className="h-12 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-primary/20 transition-all font-medium" />
                                </div>
                                <div className="md:col-span-2 space-y-3">
                                    <Label htmlFor="institution" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                                        {t('form.studies.institution')}
                                    </Label>
                                    <Input id="institution" className="h-12 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-primary/20 transition-all font-medium" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* 4. Research */}
                    <Card className="rounded-[2.5rem] border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden">
                        <div className="bg-slate-50 p-8 border-b border-slate-100 flex items-center gap-4">
                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm">
                                <Microscope className="h-6 w-6" />
                            </div>
                            <h2 className="text-2xl font-black text-slate-900 uppercase italic tracking-tight italic">
                                {t('form.research.title')}
                            </h2>
                        </div>
                        <CardContent className="p-10">
                            <div className="space-y-6">
                                <div className="space-y-3">
                                    <Label htmlFor="research" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                                        {t('form.research.description')}
                                    </Label>
                                    <Textarea
                                        id="research"
                                        placeholder={t('form.research.placeholder')}
                                        className="min-h-[150px] rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-primary/20 transition-all font-medium py-6"
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Final Declaration */}
                    <div className="bg-slate-900 rounded-[3rem] p-12 md:p-16 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
                        <div className="relative z-10">
                            <p className="text-xl font-serif text-white/80 leading-relaxed italic mb-12 border-l-4 border-primary pl-8">
                                "{t('form.declaration.content')}"
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                <div className="space-y-3">
                                    <Label htmlFor="place" className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-1">
                                        {t('form.place')}
                                    </Label>
                                    <Input id="place" className="h-14 rounded-xl bg-white/5 border-white/10 text-white focus:bg-white/10 focus:border-white/30 transition-all font-medium" />
                                </div>
                                <div className="space-y-3">
                                    <Label htmlFor="date" className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-1">
                                        {t('form.date')}
                                    </Label>
                                    <Input id="date" type="date" className="h-14 rounded-xl bg-white/5 border-white/10 text-white focus:bg-white/10 focus:border-white/30 transition-all font-medium" />
                                </div>
                            </div>

                            <div className="flex items-center gap-4 mb-12">
                                <Checkbox id="agree" required className="w-6 h-6 rounded-lg border-white/20 data-[state=checked]:bg-primary" />
                                <Label htmlFor="agree" className="text-sm font-bold cursor-pointer select-none">
                                    {t('form.declaration.agree')}
                                </Label>
                            </div>

                            <Button type="submit" size="lg" className="w-full md:w-auto h-16 px-12 bg-white text-primary hover:bg-white/90 rounded-2xl font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 transition-all">
                                <span>{t('form.submit')}</span>
                                <Send className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
