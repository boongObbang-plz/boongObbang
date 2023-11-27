import LetterPopButtons from "@components/MainPage/readLetter/LetterPopButtons";
import LetterPopLabel from "@components/MainPage/readLetter/LetterPopLabel";
import LetterPopTextArea from "@components/MainPage/readLetter/LetterPopTextArea";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { loginState, modalReadLetterState } from "@states//ModalState";

const LetterPop = () => {
  const login = useRecoilValue(loginState);
  const selectedLetter = useRecoilValue(modalReadLetterState);
  const [getData, setGetData] = useState({to: "", message: "", made_by: ""});

  useEffect(() => {
    fetch(login.url + "/mainpage/message/" + selectedLetter.idx, {
      method: "GET",
      headers: {
        Authorization: login.token
      },
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data.status === 200)
        setGetData(data.data);
    })
  }, [])

  return (
    <div className="w-full h-[100%] text-[20px] font-bold p-[6%]">
      <LetterPopButtons />
      <LetterPopLabel label={"To"} text={getData.to} />
      <div className="h-[60%]">
        <LetterPopTextArea text={getData.message} />
      </div>
      <LetterPopLabel label={"Made by"} text={getData.made_by} />
    </div>
  );
};

export default LetterPop;
