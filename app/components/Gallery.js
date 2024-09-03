// app/components/Gallery.js
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';

const Gallery = () => {
    return (
        <section className="py-16 bg-white dark:bg-gray-800 text-black dark:text-white">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="flex flex-col md:flex-row justify-between items-center p-6 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md">
                    {/* Title and Description Section */}
                    <div className="md:w-2/3 mb-4 md:mb-0">
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-slate-300">Explore My Gallery</h3>
                        <p className="text-gray-600 dark:text-slate-500 mt-2">
                        Dive into the vibrant moments and epic events that tell the story of my journey.
                        </p>
                    </div>

                    {/* Folder Icon Section */}
                    <Link href="/gallery" passHref>
                        <div className='pr-12'>
                            <FontAwesomeIcon icon={faFolderOpen} size="4x" className="text-yellow-500" />
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
