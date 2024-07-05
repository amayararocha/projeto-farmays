import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='w-full bg-gradient-to-r from-red-300 via-red-600 to-red-300 text-white flex justify-center py-4'>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-lg">
        <Link to='/home' className='text-2xl font-bold uppercase'>Farmays</Link>
        <div className='flex gap-3'>
          <Link to='/produtos' className='hover:underline'>Produtos</Link>
          <Link to='/categorias' className='hover:underline'>Categorias</Link>
          <Link to='/servicos' className='hover:underline'>Serviços</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
1