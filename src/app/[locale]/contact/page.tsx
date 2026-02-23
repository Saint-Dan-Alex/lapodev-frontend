'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Mail, Phone, MapPin, Building2, Globe } from 'lucide-react';

export default function ContactPage() {
    const t = useTranslations('ContactPage');

    const contactInfo = [
        {
            icon: Building2,
            title: t('physical_addresses.general_direction.title'),
            details: t('physical_addresses.general_direction.content'),
            color: "text-purple-600",
            bg: "bg-purple-50"
        },
        {
            icon: Building2,
            title: t('physical_addresses.admin_finance.title'),
            details: t('physical_addresses.admin_finance.content'),
            color: "text-blue-600",
            bg: "bg-blue-50"
        },
        {
            icon: Mail,
            title: t('email.title'),
            details: t('email.value'),
            color: "text-red-600",
            bg: "bg-red-50",
            link: `mailto:${t('email.value')}`
        },
        {
            icon: Phone,
            title: t('phone.title'),
            details: t('phone.value'),
            color: "text-green-600",
            bg: "bg-green-50",
            link: `tel:${t('phone.value').replace(/\s/g, '')}`
        }
    ];

    return (
        <div className="flex flex-col min-h-screen pt-32">
            {/* Header section */}
            <section className="relative py-20 bg-[#5b1887] text-white">
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

            {/* Grid of information */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {contactInfo.map((info, idx) => (
                            <div key={idx} className="group p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:shadow-2xl hover:shadow-purple-900/10 transition-all duration-500">
                                <div className={`inline-flex p-5 rounded-2xl ${info.bg} ${info.color} mb-8 group-hover:scale-110 transition-transform`}>
                                    <info.icon className="h-10 w-10" />
                                </div>
                                <h3 className="text-2xl font-black text-gray-900 mb-4 uppercase tracking-tight italic">
                                    {info.title}
                                </h3>
                                {info.link ? (
                                    <a href={info.link} className="text-lg text-slate-600 leading-relaxed font-medium hover:text-primary transition-colors inline-flex items-center gap-2">
                                        {info.details}
                                    </a>
                                ) : (
                                    <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                        {info.details}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Simple footer CTA or map if we had one */}
            <section className="py-24 bg-slate-50 border-t border-slate-200">
                <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
                    <div className="inline-flex p-1 px-3 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest mb-6">
                        {t('physical_addresses.title')}
                    </div>
                    <h2 className="text-4xl font-black text-gray-900 mb-8 uppercase tracking-tighter leading-none italic">
                        {t('subtitle')}
                    </h2>
                    <div className="p-12 rounded-[3.5rem] bg-white border border-slate-100 shadow-xl flex flex-col items-center">
                        <MapPin className="h-12 w-12 text-primary mb-6" />
                        <p className="text-xl font-bold text-gray-900 tracking-tight">Université de Kinshasa (UNIKIN)</p>
                        <p className="text-gray-500 font-medium">Kinshasa XI, République Démocratique du Congo</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
