"use client";
// Site nav styled as a hand-drawn Linux file tree, the one deliberate
// "cool computer" moment on the site. Everything else stays restrained.
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { FileIcon, FolderIcon, CursorBlock } from '../doodles/Doodles';

const TREE = [
    { href: '/#about', label: 'about.md', branch: '├──', type: 'file' },
    { href: '/projects', label: 'projects/', branch: '├──', type: 'folder' },
    { href: '/blog', label: 'writing/', branch: '├──', type: 'folder' },
    { href: '/contact', label: 'contact.txt', branch: '└──', type: 'file' },
];

const TreeRow = ({ item, active, onClick }) => {
    const Icon = item.type === 'folder' ? FolderIcon : FileIcon;
    return (
        <Link
            href={item.href}
            onClick={onClick}
            className={`group flex items-center gap-1.5 whitespace-nowrap font-mono text-sm transition-colors ${
                active ? 'text-clay' : 'text-ink/70 hover:text-ink'
            }`}
        >
            <span className="text-ink/30" aria-hidden="true">{item.branch}</span>
            <Icon className={`h-4 w-4 shrink-0 ${active ? 'text-clay' : 'text-ink/45 group-hover:text-ink/70'}`} />
            <span className={active ? 'underline decoration-clay/50 underline-offset-4' : ''}>{item.label}</span>
            {active && <CursorBlock className="h-4 w-[7px]" />}
        </Link>
    );
};

export default function Nav() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    const isActive = (item) => (item.href === '/#about' ? pathname === '/' : pathname.startsWith(item.href));

    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-background/95 backdrop-blur">
            <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-3 sm:px-6">
                <Link href="/" className="shrink-0 font-hand text-2xl font-semibold leading-none text-ink">
                    ~/abdihamid/
                </Link>

                <nav className="hidden items-center gap-5 md:flex" aria-label="Main">
                    {TREE.map((item) => (
                        <TreeRow key={item.href} item={item} active={isActive(item)} />
                    ))}
                </nav>

                <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon" className="h-9 w-9 border-ink/20 md:hidden" aria-label="Open navigation">
                            <Menu className="h-4 w-4" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="border-ink/10 bg-background">
                        <div className="mt-10 flex flex-col gap-4">
                            <span className="font-hand text-2xl font-semibold text-ink">~/abdihamid/</span>
                            <nav className="flex flex-col gap-4 pl-1" aria-label="Mobile">
                                {TREE.map((item) => (
                                    <TreeRow key={item.href} item={item} active={isActive(item)} onClick={() => setOpen(false)} />
                                ))}
                            </nav>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}
