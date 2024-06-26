import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { useAuth } from '../../context/UserContext';

const Navbar = () => {
  const { isAuthenticated, logout, user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (path) => {
    if (!isAuthenticated) {
      navigate('/login');
    } else {
      navigate(path);
    }
  };

  return (
    <div>
      <nav className="shadow bg-stone-200 fixed top-0 w-full z-10">
        <div className="container px-6 py-3 mx-auto lg:flex lg:justify-between lg:items-center">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link to="/">
                <img className="w-auto h-8 sm:h-16" src="https://i.postimg.cc/137hMjd6/LOGO111.png" alt="Logo" />
              </Link>
              <span className="ml-3 text-lg sm:text-2xl text-black dark:text-black"><b>CONTRATALO</b></span>
            </div>
            <div className="flex lg:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="text-black dark:text-black hover:text-black dark:hover:text-black focus:outline-none focus:text-black dark:focus:text-black"
                aria-label="Toggle menu"
              >
                <svg
                  className={`${isOpen ? 'hidden' : 'block'} w-8 h-8`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>

                <svg
                  className={`${isOpen ? 'block' : 'hidden'} w-8 h-8`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div className={`lg:flex lg:items-center lg:justify-end ${isOpen ? 'block' : 'hidden'} lg:mt-0 lg:p-0 lg:relative`}>
            <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6 lg:w-full">
              <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
                <Link to="/" className="hidden px-1 py-2 mt-2 text-lg text-black rounded-lg dark:text-black lg:mx-4 lg:my-0 no-underline hover:no-underline">
                  <span className="hover:text-sky-200">Inicio</span>
                </Link>
                <a onClick={() => handleNavigation('/trabaja')} className="hidden px-1 py-2 mt-2 text-lg text-black rounded-lg dark:text-black lg:mx-4 lg:my-0 no-underline hover:no-underline">
                  <span className="hover:text-sky-200">Trabaja</span>
                </a>
                <a onClick={() => handleNavigation('/contrata')} className="hidden px-1 py-2 mt-2 text-lg text-black rounded-lg dark:text-black lg:mx-4 lg:my-0 no-underline hover:no-underline">
                  <span className="hover:text-sky-200">Contrata</span>
                </a>
              </div>
              <Link to="/" className="block px-1 py-2 mt-2 text-xl text-black rounded-lg dark:text-black lg:mx-4 lg:my-0 no-underline hover:no-underline">
                <span className="hover:text-sky-200">Inicio</span>
              </Link>
              <a onClick={() => handleNavigation('/trabaja')} className="block px-1 py-2 mt-2 text-xl text-black rounded-lg dark:text-black lg:mx-4 lg:my-0 no-underline hover:no-underline">
                <span className="hover:text-sky-200">Trabaja</span>
              </a>
              <a onClick={() => handleNavigation('/contrata')} className="block px-1 py-2 mt-2 text-xl text-black rounded-lg dark:text-black lg:mx-4 lg:my-0 no-underline hover:no-underline">
                <span className="hover:text-sky-200">Contrata</span>
              </a>
              {isAuthenticated && user?.role === 'admin' && (
                <Dropdown className="ml-4">
                  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    Admin
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => navigate('/admin/create')}>
                      Agregar Servicio
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              )}
              <div className="flex items-center lg:ml-4">
                <div className="lg:hidden">
                  {!isAuthenticated && (
                    <>
                      <Link to="/login" className="text-xl text-black dark:text-black px-6 py-1 mt-3 rounded-lg border border-black transition-colors hover:bg-sky-200 hover:text-white duration-300 mb-2 block no-underline hover:no-underline">
                        <span>Ingresa</span>
                      </Link>
                      <Link to="/register" className="text-xl text-black dark:text-black px-6 py-1 mt-3 rounded-lg border border-black transition-colors hover:bg-sky-200 hover:text-white duration-300 block no-underline hover:no-underline">
                        <span>Regístrate</span>
                      </Link>
                    </>
                  )}
                  {isAuthenticated && (
                    <button
                      onClick={logout}
                      className="text-xl text-black dark:text-black px-6 py-1 mt-3 rounded-lg border border-black transition-colors hover:bg-sky-200 hover:text-white duration-300 block no-underline hover:no-underline"
                    >
                      <span>Cerrar sesión</span>
                    </button>
                  )}
                </div>
                <div className="hidden lg:flex items-center">
                  {!isAuthenticated && (
                    <>
                      <Link to="/login" className="text-xl text-black dark:text-black px-6 py-1 rounded-lg border border-black hover:bg-sky-200 hover:text-white transition-colors duration-300 no-underline hover:no-underline">
                        Ingresa
                      </Link>
                      <Link to="/register" className="text-xl text-black dark:text-black px-6 py-1 rounded-lg ml-4 border border-black hover:bg-sky-200 hover:text-white transition-colors duration-300 no-underline hover:no-underline">
                        Regístrate
                      </Link>
                    </>
                  )}
                  {isAuthenticated && (
                    <button
                      onClick={logout}
                      className="text-xl text-black dark:text-black px-6 py-1 rounded-lg ml-4 border border-black hover:bg-sky-200 hover:text-white transition-colors duration-300 no-underline hover:no-underline"
                    >
                      Cerrar sesión
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
