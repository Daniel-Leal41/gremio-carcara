import React from 'react';

const EventsPage: React.FC = () => (
    <div className="w-full max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter uppercase text-center mb-12">Agenda de Eventos</h2>
        <div className="space-y-6">
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 flex flex-col md:flex-row items-start md:items-center gap-4">
                <div className="text-center md:w-32 flex-shrink-0">
                    <p className="text-2xl font-bold text-orange-400">JUN</p>
                    <p className="text-5xl font-extrabold text-white">28</p>
                </div>
                <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white">Festa Junina do Carcará</h3>
                    <p className="text-sm text-gray-500">Pátio da Escola</p>
                    <p className="text-gray-400 text-sm mt-2">Comidas típicas, quadrilha, correio elegante e muita diversão para toda a comunidade escolar.</p>
                </div>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 flex flex-col md:flex-row items-start md:items-center gap-4">
                 <div className="text-center md:w-32 flex-shrink-0">
                    <p className="text-2xl font-bold text-orange-400">JUL</p>
                    <p className="text-5xl font-extrabold text-white">15</p>
                </div>
                <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white">Campeonato de Futsal Interclasses</h3>
                    <p className="text-sm text-gray-500">Ginásio de Esportes</p>
                    <p className="text-gray-400 text-sm mt-2">Monte seu time e venha competir pelo título. Inscrições abertas na sala do grêmio.</p>
                </div>
            </div>
        </div>
    </div>
);

export default EventsPage;
