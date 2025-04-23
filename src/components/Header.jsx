import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  // Estilo do link ativo
  const linkStyle = (path) =>
    location.pathname === path
      ? 'text-yellow-400 font-bold underline'
      : 'text-white font-semibold hover:underline'

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${scrolled || menuOpen ? 'bg-black bg-opacity-80 shadow-md backdrop-blur' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        {/* Parte superior - escondida quando menuOpen */}
        {!menuOpen && (
          //<div className="flex items-center justify-between sm:justify-start space-x-6">
          <div className="flex items-center justify-between sm:justify-between w-full">
            <img
              src={scrolled ? "/images/logos/logosegundario.png" : "/images/logos/logotiposegundario.png"}
              alt="Logo do Escritório"
              className="w-38 h-20 sm:w-64 sm:h-32 object-contain brightness-95"
            />
            <div className="flex items-center ml-auto space-x-4">
              {/* Ícones de redes sociais - só aparecem em telas maiores */}
              <div className="hidden sm:flex space-x-4">
                <a href="https://wa.me/5519997637219?text=Olá!%20Acessei%20o%20site%20da%20Martin%20&%20Oliveira%20e%20gostaria%20de%20mais%20informações." target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-500">
                  <FaWhatsapp size={30} className="text-white hover:text-green-500" />
                </a>
                <a href="https://www.instagram.com/martineoliveiraadv" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400">
                  <FaInstagram size={30} className="text-white hover:text-pink-400" />
                </a>
              </div>

              {/* Menu hamburguer mobile */}
              <div className="sm:hidden">
                <button onClick={toggleMenu} className="text-white">
                  <Menu size={28} />
                </button>
              </div>
            </div>

          </div>
        )}

        {/* Menu desktop */}
        <nav className="hidden sm:flex justify-evenly mt-4 bg-black bg-opacity-60 py-2 rounded w-full">
          <Link to="/" className={`flex-1 text-center text-lg font-poppins ${linkStyle('/')}`}>Home</Link>
          <Link to="/trabalhista" className={`flex-1 text-center text-lg font-poppins ${linkStyle('/trabalhista')}`}>Trabalhista</Link>
          <Link to="/civil" className={`flex-1 text-center text-lg font-poppins ${linkStyle('/civil')}`}>Civil</Link>
          <Link to="/advogados" className={`flex-1 text-center text-lg font-poppins ${linkStyle('/advogados')}`}>Advogados</Link>
          <Link to="/contato" className={`flex-1 text-center text-lg font-poppins ${linkStyle('/contato')}`}>Contato</Link>
        </nav>

        {/* Menu mobile - aparece com novo logo quando menuOpen */}
        {menuOpen && (
          <div className="sm:hidden flex flex-col items-center space-y-4 pt-6 bg-black bg-opacity-90 transition-all duration-300 pb-6">
            <img
              src="/images/logos/logo.png"
              alt="Logo central"
              className="w-44 h-auto"
            />
            <button onClick={toggleMenu} className="text-white absolute top-4 right-4">
              <X size={28} />
            </button>
            <Link to="/" onClick={() => {toggleMenu(); window.scrollTo(0, 0)}} className={linkStyle('/')}>Home</Link>
            <Link to="/trabalhista" onClick={() => {toggleMenu(); window.scrollTo(0, 0)}} className={linkStyle('/trabalhista')}>Trabalhista</Link>
            <Link to="/civil" onClick={() => {toggleMenu(); window.scrollTo(0, 0)}} className={linkStyle('/civil')}>Civil</Link>
            <Link to="/advogados" onClick={() => {toggleMenu(); window.scrollTo(0, 0)}} className={linkStyle('/advogados')}>Advogados</Link>
            <Link to="/contato" onClick={() => {toggleMenu(); window.scrollTo(0, 0)}} className={linkStyle('/contato')}>Contato</Link>
            <div className="text-xl flex items-center space-x-2 text-white font-bold">
              <a href="https://wa.me/5519997637219?text=Olá!%20Acessei%20o%20site%20da%20Martin%20e%20Oliveira%20e%20gostaria%20de%20mais%20informações." target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={30} className="hover:text-green-500" />
              </a>
              <a href="https://www.instagram.com/martineoliveiraadv" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400">
                <FaInstagram size={30} className="text-white hover:text-pink-400" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
