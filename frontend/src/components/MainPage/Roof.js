import redRoof from "images/bg_roof_red.png";
import Light from "components/MainPage/Light";

const Roof = () => {
  return (
    <div>
      <img src={redRoof} alt="roof" />
      <Light selectedIdx={2} />
    </div>
  );
};

export default Roof;
