import NextButton from "/images/icon_next.png";
import closeImage from "/images/icon_close.png";
import { useRecoilState } from "recoil";
import { modalLetterState, writeLetterState } from "@states/ModalState";

const Top = () => {
  const [ letterOpen, setLetterOpen ] = useRecoilState(modalLetterState);
  const [ writeLetter, setWriteLetter ] = useRecoilState(writeLetterState);

  const closeMakeLetter = () => {
    setLetterOpen({ isOpen: false, page: 1 });
    setWriteLetter({ color: 0, to: "", message: "", made_by: "" });
  };

  return (
    <div className="w-full flex justify-between">
      <div className="w-full flex items-center text-lg ml-2 min-[400px]:text-[22px] min-[500px]:text-[25px] min-[600px]:text-[28px]">붕어빵 고르기</div>
      <div className="w-full flex justify-end">
        <img 
        className="w-[20%] m-2"
        src={NextButton}
        onClick={() => setLetterOpen({ isOpen: true, page: 2 })}
        alt="next button" 
        />
        <img
        className="w-[20%] m-2"
        src={closeImage}
        onClick={() => closeMakeLetter()}
        alt="close button"
        />
      </div>
    </div>
  );
};

export default Top;
