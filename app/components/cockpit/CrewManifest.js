/* eslint-disable @next/next/no-img-element */
// About section as a crew-manifest record. Copy unchanged from the original site.
import { Plane, Code, Brain, Compass, Target, Rocket } from 'lucide-react';
import HudPanel from './HudPanel';

const COMPETENCIES = [
    { name: 'Web Development', icon: Code, color: 'text-ctp-sapphire' },
    { name: 'AI & Machine Learning', icon: Brain, color: 'text-ctp-mauve' },
    { name: 'Problem Solving', icon: Target, color: 'text-ctp-green' },
    { name: 'Open Source', icon: Rocket, color: 'text-ctp-peach' },
    { name: 'Aviation Interest', icon: Plane, color: 'text-ctp-sky' },
    { name: 'Navigation Systems', icon: Compass, color: 'text-ctp-teal' },
];

const CrewManifest = () => (
    <HudPanel id="about" title="CREW MANIFEST — PIC PROFILE" right="REC 001/001">
        <div className="grid gap-8 md:grid-cols-[220px,1fr]">
            <div className="mx-auto md:mx-0">
                <div className="relative">
                    <img
                        src="/imgs/about-pic.png"
                        alt="Abdihamid Moallim"
                        className="h-52 w-52 border border-ctp-surface1 object-cover"
                    />
                    <span className="absolute -bottom-px -right-px h-3 w-3 border-b-2 border-r-2 border-hud" aria-hidden="true" />
                    <span className="absolute -left-px -top-px h-3 w-3 border-l-2 border-t-2 border-hud" aria-hidden="true" />
                </div>
                <dl className="mt-3 space-y-1 font-mono text-[11px] uppercase tracking-[0.15em] text-ctp-subtext0">
                    <div className="flex justify-between gap-2"><dt className="text-ctp-overlay0">CALLSIGN</dt><dd className="text-hud">ABMOALLIM</dd></div>
                    <div className="flex justify-between gap-2"><dt className="text-ctp-overlay0">ROLE</dt><dd>SOFTWARE ENGINEER</dd></div>
                    <div className="flex justify-between gap-2"><dt className="text-ctp-overlay0">STATUS</dt><dd className="text-hud">ACTIVE</dd></div>
                </dl>
            </div>

            <div className="space-y-5">
                <div className="space-y-4 text-sm leading-relaxed text-ctp-subtext1 sm:text-base">
                    <p>
                        I&apos;m a Software Engineer with a passion for web technologies and AI, currently charting a
                        course toward the aviation industry. Like a pilot navigating through complex airspace, I
                        navigate through code with precision and purpose.
                    </p>
                    <p>
                        My journey in software development is driven by curiosity and innovation. Whether I&apos;m
                        building web applications or dreaming of cockpit displays, I approach every challenge with the
                        same attention to detail that aviation demands.{' '}
                        <span className="font-semibold text-hud">Insha Allah</span>, I&apos;ll soon be combining my
                        technical skills with my aviation aspirations.
                    </p>
                </div>

                <div>
                    <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-ctp-overlay0">
                        CORE COMPETENCIES
                    </div>
                    <div className="grid grid-cols-1 gap-2 min-[420px]:grid-cols-2 lg:grid-cols-3">
                        {COMPETENCIES.map((skill) => {
                            const Icon = skill.icon;
                            return (
                                <div
                                    key={skill.name}
                                    className="flex items-center gap-2 border border-ctp-surface1/70 bg-ctp-crust/50 px-3 py-2 font-mono text-xs text-ctp-subtext1"
                                >
                                    <Icon className={`h-3.5 w-3.5 shrink-0 ${skill.color}`} />
                                    {skill.name}
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="flex items-start gap-3 border border-hud2/40 bg-hud2/5 px-4 py-3">
                    <Plane className="mt-0.5 h-4 w-4 shrink-0 rotate-45 text-hud2" />
                    <div>
                        <div className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-hud2 hud2-glow">
                            ADVISORY — FUTURE AVIATOR
                        </div>
                        <p className="mt-1 text-sm text-ctp-subtext0">
                            Exploring opportunities to merge software engineering with aviation technology
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </HudPanel>
);

export default CrewManifest;
