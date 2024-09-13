import Draggable from './Draggable';

//start {Page editor (russel)}
export default function PageEditor() {
  return (
    <>
      <div
        style={{
          boxShadow: '0px 5px 50px -25px #00000040',
        }}
        className="absolute left-[40px] top-[244px] max-h-[322px] w-[310px] rounded-[15px] border-[2px] border-Neutral500 bg-Neutral300 px-[20px] pb-[24px]"
      >
        <div className="flex h-[68px] w-full items-center">
          <p className="text-[16px] font-bold">Halaman</p>
        </div>
        <div className="flex max-h-[250px] flex-col gap-5 overflow-scroll">
          <Draggable parameter="Cover Depan" />
          <Draggable parameter="Halaman 2" />
          <Draggable parameter="Halaman 3" />
          <Draggable parameter="Halaman 4" />
          <Draggable parameter="Halaman 5" />
          <Draggable parameter="Halaman 6" />
        </div>
      </div>
    </>
  );
}
//end {Page Editor}
