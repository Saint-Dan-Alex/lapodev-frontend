'use client';

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, BarChart3, Users, BookOpen, LandmarkIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';

interface Slide {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    topLabel: string;
    image?: string;
    colorScheme: 'purple' | 'blue' | 'gold';
    ctaPrimary: string;
    ctaSecondary: string;
}

interface HeroCarouselProps {
    slides: Slide[];
}

export default function HeroCarousel({ slides }: HeroCarouselProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 6000, stopOnInteraction: false })]);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);
        return () => {
            emblaApi.off('select', onSelect);
        };
    }, [emblaApi, onSelect]);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    const getGradientStyle = (scheme: string) => {
        switch (scheme) {
            case 'blue':
                return "bg-[#004e92] bg-gradient-to-br from-[#00b4db] via-[#0083b0] to-[#004e92]";
            case 'gold':
                return "bg-[#b97d02] bg-gradient-to-br from-[#faee92] via-[#fdb913] to-[#b97d02]";
            case 'purple':
            default:
                return "bg-[#5b1887] bg-gradient-to-br from-[#8b2fc9] via-[#7221a8] to-[#5b1887]";
        }
    };

    return (
        <section className="relative h-[90vh] min-h-[700px] overflow-hidden">
            <div className="h-full" ref={emblaRef}>
                <div className="flex h-full">
                    {slides.map((slide, index) => (
                        <div key={slide.id} className={`flex-[0_0_100%] min-w-0 h-full relative flex items-center pt-20 overflow-hidden text-white`}>
                            {/* Background Image/Gradient */}
                            <div className={`absolute inset-0 z-0 ${!slide.image ? getGradientStyle(slide.colorScheme) : ''}`}>
                                {slide.image ? (
                                    <>
                                        <img
                                            src={slide.image}
                                            alt={slide.title}
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
                                        <div className={`absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent`}></div>
                                    </>
                                ) : (
                                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                                )}
                            </div>

                            <div className="container mx-auto px-4 md:px-8 relative z-10 w-full h-full flex items-center justify-center">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
                                    <AnimatePresence mode="wait">
                                        {selectedIndex === index && (
                                            <motion.div
                                                className="max-w-2xl text-center lg:text-left"
                                                initial={{ opacity: 0, x: -50 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: 20 }}
                                                transition={{ duration: 0.8, ease: "easeOut" }}
                                            >
                                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                                                    <span className="w-2 h-2 rounded-full bg-[#fdb913] animate-pulse"></span>
                                                    {slide.topLabel}
                                                </div>

                                                <h1 className="text-5xl md:text-8xl lg:text-9xl font-black leading-[0.8] mb-4 tracking-tighter uppercase italic">
                                                    {slide.title}
                                                </h1>

                                                <h2 className="text-xl md:text-2xl lg:text-3xl font-serif font-light leading-snug mb-8 text-white/90 max-w-xl mx-auto lg:mx-0">
                                                    {slide.subtitle}
                                                </h2>

                                                <div className="flex h-1.5 w-32 md:w-48 mb-10 overflow-hidden rounded-full mx-auto lg:mx-0">
                                                    <div className="w-1/3 bg-[#00a2ed]"></div>
                                                    <div className="w-1/3 bg-[#fdb913]"></div>
                                                    <div className="w-1/3 bg-[#ee1c25]"></div>
                                                </div>

                                                <p className="text-base md:text-lg lg:text-xl text-white/70 mb-12 leading-relaxed max-w-xl mx-auto lg:mx-0">
                                                    {slide.description}
                                                </p>

                                                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                                    <Button asChild size="lg" className="h-14 md:h-16 px-8 md:px-12 text-sm md:text-base font-black uppercase tracking-widest bg-white text-[#5b1887] hover:bg-white/90 rounded-sm transition-all shadow-2xl shadow-black/20">
                                                        <Link href="/news" className="flex items-center gap-3">
                                                            <span>{slide.ctaPrimary}</span>
                                                            <ArrowRight className="h-6 w-6" />
                                                        </Link>
                                                    </Button>
                                                    <Button asChild variant="outline" size="lg" className="h-14 md:h-16 px-8 md:px-12 text-sm md:text-base font-black uppercase tracking-widest border-white/30 text-white hover:bg-white/10 rounded-sm bg-white/5 backdrop-blur-md">
                                                        <Link href="/about" className="flex items-center gap-3">
                                                            <Play className="h-5 w-5 fill-current" />
                                                            <span>{slide.ctaSecondary}</span>
                                                        </Link>
                                                    </Button>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    <div className="hidden lg:flex justify-center relative">
                                        <AnimatePresence mode="wait">
                                            {selectedIndex === index && (
                                                <motion.div
                                                    className="relative w-full max-w-md aspect-square"
                                                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                                                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                                    exit={{ opacity: 0, scale: 0.9, rotate: 5 }}
                                                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                                                >
                                                    <div className="absolute inset-0 border-[60px] border-white/5 rounded-[4rem] animate-pulse"></div>
                                                    <div className="absolute inset-10 border-[1px] border-white/20 rounded-[3rem]"></div>
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <div className="relative">
                                                            <div className="text-[18rem] text-white opacity-10 font-serif font-black select-none pointer-events-none">L</div>
                                                            <div className="absolute inset-0 flex items-center justify-center">
                                                                <div className="grid grid-cols-2 gap-6 p-10 bg-white/5 backdrop-blur-xl rounded-[3rem] border border-white/10 shadow-3xl">
                                                                    <div className="bg-white/10 p-6 rounded-2xl hover:bg-white/20 transition-colors"><BarChart3 className="h-10 w-10 text-[#a855f7]" /></div>
                                                                    <div className="bg-white/10 p-6 rounded-2xl hover:bg-white/20 transition-colors"><Users className="h-10 w-10 text-[#fdb913]" /></div>
                                                                    <div className="bg-white/10 p-6 rounded-2xl hover:bg-white/20 transition-colors"><BookOpen className="h-10 w-10 text-[#ee1c25]" /></div>
                                                                    <div className="bg-white/10 p-6 rounded-2xl hover:bg-white/20 transition-colors"><LandmarkIcon className="h-10 w-10 text-white" /></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Controls */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-4">
                <button
                    onClick={scrollPrev}
                    className="p-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-[#5b1887] transition-all bg-white/5 backdrop-blur-md"
                    aria-label="Slide Précédent"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-4 rounded-full border border-white/20">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => emblaApi?.scrollTo(i)}
                            className={`w-2 h-2 rounded-full transition-all ${i === selectedIndex ? 'w-8 bg-white' : 'bg-white/40'}`}
                            aria-label={`Slide ${i + 1}`}
                        />
                    ))}
                </div>
                <button
                    onClick={scrollNext}
                    className="p-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-[#5b1887] transition-all bg-white/5 backdrop-blur-md"
                    aria-label="Slide Suivant"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>
        </section>
    );
}
