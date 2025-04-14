// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Advogados from './pages/Advogados'
import Contato from './pages/Contato'
import Header from './components/Header'

function App() {
  return (
    <Router>
      {/* Container com imagem de fundo para todas as páginas */}
      <div className="relative min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/home-bg.jpg')" }}>
        {/* Header fixo por cima da imagem */}
        <Header />

        {/* Conteúdo com padding top para não ficar atrás do header */}
        <div className="pt-32 px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/advogados" element={<Advogados />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
