import LightBulbs from "@components/MainPage/LightBulbs";

const Light = ({ selectedIdx }) => {
  return (
    <div className="relative mx-auto -top-36">
      <div className="absolute w-full h-6 rounded-[80%] -rotate-12 shadow-light">
        <LightBulbs selectedIdx={selectedIdx} secondLine={false} />
      </div> 
      <div className="absolute w-full h-6 rounded-[80%] rotate-12 shadow-light">
        <LightBulbs selectedIdx={selectedIdx} secondLine={true} />
      </div>
    </div>
  );
};

export default Light;
