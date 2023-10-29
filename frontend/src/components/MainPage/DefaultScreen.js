import Top from "components/MainPage/Top";
import Display from "components/MainPage/Display";
import Bottom from "components/MainPage/Bottom";

const DefaultScreen = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Top />
      <Display />
      <Bottom />
    </div>
  );
};

export default DefaultScreen;
