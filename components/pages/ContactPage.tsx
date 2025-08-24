import React from 'react';
import { InstagramIcon } from '../icons';

const ContactPage: React.FC = () => (
    <div className="w-full max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter uppercase mb-8">Fale Conosco</h2>
        <p className="text-lg text-gray-400 mb-12">
            Tem alguma dúvida, sugestão ou quer fazer parte? Entre em contato conosco. Estamos sempre de portas abertas!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50">
                <h3 className="font-bold text-white text-lg mb-3">Informações Gerais</h3>
                <p className="text-gray-400 mb-1"><strong className="text-white">Email:</strong> contato.gremio.carcara@escola.com</p>
                <p className="text-gray-400 mb-1"><strong className="text-white">Sala:</strong> Bloco B, Sala 12</p>
                <p className="text-gray-400"><strong className="text-white">Atendimento:</strong> Seg a Sex, 10h - 16h</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50">
                <h3 className="font-bold text-white text-lg mb-3">Siga-nos</h3>
                 <a href="https://www.instagram.com/carcara_euc/" aria-label="Instagram" className="flex items-center space-x-3 text-gray-400 hover:text-orange-500 transition-colors duration-300">
                    <InstagramIcon />
                    <span>@carcara_euc</span>
                </a>
            </div>
        </div>
    </div>
);

export default ContactPage;
