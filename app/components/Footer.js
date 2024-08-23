// app/components/Footer.js

const Footer = () => {
    return (
        <footer className="w-full bg-gray-100 text-gray-600 py-4 bottom-0 left-0">
            <div className="container mx-auto text-center">
                <p className="text-sm">
                    © {new Date().getFullYear()} Abmoallim. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
