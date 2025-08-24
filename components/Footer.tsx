import React from 'react';

const Footer: React.FC = () => (
    <footer className="w-full p-4 mt-12 text-center text-xs text-gray-600 border-t border-gray-800/50">
        &copy; {new Date().getFullYear()} Grêmio Carcará. Euclides da Cunha.
    </footer>
);

export default Footer;
