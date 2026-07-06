"use client";
/* eslint-disable @next/next/no-img-element */
// Primary display: instrument boot, pilot ident HUD, traffic scope, career telemetry gauges.
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { FileDown, Mail } from 'lucide-react';
import HudPanel from './HudPanel';
import BootSequence from './BootSequence';
import Radar from './Radar';
import Gauge from './Gauge';

const GAUGES = [
    { value: 80, max: 100, display: '80+', label: 'PROJECTS' },
    { value: 4, max: 5, display: '4+', label: 'YEARS EXP' },
    { value: 50, max: 60, display: '50+', label: 'CLIENTS' },
    { value: 79, max: 100, display: '79', label: 'GIT REPOS' },
];

const FlightDeck = () => {
    const [bootDone, setBootDone] = useState(false);

    return (
        <div className="space-y-6">
            <HudPanel title="FLIGHT DECK — PRIMARY DISPLAY" right="PFD 1 · ACTIVE">
                <BootSequence onComplete={() => setBootDone(true)} />

                <div
                    className={`grid gap-8 transition-all duration-700 ease-out lg:grid-cols-[1fr,300px] ${
                        bootDone ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'
                    }`}
                >
                    <div>
                        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:text-left">
                            <div className="relative shrink-0">
                                <span className="absolute -inset-2 rounded-full border border-hud/30" aria-hidden="true" />
                                <span className="absolute -inset-2 rounded-full border-t-2 border-hud/70 animate-radar-sweep" aria-hidden="true" />
                                <img
                                    src="/imgs/profile-pic.png"
                                    alt="Abdihamid Moallim"
                                    className="h-32 w-32 rounded-full border-2 border-ctp-surface1 object-cover sm:h-36 sm:w-36"
                                />
                                <span className="absolute bottom-1 right-1 h-3.5 w-3.5 rounded-full border-2 border-ctp-mantle bg-hud animate-status-pulse" aria-hidden="true" />
                            </div>

                            <div className="min-w-0">
                                <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-ctp-overlay0">
                                    PILOT IN COMMAND
                                </div>
                                <h1 className="mt-1 font-mono text-3xl font-bold uppercase tracking-tight text-ctp-text hud-glow sm:text-4xl lg:text-5xl">
                                    Abdihamid Moallim
                                </h1>
                                <p className="mt-2 font-mono text-sm uppercase tracking-[0.15em] text-ctp-subtext1 sm:text-base">
                                    Software Engineer <span className="text-hud">·</span> AI Enthusiast{' '}
                                    <span className="text-hud">·</span> <span className="text-hud2">Future Aviator</span>
                                </p>

                                <div className="mt-4 border-l-2 border-hud/50 bg-ctp-crust/60 px-4 py-3 text-left font-mono text-xs text-ctp-subtext1 sm:text-sm">
                                    <span className="text-ctp-overlay0">RX ▸</span> &ldquo;Code is like flight navigation.
                                    Precision and clarity lead to smooth landings&rdquo;
                                    <span className="mt-1 block text-[10px] uppercase tracking-[0.25em] text-ctp-overlay0">
                                        — Inspired by Aviation
                                    </span>
                                </div>

                                <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.15em] text-ctp-subtext0 sm:justify-start">
                                    <span className="flex items-center gap-2">
                                        <span className="h-1.5 w-1.5 rounded-full bg-hud animate-status-pulse" aria-hidden="true" />
                                        Available for opportunities
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <span className="h-1.5 w-1.5 rounded-full bg-hud2 animate-status-pulse" aria-hidden="true" />
                                        Open to aviation projects
                                    </span>
                                </div>

                                <div className="mt-5 flex flex-wrap justify-center gap-3 sm:justify-start">
                                    <Button asChild className="gap-2 rounded-none font-mono text-xs uppercase tracking-[0.15em]">
                                        <a href="/imgs/resume.pdf" target="_blank">
                                            <FileDown className="h-4 w-4" />
                                            Resume
                                        </a>
                                    </Button>
                                    <Button asChild variant="outline" className="gap-2 rounded-none border-ctp-surface1 font-mono text-xs uppercase tracking-[0.15em] hover:border-hud/60 hover:text-hud">
                                        <a href="/contact">
                                            <Mail className="h-4 w-4" />
                                            Transmit
                                        </a>
                                    </Button>
                                </div>

                                <p className="mt-4 font-mono text-[11px] text-ctp-overlay0">
                                    ▸ this console is live — type <span className="text-hud">help</span> in the command
                                    bar below (press <span className="text-hud">/</span>)
                                </p>
                            </div>
                        </div>
                    </div>

                    <div id="radar-scope" className="mx-auto w-full max-w-[280px] border border-ctp-surface1/60 bg-ctp-crust/50 p-4 lg:mx-0">
                        <Radar />
                    </div>
                </div>
            </HudPanel>

            <HudPanel
                title="INSTRUMENTS — CAREER TELEMETRY"
                right="ENG 1-4 · NOMINAL"
                className={`transition-all duration-700 ease-out ${bootDone ? 'opacity-100' : 'opacity-0'}`}
            >
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    {GAUGES.map((g) => (
                        <Gauge key={g.label} {...g} />
                    ))}
                </div>
            </HudPanel>
        </div>
    );
};

export default FlightDeck;
