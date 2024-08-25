/* eslint-disable @next/next/no-img-element */
// app/components/AboutMe.js

const AboutMe = () => {
    return (
        <section id="about" className="py-16 bg-white dark:bg-gray-800  text-black dark:text-white">
            <hr className="border-t-2 border-gray-300 mx-32 py-6" />
            <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center md:text-left ">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-emerald-600 mb-8">About Me</h2>
                <div className="flex flex-col md:flex-row items-center md:space-x-12">
                    <img 
                        src="/imgs/about-pic1.png" 
                        alt="Abdihamid Moallim" 
                        className="rounded-lg w-64 h-64 mb-8 md:mb-0"
                    />
                    <div>
                        <p className="text-lg mb-4">
                             <span className="font-semibold">I am</span> a passionate Fullstack Developer with a strong focus on web technologies and AI. I thrive on creating meaningful web experiences that solve real-world problems.
                        </p>
                        <p className="text-lg mb-4">
                            With a background in software engineering, I have developed a deep understanding of both front-end and back-end technologies. My journey started with a curiosity for coding, and it has since evolved into a dedicated career in software development.
                        </p>
                        <p className="text-lg">
                            When I am not coding, you can find me exploring the latest trends in technology, contributing to open-source projects, or sharing knowledge with the community. I am always eager to learn and take on new challenges.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
