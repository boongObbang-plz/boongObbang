import NextButton from "/images/icon_next.png";
import closeImage from "/images/icon_close.png";
import { useRecoilState } from "recoil";
import { modalLetterState, writeLetterState } from "@states/ModalState";

const Top = () => {
  const [ letterOpen, setLetterOpen ] = useRecoilState(modalLetterState);
  const [ writeLetter, setWriteLetter ] = useRecoilState(writeLetterState);

  const closeMakeLetter = () => {
    setLetterOpen({ isOpen: false, page: 1 });
    setWriteLetter({ color: 0, to: "", message: "", from: "" });
  };

  return (
    <div className="w-full flex justify-between">
      <div className="flex items-center text-xl ml-2">붕어빵 고르기</div>
      <div className="flex justify-end">
        <img 
        className="w-[30px] m-2"
        src={NextButton}
        onClick={() => setLetterOpen({ isOpen: true, page: 2 })}
        alt="next button" 
        />
        <img
        className="w-[30px] m-2"
        src={closeImage}
        onClick={() => closeMakeLetter()}
        alt="close button"
        />
      </div>
    </div>
  );
};

export default Top;
