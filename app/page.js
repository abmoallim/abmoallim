// app/page.js — the flight deck: every section is a cockpit instrument panel.
import FlightDeck from './components/cockpit/FlightDeck';
import CrewManifest from './components/cockpit/CrewManifest';
import SystemsBoard from './components/cockpit/SystemsBoard';
import FlightLog from './components/cockpit/FlightLog';
import CommsLog from './components/cockpit/CommsLog';

export default function HomePage() {
    return (
        <main className="mx-auto max-w-6xl space-y-6 px-3 pb-8 pt-20 sm:px-6">
            <FlightDeck />
            <CrewManifest />
            <SystemsBoard />
            <FlightLog />
            <CommsLog />

            <div className="flex justify-center py-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-ctp-overlay0">
                    ─── END OF TAPE · EOF ───
                </span>
            </div>
        </main>
    );
}
