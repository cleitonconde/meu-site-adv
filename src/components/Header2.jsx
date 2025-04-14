// src/components/Header.jsx
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-gray-300 shadow-md py-3">
      {/* Menu de navegação centralizado */}
      <nav className="mt-6 flex justify-center space-x-4 text-gray-800">
        {/*<Link to="/" className="hover:text-black">Home</Link> */}
        <Link to="/" className="bg-black text-white font-bold rounded-full px-6 py-2 text-sm hover:bg-gray-800 transition"> Home </Link>
        <Link to="/advogados" className="bg-black text-white font-bold rounded-full px-6 py-2 text-sm hover:bg-gray-800 transition"> Advogados </Link>
        <Link to="/contato" className="bg-black text-white font-bold rounded-full px-6 py-2 text-sm hover:bg-gray-800 transition"> Contato </Link>
      </nav>
    </header>
  );
}
