import React, { useState } from 'react';
import { Page } from '../types';
import { MenuIcon, CloseIcon } from './icons';

interface HeaderProps {
    currentPage: Page;
    setCurrentPage: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navItems: { id: Page; label: string }[] = [
        { id: 'home', label: 'Início' },
        { id: 'projects', label: 'Projetos' },
        { id: 'events', label: 'Eventos' },
        { id: 'contact', label: 'Contato' },
    ];

    const NavLink: React.FC<{item: {id: Page, label: string}}> = ({item}) => (
      <button 
        onClick={() => {
          setCurrentPage(item.id);
          setIsMenuOpen(false);
        }} 
        className={`text-sm font-medium transition-colors duration-300 px-3 py-2 rounded-md ${currentPage === item.id ? 'text-orange-400 bg-orange-400/10' : 'text-gray-300 hover:text-orange-500'}`}
      >
        {item.label}
      </button>
    );

    return (
      <>
        <header className="w-full p-4 md:p-6 border-b border-gray-800/50 sticky top-0 bg-gray-900/80 backdrop-blur-sm z-50">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-500 tracking-wider cursor-pointer" onClick={() => setCurrentPage('home')}>
              Grêmio Carcará
            </h1>
            <nav className="hidden md:flex space-x-2">
              {navItems.map(item => <NavLink key={item.id} item={item} />)}
            </nav>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Abrir menu">
                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </header>
        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-gray-900/95 z-40 md:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <nav className="flex flex-col items-center justify-center h-full space-y-6">
              {navItems.map(item => <NavLink key={item.id} item={item} />)}
            </nav>
        </div>
      </>
    );
};

export default Header;
