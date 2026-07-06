// app/contact/page.js — TRANSMIT: uplink channels, media boarding pass, Calendly schedule.
"use client"
import { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Copy, Check, Radio } from 'lucide-react';
import { socials } from '@/lib/socials';
import HudPanel from '../components/cockpit/HudPanel';

const EMAIL = 'contact@abmoallim.com';

const Contact = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // clipboard blocked — the address is visible right next to the button
        }
    };

    const handleConfirm = () => {
        window.open("https://calendar.app.google/y6XKLL8uDw8KHbAs8", "_blank");
        setIsDialogOpen(false);
    };

    return (
        <main className="mx-auto max-w-6xl space-y-6 px-3 pb-8 pt-20 sm:px-6">
            <div className="grid gap-6 lg:grid-cols-2">
                <HudPanel title="TRANSMIT — UPLINK CHANNELS" right="FREQ ACTIVE">
                    <div className="space-y-4 font-mono">
                        <div className="flex flex-wrap items-center justify-between gap-3 border border-ctp-surface1 bg-ctp-crust/60 px-4 py-3">
                            <div className="min-w-0">
                                <div className="text-[10px] uppercase tracking-[0.3em] text-ctp-overlay0">FREQ 1 · EMAIL</div>
                                <div className="mt-1 truncate text-sm text-hud hud-glow">{EMAIL}</div>
                            </div>
                            <button
                                type="button"
                                onClick={handleCopy}
                                className={`inline-flex shrink-0 items-center gap-2 border px-3 py-1.5 text-[11px] uppercase tracking-[0.15em] transition-colors ${
                                    copied
                                        ? 'border-hud/60 bg-hud/10 text-hud'
                                        : 'border-ctp-surface1 text-ctp-subtext0 hover:border-hud/50 hover:text-hud'
                                }`}
                            >
                                {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                                {copied ? 'COPIED' : 'COPY'}
                            </button>
                        </div>

                        <ul className="space-y-2 text-sm">
                            {socials.map((s, i) => (
                                <li key={s.name} className="flex items-center gap-3">
                                    <span className="text-[10px] uppercase tracking-[0.25em] text-ctp-overlay0">
                                        FREQ {i + 2} · {s.name.toUpperCase()}
                                    </span>
                                    <a
                                        href={s.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="truncate text-ctp-sapphire underline decoration-dotted underline-offset-4 hover:text-ctp-sky"
                                    >
                                        {s.url}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <p className="text-[11px] text-ctp-overlay0">
                            ▸ console shortcut: <span className="text-hud">copy email</span>
                        </p>
                    </div>
                </HudPanel>

                <HudPanel title="MEDIA SESSION — BOARDING PASS" right="GATE M1">
                    <div className="flex h-full flex-col font-mono">
                        <div className="grid grid-cols-2 gap-y-3 text-sm">
                            <div>
                                <div className="text-[10px] uppercase tracking-[0.25em] text-ctp-overlay0">PASSENGER</div>
                                <div className="text-ctp-text">MEDIA / PRESS</div>
                            </div>
                            <div>
                                <div className="text-[10px] uppercase tracking-[0.25em] text-ctp-overlay0">HOST</div>
                                <div className="text-ctp-text">A. MOALLIM</div>
                            </div>
                            <div>
                                <div className="text-[10px] uppercase tracking-[0.25em] text-ctp-overlay0">DURATION</div>
                                <div className="text-ctp-text">30 MIN</div>
                            </div>
                            <div>
                                <div className="text-[10px] uppercase tracking-[0.25em] text-ctp-overlay0">FARE</div>
                                <div className="text-hud2">$50</div>
                            </div>
                        </div>

                        <div className="my-4 border-t border-dashed border-ctp-surface1" aria-hidden="true" />

                        <p className="text-sm text-ctp-subtext0">Book a Session as a Media</p>

                        <Button
                            onClick={() => setIsDialogOpen(true)}
                            className="mt-4 w-full gap-2 rounded-none font-mono text-xs uppercase tracking-[0.15em]"
                        >
                            <Radio className="h-4 w-4" />
                            Request Slot
                        </Button>
                    </div>
                </HudPanel>
            </div>

            <HudPanel title="SCHEDULE UPLINK — 30 MIN SLOT" right="CALENDLY LINKED">
                <div
                    className="calendly-inline-widget"
                    data-url="https://calendly.com/abdihamidmoallim/30min"
                    style={{ minWidth: '320px', height: '700px' }}
                ></div>
            </HudPanel>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="border-ctp-surface1 bg-ctp-mantle font-mono">
                    <DialogHeader>
                        <DialogTitle className="uppercase tracking-[0.15em] text-hud">Media Session Booking</DialogTitle>
                        <DialogDescription>
                            The cost for a 30-minute media session is $50. Would you like to proceed with booking?
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button variant="outline" className="rounded-none border-ctp-surface1" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                        <Button className="rounded-none" onClick={handleConfirm}>Confirm Booking</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </main>
    );
};

export default Contact;
