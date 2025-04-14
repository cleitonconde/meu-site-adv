import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-gray-400 shadow-md py-6">
      <nav className="mt-3 flex justify-center space-x-4 text-gray-800">
        {[
          { to: '/', label: 'Home' },
          { to: '/advogados', label: 'Advogados' },
          { to: '/contato', label: 'Contato' },
        ].map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className="bg-black text-white font-bold rounded-full w-40 h-10 flex items-center justify-center text-xl shadow-lg transform transition duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl"
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
