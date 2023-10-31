import board from "images/bg_board.png";

const Display = () => {
  return (
    <div className="-mt-1">
      <img className="border-t-4 border-black" src={board} alt="display" />
    </div>
  );
};

export default Display;
