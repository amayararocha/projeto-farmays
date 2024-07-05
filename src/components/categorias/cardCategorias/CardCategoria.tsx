import React from 'react';
import { Link } from 'react-router-dom';
import Categoria from '../../../models/Categoria'; 

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategoria({categoria}:CardCategoriaProps) {
  return (
    <div className='border rounded-lg overflow-hidden shadow-lg'>
      <div className='bg-gray-200 p-2'>
        <h3 className='text-xl font-bold'>{categoria.nome}</h3>
        <p className='text-gray-600'>{categoria.descricao}</p>
      </div>
      <div className='bg-gray-300 p-2 flex justify-between'>
        <Link to={`/editarCategoria/${categoria.id}`} className='w-1/2 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg mr-2 text-center'>
          Editar
        </Link>
        <Link to={`/deletarCategoria/${categoria.id}`} className='w-1/2 bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-lg ml-2 text-center'>
          Deletar
        </Link>
      </div>
    </div>
  )
}

export default CardCategoria;
