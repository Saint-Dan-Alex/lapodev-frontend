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
            "fixed top-0 z-50 w-full transition-all duration-300 py-3",
            isScrolled
                ? "bg-white/90 backdrop-blur-md shadow-lg border-b border-slate-200 text-gray-900 py-2"
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
                    <NavigationMenu>
                        <NavigationMenuList className="gap-0">
                            {/* Home */}
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link
                                        href="/"
                                        className={cn(
                                            "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-black uppercase tracking-wider transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                                            isScrolled ? "text-slate-700 hover:text-primary" : "text-white hover:text-white/70"
                                        )}
                                    >
                                        {t('home')}
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            {/* Dropdowns */}
                            {menuItems.map((menu) => (
                                <NavigationMenuItem key={menu.title}>
                                    <NavigationMenuTrigger className={cn(
                                        "bg-transparent h-10 px-4 transition-colors uppercase text-sm font-black tracking-wider",
                                        isScrolled
                                            ? "text-slate-700 hover:text-primary data-[state=open]:text-primary"
                                            : "text-white hover:text-white/70 data-[state=open]:bg-white/10"
                                    )}>
                                        {menu.title}
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-[#4c1d95] border border-white/10 text-white">
                                            {menu.items.map((item) => (
                                                <ListItem
                                                    key={item.title}
                                                    title={item.title}
                                                    href={item.href}
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
                                            "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-black uppercase tracking-wider transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                                            isScrolled ? "text-slate-700 hover:text-primary" : "text-white hover:text-white/70"
                                        )}
                                    >
                                        {t('contact')}
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
