// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Advogados from './pages/Advogados';
import Contato from './pages/Contato';
import Header from './components/Header'; // 👈 importa o Header

function App() {
  return (
    <Router>
      <Header /> {/* 👈 usa o Header com menu centralizado */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/advogados" element={<Advogados />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
  );
}

export default App;
