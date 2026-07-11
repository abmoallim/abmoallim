import { technologies } from '@/lib/skills';
import Section from '../Section';

const WORK = [
    { company: 'Lama Tools', role: 'Founder', dates: 'Dec 2024 – present' },
    { company: 'Shakir Group', role: 'Head of ICT', dates: 'Oct 2023 – present' },
    { company: 'Byteso Tech', role: 'Co-founder', dates: 'May 2022 – Aug 2023' },
    { company: 'Target Marketing', role: 'IT Personnel', dates: 'Aug 2021 – Nov 2021' },
    { company: 'Print Sign', role: 'Graphic Designer', dates: 'Nov 2020 – Apr 2021' },
    { company: 'SOCSOYU', role: 'Volunteer IT Advisor', dates: 'Mar 2019 – Aug 2019' },
];

const About = () => (
    <Section id="about" eyebrow="about.md" title="About">
        <div className="grid gap-10 md:grid-cols-[1fr,1fr]">
            <div className="space-y-4 text-ink/80">
                <p>
                    I&apos;m a software engineer working across web apps, AI tooling, and internal systems,
                    mostly for small businesses that need something built and shipped, not just prototyped.
                </p>
                <p>
                    I run Lama Tools, a small AI and automation consultancy, and lead ICT at Shakir Group.
                    Before that: IT support, graphic design, and a couple of startups.
                </p>
                <p>
                    Also co-organized IndabaX Somalia 2023 and spoke at IRISE Hub and the Abdiaziz Youth
                    Center on AI and freelancing.
                </p>
                <p className="text-sm text-ink/50">
                    Unrelated to any of this: I spend a weird amount of time reading about flight, planes, drones, birds of prey.
                </p>
            </div>

            <div>
                <div className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-ink/40">Work</div>
                <ul className="space-y-3">
                    {WORK.map((w) => (
                        <li key={w.company} className="flex flex-wrap items-baseline justify-between gap-x-3 border-b border-ink/10 pb-2.5">
                            <span>
                                <span className="font-medium text-ink">{w.company}</span>
                                <span className="text-ink/50"> · {w.role}</span>
                            </span>
                            <span className="font-mono text-xs text-ink/40">{w.dates}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

        <div className="mt-8 border-t border-ink/10 pt-6">
            <div className="mb-2.5 font-mono text-xs uppercase tracking-[0.2em] text-ink/40">Tools</div>
            <div className="flex flex-wrap gap-1.5">
                {technologies.map((t) => (
                    <span key={t.name} className="border border-ink/10 px-2 py-1 font-mono text-xs text-ink/60">
                        {t.name}
                    </span>
                ))}
            </div>
        </div>
    </Section>
);

export default About;
