// app/gallery/page.js
import Image from 'next/image';

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
        <section className="py-16 pt-32 bg-white dark:bg-gray-800 text-black dark:text-white">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <h2 className="text-4xl font-bold text-center dark:text-slate-300 text-gray-900 mb-8">Full Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {images.map((image, index) => (
                        <div key={index} className="relative">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={300}
                                height={300}
                                className="object-cover rounded-lg"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FullGallery;
