"use client";

import { useState } from "react";

interface TextDisplayProps {
  label: string;
  value: string;
}

const TextDisplay: React.FC<TextDisplayProps> = ({ label, value }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
      <p className="bg-gray-100 border border-gray-300 rounded-lg px-3 py-2 text-gray-600">
        {value}
      </p>
    </div>
  );
};

interface PasswordInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ label, name, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
        {label}
      </label>
      <input
        type="password"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
      />
    </div>
  );
};

const EditProfile = () => {
  const [formData, setFormData] = useState({
    nome: "Nome do Usuário",
    email: "email@exemplo.com",
    departamento: "Departamento",
    senha: "",
    confirmSenha: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados do formulário:", formData);
  };

  return (
        
            <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold mb-6">Editar Perfil</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nome de Exibição e Email apenas visíveis */}
                <TextDisplay label="Nome de Exibição" value={formData.nome} />
                <TextDisplay label="Email" value={formData.email} />
                <TextDisplay label="Departamento" value={formData.departamento} />

                {/* Alteração de Senha */}
                <PasswordInput
                label="Nova Senha"
                name="senha"
                value={formData.senha}
                onChange={handleChange}
                />

                <PasswordInput
                label="Confirmar Nova Senha"
                name="confirmSenha"
                value={formData.confirmSenha}
                onChange={handleChange}
                />

                <div className="flex justify-end">
                <button
                    type="submit"
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                    Salvar Alterações
                </button>
                </div>
            </form>
            </div>
  );
};

export default EditProfile;
