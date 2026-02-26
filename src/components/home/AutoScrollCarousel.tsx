'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';

interface AutoScrollCarouselProps {
    children: React.ReactNode;
    options?: any;
    autoplayDelay?: number;
    className?: string;
}

export default function AutoScrollCarousel({
    children,
    options = { loop: true, align: 'start' },
    autoplayDelay = 3000,
    className = ""
}: AutoScrollCarouselProps) {
    const autoplayOptions = { delay: autoplayDelay, stopOnInteraction: false };
    const [emblaRef] = useEmblaCarousel(options, [Autoplay(autoplayOptions)]);

    return (
        <div className={`overflow-hidden ${className}`} ref={emblaRef}>
            <div className="flex">
                {React.Children.map(children, (child, index) => (
                    <div key={index} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-3 md:px-4">
                        {child}
                    </div>
                ))}
            </div>
        </div>
    );
}
