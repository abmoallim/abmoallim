// CRT texture layers. Toggled by the console's `crt on|off` via data-crt on <html>.
const Scanlines = () => (
    <>
        <div className="crt-vignette" aria-hidden="true" />
        <div className="crt-overlay" aria-hidden="true" />
    </>
);

export default Scanlines;
