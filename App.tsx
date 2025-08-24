import React, { useState } from 'react';

const App: React.FC = () => {
  const navLinks = ['Sobre', 'Projetos', 'Eventos', 'Contato'];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="bg-black min-h-screen w-full flex flex-col items-center justify-center antialiased">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm border-b border-orange-500/20">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <a href="./" className="text-2xl font-bold text-white">
                Grêmio <span className="text-orange-500">Carcará</span>
              </a>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-gray-300 hover:bg-gray-800 hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                    aria-label={`Navegar para a seção ${link}`}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
            {/* Mobile Menu Button */}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Abrir menu principal</span>
                {isMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  aria-label={`Navegar para a seção ${link}`}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <div className="relative text-center">
        {/* Decorative background glow */}
        <div className="absolute -inset-2 bg-orange-500 rounded-lg blur-3xl opacity-30 animate-pulse"></div>
        
        <h1 className="relative text-5xl md:text-7xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 tracking-tight drop-shadow-lg">
          Em breve...
        </h1>
      </div>
      <footer className="absolute bottom-5 text-center w-full" role="contentinfo">
        <p className="text-gray-400 text-sm">© 2025 Grêmio Carcará</p>
      </footer>
    </main>
  );
};

export default App;
