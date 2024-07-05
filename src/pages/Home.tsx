import React from 'react';
import { Link } from 'react-router-dom';
import homeLogo from '../assets/favicon.ico'; 

function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="container mx-auto px-4 grid grid-cols-1 gap-6 items-center">
        <div className="flex flex-col justify-center">
          <div className="text-center">
            <h2 className='text-4xl font-bold mb-2'>Bem-vindo à Farmácia Farmays</h2>
            <p className='text-lg md:text-xl mb-2'>Cuide da sua saúde conosco. Oferecemos produtos e serviços de qualidade.</p>
            <div className="flex justify-center md:justify-center gap-4 mt-4"> 
              <Link to='/produtos' className='rounded bg-red-600 text-white py-2 px-4 hover:bg-red-700 transition duration-300 ease-in-out'>Ver produtos</Link>
              <Link to='/categorias' className='rounded bg-red-600 text-white py-2 px-4 hover:bg-red-700 transition duration-300 ease-in-out'>Conheça nossas categorias</Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <img src={homeLogo} alt="Logo da Farmácia Farmays" className='w-24' />
        </div>
      </div>
    </div>
  );
}

export default Home;
