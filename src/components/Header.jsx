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

  // Função para definir estilo do link ativo
  const linkStyle = (path) =>
    location.pathname === path
      ? 'text-yellow-400 font-bold underline'
      : 'text-white font-semibold hover:underline'

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black bg-opacity-80 shadow-md backdrop-blur' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        {/* Parte de cima: título e botão mobile */}
        {/*<div className="flex items-center justify-between">*/}
        <div className="flex items-center justify-center sm:justify-start space-x-4">
          <img
            src="/images/balanca2.png" // ou o caminho da sua imagem
            alt="Logo do Escritório"
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
          />
          <h1 className="text-black text-xl sm:text-4xl font-bold text-center w-full sm:w-auto font-[Charm]">
            Martin & Oliveira
          </h1>


          {/* Botão hamburguer (mobile) */}
          <div className="sm:hidden">
            <button onClick={toggleMenu} className="text-white">
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Menu desktop */}
        <nav className="hidden sm:flex justify-evenly mt-4 bg-black bg-opacity-60 py-2 rounded w-full">
          <Link to="/" className={`flex-1 text-center text-lg ${linkStyle('/')}`}>Home</Link>
          <Link to="/advogados" className={`flex-1 text-center text-lg ${linkStyle('/advogados')}`}>Advogados</Link>
          <Link to="/contato" className={`flex-1 text-center text-lg ${linkStyle('/contato')}`}>Contato</Link>
        </nav>

        {/* Menu mobile */}
        {menuOpen && (
          <div className="sm:hidden flex flex-col items-center space-y-3 pt-4">
            <Link to="/" onClick={() => setMenuOpen(false)} className={linkStyle('/')}>Home</Link>
            <Link to="/advogados" onClick={() => setMenuOpen(false)} className={linkStyle('/advogados')}>Advogados</Link>
            <Link to="/contato" onClick={() => setMenuOpen(false)} className={linkStyle('/contato')}>Contato</Link>
          </div>
        )}
      </div>
    </header>
  )
}
