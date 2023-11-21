import beforeButton from "/images/icon_before.png";
import submitButton from "/images/icon_submit.png";
import closeImage from "/images/icon_close.png";
import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  modalLetterState,
  writeLetterState,
  modalSubmitState,
  modalAlertState,
} from "@states/ModalState";

const Top = () => {
  const setLetterOpen = useSetRecoilState(modalLetterState);
  const [writeLetter, setWriteLetter] = useRecoilState(writeLetterState);
  const setSubmitOpen = useSetRecoilState(modalSubmitState);
  const [alertOpen, setAlertOpen] = useRecoilState(modalAlertState);

  useEffect(() => {
    if (alertOpen.isOpen) {
      setTimeout(() => {
        setAlertOpen({ isOpen: false, message: "" });
      }, 2000);
    }
  }, [alertOpen]);

  const closeMakeLetter = () => {
    setLetterOpen({ isOpen: false, page: 1 });
    setWriteLetter({ color: 0, to: "", message: "", from: "" });
  };

  const clickSubmit = () => {
    if (writeLetter.to === "") {
      setAlertOpen({ isOpen: true, message: "To를 입력해주세요😉" });
      return;
    }
    if (writeLetter.message === "") {
      setAlertOpen({ isOpen: true, message: "편지의 내용을 입력해주세요😉" });
      return;
    }
    if (writeLetter.from === "") {
      setAlertOpen({ isOpen: true, message: "Made by를 입력해주세요😉" });
      return;
    }
    setSubmitOpen({ isOpen: true, isSubmit: 1 });
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
          onClick={() => clickSubmit()}
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
