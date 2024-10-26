// app/contact/page.js
"use client"
import { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const Contact = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    const handleMediaSessionClick = () => {
        setIsDialogOpen(true);
    };

    const handleConfirm = () => {
        window.open("https://calendar.app.google/y6XKLL8uDw8KHbAs8", "_blank");
        setIsDialogOpen(false);
    };

    return (
        <section className="pt-36 py-16 bg-background text-foreground dark:bg-slate-900 text-black dark:text-white pb-8">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
                    <div className=" border hover:shadow-primary/25 dark:hover:shadow-primary/20 rounded-lg shadow-md p-6 flex-1 text-center">
                        <h3 className="text-2xl font-semibold  mb-4">Email</h3>
                        <p className="text-lg ">contact@abmoallim.com</p>
                    </div>
                    <div 
                        className="bg-white border rounded-lg shadow-md p-6 flex-1 text-center cursor-pointer hover:bg-gray-100 transition-colors"
                        onClick={handleMediaSessionClick}
                    >
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Media Session</h3>
                        <p className="text-lg text-gray-600">Book a Session as a Media</p>
                    </div>
                </div>
                <div className=" border rounded-lg shadow-md p-6">
                    <div
                        className="calendly-inline-widget"
                        data-url="https://calendly.com/abdihamidmoallim/30min"
                        style={{ minWidth: '320px', height: '700px' }}
                    ></div>
                </div>
            </div>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Media Session Booking</DialogTitle>
                        <DialogDescription>
                            The cost for a 30-minute media session is $50. Would you like to proceed with booking?
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                        <Button onClick={handleConfirm}>Confirm Booking</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </section>
    );
};

export default Contact;
