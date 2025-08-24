import React, { useState } from 'react';
import { Page } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import ProjectsPage from './components/pages/ProjectsPage';
import EventsPage from './components/pages/EventsPage';
import ContactPage from './components/pages/ContactPage';


const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'projects': return <ProjectsPage />;
      case 'events': return <EventsPage />;
      case 'contact': return <ContactPage />;
      case 'home':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen w-screen bg-gradient-to-br from-gray-900 to-black text-white font-sans">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main key={currentPage} className="flex-grow flex flex-col items-center justify-center p-4 py-12 md:py-20 opacity-0 animate-fade-in">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
