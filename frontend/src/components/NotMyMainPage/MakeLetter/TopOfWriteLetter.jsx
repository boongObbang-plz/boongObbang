import beforeButton from "/images/icon_before.png";
import submitButton from "/images/icon_submit.png";
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
      <div className="flex items-center text-xl ml-2">편지 작성하기</div>
      <div className="flex justify-end">
        <img 
        className="w-[30px] m-2"
        src={beforeButton}
        onClick={() => setLetterOpen({ isOpen: true, page: 1 })}
        alt="before button" 
        />
        <img 
        className="w-[30px] m-2"
        src={submitButton}
        onClick={() => console.log("hi")}
        alt="submit button" 
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
