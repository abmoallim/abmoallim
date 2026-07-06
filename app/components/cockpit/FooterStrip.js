import { socials } from '@/lib/socials';

const FooterStrip = () => (
    <footer className="border-t border-ctp-surface1/60 bg-ctp-crust/80 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-ctp-overlay0">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 sm:flex-row sm:px-6">
            <p>© {new Date().getFullYear()} ABMOALLIM · ALL SYSTEMS NOMINAL</p>
            <div className="flex items-center gap-4">
                {socials.map((s) => (
                    <a
                        key={s.name}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-ctp-subtext0 transition-colors hover:text-hud"
                    >
                        {s.name}
                    </a>
                ))}
            </div>
            <p>NEXT.JS + TAILWIND</p>
        </div>
    </footer>
);

export default FooterStrip;
