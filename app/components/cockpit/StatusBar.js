"use client";
// Top status rail: callsign, MFD-key nav, Zulu clock, system state.
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const NAV = [
    { href: '/', key: '01', label: 'DECK' },
    { href: '/projects', key: '02', label: 'WAYPOINTS' },
    { href: '/blog', key: '03', label: 'COMMS' },
    { href: '/contact', key: '04', label: 'TRANSMIT' },
];

const zulu = () => `${new Date().toISOString().slice(11, 19)}Z`;

export default function StatusBar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [time, setTime] = useState(null);

    useEffect(() => {
        setTime(zulu());
        const timer = setInterval(() => setTime(zulu()), 1000);
        return () => clearInterval(timer);
    }, []);

    const isActive = (href) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-ctp-surface1/70 bg-ctp-crust/90 backdrop-blur">
            <div className="mx-auto flex h-12 max-w-6xl items-center justify-between gap-4 px-3 font-mono sm:px-6">
                <Link href="/" className="flex items-center gap-2 text-sm font-bold tracking-widest text-ctp-text">
                    <span className="h-2 w-2 rounded-full bg-hud animate-status-pulse" aria-hidden="true" />
                    ABMOALLIM
                    <span className="hidden text-[10px] font-normal tracking-[0.25em] text-ctp-overlay0 md:inline">
                        {'// FLT-CONSOLE v2'}
                    </span>
                </Link>

                <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
                    {NAV.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`px-3 py-1 text-xs tracking-[0.2em] transition-colors ${
                                isActive(item.href)
                                    ? 'border border-hud/50 bg-hud/10 text-hud hud-glow'
                                    : 'border border-transparent text-ctp-subtext0 hover:text-hud'
                            }`}
                        >
                            <span className="mr-1.5 text-ctp-overlay0">{item.key}</span>
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <span className="hidden items-center gap-2 text-[11px] tracking-[0.2em] text-ctp-subtext0 min-[480px]:flex" suppressHydrationWarning>
                        <span className="text-hud">SYS ONLINE</span>
                        <span className="tabular-nums">{time ?? '--:--:--Z'}</span>
                    </span>

                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon" className="h-8 w-8 border-ctp-surface1 md:hidden" aria-label="Open navigation">
                                <FontAwesomeIcon icon={faBars} className="h-4 w-4" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="border-ctp-surface1 bg-ctp-crust">
                            <nav className="mt-10 flex flex-col gap-3 font-mono" aria-label="Mobile">
                                {NAV.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setOpen(false)}
                                        className={`border px-4 py-3 text-sm tracking-[0.2em] ${
                                            isActive(item.href)
                                                ? 'border-hud/50 bg-hud/10 text-hud'
                                                : 'border-ctp-surface1 text-ctp-subtext0'
                                        }`}
                                    >
                                        <span className="mr-2 text-ctp-overlay0">{item.key}</span>
                                        {item.label}
                                    </Link>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
