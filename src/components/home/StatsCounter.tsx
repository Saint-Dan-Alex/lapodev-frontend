'use client';

import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring, useTransform, motion } from 'framer-motion';

interface StatsCounterProps {
    value: string;
    label: string;
    icon: any;
    delay?: number;
}

export default function StatsCounter({ value, label, icon: Icon, delay = 0 }: StatsCounterProps) {
    // Extract the number and suffix (e.g., "150+" -> 150, "+")
    const numericMatch = value.match(/\d+/);
    const suffix = value.replace(/\d+/g, '');
    const targetValue = numericMatch ? parseInt(numericMatch[0]) : 0;

    const count = useMotionValue(0);

    // Smooth counting animation
    const springValue = useSpring(count, {
        stiffness: 50,
        damping: 15,
    });

    const rounded = useTransform(springValue, (latest) => Math.round(latest));

    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            const timeout = setTimeout(() => {
                count.set(targetValue);
            }, delay * 1000);
            return () => clearTimeout(timeout);
        } else {
            // Reset the count when the element leaves the view
            count.set(0);
        }
    }, [isInView, targetValue, count, delay]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: delay * 0.2 }}
            className="group p-8 md:p-10 rounded-[4rem] bg-white border border-slate-100 text-center hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
        >
            <div className="inline-flex p-4 md:p-5 bg-primary/5 rounded-2xl text-primary mb-6 md:mb-8 group-hover:scale-110 transition-transform">
                <Icon className="h-8 w-8 md:h-10 md:w-10" />
            </div>
            <div className="text-4xl md:text-5xl font-black text-gray-900 mb-2 tracking-tighter flex items-center justify-center">
                <motion.span>{rounded}</motion.span>
                <span>{suffix}</span>
            </div>
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{label}</div>
        </motion.div>
    );
}
