// app/gallery/page.js — image bank, cockpit-framed.
import Image from 'next/image';
import HudPanel from '../components/cockpit/HudPanel';

const images = [
    { src: '/imgs/about-pic.png', alt: 'Gallery Image 1' },
    { src: '/imgs/about-pic1.png', alt: 'Gallery Image 2' },
    { src: '/imgs/profile-pic.png', alt: 'Gallery Image 3' },
    { src: '/imgs/profile-pic-2.png', alt: 'Gallery Image 4' },
    { src: '/imgs/scraper.png', alt: 'Gallery Image 5' },
    { src: '/imgs/project-1.png', alt: 'Gallery Image 6' },
];

const FullGallery = () => {
    return (
        <main className="mx-auto max-w-6xl px-3 pb-8 pt-20 sm:px-6">
            <HudPanel title="IMAGERY BANK — FULL GALLERY" right={`${images.length} FRAMES`}>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                    {images.map((image, index) => (
                        <div key={index} className="relative border border-ctp-surface1/70">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={300}
                                height={300}
                                className="object-cover"
                            />
                            <span className="absolute bottom-1 left-1 bg-ctp-crust/80 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-hud">
                                IMG {String(index + 1).padStart(2, '0')}
                            </span>
                        </div>
                    ))}
                </div>
            </HudPanel>
        </main>
    );
};

export default FullGallery;
