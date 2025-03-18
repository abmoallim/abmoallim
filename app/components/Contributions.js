import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

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
            role: 'Speacker - Understanding AI Landscape in Somalia',
            date: 'Oct 2023',
        },
        {
            title: 'Speaker | Abdiaziz Youth Center (NGO)',
            role: 'Speaker - Become freelancer, Tech related niches',
            date: 'Mar 2023',
        },
    ];

    return (
        <section id="contributions" className="py-8 bg-background text-foreground">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <h2 className="text-4xl font-bold text-center mb-8">Contributions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {contributions.map((contribution, index) => (
                        <Card key={index} className="transition-shadow hover:shadow-lg hover:shadow-primary/25 dark:hover:shadow-primary/20">
                            <CardContent className="p-6">
                                <div className="flex flex-col space-y-2">
                                    <h3 className="text-xl font-semibold">{contribution.title}</h3>
                                    <Badge variant="secondary" className="w-fit">{contribution.role}</Badge>
                                    <div className="flex items-center text-sm text-muted-foreground">
                                        <FontAwesomeIcon icon={faCalendar} className="w-4 h-4 mr-2" />
                                        {contribution.date}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contributions;
