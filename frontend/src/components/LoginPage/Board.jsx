import board from "/images/bg_board.png";

const Board = () => {
  return (
    <div>
      <img className="border-t-4 border-black w-full" src={board} alt="board"/>
    </div>
  );
};

export default Board;
