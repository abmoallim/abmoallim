"use client";
// Radar scope: graticule rings, rotating sweep, one blip per project.
// The console's `radar` command pings it (blips flare + sweep highlight).
import { useEffect, useState } from 'react';
import { projects } from '@/lib/projects';
import { onConsole } from '@/lib/consoleBus';

const blipPosition = (i) => {
    const angle = ((i * 137.5) % 360) * (Math.PI / 180);
    const r = 22 + ((i * 29) % 60);
    return [r * Math.cos(angle), r * Math.sin(angle)];
};

const Radar = () => {
    const [ping, setPing] = useState(0);

    useEffect(() => onConsole('radar.ping', () => setPing((p) => p + 1)), []);

    return (
        <div className="flex flex-col items-center gap-2">
            <svg viewBox="-100 -100 200 200" className="w-full max-w-[300px]" role="img" aria-label={`Radar scope showing ${projects.length} project contacts`}>
                {[30, 60, 90].map((r) => (
                    <circle key={r} cx="0" cy="0" r={r} fill="none" stroke="#313244" strokeWidth="1" />
                ))}
                <line x1="-90" y1="0" x2="90" y2="0" stroke="#313244" strokeWidth="1" />
                <line x1="0" y1="-90" x2="0" y2="90" stroke="#313244" strokeWidth="1" />
                {Array.from({ length: 12 }, (_, i) => i * 30).map((deg) => {
                    const rad = (deg * Math.PI) / 180;
                    return (
                        <line
                            key={deg}
                            x1={86 * Math.cos(rad)}
                            y1={86 * Math.sin(rad)}
                            x2={90 * Math.cos(rad)}
                            y2={90 * Math.sin(rad)}
                            stroke="#585b70"
                            strokeWidth="1.5"
                        />
                    );
                })}

                <g className="animate-radar-sweep" style={{ transformOrigin: '0px 0px' }}>
                    <path d="M 0 0 L 90 0 A 90 90 0 0 0 77.9 -45 Z" fill="rgb(var(--hud) / 0.12)" />
                    <line x1="0" y1="0" x2="90" y2="0" stroke="rgb(var(--hud) / 0.8)" strokeWidth="1.5" />
                </g>

                {projects.map((p, i) => {
                    const [x, y] = blipPosition(i);
                    return (
                        <g key={`${p.title}-${ping}`}>
                            <circle
                                cx={x}
                                cy={y}
                                r={ping > 0 ? 3.5 : 2.5}
                                className="fill-hud animate-blip"
                                style={{
                                    animationDelay: `${(i * 0.3) % 2.4}s`,
                                    filter: 'drop-shadow(0 0 3px rgb(var(--hud) / 0.9))',
                                }}
                            >
                                <title>{p.title}</title>
                            </circle>
                        </g>
                    );
                })}
                <circle cx="0" cy="0" r="2" fill="#585b70" />
            </svg>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ctp-subtext0">
                TFC SCOPE · {projects.length} CONTACTS
            </span>
        </div>
    );
};

export default Radar;
