import { socials } from '@/lib/socials';

const Footer = () => (
    <footer className="border-t border-ink/10 py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-sm text-ink/50 sm:flex-row sm:px-6">
            <p>© {new Date().getFullYear()} Abdihamid Moallim</p>
            <div className="flex items-center gap-4">
                {socials.map((s) => (
                    <a
                        key={s.name}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-clay"
                    >
                        {s.name}
                    </a>
                ))}
            </div>
        </div>
    </footer>
);

export default Footer;
