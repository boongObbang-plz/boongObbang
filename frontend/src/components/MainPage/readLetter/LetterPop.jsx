import LetterPopButtons from "@components/MainPage/readLetter/LetterPopButtons";
import LetterPopLabel from "@components/MainPage/readLetter/LetterPopLabel";
import LetterPopTextArea from "@components/MainPage/readLetter/LetterPopTextArea";
import { useEffect, useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { loginState, modalReadLetterState, modalAlertState } from "@states//ModalState";
import { useNavigate } from "react-router-dom";

const LetterPop = () => {
  const [login, setLogin] = useRecoilState(loginState);
  const selectedLetter = useRecoilValue(modalReadLetterState);
  const [getData, setGetData] = useState({to: "", message: "", made_by: ""});
  const [ alertOpen, setAlertOpen ] = useRecoilState(modalAlertState);
  const [setModalOpen] = useRecoilState(modalReadLetterState)
  const navigate = useNavigate();

  useEffect(() => {
    if (alertOpen.isOpen) {
        setTimeout(() => {
            setAlertOpen({isOpen: false, message: ""});
        }, 2000);
    }
  }, [alertOpen]);

  useEffect(() => {
    fetch(login.url + "/mainpage/message/" + selectedLetter.idx, {
      method: "GET",
      headers: {
        Authorization: login.token
      },
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
        setModalOpen({isOpen: false, idx: 0});
        navigate('/mainpage');
      }
      setGetData(data.data);
    })
  }, [])

  return (
    <div className="w-full h-full flex flex-col justify-center">
      <LetterPopButtons />
      <LetterPopLabel label={"To"} text={"aaa"} />
      <LetterPopTextArea text={getData.message} />
      <LetterPopLabel label={"Made by"} text={"aaa"} />
    </div>
  );
};

export default LetterPop;
