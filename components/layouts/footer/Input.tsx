interface InputProps {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
  }
  
  const Input: React.FC<InputProps> = ({ label, value, onChange, error }) => {
    return (
      <div className="flex flex-col my-2">
        <label className="text-gray-600 mb-1" htmlFor={label}>
          {label}
        </label>
        <input
          type="text"
          id={label}
          name={label}
          value={value}
          onChange={onChange}
          placeholder="ایمیل شما"
          className={`bg-gray-100 rounded-xl  px-4 py-2 ${
            error
              ? "border-red-500 focus:border-red-500"
              : "border-gray-300 focus:border-blue-500"
          }`}
        />
        {error && <div className="text-red-500 mt-1">{error}</div>}
      </div>
    );
  };
  
  export default Input;