import Roof from "@components/MainPage/Roof";
import Title from "@components/MainPage/Title";
import Grill from "@components/MainPage/Grill";

const Top = ({ title, roof, light }) => {
  return (
    <div className="flex w-full flex-col justify-center items-center">
      <Roof roof={roof} light={light} />
      <Title title={title} />
      <Grill />
    </div>
  );
};

export default Top;
