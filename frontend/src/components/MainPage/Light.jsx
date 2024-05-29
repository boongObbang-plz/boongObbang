import LightBulbs from "@components/MainPage/LightBulbs";

const Light = ({ selectedIdx }) => {
  return (
    <div className="relative bottom-[30vw] right-1 mx-auto min-[650px]:bottom-[160px]">
      <div className="absolute h-6 w-[102%] -rotate-12 rounded-[80%] shadow-light">
        <LightBulbs selectedIdx={selectedIdx} secondLine={false} />
      </div>
      <div className="absolute h-6 w-[102%] rotate-12 rounded-[80%] shadow-light">
        <LightBulbs selectedIdx={selectedIdx} secondLine={true} />
      </div>
    </div>
  );
};

export default Light;
