import Image from "next/image";
import Star from "@/public/svgs/pill1.svg";
import Cursor from "@/public/svgs/pill2.svg";
import Paper from "@/public/svgs/pill3.svg";
import Profile from "@/public/svgs/pill4.svg";
import Globe from "@/public/svgs/pill5.svg";
import StarActive from "@/public/svgs/pill1Active.svg";
import CursorActive from "@/public/svgs/pill2Active.svg";
import PaperActive from "@/public/svgs/pill3Active.svg";
import ProfileActive from "@/public/svgs/pill4Active.svg";
import GlobeActive from "@/public/svgs/pill5Active.svg";

interface ButtonProps {
  logo?: string;
  text?: string;
  isActive?: boolean;
  onClick?: () => void;
}

const PillButton: React.FC<ButtonProps> = ({
  text,
  logo,
  isActive,
  onClick,
}) => {
  // Determine which SVG to use based on isActive
  const getSVG = () => {
    switch (logo) {
      case "Star":
        return isActive ? StarActive : Star;
      case "Cursor":
        return isActive ? CursorActive : Cursor;
      case "Paper":
        return isActive ? PaperActive : Paper;
      case "Profile":
        return isActive ? ProfileActive : Profile;
      case "Globe":
        return isActive ? GlobeActive : Globe;
      default:
        return null;
    }
  };

  return (
    <div className="relative hover:opacity-70">
      <button
        onClick={onClick}
        className={`h-full w-24 transition-all duration-300 ${isActive ? "text-PurpleBlue" : ""}`}
      >
        {/* Render the Image component with the determined SVG */}
        {getSVG() && <Image alt="" src={getSVG()} className="mx-auto mb-2" />}
        <p className={`text-[10px] ${isActive ? "font-semibold" : ""}`}>
          {text}
        </p>
        <div
          className={`bg-PurpleBlue absolute -bottom-1 left-1/2 h-2 w-14 -translate-x-1/2 rounded-xl transition-all duration-300 ${
            isActive ? "opacity-1" : "opacity-0"
          }`}
        ></div>
      </button>
    </div>
  );
};

export default PillButton;
