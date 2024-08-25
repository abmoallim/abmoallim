// app/components/Contributions.js

const Contributions = () => {
    const contributions = [
        {
            title: 'Co-Host | IndabaX Somalia - 2023',
            role: 'Hackathon Co-ordinator | Building tools using OpenAI API',
            date: 'Oct 2023',
        },
        {
            title: 'Co-host | Somdevz Somali Chatgpt Hackathon',
            role: 'Hackathon Co-ordinator',
            date: 'Apr 2023',
        },
        {
            title: 'Speaker | IRISE HUB',
            role: 'Understanding AI Landscape in Somalia',
            date: 'Oct 2023',
        },
        {
            title: 'Speaker | Abdiaziz Youth Center (NGO)',
            role: 'Become freelancer – Tech related niches',
            date: 'Mar 2023',
        },
    ];

    return (
        <section id="contributions" className="py-16 bg-white dark:bg-gray-800 text-black dark:text-white">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-slate-300  mb-8">Contributions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {contributions.map((contribution, index) => (
                        <div key={index} className="p-6 border-b-2 border-gray-300">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{contribution.title}</h3>
                            <p className="text-gray-600 dark:text-slate-400">{contribution.role}</p>
                            <p className="text-gray-400 mt-2">Date: {contribution.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contributions;
