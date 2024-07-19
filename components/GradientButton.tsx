"use client";

interface ButtonProps {
  text: number | string;
  isActive?: boolean;
  onClick?: () => void;
  size: "step" | "buat situs";
}

const GradientButton: React.FC<ButtonProps> = ({
  text,
  isActive,
  onClick,
  size,
}) => {
  const getSizeClasses = (size: ButtonProps["size"]) => {
    switch (size) {
      case "step":
        return "h-10 w-10 md:h-14 md:w-14 rounded-xl";
      case "buat situs":
        return "h-12 w-12 md:h-16 md:w-44 rounded-full";
      default:
        return "h-10 w-10 md:h-14 md:w-14";
    }
  };

  const getInnerSizeClasses = (size: ButtonProps["size"]) => {
    switch (size) {
      case "step":
        return "h-8 w-8 md:h-12 md:w-12 rounded-xl";
      case "buat situs":
        return "h-10 w-10 md:h-14 md:w-40 rounded-full";
      default:
        return "h-8 w-8 md:h-12 md:w-12";
    }
  };

  const buttonSizeClasses = getSizeClasses(size);
  const innerSizeClasses = getInnerSizeClasses(size);

  return (
    <>
      <button
        onClick={onClick}
        className={`${buttonSizeClasses} mx-2 rounded-2xl transition ${isActive ? "bg-gradient-to-r from-PurpleBlue to-NeonGreen" : "bg-gray-200"}`}
      >
        <div
          className={`m-auto flex ${innerSizeClasses} items-center justify-center  transition duration-300 ${isActive ? "bg-Black900" : ""}`}
        >
          <p
            className={`text-md font-bold transition md:text-lg ${isActive ? "text-white" : "text-black"}`}
          >
            {text}
          </p>
        </div>
      </button>
    </>
  );
};

export default GradientButton;
