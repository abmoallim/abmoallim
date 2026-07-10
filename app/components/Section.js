import { Divider } from './doodles/Doodles';

const Section = ({ id, eyebrow, title, right, children, className = '' }) => (
    <section id={id} className={`scroll-mt-20 py-10 ${className}`}>
        <Divider className="mb-8 h-3 w-full text-ink/15" />
        <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2">
            <div>
                {eyebrow && (
                    <div className="font-mono text-xs uppercase tracking-[0.2em] text-clay">{eyebrow}</div>
                )}
                {title && <h2 className="mt-1">{title}</h2>}
            </div>
            {right && <div className="font-mono text-xs text-ink/40">{right}</div>}
        </div>
        {children}
    </section>
);

export default Section;
