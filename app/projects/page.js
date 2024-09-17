/* eslint-disable @next/next/no-img-element */
// app/projects/page.js

const projects = [
    {
        title: 'Internsim',
        description: 'A platform offering personalized, story-driven internship simulations to elevate skills with AI-generated tasks and real-world scenarios.',
        technologies: ['Next.js', 'Vercel', 'AI'],
        link: 'https://internsim.vercel.app/',
        image: '/imgs/internsim.png',  // You'll need to add this image to your project
    },
    {
        title: 'InterviewWay',
        description: 'A platform helping users prepare for interviews and assessments, providing tailored resources and practice tools.',
        technologies: ['Next.js', 'Tailwind CSS', 'PostgreSQL', 'FastAPI'],
        link: 'https://interviewway.com',
        image: '/imgs/inter.png',
    },
    {
        title: 'Scraper',
        description: 'A web scraping tool designed to extract valuable data from websites efficiently.',
        technologies: ['Next.js', 'Node.js', 'Python', 'Tailwind CSS', 'Playwright'],
        link: 'https://github.com/abmoallim/scraper',
        image: '/imgs/scraper.png',
    },
    {
        title: 'Flashcard SaaS',
        description: 'A SaaS platform integrating OpenAI and Stripe to create customizable flashcards for educational purposes.',
        technologies: ['React', 'Node.js', 'Stripe API', 'OpenAI API'],
        link: 'https://github.com/muhaksim/flashkards',
        image: '/imgs/flash.png',
    },
    {
        title: 'Inventory Management System',
        description: 'A fun, gamified, colorful, and clean inventory management system with animations and a focus on user experience.',
        technologies: ['PostgreSQL', 'React', 'Node.js', 'Tailwind CSS'],
        link: 'https://github.com/abmoallim/inventory-management-system',
        image: '/imgs/inventory.png',
    },
    {
        title: 'Express Therapy',
        description: 'A gamified speech and language therapy service for children and young people, aimed at making therapy engaging and fun.',
        technologies: ['WordPress'],
        link: 'https://express-therapy.com',
        image: '/imgs/express.png',
    },
    {
        title: 'Target LED',
        description: 'A comprehensive solution for managing Ads displayed on LED screens, involving full web development, mobile apps, APIs, dashboards, and IoT integration.',
        technologies: ['HTML', 'Bootstrap', 'JavaScript', 'Ajax', 'jQuery', 'Flutter', 'Node.js', 'Flask', 'Next.js', 'IoT'],
        link: 'https://github.com/orgs/Target-so/',
        image: '/imgs/about-pic.png',
    },
    {
        title: 'Rays Initiative',
        description: 'A website built with WordPress to support the Rays Initiative, focused on empowering communities through education and development.',
        technologies: ['WordPress'],
        link: 'https://raysinitiative.org/',
        image: '/imgs/rays.png',
    },
];

const Projects = () => {
    return (
        <section id="projects" className="pt-32 py-16 bg-white dark:bg-gray-800 text-black dark:text-white">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <h2 className="text-4xl font-bold text-center dark:text-slate-300 text-gray-900 mb-8">Projects</h2>
                <div className="space-y-8">
                    {projects.map((project, index) => (
                        <div key={index} className="flex flex-col md:flex-row items-center bg-white dark:bg-slate-900 text-black dark:text-white  border rounded-lg shadow-md p-6 transition-shadow hover:shadow-lg hover:shadow-gray-800">
                            <div className="md:w-2/3 md:pr-6">
                                <h3 className="text-2xl font-semibold text-gray-800 dark:text-slate-400 mb-2">{project.title}</h3>
                                <p className="text-gray-600 dark:text-slate-500 mb-4">{project.description}</p>
                                <div className="text-gray-500 text-sm mb-4">
                                    <strong>Technologies:</strong> {project.technologies.join(', ')}
                                </div>
                                <a 
                                    href={project.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="inline-block bg-gray-700 text-white py-2 px-4 rounded-full hover:bg-gray-900 transition"
                                >
                                    View Project
                                </a>
                            </div>
                            <div className="md:w-1/3 mt-4 md:mt-0">
                                <img 
                                    src={project.image} 
                                    alt={`${project.title} screenshot`} 
                                    className="rounded-lg w-full h-48 object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
