/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { FileDown, Mail } from 'lucide-react';

const Hero = () => (
    <div className="flex flex-col items-center gap-6 py-10 text-center sm:flex-row sm:items-start sm:text-left">
        <img
            src="/imgs/profile-pic.png"
            alt="Abdihamid Moallim"
            className="h-28 w-28 shrink-0 rounded-full border border-ink/15 object-cover sm:h-32 sm:w-32"
        />

        <div className="min-w-0">
            <h1 className="text-3xl sm:text-4xl">Abdihamid Moallim</h1>
            <p className="mt-1.5 text-ink/60">Software engineer</p>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/80">
                I build web apps, internal tools, and AI-backed products — ERP systems, SaaS,
                client sites. Based in Mogadishu, working remote.
            </p>

            <div className="mt-5 flex flex-wrap justify-center gap-3 sm:justify-start">
                <Button asChild className="gap-2 bg-clay text-cream hover:bg-clay/90">
                    <a href="/imgs/resume.pdf" target="_blank">
                        <FileDown className="h-4 w-4" />
                        Resume
                    </a>
                </Button>
                <Button asChild variant="outline" className="gap-2 border-ink/20 text-ink hover:border-clay/50 hover:text-clay">
                    <a href="/contact">
                        <Mail className="h-4 w-4" />
                        Get in touch
                    </a>
                </Button>
            </div>
        </div>
    </div>
);

export default Hero;
