// Fixed backdrop: crust base, radar-graticule grid, faint phosphor horizon glows.
const CockpitBackground = () => (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-ctp-crust" aria-hidden="true">
        <div
            className="absolute inset-0 animate-grid-pulse opacity-40"
            style={{
                backgroundImage:
                    'linear-gradient(rgb(var(--hud) / 0.05) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--hud) / 0.05) 1px, transparent 1px)',
                backgroundSize: '56px 56px',
            }}
        />
        <div
            className="absolute inset-0"
            style={{
                backgroundImage:
                    'radial-gradient(ellipse 80% 40% at 50% 110%, rgb(var(--hud) / 0.10), transparent 60%), radial-gradient(ellipse 50% 30% at 85% -5%, rgb(var(--hud2) / 0.08), transparent 65%)',
            }}
        />
    </div>
);

export default CockpitBackground;
