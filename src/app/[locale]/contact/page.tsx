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
        <div className="flex flex-col min-h-screen">
            {/* Header section */}
            <section className="relative pt-32 pb-20 bg-[#5b1887] text-white">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                <div className="container mx-auto px-4 md:px-8 relative z-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 uppercase italic tracking-tighter">
                        {t('title')}
                    </h1>
                    <p className="text-base md:text-lg lg:text-xl font-serif font-light text-white/80 max-w-2xl">
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

            {/* MAP SECTION */}
            <section className="py-24 bg-slate-50 border-t border-slate-200">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="text-center mb-14">
                        <div className="inline-flex p-1 px-3 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest mb-6">
                            {t('physical_addresses.title')}
                        </div>
                        <h2 className="text-4xl font-black text-gray-900 mb-4 uppercase tracking-tighter leading-none italic">
                            Nous trouver
                        </h2>
                        <p className="text-slate-500 font-medium max-w-lg mx-auto">
                            Université de Kinshasa (UNIKIN) — Kinshasa XI, République Démocratique du Congo
                        </p>
                    </div>

                    {/* Map Container */}
                    <div className="relative rounded-[3rem] overflow-hidden shadow-2xl shadow-purple-900/10 border border-slate-200">
                        {/* Info Overlay Badge */}
                        <div className="absolute top-6 left-6 z-10 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg flex items-center gap-4 max-w-xs">
                            <div className="h-12 w-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                                <MapPin className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <p className="font-black text-gray-900 text-sm uppercase tracking-tight">UNIKIN</p>
                                <p className="text-slate-500 text-xs font-medium">Kinshasa XI, RDC</p>
                            </div>
                        </div>

                        {/* OpenStreetMap iframe — centré sur UNIKIN (lat: -4.3267, lon: 15.3225) */}
                        <iframe
                            title="Carte UNIKIN"
                            width="100%"
                            height="500"
                            src="https://www.openstreetmap.org/export/embed.html?bbox=15.2925%2C-4.3567%2C15.3525%2C-4.2967&layer=mapnik&marker=-4.3267%2C15.3225"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                        />

                        {/* Open in OSM button */}
                        <div className="absolute bottom-6 right-6 z-10">
                            <a
                                href="https://www.openstreetmap.org/?mlat=-4.3267&mlon=15.3225#map=15/-4.3267/15.3225"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-md text-[#5b1887] font-black uppercase tracking-widest text-[10px] px-5 py-3 rounded-2xl shadow-lg hover:shadow-xl hover:bg-white transition-all hover:-translate-y-0.5"
                            >
                                <Globe className="h-4 w-4" />
                                Ouvrir dans OpenStreetMap
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
