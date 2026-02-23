import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Logo } from '@/components/brand/Logo';

export const Footer = () => {
    const t = useTranslations('Navigation');
    const year = new Date().getFullYear();

    return (
        <footer className="bg-[#3b0764] text-white border-t border-white/10">
            <div className="container mx-auto px-4 py-16 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="md:col-span-2 space-y-6">
                        <Logo variant="light" />
                        <p className="text-sm text-white/60 max-w-sm mt-4 leading-relaxed">
                            Centre de recherche de l'Université de Kinshasa dédié à l’analyse des politiques publiques et au développement durable en République Démocratique du Congo.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6 uppercase tracking-wider text-white">Navigation</h4>
                        <ul className="space-y-3 text-sm text-white/60">
                            <li><Link href="/" className="hover:text-primary transition-colors">{t('home')}</Link></li>
                            <li><Link href="/about" className="hover:text-primary transition-colors">{t('about.title')}</Link></li>
                            <li><Link href="/expertise" className="hover:text-primary transition-colors">{t('expertise.title')}</Link></li>
                            <li><Link href="/resources" className="hover:text-primary transition-colors">{t('resources.title')}</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6 uppercase tracking-wider text-white">{t('contact')}</h4>
                        <ul className="space-y-3 text-sm text-white/60">
                            <li className="flex flex-col">
                                <span className="font-bold text-white/40 text-[10px] uppercase mb-1">Adresse</span>
                                <span>Université de Kinshasa, Kinshasa, RDC</span>
                            </li>
                            <li className="flex flex-col">
                                <span className="font-bold text-white/40 text-[10px] uppercase mb-1">Email</span>
                                <span>contact@lapodev-unikin.org</span>
                            </li>
                            <li className="flex flex-col">
                                <span className="font-bold text-white/40 text-[10px] uppercase mb-1">Téléphone</span>
                                <span>+243 81 ...</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                    <p>© {year} LAPODEV - Université de Kinshasa. Tous droits réservés.</p>
                    <div className="flex gap-8">
                        <Link href="/privacy" className="hover:text-white transition-colors">Confidentialité</Link>
                        <Link href="/legal" className="hover:text-white transition-colors">Mentions Légales</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
