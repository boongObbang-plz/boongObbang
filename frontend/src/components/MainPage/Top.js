import Roof from "components/MainPage/Roof";
import Title from "components/MainPage/Title";
import Grill from "components/MainPage/Grill";

const Top = ({ title, roof, light }) => {
  return (
    <>
      <Roof roof={roof} light={light}/>
      <Title title={title}/>
      <Grill />
    </>
  );
};

export default Top;
