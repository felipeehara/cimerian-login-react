"use client"
import { useState } from 'react';

const AbrirChamado = () => {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [imagens, setImagens] = useState<FileList | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para enviar os dados
    console.log({ titulo, descricao, imagens });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 max-w-lg mx-auto">
      <div>
        <label htmlFor="titulo" className="block text-sm font-medium text-gray-700">
          Título do problema
        </label>
        <input
          id="titulo"
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Descreva o título do problema"
          required
        />
      </div>

      <div>
        <label htmlFor="descricao" className="block text-sm font-medium text-gray-700">
          Descrição do problema
        </label>
        <textarea
          id="descricao"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Descreva o problema com detalhes"
          rows={5}
          required
        />
      </div>

      <div>
        <label htmlFor="imagens" className="block text-sm font-medium text-gray-700">
          Adicionar imagens
        </label>
        <input
          id="imagens"
          type="file"
          multiple
          onChange={(e) => setImagens(e.target.files)}
          className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
        />
      </div>

      <button
        type="submit"
        className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
      >
        Enviar Chamado
      </button>
    </form>
  );
};

export default AbrirChamado;
