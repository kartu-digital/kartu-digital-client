import Image from "next/image";
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
                return isActive ? "/svgs/pill1Active.svg" : "/svgs/pill1.svg";
            case "Cursor":
                return isActive ? "/svgs/pill2Active.svg" : "/svgs/pill2.svg";
            case "Paper":
                return isActive ? "/svgs/pill3.svg" : "/svgs/pill2.svg";
            case "Profile":
                return isActive ? "/svgs/pill4Active.svg" : "/svgs/pill4.svg";
            case "Globe":
                return isActive ? "/svgs/pill5Active.svg" : "/svgs/pill5.svg";
            default:
                return "";
        }
    };

    return (
        <div className="relative hover:opacity-70">
            <button
                onClick={onClick}
                className={`h-full w-24 transition-all duration-300 ${isActive ? "text-PurpleBlue" : ""}`}
            >
                {/* Render the Image component with the determined SVG */}
                {getSVG() && (
                    <Image alt="" src={getSVG()} className="mx-auto mb-2" />
                )}
                <p className={`text-[10px] ${isActive ? "font-semibold" : ""}`}>
                    {text}
                </p>
                <div
                    className={`absolute -bottom-1 left-1/2 h-2 w-14 -translate-x-1/2 rounded-xl bg-PurpleBlue transition-all duration-300 ${
                        isActive ? "opacity-1" : "opacity-0"
                    }`}
                ></div>
            </button>
        </div>
    );
};

export default PillButton;
