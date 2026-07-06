// Framed HUD surface: thin border, phosphor corner brackets, labeled header rail.
const Corner = ({ className }) => (
    <span
        aria-hidden="true"
        className={`pointer-events-none absolute h-3 w-3 border-hud/80 ${className}`}
    />
);

const HudPanel = ({ title, right, id, className = '', bodyClassName = '', children }) => (
    <section id={id} className={`relative border border-ctp-surface1/70 bg-ctp-mantle/70 backdrop-blur ${className}`}>
        <Corner className="left-[-1px] top-[-1px] border-l-2 border-t-2" />
        <Corner className="right-[-1px] top-[-1px] border-r-2 border-t-2" />
        <Corner className="bottom-[-1px] left-[-1px] border-b-2 border-l-2" />
        <Corner className="bottom-[-1px] right-[-1px] border-b-2 border-r-2" />

        {title && (
            <header className="flex items-center justify-between gap-4 border-b border-ctp-surface1/60 px-4 py-2.5 sm:px-6">
                <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-hud hud-glow sm:text-sm">
                    {title}
                </h2>
                {right && (
                    <div className="shrink-0 font-mono text-[10px] uppercase tracking-[0.25em] text-ctp-overlay0">
                        {right}
                    </div>
                )}
            </header>
        )}

        <div className={`p-4 sm:p-6 ${bodyClassName}`}>{children}</div>
    </section>
);

export default HudPanel;
