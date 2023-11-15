import redRoof from "/images/bg_roof_red.png";
import orangeRoof from "/images/bg_roof_orange.png";
import greenRoof from "/images/bg_roof_green.png";
import blueRoof from "/images/bg_roof_blue.png";
import Light from "@components/MainPage/Light";

const Roof = ({ roof, light }) => {
  const roofs = [redRoof, orangeRoof, greenRoof, blueRoof];

  return (
    <div className="relative w-full h-36 overflow-hidden">
      <img src={roofs[roof]} className="absolute top-0 left-0 w-full h-full" alt="roof" />
      <Light selectedIdx={light} />
    </div>
  );
};

export default Roof;
