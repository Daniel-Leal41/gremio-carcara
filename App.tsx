import React from 'react';
import Header from './Header';

const App: React.FC = () => {
  return (
    <main className="bg-black min-h-screen w-full flex flex-col items-center justify-center antialiased">
      <Header />
      <div className="relative text-center">
        {/* Decorative background glow */}
        <div className="absolute -inset-2 bg-orange-500 rounded-lg blur-3xl opacity-30 animate-pulse"></div>
        
        <h1 className="relative text-5xl md:text-7xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 tracking-tight drop-shadow-lg">
          Em breve...
        </h1>
      </div>
      <footer className="absolute bottom-5 text-center w-full">
        <p className="text-gray-600 text-sm">© 2025 Grêmio Carcará</p>
      </footer>
    </main>
  );
};

export default App;
