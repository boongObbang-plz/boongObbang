import LightBulbs from "@components/MainPage/LightBulbs";

const Light = ({ selectedIdx }) => {
  return (
    <div className="relative mx-auto bottom-[30vw] right-1 min-[650px]:bottom-[160px]">
      <div className="absolute w-[102%] h-6 rounded-[80%] -rotate-12 shadow-light">
        <LightBulbs selectedIdx={selectedIdx} secondLine={false} />
      </div> 
      <div className="absolute w-[102%] h-6 rounded-[80%] rotate-12 shadow-light">
        <LightBulbs selectedIdx={selectedIdx} secondLine={true} />
      </div>
    </div>
  );
};

export default Light;
