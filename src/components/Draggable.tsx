import Image from 'next/image';
import PencilIcon from '@gravity-ui/icons/svgs/pencil.svg';

interface Text {
  parameter: string;
}

const Draggable: React.FC<Text> = ({ parameter }) => {
  return (
    <>
      <div className="flex min-h-[52px] w-[261px] items-center rounded-[15px] bg-Neutral400 px-3">
        <Image
          className="mr-3 w-[28px] cursor-pointer"
          alt="Ellypsis"
          src="/svgs/ellypsis-vertical.svg"
        />
        <p>{parameter}</p>
        <Image
          className="ml-auto w-[20px] cursor-pointer"
          alt="Edit"
          src={PencilIcon}
        />
      </div>
    </>
  );
};

export default Draggable;
