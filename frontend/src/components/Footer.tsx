import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Mahmut Altınışık. All rights reserved.</p>
                <div className="mt-2">
                    <a href="/privacy" className="text-gray-400 hover:text-white mx-2">Privacy Policy</a>
                    <a href="/terms" className="text-gray-400 hover:text-white mx-2">Terms of Service</a>
                </div>
                <div className="mt-2">
                    <p>Contact us: <a href="mailto:info@mahmutaltinisik.com" className="text-gray-400 hover:text-white">info@mahmutaltinisik.com</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;