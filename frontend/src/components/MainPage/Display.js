import React, { useEffect, useState } from "react";
import board from "images/bg_board.png";
import right from "images/icon_right.png";
import left from "images/icon_left.png";
import Letters from "components/MainPage/Letters";

const Display = ({ messages }) => {

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
    <>
    <div className="relative -mt-1">
      <Letters messages={messages.slice(start, end)}/>
      {(totalPages > 1 && currentPage !== 1) ? <img onClick={() => setCurrentPage(currentPage - 1)} className="absolute top-[100px] w-[20%]" src={left} alt="left arrow"/> : null }
      {(totalPages > 1 && currentPage !== totalPages) ? <img onClick={() => setCurrentPage(currentPage + 1)} className="absolute top-[100px] right-[0px] w-[39px]" src={right} alt="right arrow"/> : null }
      <img className="border-t-4 border-black" src={board} alt="display" />
    </div>
    </>
  );
};

export default Display;
