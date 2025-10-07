export const Badge = ({ 
  children, 
  variant = 'default',
  size = 'md'
}) => {
  const variants = {
    default: 'bg-gray-200 text-gray-800',
    primary: 'bg-blue-100 text-blue-700',
    success: 'bg-green-100 text-green-700',
    warning: 'bg-yellow-100 text-yellow-700',
    danger: 'bg-red-100 text-red-700',
    info: 'bg-cyan-100 text-cyan-700'
  };

  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base'
  };

  return (
    <span className={`inline-flex items-center font-poppins font-semibold rounded-full ${variants[variant]} ${sizes[size]}`}>
      {children}
    </span>
  );
};