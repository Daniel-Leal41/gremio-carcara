import React from 'react';

const ProjectsPage: React.FC = () => (
    <div className="w-full max-w-5xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter uppercase text-center mb-12">Nossos Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 transform hover:scale-105 transition-transform duration-300">
                <span className="text-xs font-bold uppercase text-orange-400">Concluído</span>
                <h3 className="text-xl font-bold text-white mt-2 mb-2">Campanha do Agasalho 2024</h3>
                <p className="text-gray-400 text-sm">Arrecadação de roupas e cobertores para doação a instituições de caridade locais.</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 transform hover:scale-105 transition-transform duration-300">
                <span className="text-xs font-bold uppercase text-green-400">Em Andamento</span>
                <h3 className="text-xl font-bold text-white mt-2 mb-2">Semana da Consciência Negra</h3>
                <p className="text-gray-400 text-sm">Palestras, oficinas e exposições para celebrar e discutir a cultura afro-brasileira.</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 transform hover:scale-105 transition-transform duration-300">
                <span className="text-xs font-bold uppercase text-blue-400">Planejamento</span>
                <h3 className="text-xl font-bold text-white mt-2 mb-2">Reforma da Biblioteca</h3>
                <p className="text-gray-400 text-sm">Projeto para modernizar o espaço da biblioteca, tornando-o mais acolhedor e funcional.</p>
            </div>
        </div>
    </div>
);

export default ProjectsPage;
