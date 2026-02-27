'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Logo } from '@/components/brand/Logo';
import LanguageSwitcher from '@/components/i18n/LanguageSwitcher';
import { Button } from '@/components/ui/button';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Menu, ChevronDown } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a"> & { title: string; href: string, isScrolled?: boolean }
>(({ className, title, children, href, isScrolled, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    href={href as any}
                    ref={ref as any}
                    className={cn(
                        "group block select-none space-y-1 rounded-lg p-4 leading-none no-underline outline-none transition-all duration-300",
                        isScrolled
                            ? "hover:bg-primary/5 text-slate-700 hover:text-primary"
                            : "hover:bg-white/10 text-white hover:text-white",
                        className
                    )}
                    {...props}
                >
                    <div className="flex items-center justify-between">
                        <div className="text-[13px] font-bold leading-none uppercase tracking-widest">{title}</div>
                        <div className={cn(
                            "h-1.5 w-1.5 rounded-full transition-all duration-300 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100",
                            isScrolled ? "bg-primary" : "bg-white"
                        )} />
                    </div>
                    {children && (
                        <p className={cn(
                            "line-clamp-2 text-xs leading-snug mt-2 transition-colors duration-300",
                            isScrolled ? "text-slate-500" : "text-white/60"
                        )}>
                            {children}
                        </p>
                    )}
                </Link>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

export function Header() {
    const t = useTranslations('Navigation');
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        {
            title: t('about.title'),
            items: [
                { title: t('about.identity'), href: '/about#identity' },
                { title: t('about.values'), href: '/about#values' },
                { title: t('about.objectives'), href: '/about#objectives' },
            ]
        },
        {
            title: t('expertise.title'),
            items: [
                { title: t('expertise.research'), href: '/expertise#research' },
                { title: t('expertise.research_axes'), href: '/expertise#axes' },
                { title: t('expertise.consultancy'), href: '/expertise#consultancy' },
            ]
        },
        {
            title: t('governance.title'),
            items: [
                { title: t('governance.chart'), href: '/governance#chart' },
                { title: t('governance.board'), href: '/governance#board' },
            ]
        },
        {
            title: t('resources.title'),
            items: [
                { title: t('resources.members'), href: '/resources' },
                { title: t('resources.forms'), href: '/resources' },
            ]
        },
        {
            title: t('news.title'),
            items: [
                { title: t('news.current'), href: '/news' },
                { title: t('news.past'), href: '/news' },
                { title: t('news.upcoming'), href: '/news' },
                { title: t('news.publications'), href: '/news' },
            ]
        }
    ];

    return (
        <header className={cn(
            "fixed top-0 z-50 w-full transition-all duration-500 py-3",
            isScrolled
                ? "bg-white/95 backdrop-blur-md shadow-2xl border-b border-slate-200 text-gray-900 py-2"
                : "bg-transparent text-white"
        )}>
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
                {/* Logo Section */}
                <div className="flex items-center gap-4 xl:gap-8">
                    <Link href="/" className="transition-transform hover:scale-105 active:scale-95 shrink-0">
                        <Logo variant={isScrolled ? "default" : "light"} />
                    </Link>
                </div>

                {/* Center Navigation - Desktop */}
                <div className="hidden flex-1 justify-center xl:flex ml-1">
                    <NavigationMenu viewport={false}>
                        <NavigationMenuList className="gap-2">
                            {/* Home */}
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link
                                        href="/"
                                        className={cn(
                                            "group inline-flex h-11 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-[13px] font-black uppercase tracking-widest transition-all duration-300 focus:outline-none relative overflow-hidden",
                                            isScrolled ? "text-slate-700 hover:text-primary" : "text-white hover:text-white/80"
                                        )}
                                    >
                                        {t('home')}
                                        <span className={cn(
                                            "absolute bottom-2 left-4 right-4 h-0.5 scale-x-0 transition-transform duration-300 group-hover:scale-x-100",
                                            isScrolled ? "bg-primary" : "bg-white"
                                        )} />
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            {/* Dropdowns */}
                            {menuItems.map((menu) => (
                                <NavigationMenuItem key={menu.title}>
                                    <NavigationMenuTrigger className={cn(
                                        "bg-transparent h-11 px-4 transition-all duration-300 uppercase text-[13px] font-black tracking-widest group relative",
                                        isScrolled
                                            ? "text-slate-700 hover:text-primary data-[state=open]:text-primary"
                                            : "text-white hover:text-white/80 data-[state=open]:text-white/100"
                                    )}>
                                        {menu.title}
                                        <span className={cn(
                                            "absolute bottom-2 left-4 right-8 h-0.5 scale-x-0 transition-transform duration-300 group-hover:scale-x-100 data-[state=open]:scale-x-100",
                                            isScrolled ? "bg-primary" : "bg-white"
                                        )} />
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className={cn(
                                            "grid gap-1 p-3 transition-all duration-500 rounded-xl overflow-hidden shadow-2xl border w-[280px]",
                                            menu.items.length > 4 ? "md:w-[500px] md:grid-cols-2 lg:w-[600px]" : "md:w-[320px] grid-cols-1",
                                            isScrolled
                                                ? "bg-white border-slate-200 text-slate-900"
                                                : "bg-[#4c1d95]/98 backdrop-blur-xl border-white/10 text-white"
                                        )}>
                                            {menu.items.map((item) => (
                                                <ListItem
                                                    key={item.title}
                                                    title={item.title}
                                                    href={item.href}
                                                    isScrolled={isScrolled}
                                                >
                                                    {(item as any).description}
                                                </ListItem>
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            ))}

                            {/* Contact */}

                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link
                                        href="/contact"
                                        className={cn(
                                            "group inline-flex h-11 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-[13px] font-black uppercase tracking-widest transition-all duration-300 focus:outline-none relative overflow-hidden",
                                            isScrolled ? "text-slate-700 hover:text-primary" : "text-white hover:text-white/80"
                                        )}
                                    >
                                        {t('contact')}
                                        <span className={cn(
                                            "absolute bottom-2 left-4 right-4 h-0.5 scale-x-0 transition-transform duration-300 group-hover:scale-x-100",
                                            isScrolled ? "bg-primary" : "bg-white"
                                        )} />
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* Right Section: Button & i18n */}
                <div className="hidden items-center gap-2 xl:flex">
                    <LanguageSwitcher variant={isScrolled ? "default" : "light"} />
                    <div className={cn(
                        "border-l pl-2 transition-colors",
                        isScrolled ? "border-slate-200" : "border-white/20"
                    )}>
                        <Button
                            className={cn(
                                "font-black text-[10px] uppercase tracking-wider px-4 h-9 rounded-sm shadow-xl transition-all",
                                isScrolled
                                    ? "bg-primary text-white hover:bg-primary/90 shadow-primary/20"
                                    : "bg-white text-primary hover:bg-white/90 shadow-black/20"
                            )}
                            asChild
                        >
                            <Link href="/join">{t('join')}</Link>
                        </Button>
                    </div>
                </div>

                {/* Mobile View */}
                <div className="flex items-center gap-3 xl:hidden">
                    <LanguageSwitcher variant={isScrolled ? "default" : "light"} />
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className={cn(
                                "hover:bg-black/5 transition-colors",
                                isScrolled ? "text-slate-900" : "text-white"
                            )}>
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-[#4c1d95] text-white border-white/10 overflow-y-auto w-[85vw] sm:w-[400px]">
                            <SheetHeader className="sr-only">
                                <SheetTitle>Menu</SheetTitle>
                                <SheetDescription>Navigation principale du site</SheetDescription>
                            </SheetHeader>
                            <div className="mt-8 flex flex-col gap-2">
                                <Link href="/" className="text-sm font-black uppercase tracking-widest p-2 hover:bg-white/10 rounded-md">
                                    {t('home')}
                                </Link>

                                <Accordion type="single" collapsible className="w-full">
                                    {menuItems.map((menu, i) => (
                                        <AccordionItem value={`item-${i}`} key={menu.title} className="border-white/10">
                                            <AccordionTrigger className="text-sm font-black uppercase tracking-widest hover:no-underline px-2">
                                                {menu.title}
                                            </AccordionTrigger>
                                            <AccordionContent className="flex flex-col gap-1 ml-4 border-l border-white/10 pl-4 py-2">
                                                {menu.items.map((item) => (
                                                    <Link
                                                        key={item.title}
                                                        href={item.href as any}
                                                        className="text-xs font-bold uppercase py-2 opacity-80 hover:opacity-100"
                                                    >
                                                        {item.title}
                                                    </Link>
                                                ))}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>

                                <Link href="/contact" className="text-sm font-black uppercase tracking-widest p-2 hover:bg-white/10 rounded-md">
                                    {t('contact')}
                                </Link>

                                <hr className="border-white/10 my-4" />

                                <Button className="bg-white text-primary hover:bg-white/90 font-black uppercase tracking-wider w-full" asChild>
                                    <Link href="/join">{t('join')}</Link>
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
};
