import Link from 'next/link';
import { projects } from '@/lib/projects';
import Section from '../Section';
import { Arrow } from '../doodles/Doodles';

const SelectedWork = () => (
    <Section id="work" eyebrow="projects/" title="Selected work" right={<Link href="/projects" className="hover:text-clay">view all →</Link>}>
        <div className="grid gap-4 sm:grid-cols-2">
            {projects.slice(0, 4).map((p) => (
                <div key={p.title} className="border border-ink/12 p-4">
                    <div className="flex items-start justify-between gap-2">
                        <h3 className="text-base">{p.title}</h3>
                        <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.15em] text-ink/40">
                            {p.status === 'live' ? 'Live' : 'Private'}
                        </span>
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink/65">{p.description}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                        {p.technologies.slice(0, 4).map((t) => (
                            <span key={t} className="border border-ink/10 px-1.5 py-0.5 font-mono text-[10px] text-ink/50">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
        <Link href="/projects" className="mt-5 inline-flex items-center gap-2 font-mono text-sm text-clay hover:underline">
            See all projects
            <Arrow className="h-3 w-6" />
        </Link>
    </Section>
);

export default SelectedWork;
