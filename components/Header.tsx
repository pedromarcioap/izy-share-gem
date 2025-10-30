
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center">
      <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
        ShareHub Rápido
      </h1>
      <p className="mt-2 text-lg text-gray-400">
        Gere links de compartilhamento instantaneamente para qualquer conteúdo.
      </p>
    </header>
  );
};

export default Header;
