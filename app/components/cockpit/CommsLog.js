// Community contributions as an ATC-style transmissions log.
import HudPanel from './HudPanel';

const TRANSMISSIONS = [
    {
        stamp: 'OCT 2023',
        title: 'Co-Host | IndabaX Somalia - 2023',
        role: 'Hackathon Co-ordinator | Building tools using OpenAI API',
    },
    {
        stamp: 'OCT 2023',
        title: 'Speaker | IRISE HUB',
        role: 'Speacker - Understanding AI Landscape in Somalia',
    },
    {
        stamp: 'APR 2023',
        title: 'Co-host | Somdevz Somali Chatgpt Hackathon',
        role: 'Hackathon Co-ordinator',
    },
    {
        stamp: 'MAR 2023',
        title: 'Speaker | Abdiaziz Youth Center (NGO)',
        role: 'Speaker - Become freelancer, Tech related niches',
    },
];

const CommsLog = () => (
    <HudPanel id="contributions" title="COMMS LOG — COMMUNITY TRANSMISSIONS" right={`${TRANSMISSIONS.length} TX`}>
        <ul className="divide-y divide-ctp-surface0/60">
            {TRANSMISSIONS.map((tx) => (
                <li key={tx.title} className="flex flex-col gap-1 py-3 first:pt-0 last:pb-0 sm:flex-row sm:items-baseline sm:gap-4">
                    <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.2em] text-ctp-overlay0">
                        [{tx.stamp}] <span className="text-hud">TX ▸</span>
                    </span>
                    <div className="min-w-0">
                        <div className="font-mono text-sm font-semibold text-ctp-text">{tx.title}</div>
                        <div className="text-sm text-ctp-subtext0">{tx.role}</div>
                    </div>
                </li>
            ))}
        </ul>
    </HudPanel>
);

export default CommsLog;
