"use client";
// Cockpit-style dial: 240° arc, tick marks, amber needle, phosphor value arc.
import { useEffect, useState } from 'react';
import useReducedMotion from './useReducedMotion';

const START = -120;
const SWEEP = 240;
const R = 44;

const polar = (r, deg) => {
    const rad = ((deg - 90) * Math.PI) / 180;
    return [60 + r * Math.cos(rad), 60 + r * Math.sin(rad)];
};

const arcPath = (r) => {
    const [x1, y1] = polar(r, START);
    const [x2, y2] = polar(r, START + SWEEP);
    return `M ${x1} ${y1} A ${r} ${r} 0 1 1 ${x2} ${y2}`;
};

const ARC_LEN = 2 * Math.PI * R * (SWEEP / 360);
const TICKS = Array.from({ length: 9 }, (_, i) => START + (SWEEP / 8) * i);

const Gauge = ({ value, max, display, label }) => {
    const reduced = useReducedMotion();
    const target = Math.min(1, value / max);
    const [frac, setFrac] = useState(0);

    useEffect(() => {
        const raf = requestAnimationFrame(() => setFrac(target));
        return () => cancelAnimationFrame(raf);
    }, [target]);

    const shown = reduced ? target : frac;
    const ease = reduced ? 'none' : 'cubic-bezier(0.3, 1, 0.4, 1)';

    return (
        <div className="flex flex-col items-center gap-1.5">
            <svg viewBox="0 0 120 106" className="w-full max-w-[150px]" role="img" aria-label={`${label}: ${display}`}>
                <path d={arcPath(R)} fill="none" stroke="#313244" strokeWidth="6" />
                <path
                    d={arcPath(R)}
                    fill="none"
                    className="stroke-hud"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray={ARC_LEN}
                    strokeDashoffset={ARC_LEN * (1 - shown)}
                    style={{
                        transition: `stroke-dashoffset 1.2s ${ease}`,
                        filter: 'drop-shadow(0 0 4px rgb(var(--hud) / 0.6))',
                    }}
                />
                {TICKS.map((deg) => {
                    const [x1, y1] = polar(52, deg);
                    const [x2, y2] = polar(47, deg);
                    return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#585b70" strokeWidth="1.5" />;
                })}
                <g
                    style={{
                        transform: `rotate(${START + SWEEP * shown}deg)`,
                        transformOrigin: '60px 60px',
                        transition: `transform 1.2s ${ease}`,
                    }}
                >
                    <line x1="60" y1="60" x2="60" y2="24" className="stroke-hud2" strokeWidth="2" />
                </g>
                <circle cx="60" cy="60" r="3.5" fill="#585b70" />
                <text
                    x="60"
                    y="96"
                    textAnchor="middle"
                    className="fill-ctp-text font-mono"
                    fontSize="17"
                    fontWeight="700"
                >
                    {display}
                </text>
            </svg>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ctp-subtext0">{label}</span>
        </div>
    );
};

export default Gauge;
