import LightBulbs from "components/MainPage/LightBulbs";

const Light = ({ selectedIdx }) => {
  return (
    <>
      <div className="relative top-[-160px] left-[-10px] w-[110%] h-5 rounded-[80%] -rotate-12 shadow-light">
        <LightBulbs selectedIdx={selectedIdx} secondLine={false} />
      </div>
      <div className="relative top-[-170px] left-[-10px] w-[110%] h-5 rounded-[80%] rotate-12 shadow-light">
        <LightBulbs selectedIdx={selectedIdx} secondLine={true} />
      </div>
    </>
  );
};

export default Light;
