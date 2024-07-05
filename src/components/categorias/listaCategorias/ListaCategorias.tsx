import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Categoria from '../../../models/Categoria'; 
import CardCategoria from '../cardCategorias/CardCategoria'; 
import { buscar } from '../../../services/Service'; 

function ListaCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  let navigate = useNavigate();

  async function buscarCategorias() {
    try {
      await buscar('/categorias', setCategorias);
    } catch (error) {
      alert('Erro ao buscar categorias'); 
    }
  }

  useEffect(() => {
    buscarCategorias();
  }, []);

  return (
    <div className="flex justify-center items-center w-full h-full bg-gray-100 p-7">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categorias.map((categoria) => (
            <div key={categoria.id} className="mb-8">
              <CardCategoria categoria={categoria} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListaCategorias;
