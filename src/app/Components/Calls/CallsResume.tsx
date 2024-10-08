"use client"
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Importando ícones de seta

export const Calls = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="border border-gray-400 p-4 w-64 ml-10 mt-10">
        {/* Cabeçalho com a seta e o título */}
        <div className="flex justify-between items-center cursor-pointer border-b-2 border-blue-600" onClick={toggleExpand}>
            <h2 className="text-lg font-semibold">Meus chamados</h2>
            {isExpanded ? (
            <FaChevronUp className="text-gray-600" />
            ) : (
            <FaChevronDown className="text-gray-600" />
            )}
        </div>

        {/* Conteúdo expandido */}
        {isExpanded && (
            <div className='mt-5'>
                <p>0 Pendente(s)</p>
                <p>0 novo(s)</p>
                <p>0 em atendimento(s)</p>
                <p>0 Pendente(s)</p>
                <p className='border-b-2 border-blue-600'>0 Parado(s)</p>

                <div className='flex justify-center'>
                    <div className='bg-red-600 w-32 h-20 text-center flex justify-center items-center flex-col rounded-lg font-bold mt-5'>
                        <p>0</p>
                        <p>Abertos Hoje</p>
                    </div>
                </div>    
            </div>
        )}
    </div>
  );
};
