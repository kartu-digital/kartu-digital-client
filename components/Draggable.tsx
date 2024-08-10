import Image from "next/image";
import Ellypsis from "@/public/svgs/ellypsis-vertical.svg";
import Edit from "@/public/svgs/edit.svg"

interface Text {
  parameter: string;
}

const Draggable: React.FC<Text> = ({ parameter }) => {
  return (
    <>
      <div className="bg-Neutral400 w-[261px] h-[52px] rounded-[15px] flex items-center px-3">
        <Image
          className="w-[28px] cursor-pointer mr-3"
          alt="Ellypsis"
          src={Ellypsis}
        />
        <p>{parameter}</p>
        <Image
          className="w-[28px] cursor-pointer ml-auto"
          alt="Edit"
          src={Edit}
        />
      </div>
    </>
  );
};

export default Draggable;
