

import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ListaCategorias from './components/categorias/listaCategorias/ListaCategorias';
import FormularioCategoria from './components/categorias/formularioCategorias/FormularioCategoria';
import DeletarCategoria from './components/categorias/deletarCategorias/DeletarCategoria';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/categorias" element={<ListaCategorias />} />
        <Route path="/home" element={<Home />} />
        <Route path="/servicos" element={<FormularioCategoria />} />
        <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
        <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
      </Routes>
    <Footer />
    </BrowserRouter>
    </>
    
  )
}

export default App