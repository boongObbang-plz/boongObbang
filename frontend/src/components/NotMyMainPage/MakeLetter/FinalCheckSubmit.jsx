import icon_submit from "/images/icon_submit.png";
import icon_close from "/images/icon_close.png";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  modalLetterState,
  writeLetterState,
  modalSubmitState,
  modalAlertState,
  loginState,
  lettersState
} from "@states//ModalState";

const FinalCheckSubmit = () => {
  const setLetterOpen = useSetRecoilState(modalLetterState);
  const [writeLetter, setWriteLetter] = useRecoilState(writeLetterState);
  const setSubmitOpen = useSetRecoilState(modalSubmitState);
  const [alertOpen, setAlertOpen] = useRecoilState(modalAlertState);
  const [login, setLogin] = useRecoilState(loginState);
  const [lettersCount, setLettersCount] = useRecoilState(lettersState);
  const { uuid } = useParams();

  useEffect(() => {
    if (alertOpen.isOpen) {
      setTimeout(() => {
        setAlertOpen({ isOpen: false, message: "" });
      }, 2000);
    }
  }, [alertOpen]);

  const clickSubmit = () => {
    fetch(login.url + "/main/" + uuid, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        to: writeLetter.to,
        message: writeLetter.message,
        made_by: writeLetter.made_by,
        color: writeLetter.color,
     }),
    })
    .then(res => res.json())
    .then(data => {
      setSubmitOpen({ isOpen: false, isSubmit: true });
      setLetterOpen({ isOpen: false, page: 1 });
      setAlertOpen({ isOpen: true, message: "편지가 등록되었어요😉" });
      setWriteLetter({ color: 0, to: "", message: "", from: "" });
      setLettersCount({count: lettersCount.count + 1});
    })
  };

  return (
    <div className="h-full w-full flex flex-col justify-center items-center text-xs min-[400px]:text-[15px] min-[500px]:text-[17px] min-[600px]:text-[20px]">
      <div className="m-1">등록 후 수정 및 삭제가 불가능해요🥺</div>
      <div className="m-1">등록 하시겠어요?</div>
      <div className="flex justify-center">
        <img
          src={icon_submit}
          className="w-[10%] mt-2 mr-3"
          onClick={() => clickSubmit()}
          alt="submit button"
        />
        <img
          src={icon_close}
          className="w-[10%] mt-2 ml-3"
          onClick={() => setSubmitOpen({ isOpen: false, isSubmit: false})}
          alt="close button"
        />
      </div>
    </div>
  );
};

export default FinalCheckSubmit;
