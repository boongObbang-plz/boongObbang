import board from "images/bg_board.png";
import Letters from "components/MainPage/Letters";

const Display = () => {
  return (
    <>
    <div className="relative -mt-1">
      <Letters />
      <img className="border-t-4 border-black" src={board} alt="display" />
    </div>
    </>
  );
};

export default Display;
