// Small hand-drawn accent marks: sketchy strokes instead of stock icons.
// Kept dependency-free: hand-tuned SVG paths with irregular curves.

export const FileIcon = ({ className = '' }) => (
    <svg viewBox="0 0 20 20" className={className} fill="none" aria-hidden="true">
        <path
            d="M5.5 2.7c-.6 0-1 .4-1 1v12.6c0 .6.4 1 1 1h9c.6 0 1-.4 1-1V7.1L11.8 2.7H5.5Z"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinejoin="round"
        />
        <path d="M11.6 2.9v3.8c0 .5.4.9.9.9h3.6" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
);

export const FolderIcon = ({ className = '' }) => (
    <svg viewBox="0 0 20 20" className={className} fill="none" aria-hidden="true">
        <path
            d="M2.6 5.4c0-.6.5-1 1-1h4l1.6 1.9h7.2c.6 0 1 .4 1 1v8.4c0 .6-.4 1-1 1H3.6c-.5 0-1-.4-1-1V5.4Z"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinejoin="round"
        />
    </svg>
);

export const Divider = ({ className = '' }) => (
    <svg viewBox="0 0 200 12" preserveAspectRatio="none" className={className} fill="none" aria-hidden="true">
        <path
            d="M1 6c8-4 14 4 22 1s13-6 21-2 15 6 22 2 14-6 21-1 15 5 22 1 13-6 21-2 15 6 22 2 14-5 21-1 13 5 22 0"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            fill="none"
        />
    </svg>
);

export const CursorBlock = ({ className = '' }) => (
    <span className={`inline-block animate-cursor-blink bg-clay ${className}`} aria-hidden="true" />
);

export const Arrow = ({ className = '' }) => (
    <svg viewBox="0 0 24 14" className={className} fill="none" aria-hidden="true">
        <path d="M1 7c6-1.5 12-1 22 .3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M17 1.5c2.5 2 4.5 3.8 6 5.6-1.7 1.2-4 3-6 5.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
);
