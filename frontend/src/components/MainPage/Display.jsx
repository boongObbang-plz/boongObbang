import { useEffect, useState } from "react";
import board from "/images/bg_board.png";
import right from "/images/icon_right.png";
import left from "/images/icon_left.png";
import Letters from "@components/MainPage/Letters";

const Display = ({ messages, dday }) => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(messages.length / 9);

  useEffect(() => {
    setStart((currentPage - 1) * 9);
    setEnd(currentPage * 9);
  }, [currentPage]);
  // TODO:scroll 부드럽게 넘기기 적용
  return (
    <div className="flex w-full">
      <div className="relative -mt-1 w-full">
        <Letters messages={messages.slice(start, end)} dday={dday} />
        {totalPages > 1 && currentPage !== 1 ? (
          <img
            onClick={() => setCurrentPage(currentPage - 1)}
            className="absolute top-[35%] w-[10%]"
            src={left}
            alt="left arrow"
          />
        ) : null}
        {totalPages > 1 && currentPage !== totalPages ? (
          <img
            onClick={() => setCurrentPage(currentPage + 1)}
            className="absolute top-[35%] right-[0px] w-[10%]"
            src={right}
            alt="right arrow"
          />
        ) : null}
        <img className="border-t-4 border-black w-full pointer-events-none" src={board} alt="display" />
      </div>
    </div>
  );
};

export default Display;
