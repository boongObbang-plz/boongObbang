import Light from "@components/MainPage/Light";
import blueRoof from "/images/bg_roof_blue.png";
import greenRoof from "/images/bg_roof_green.png";
import orangeRoof from "/images/bg_roof_orange.png";
import redRoof from "/images/bg_roof_red.png";

const Roof = ({ roof, light }) => {
  const roofs = [redRoof, orangeRoof, greenRoof, blueRoof];

  return (
    <div className="pointer-events-none h-full w-full">
      <img src={roofs[roof]} className="h-full w-full" alt="roof" />
      <Light selectedIdx={light} />
    </div>
  );
};

export default Roof;
