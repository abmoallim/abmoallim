// Work history as a flight log: waypoint-marked entries down a nav rail.
import HudPanel from './HudPanel';

const ENTRIES = [
    {
        company: 'Lama Tools',
        role: 'Founder',
        duration: 'Dec 2024 - present',
        location: 'Remote',
        description: 'Technology consulting firm dedicated to empowering businesses through personalized AI tools and automation solutions.',
    },
    {
        company: 'Shakir Group',
        role: 'Head of ICT',
        duration: 'Oct 2023 - present',
        location: 'Mogadishu - Remote',
        description: 'Led the digital transformation of the company by implementing a comprehensive ERP system and optimizing IT infrastructure.',
    },
    {
        company: 'Byteso Tech',
        role: 'Co-founder',
        duration: 'May 2022 - Aug 2023',
        location: 'Mogadishu, Somalia',
        description: 'Co-founded a tech startup focused on developing SaaS products for small businesses to streamline their operations.',
    },
    {
        company: 'Target Marketing',
        role: 'IT Personnel',
        duration: 'Aug 2021 - Nov 2021',
        location: 'Mogadishu, Somalia',
        description: 'Managed the IT infrastructure and provided technical support, ensuring smooth daily operations and minimal downtime.',
    },
    {
        company: 'Print Sign',
        role: 'Graphic Designer',
        duration: 'Nov 2020 - April 2021',
        location: 'Mogadishu, Somalia',
        description: 'Designed branding materials and improved the visual identity of the company’s marketing assets.',
    },
    {
        company: 'SOCSOYU',
        role: 'Volunteer IT Advisor',
        duration: 'Mar 2019 - Aug 2019',
        location: 'Mogadishu, Somalia',
        description: 'Advised the organization on IT strategies and implemented solutions to improve operational efficiency.',
    },
];

const FlightLog = () => (
    <HudPanel id="work-experience" title="FLIGHT LOG — OPERATIONS HISTORY" right={`${ENTRIES.length} LEGS`}>
        <ol className="relative space-y-6 border-l border-ctp-surface1/70 pl-6">
            {ENTRIES.map((entry, index) => (
                <li key={entry.company} className="relative">
                    <span
                        className="absolute -left-[1.85rem] top-1 h-2.5 w-2.5 rotate-45 border border-hud bg-ctp-crust shadow-[0_0_8px_rgb(var(--hud)/0.5)]"
                        aria-hidden="true"
                    />
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ctp-overlay0">
                            LEG {String(ENTRIES.length - index).padStart(2, '0')}
                        </span>
                        <h3 className="font-mono text-base font-semibold uppercase tracking-wide text-hud">
                            {entry.company}
                        </h3>
                        <span className="border border-hud2/50 bg-hud2/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.15em] text-hud2">
                            {entry.role}
                        </span>
                    </div>
                    <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-ctp-overlay0">
                        {entry.duration} · {entry.location}
                    </div>
                    <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ctp-subtext1">{entry.description}</p>
                </li>
            ))}
        </ol>
    </HudPanel>
);

export default FlightLog;
