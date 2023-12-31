import icon_submit from "/images/icon_submit.png";
import icon_close from "/images/icon_close.png";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  modalReadLetterState,
  modalSubmitState,
  modalAlertState,
  loginState,
  lettersState
} from "@states//ModalState";
import { useNavigate } from "react-router-dom";

const FinalCheckDelete = () => {
  const [readOpen, setReadOpen] = useRecoilState(modalReadLetterState);
  const setDeleteOpen = useSetRecoilState(modalSubmitState);
  const [alertOpen, setAlertOpen] = useRecoilState(modalAlertState);
  const [login, setLogin] = useRecoilState(loginState);
  const selectedLetter = useRecoilValue(modalReadLetterState);
  const [lettersCount, setLettersCount] = useRecoilState(lettersState);
  const navigate = useNavigate();

  useEffect(() => {
    if (alertOpen.isOpen) {
      setTimeout(() => {
        setAlertOpen({ isOpen: false, message: "" });
      }, 2000);
    }
  }, [alertOpen]);

  const clickDelete = () => {
    fetch(login.url + "/mainpage/message/" + selectedLetter.idx, {
      method: "PATCH",
      headers: {
        Authorization: login.token
      }
    })
    .then(res => res.json())
    .then(data => {
      if (data.status === 401)
      {
        setLogin({ isLogin: false, token: "", url: login.url });
        navigate('/');
      }
      else if (data.status === 400)
      {
        setAlertOpen({isOpen: true, message: "유효하지 않은 편지입니다😢"});
        setReadOpen({isOpen: false, idx: 0});
        navigate('/mainpage');
      }
      setDeleteOpen({ isOpen: false, isSubmit: false });
      setReadOpen({ isOpen: false, idx: 0});
      setAlertOpen({ isOpen: true, message: "삭제가 완료되었어요😉" });
      setLettersCount({count: lettersCount.count - 1});
    })
  };

  return (
    <div className="h-full w-full flex flex-col justify-center items-center text-xs min-[400px]:text-[15px] min-[500px]:text-[17px] min-[600px]:text-[20px]">
      <div className="m-1">삭제 후 복원이 불가능해요🥺</div>
      <div className="m-1">삭제 하시겠어요?</div>
      <div className="flex justify-center">
        <img
          src={icon_submit}
          className="w-[30px] mt-2 mr-3"
          onClick={() => clickDelete()}
          alt="submit button"
        />
        <img
          src={icon_close}
          className="w-[30px] mt-2 ml-3"
          onClick={() => setDeleteOpen(false)}
          alt="close button"
        />
      </div>
    </div>
  );
};

export default FinalCheckDelete;
