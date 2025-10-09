import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";


export const Input = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  icon,
  disabled = false,
  required = false,
  className = ""
}) => {
  const [showPassword, setShowPassword] = useState(false);

  // Determine input type (toggle for password)
  const inputType = type === "password" ? (showPassword ? "text" : "password") : type;

  if (type === "checkbox") {
    return (
      <label className={`flex items-center gap-2 ${className}`}>
        <input
          type="checkbox"
          checked={value}
          onChange={onChange}
          disabled={disabled}
          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <span className="text-gray-700">{label}</span>
      </label>
    );
  }

  return (
    <div className={`w-full relative ${className}`}>
      {label && (
        <label className="block text-sm font-poppins font-semibold text-gray-700 mb-2">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
        <input
          type={inputType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={`w-full ${icon ? "pl-10" : "pl-4"} pr-10 py-3 font-inter border rounded-lg bg-white
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
            disabled:bg-gray-100 disabled:cursor-not-allowed
            ${error ? "border-red-500" : "border-gray-300"}`}
        />
        {/* Password toggle button */}
        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          >
            {showPassword ? <EyeOff size={20}/> : <Eye size={20}/>}
          </button>
        )}
      </div>
      {error && <p className="mt-1 text-sm text-red-500 font-inter">{error}</p>}
    </div>
  );
};
