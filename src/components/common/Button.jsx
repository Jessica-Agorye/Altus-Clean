const Button = ({ children, className = "", type = "button" }) => {
  return (
    <button
      type={type}
      className={`
        bg-teal-700
        hover:bg-teal-800
        text-white
        px-6
        py-3
        rounded-lg
        font-medium
        transition-all
        duration-300
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
