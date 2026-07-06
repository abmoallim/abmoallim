"use client";
// Instrument power-up: preflight check lines, then a typed `whoami`.
// Replays when the console issues `reboot`.
import { useCallback, useEffect, useRef, useState } from 'react';
import { onConsole } from '@/lib/consoleBus';
import useReducedMotion from './useReducedMotion';

const CHECKS = [
    { text: 'AVIONICS PWR ............. ONLINE' },
    { text: 'NAV SYS .................. CALIBRATED' },
    { text: 'COMMS UPLINK ............. ESTABLISHED' },
];
const CMD = 'whoami';
const IDENT = 'ABDIHAMID MOALLIM :: SOFTWARE ENGINEER · AI ENTHUSIAST · FUTURE AVIATOR';

const LINE_MS = 200;
const CHAR_MS = 40;

const BootSequence = ({ onComplete }) => {
    const reduced = useReducedMotion();
    const [lines, setLines] = useState(0);
    const [typed, setTyped] = useState('');
    const [showIdent, setShowIdent] = useState(false);
    const [done, setDone] = useState(false);
    const timers = useRef([]);

    const clearTimers = () => {
        timers.current.forEach(clearTimeout);
        timers.current = [];
    };
    const later = (fn, ms) => timers.current.push(setTimeout(fn, ms));

    const finish = useCallback(() => {
        setLines(CHECKS.length);
        setTyped(CMD);
        setShowIdent(true);
        setDone(true);
        onComplete?.();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const play = useCallback(() => {
        clearTimers();
        if (reduced) {
            finish();
            return;
        }
        setLines(0);
        setTyped('');
        setShowIdent(false);
        setDone(false);

        CHECKS.forEach((_, i) => later(() => setLines(i + 1), LINE_MS * (i + 1)));
        const typeStart = LINE_MS * (CHECKS.length + 1);
        CMD.split('').forEach((_, i) =>
            later(() => setTyped(CMD.slice(0, i + 1)), typeStart + CHAR_MS * (i + 1))
        );
        const identAt = typeStart + CHAR_MS * CMD.length + 250;
        later(() => setShowIdent(true), identAt);
        later(() => {
            setDone(true);
            onComplete?.();
        }, identAt + 350);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reduced]);

    useEffect(() => {
        play();
        return clearTimers;
    }, [play]);

    useEffect(() => onConsole('boot.replay', play), [play]);

    return (
        <div className="mb-6 font-mono text-xs sm:text-sm" aria-live="polite">
            {CHECKS.slice(0, lines).map((check) => (
                <div key={check.text} className="text-ctp-subtext0">
                    <span className="text-hud">[ OK ]</span> {check.text}
                </div>
            ))}
            {lines >= CHECKS.length && (
                <div className="mt-1 text-hud">
                    <span className="text-ctp-overlay0">abmoallim@fedora:~$</span>{' '}
                    <span className="text-ctp-text">{typed}</span>
                    {!done && (
                        <span className="ml-0.5 inline-block h-3.5 w-2 translate-y-0.5 bg-hud animate-cursor-blink" aria-hidden="true" />
                    )}
                </div>
            )}
            {showIdent && <div className="mt-1 text-hud2 hud2-glow">{IDENT}</div>}
        </div>
    );
};

export default BootSequence;
