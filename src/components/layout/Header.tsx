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
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a"> & { title: string; href: string }
>(({ className, title, children, href, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    href={href as any}
                    ref={ref as any}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-bold leading-none uppercase tracking-wider">{title}</div>
                    <p className="line-clamp-2 text-xs leading-snug text-white/60 mt-1">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

export const Header = () => {
    const t = useTranslations('Navigation');

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
                { title: t('resources.members'), href: '/resources/members' },
                { title: t('resources.forms'), href: '/resources/forms' },
            ]
        },
        {
            title: t('news.title'),
            items: [
                { title: t('news.current'), href: '/news/current' },
                { title: t('news.past'), href: '/news/past' },
                { title: t('news.upcoming'), href: '/news/upcoming' },
                { title: t('news.publications'), href: '/news/publications' },
            ]
        }
    ];

    return (
        <header className="absolute top-0 z-50 w-full border-b border-white/10 bg-transparent py-4 text-white">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
                {/* Logo Section */}
                <div className="flex-none">
                    <Link href="/" className="flex items-center gap-2">
                        <Logo variant="light" />
                    </Link>
                </div>

                {/* Center Navigation - Desktop */}
                <div className="hidden flex-1 justify-center lg:flex ml-1">
                    <NavigationMenu>
                        <NavigationMenuList className="gap-0">
                            {/* Home */}
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link
                                        href="/"
                                        className="group inline-flex h-9 w-max items-center justify-center rounded-md px-2.5 text-[11px] font-bold uppercase tracking-wide transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white bg-transparent"
                                    >
                                        {t('home')}
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            {/* Dropdowns */}
                            {menuItems.map((menu) => (
                                <NavigationMenuItem key={menu.title}>
                                    <NavigationMenuTrigger className="bg-transparent hover:bg-white/10 focus:bg-white/10 text-white data-[state=open]:bg-white/10 uppercase text-[11px] font-bold tracking-wide h-9 px-2.5">
                                        {menu.title}
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-[#4c1d95] border border-white/10 text-white">
                                            {menu.items.map((item) => (
                                                <ListItem
                                                    key={item.href}
                                                    title={item.title}
                                                    href={item.href}
                                                >
                                                    {'description' in item ? item.description : null}
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
                                        className="group inline-flex h-9 w-max items-center justify-center rounded-md px-2.5 text-[11px] font-bold uppercase tracking-wide transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white bg-transparent"
                                    >
                                        {t('contact')}
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* Right Section: Button & i18n */}
                <div className="hidden items-center gap-2 lg:flex">
                    <LanguageSwitcher />
                    <div className="border-l border-white/20 pl-2">
                        <Button
                            className="bg-white text-primary hover:bg-white/90 font-black text-[10px] uppercase tracking-wider px-4 h-9 rounded-sm shadow-xl shadow-black/20"
                            asChild
                        >
                            <Link href="/join">{t('join')}</Link>
                        </Button>
                    </div>
                </div>

                {/* Mobile View */}
                <div className="flex items-center gap-3 lg:hidden">
                    <LanguageSwitcher />
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-[#4c1d95] text-white border-white/10 overflow-y-auto w-[85vw] sm:w-[400px]">
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
                                                        key={item.href}
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
