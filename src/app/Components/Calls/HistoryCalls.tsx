"use client";
import { useState } from 'react';

interface Chamado {
  id: number;
  titulo: string;
  descricao: string;
  status: 'aberto' | 'em andamento' | 'fechado';
  dataAbertura: string;
  horarioAbertura: string;
  dataFechamento?: string;
  horarioFechamento?: string;
}

const ChamadosUsuario = () => {
  // Simulando um estado de chamados
  const [chamados, setChamados] = useState<Chamado[]>([
    {
      id: 1,
      titulo: 'Problema no sistema',
      descricao: 'Não consigo acessar o sistema.',
      status: 'aberto',
      dataAbertura: '2024-10-01',
      horarioAbertura: '14:30',
    },
    {
      id: 2,
      titulo: 'Erro na impressão',
      descricao: 'A impressora não está funcionando.',
      status: 'em andamento',
      dataAbertura: '2024-10-03',
      horarioAbertura: '10:15',
      dataFechamento: '2024-10-05',
      horarioFechamento: '11:00',
    },
    {
      id: 3,
      titulo: 'Solicitação de novo equipamento',
      descricao: 'Preciso de um novo laptop.',
      status: 'fechado',
      dataAbertura: '2024-10-02',
      horarioAbertura: '09:00',
      dataFechamento: '2024-10-04',
      horarioFechamento: '15:30',
    },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'aberto':
        return 'text-green-500';
      case 'em andamento':
        return 'text-yellow-500';
      case 'fechado':
        return 'text-red-500';
      default:
        return '';
    }
  };

  const handleEdit = (id: number) => {
    // Lógica para editar o chamado
    console.log(`Editando chamado com ID: ${id}`);
  };

  return (
    <div className="p-4 max-w-full mx-auto flex flex-col justify-center items-center">
      <h1 className="text-xl font-bold mb-4">Meus Chamados</h1>
      <div className="overflow-x-auto w-full">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Data Abertura</th>
              <th className="border border-gray-300 px-4 py-2">Horário Abertura</th>
              <th className="border border-gray-300 px-4 py-2">Título</th>
              <th className="border border-gray-300 px-4 py-2">Descrição</th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
              <th className="border border-gray-300 px-4 py-2">Data Fechamento</th>
              <th className="border border-gray-300 px-4 py-2">Horário Fechamento</th>
              <th className="border border-gray-300 px-4 py-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {chamados.map((chamado) => (
              <tr key={chamado.id} className="border-b border-gray-300">
                <td className="border border-gray-300 px-4 py-2">{chamado.dataAbertura}</td>
                <td className="border border-gray-300 px-4 py-2">{chamado.horarioAbertura}</td>
                <td className="border border-gray-300 px-4 py-2">{chamado.titulo}</td>
                <td className="border border-gray-300 px-4 py-2">{chamado.descricao}</td>
                <td className={`border border-gray-300 px-4 py-2 ${getStatusColor(chamado.status)}`}>
                  {chamado.status}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {chamado.dataFechamento || 'Ainda em aberto'}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {chamado.horarioFechamento || 'N/A'}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => handleEdit(chamado.id)}
                    className="text-blue-500 hover:underline"
                  >
                    Editar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ChamadosUsuario;
