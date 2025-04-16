import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Advogados from './pages/Advogados'
import Contato from './pages/Contato'
import Trabalhista from './pages/Trabalhista'
import Civil from './pages/Civil'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      {/* Container com imagem de fundo para todas as páginas */}
      <div className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col " style={{ backgroundImage: "url('/images/home-bg.jpg')" }}>
        
        {/* Header fixo */}
        <Header />

        {/* Conteúdo principal com espaço para o header */}
        <main className="pt-32 px-4 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trabalhista" element={<Trabalhista />} />
            <Route path="/civil" element={<Civil />} />
            <Route path="/advogados" element={<Advogados />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>

        {/* Rodapé fixo abaixo de tudo */}
        <Footer />
      </div>
    </Router>
  )
}

export default App
