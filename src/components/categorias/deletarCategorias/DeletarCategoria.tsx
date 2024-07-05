import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import { buscar, deletar } from '../../../services/Service';

function DeletarCategoria() {
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria);
    } catch (error) {
      alert('Erro ao buscar a categoria');
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function retornar() {
    navigate("/categorias");
  }

  async function deletarCategoria() {
    try {
      await deletar(`/categorias/${id}`);
      alert('Categoria apagada com sucesso');
    } catch (error) {
      alert('Erro ao apagar a categoria');
    }
    retornar();
  }

  return (
    <div className='flex items-center justify-center w-full h-screen bg-gray-100'>
      <div className='container max-w-md bg-white rounded-lg shadow-lg p-10'>
        <h1 className='text-3xl text-center my-6'>Deletar Categoria</h1>
        <p className='text-center font-medium mb-4'>Você tem certeza de que deseja apagar a categoria a seguir?</p>
        <div className='border rounded-lg overflow-hidden shadow-lg'>
          <header className='bg-gray-200 p-2'>
            <h3 className='text-xl font-bold'>{categoria.nome}</h3>
          </header>
          <p className='p-8 text-xl bg-slate-200'>{categoria.descricao}</p>
          <div className='bg-gray-300 p-2 flex justify-between'>
            <button className='w-1/2 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg mr-2 text-center' onClick={retornar}>Não</button>
            <button className='w-1/2 bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-lg ml-2 text-center' onClick={deletarCategoria}>Sim</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeletarCategoria;
