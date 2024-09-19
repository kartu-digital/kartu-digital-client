import Image from "next/image";
import Ellypsis from "@/public/svgs/ellypsis-vertical.svg";
import PencilIcon from '@gravity-ui/icons/svgs/pencil.svg';

interface Text {
  parameter: string;
}

const Draggable: React.FC<Text> = ({ parameter }) => {
  return (
    <>
      <div className="bg-Neutral400 w-[261px] min-h-[52px] rounded-[15px] flex items-center px-3">
        <Image
          className="w-[28px] cursor-pointer mr-3"
          alt="Ellypsis"
          src="/svgs/ellypsis-vertical.svg"
        />
        <p>{parameter}</p>
        <Image
          className="w-[20px] cursor-pointer ml-auto"
          alt="Edit"
          src={PencilIcon}
        />
      </div>
    </>
  );
};

export default Draggable;
