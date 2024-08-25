// app/contact/page.js
"use client"
import { useEffect } from 'react';

const Contact = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <section className="pt-32 py-16 bg-white dark:bg-gray-800 text-black dark:text-white pb-8">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-slate-500 mb-8">Contact Me</h2>
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
                    <div className="bg-white dark:bg-slate-900 border rounded-lg shadow-md p-6 flex-1 text-center">
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-slate-300 mb-4">Email</h3>
                        <p className="text-lg text-gray-600 dark:text-slate-400">contact@abmoallim.com</p>
                    </div>
                    {/* <div className="bg-white border rounded-lg shadow-md p-6 flex-1 text-center">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Role</h3>
                        <p className="text-lg text-gray-600">Full Stack Engineer</p>
                    </div> */}
                </div>
                <div className="bg-white dark:bg-slate-900 text-black dark:text-white border rounded-lg shadow-md p-6">
                    <div
                        className="calendly-inline-widget"
                        data-url="https://calendly.com/abdihamidmoallim/30min"
                        style={{ minWidth: '320px', height: '700px' }}
                    ></div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
