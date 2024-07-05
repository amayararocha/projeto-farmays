import React, { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import { atualizar, buscar, cadastrarCategoria } from '../../../services/Service';

function FormularioCategoria() {
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const { id } = useParams<{ id: string }>();
  let navigate = useNavigate();

  async function buscarPorId(id: string) {
    await buscar(`/categorias/${id}`, setCategoria);
  }

  useEffect(() => {
    if (id) {
      buscarPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setCategoria({
      ...categoria,
      [name]: value
    });
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
  
    if (id) {
      try {
        await atualizar(`/categorias`, categoria, setCategoria);
        alert('Categoria atualizada com sucesso');
      } catch (error: any) {
        alert('Erro ao atualizar a categoria');
        retornar();
      }
    } else {
      try {
        await cadastrarCategoria(`/categorias`, categoria, setCategoria);
        alert('Categoria cadastrada com sucesso');
      } catch (error: any) {
        alert('Erro ao cadastrar a categoria');
      }
    }
  
    retornar();
  }

  function retornar() {
    navigate("/categorias");
  }

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-3xl text-center my-1">
          {id ? 'Editar categoria' : 'Cadastrar nova categoria'}
        </h1>
        <form onSubmit={gerarNovaCategoria} className="mt-4">
          <div className="mb-4">
            <label htmlFor="nome" className="block text-gray-700 text-sm font-bold mb-2">
              Nome da categoria
            </label>
            <input
              type="text"
              placeholder="Nome"
              name='nome'
              value={categoria.nome || ''}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              className="border-2 border-gray-300 rounded p-2 w-full"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="descricao" className="block text-gray-700 text-sm font-bold mb-2">
              Descrição da categoria
            </label>
            <textarea
              placeholder="Descrição"
              name='descricao'
              value={categoria.descricao || ''}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => atualizarEstado(e)}
              className="border-2 border-gray-300 rounded p-2 w-full resize-none"
              rows={4}
            />
          </div>
          <button
            className="rounded text-white bg-blue-500 hover:bg-blue-700 w-full py-2 px-4"
            type="submit"
          >
            {id ? 'Editar' : 'Cadastrar'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormularioCategoria;
