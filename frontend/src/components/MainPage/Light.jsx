import LightBulbs from "@components/MainPage/LightBulbs";

const Light = ({ selectedIdx }) => {
  return (
    <div className="relative bottom-[30vw] right-1 ">
      <div className="w-[102%] h-5 rounded-[80%] -rotate-12 shadow-light">
        <LightBulbs selectedIdx={selectedIdx} secondLine={false} />
      </div> 
      <div className="relative bottom-[20px] w-[102%] h-5 rounded-[80%] rotate-12 shadow-light">
        <LightBulbs selectedIdx={selectedIdx} secondLine={true} />
      </div>
    </div>
  );
};

export default Light;
