export const Select = ({ 
  label, 
  options = [], 
  value, 
  onChange, 
  placeholder = 'Select an option',
  error,
  required = false,
  disabled = false,
  className = ''
}) => {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block text-sm font-poppins font-semibold text-gray-700 mb-2">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <select
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`w-full px-4 py-3 font-inter border rounded-lg appearance-none bg-white
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
          disabled:bg-gray-100 disabled:cursor-not-allowed cursor-pointer
          ${error ? 'border-red-500' : 'border-gray-300'}`}
      >
        <option value="">{placeholder}</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-1 text-sm text-red-500 font-inter">{error}</p>
      )}
    </div>
  );
};