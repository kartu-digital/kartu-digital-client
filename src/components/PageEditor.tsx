import Draggable from "./Draggable";

//start {Page editor (russel)}
export default function PageEditor() {
  return (
    <>
      <div
        style={{
          boxShadow: "0px 5px 50px -25px #00000040",
        }}
        className="absolute top-[244px] left-[40px] bg-Neutral300 w-[310px] max-h-[322px] pb-[24px] border-[2px] border-Neutral500 rounded-[15px] px-[20px]"
      >
        <div className="w-full h-[68px] flex items-center">
          <p className="text-[16px] font-bold">Halaman</p>
        </div>
        <div className="flex flex-col gap-5 max-h-[250px] overflow-scroll">
            <Draggable parameter="Cover Depan"/>
            <Draggable parameter="Halaman 2"/>
            <Draggable parameter="Halaman 3"/>
            <Draggable parameter="Halaman 4"/>
            <Draggable parameter="Halaman 5"/>
            <Draggable parameter="Halaman 6"/>
        </div>
      </div>
    </>
  );
}
//end {Page Editor}
