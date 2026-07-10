"use client";
import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { socials } from '@/lib/socials';

const EMAIL = 'contact@abmoallim.com';

const Contact = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // clipboard blocked — the address is visible right next to the button
        }
    };

    return (
        <main className="mx-auto max-w-2xl px-4 pb-8 pt-10 sm:px-6">
            <div className="mb-8">
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-clay">contact.txt</div>
                <h1 className="mt-1">Get in touch</h1>
                <p className="mt-2 text-ink/70">Email is the fastest way to reach me.</p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 border border-ink/12 px-4 py-3.5">
                <span className="text-ink">{EMAIL}</span>
                <button
                    type="button"
                    onClick={handleCopy}
                    className={`inline-flex shrink-0 items-center gap-2 border px-3 py-1.5 text-sm transition-colors ${
                        copied
                            ? 'border-clay/60 bg-accent text-clay'
                            : 'border-ink/15 text-ink/60 hover:border-clay/40 hover:text-clay'
                    }`}
                >
                    {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                    {copied ? 'Copied' : 'Copy'}
                </button>
            </div>

            <ul className="mt-6 space-y-2">
                {socials.map((s) => (
                    <li key={s.name}>
                        <a
                            href={s.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-ink/70 underline decoration-ink/20 underline-offset-4 hover:text-clay hover:decoration-clay/50"
                        >
                            {s.name} — {s.url.replace(/^https?:\/\//, '')}
                        </a>
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default Contact;
