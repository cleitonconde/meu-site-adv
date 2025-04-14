// src/components/Header.jsx
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black bg-opacity-80 shadow-md backdrop-blur' : 'bg-transparent'
      }`}
    >
      <div className="bg-black bg-opacity-50 text-left py-4">
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Escritório Patrão e Patrãozinho
        </h1>
      </div>

      <nav className="bg-black bg-opacity-50 flex justify-center space-x-6 pb-4">
        <Link to="/" className="hover:underline font-semibold text-white text-xl shadow-lg transform transition duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl">Home</Link>
        <Link to="/advogados" className="hover:underline font-semibold text-white text-xl shadow-lg transform transition duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl">Advogados</Link>
        <Link to="/contato" className="hover:underline font-semibold text-white text-xl shadow-lg transform transition duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl">Contato</Link>
      </nav>
    </header>
  )
}
