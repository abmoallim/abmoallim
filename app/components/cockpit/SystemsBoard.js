// Tech stack as an engine-instrument systems board: LED segment bars per system.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { technologies } from '@/lib/skills';
import HudPanel from './HudPanel';

const LEVEL_SEGMENTS = {
    Basic: 3,
    Intermediate: 5,
    Experienced: 7,
    Advanced: 9,
};
const TOTAL_SEGMENTS = 10;

const LedBar = ({ level }) => {
    const lit = LEVEL_SEGMENTS[level] ?? 5;
    return (
        <div className="flex gap-[3px]" role="img" aria-label={`${level}: ${lit} of ${TOTAL_SEGMENTS}`}>
            {Array.from({ length: TOTAL_SEGMENTS }, (_, i) => (
                <span
                    key={i}
                    className={`h-3 w-1.5 ${i < lit ? 'bg-hud shadow-[0_0_4px_rgb(var(--hud)/0.7)]' : 'bg-ctp-surface0'}`}
                />
            ))}
        </div>
    );
};

const SystemsBoard = () => (
    <HudPanel id="skills" title="SYSTEMS — TECH STACK" right={`${technologies.length} SYS`}>
        <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {technologies.map((tech) => (
                <div key={tech.name} className="flex items-center justify-between gap-3 border-b border-ctp-surface0/60 pb-2">
                    <div className="flex min-w-0 items-center gap-2.5">
                        <FontAwesomeIcon icon={tech.icon} className={`h-4 w-4 shrink-0 ${tech.color}`} />
                        <span className="truncate font-mono text-sm text-ctp-text">{tech.name}</span>
                    </div>
                    <div className="flex shrink-0 items-center gap-3">
                        <LedBar level={tech.level} />
                        <span className="hidden w-24 text-right font-mono text-[10px] uppercase tracking-[0.15em] text-ctp-overlay0 min-[480px]:block">
                            {tech.level}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    </HudPanel>
);

export default SystemsBoard;
