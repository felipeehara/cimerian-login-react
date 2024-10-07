"use client";

import { useRouter } from 'next/navigation';

export const OpenCalls = () => {
  const router = useRouter();

  const handleOpenCall = () => {
  
    router.push('/open-call');
  };

  return (
    <div>
      <button
        onClick={handleOpenCall}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Abrir Chamado
      </button>
    </div>
  );
};


export const MyCalls = () => {
  const router = useRouter();

  const handleMyCalls = () => {
   
    router.push('/my-calls');
  };

  return (
    <div>
      <button
        onClick={handleMyCalls}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Meus Chamados
      </button>
    </div>
  );
};

