import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <img src="/logo.png" alt="Cursopedia Logo" className="logo w-[200px]" />

        {/* Botón hamburguesa para pantallas pequeñas */}
        <button
          className="text-gray-600 block lg:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Menú en pantallas grandes */}
        <nav className="hidden lg:flex lg:gap-6 lg:ml-auto">
          <Link to="/" className="text-lg font-medium hover:underline underline-offset-4">
            Inicio
          </Link>
          <Link to="/cursos" className="text-lg font-medium hover:underline underline-offset-4">
            Cursos
          </Link>
          <Link to="/blog" className="text-lg font-medium hover:underline underline-offset-4">
            Blog
          </Link>
          <Link to="/sobre-nosotros" className="text-lg font-medium hover:underline underline-offset-4">
            Sobre Nosotros
          </Link>
        </nav>
      </header>

      {/* Menú desplegable en pantallas pequeñas */}
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <nav className="flex flex-col items-center gap-4 py-4">
          <Link to="/" className="text-lg font-medium hover:underline underline-offset-4">
            Inicio
          </Link>
          <Link to="/cursos" className="text-lg font-medium hover:underline underline-offset-4">
            Cursos
          </Link>
          <Link to="/blog" className="text-lg font-medium hover:underline underline-offset-4">
            Blog
          </Link>
          <Link to="/sobre-nosotros" className="text-lg font-medium hover:underline underline-offset-4">
            Sobre Nosotros
          </Link>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
