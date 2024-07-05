

import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Home />
    <Footer />
    </BrowserRouter>
    </>
    
  )
}

export default App