interface PasswordInputProps {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
  
  const PasswordInput: React.FC<PasswordInputProps> = ({ label, name, value, onChange }) => {
    return (
      <div>
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
  