import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

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
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen ? 'bg-black bg-opacity-80 shadow-md backdrop-blur' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        {/* Parte superior - escondida quando menuOpen */}
        {!menuOpen && (
          <div className="flex items-center justify-between sm:justify-start space-x-6">
            <img
              src="/images/logos/logotiposegundario.png"
              alt="Logo do Escritório"
              className="w-32 h-16 sm:w-64 sm:h-32 object-contain"
            />
            {/* Botão hamburguer (mobile) */}
            <div className="sm:hidden ml-auto">
              <button onClick={toggleMenu} className="text-white">
                <Menu size={28} />
              </button>
            </div>
          </div>
        )}

        {/* Menu desktop */}
        <nav className="hidden sm:flex justify-evenly mt-4 bg-black bg-opacity-60 py-2 rounded w-full">
          <Link to="/" className={`flex-1 text-center text-lg ${linkStyle('/')}`}>Home</Link>
          <Link to="/trabalhista" className={`flex-1 text-center text-lg ${linkStyle('/trabalhista')}`}>Trabalhista</Link>
          <Link to="/civil" className={`flex-1 text-center text-lg ${linkStyle('/civil')}`}>Civil</Link>
          <Link to="/advogados" className={`flex-1 text-center text-lg ${linkStyle('/advogados')}`}>Advogados</Link>
          <Link to="/contato" className={`flex-1 text-center text-lg ${linkStyle('/contato')}`}>Contato</Link>
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
            <Link to="/" onClick={toggleMenu} className={linkStyle('/')}>Home</Link>
            <Link to="/trabalhista" onClick={toggleMenu} className={linkStyle('/trabalhista')}>Trabalhista</Link>
            <Link to="/civil" onClick={toggleMenu} className={linkStyle('/civil')}>Civil</Link>
            <Link to="/advogados" onClick={toggleMenu} className={linkStyle('/advogados')}>Advogados</Link>
            <Link to="/contato" onClick={toggleMenu} className={linkStyle('/contato')}>Contato</Link>
          </div>
        )}
      </div>
    </header>
  )
}
