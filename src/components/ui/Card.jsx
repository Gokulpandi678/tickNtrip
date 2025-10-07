export const Card = ({ 
  children, 
  variant = 'default',
  hover = false,
  onClick,
  className = '' 
}) => {
  const variants = {
    default: 'bg-white border border-gray-200',
    elevated: 'bg-white shadow-lg',
    outlined: 'bg-white border-2 border-blue-500',
    gradient: 'bg-gradient-to-br from-blue-50 to-purple-50 border border-gray-200'
  };

  const hoverClass = hover ? 'hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer' : '';

  return (
    <div 
      onClick={onClick}
      className={`rounded-xl p-6 ${variants[variant]} ${hoverClass} ${className}`}
    >
      {children}
    </div>
  );
};