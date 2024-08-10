import Image from "next/image";
import Ellypsis from "@/public/svgs/ellypsis-vertical.svg";
import Edit from "@/public/svgs/edit.svg";

interface Text {
    parameter: string;
}

const Draggable: React.FC<Text> = ({ parameter }) => {
    return (
        <>
            <div className="flex h-[52px] w-[261px] items-center rounded-[15px] bg-Neutral400 px-3">
                <Image
                    className="mr-3 w-[28px] cursor-pointer"
                    alt="Ellypsis"
                    src={Ellypsis}
                />
                <p>{parameter}</p>
                <Image
                    className="ml-auto w-[28px] cursor-pointer"
                    alt="Edit"
                    src={Edit}
                />
            </div>
        </>
    );
};

export default Draggable;
