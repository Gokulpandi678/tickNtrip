import { useEffect, useState } from "react";
import { Info, CircleCheck, OctagonAlert, CircleX, X } from "lucide-react";

export const Alert = ({
  type = "info",
  title,
  message,
  onClose,
  className = "",
  position, // 'top-left', 'top-center', 'top-right'
  timer // e.g., 3000 (ms)
}) => {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(100);

  const types = {
    info: "bg-blue-50 border-blue-500 text-blue-800",
    success: "bg-green-50 border-green-500 text-green-800",
    warning: "bg-yellow-50 border-yellow-500 text-yellow-800",
    error: "bg-red-50 border-red-500 text-red-800",
  };

  const colors = {
    info: "bg-blue-500",
    success: "bg-green-500",
    warning: "bg-yellow-500",
    error: "bg-red-500",
  };

  const icons = {
    info: <Info size={20} />,
    success: <CircleCheck size={20} />,
    warning: <OctagonAlert size={20} />,
    error: <CircleX size={20} />,
  };

  // Handle auto-close timer + progress animation
  useEffect(() => {
    if (timer) {
      const interval = 30;
      const step = 100 / (timer / interval);
      const intervalId = setInterval(() => {
        setProgress((prev) => {
          const next = prev - step;
          if (next <= 0) {
            clearInterval(intervalId);
            setVisible(false);
          }
          return next > 0 ? next : 0;
        });
      }, interval);
      return () => clearInterval(intervalId);
    }
  }, [timer]);

  if (!visible) return null;

  // Determine position classes
  const positionClasses = position
    ? `fixed z-50 ${
        position === "top-right"
          ? "top-4 right-4 animate-slide-right"
          : position === "top-left"
          ? "top-4 left-4 animate-slide-left"
          : "top-4 left-1/2 transform -translate-x-1/2 animate-zoom"
      }`
    : "relative";

  return (
    <div
      className={`${positionClasses} ${types[type]} border-l-4 shadow-md rounded-lg p-4 flex items-start gap-3 w-100 ${className}`}
    >
      {/* Icon */}
      <div className="flex-shrink-0 mt-0.5">{icons[type]}</div>

      {/* Content */}
      <div className="flex-1">
        {title && <h4 className="font-poppins font-bold mb-1">{title}</h4>}
        <p className="font-inter text-sm">{message}</p>

        {/* Progress bar if timer */}
        {timer && (
          <div className="w-full h-1 rounded-full mt-3 overflow-hidden bg-gray-200">
            <div
              className={`${colors[type]} h-1 transition-all duration-75`}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        )}
      </div>

      {/* Close button — only if no timer */}
      {!timer && onClose && (
        <button
          onClick={onClose}
          className="flex-shrink-0 hover:opacity-70 transition-opacity"
        >
          <X size={20} />
        </button>
      )}
    </div>
  );
};
