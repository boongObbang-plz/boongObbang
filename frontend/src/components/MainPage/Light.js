import LightBulbs from "components/MainPage/LightBulbs";

const Light = ({ selectedIdx }) => {
  return (
    <>
      <div className="relative top-[-180px] left-[-5px] w-[102%] h-5 rounded-[80%] -rotate-12 shadow-light">
        <LightBulbs selectedIdx={selectedIdx} secondLine={false} />
      </div>
      <div className="relative top-[-200px] left-[-5px] w-[102%] h-5 rounded-[80%] rotate-12 shadow-light">
        <LightBulbs selectedIdx={selectedIdx} secondLine={true} />
      </div>
    </>
  );
};

export default Light;
