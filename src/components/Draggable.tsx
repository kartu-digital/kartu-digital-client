import Image from "next/image";
import PencilIcon from '@gravity-ui/icons/svgs/pencil.svg';

interface Text {
  parameter: string;
}

const Draggable: React.FC<Text> = ({ parameter }) => {
  return (
    <>
      <div className="bg-Neutral400 w-[261px] min-h-[52px] rounded-[15px] flex items-center px-3">
        <p>{parameter}</p>
        <Image
          className="w-[20px] cursor-pointer ml-auto"
          alt="Edit"
          width={100}
          height={100}
          src={PencilIcon}
        />
      </div>
    </>
  );
};

export default Draggable;
