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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 transition-all duration-300">
        {/* Topo: logo e botão hamburguer */}
        <div className="flex items-center justify-between sm:justify-start sm:space-x-6">
          {/* Botão hamburguer visível apenas no mobile */}
          <div className="sm:hidden">
            <button onClick={toggleMenu} className="text-white">
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Logo: centralizado no mobile, maior no desktop */}
          <div className="flex-1 flex justify-center sm:justify-start">
            <img
              src="/images/logos/logotiposegundario.png"
              //src="/images/logos/logosegundario.png"
              alt="Logo do Escritório"
              className="w-32 h-16 sm:w-64 sm:h-32 object-contain drop-shadow-md"
            />
          </div>
        </div>

        {/* Menu desktop */}
        <nav className="hidden sm:flex justify-evenly mt-4 bg-black bg-opacity-60 py-2 rounded w-full">
          <Link to="/" className={`flex-1 text-center text-lg ${linkStyle('/')}`}>Home</Link>
          <Link to="/trabalhista" className={`flex-1 text-center text-lg ${linkStyle('/trabalhista')}`}>Trabalhista</Link>
          <Link to="/civil" className={`flex-1 text-center text-lg ${linkStyle('/civil')}`}>Civil</Link>
          <Link to="/advogados" className={`flex-1 text-center text-lg ${linkStyle('/advogados')}`}>Advogados</Link>
          <Link to="/contato" className={`flex-1 text-center text-lg ${linkStyle('/contato')}`}>Contato</Link>
        </nav>

        {/* Menu mobile (visível com menuOpen) */}
        {menuOpen && (
          <div className="sm:hidden bg-black bg-opacity-80 py-8 rounded flex flex-col items-center space-y-4">
            {/* Logo central quando menu estiver aberto */}
            <img
              src="/images/logos/logo.png"
              alt="Logo Mobile"
              className="w-44 h-22 object-contain"
            />

            <Link to="/" onClick={() => setMenuOpen(false)} className={linkStyle('/')}>Home</Link>
            <Link to="/trabalhista" onClick={() => setMenuOpen(false)} className={linkStyle('/trabalhista')}>Trabalhista</Link>
            <Link to="/civil" onClick={() => setMenuOpen(false)} className={linkStyle('/civil')}>Civil</Link>
            <Link to="/advogados" onClick={() => setMenuOpen(false)} className={linkStyle('/advogados')}>Advogados</Link>
            <Link to="/contato" onClick={() => setMenuOpen(false)} className={linkStyle('/contato')}>Contato</Link>
          </div>
        )}
      </div>
    </header>
  )
}
