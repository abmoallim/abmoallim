// Tiny window-event bus so console commands can drive whatever page is mounted.
export function emitConsole(type, detail) {
    if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent(`console:${type}`, { detail }));
    }
}

export function onConsole(type, handler) {
    const listener = (event) => handler(event.detail);
    window.addEventListener(`console:${type}`, listener);
    return () => window.removeEventListener(`console:${type}`, listener);
}
