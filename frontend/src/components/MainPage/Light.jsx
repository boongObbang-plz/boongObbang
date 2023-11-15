import LightBulbs from "@components/MainPage/LightBulbs";

const Light = ({ selectedIdx }) => {
  return (
    <>
      <div className="relative bottom-32 right-1 w-[102%] h-5 rounded-[80%] -rotate-12 shadow-light">
        <LightBulbs selectedIdx={selectedIdx} secondLine={false} />
      </div>
      <div className="relative bottom-36 right- w-[102%] h-5 rounded-[80%] rotate-12 shadow-light">
        <LightBulbs selectedIdx={selectedIdx} secondLine={true} />
      </div>
    </>
  );
};

export default Light;
