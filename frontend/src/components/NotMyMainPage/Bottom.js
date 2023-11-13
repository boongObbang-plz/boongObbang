import { useState } from "react";
import Modal from "react-modal";
import NoticeButton from "components/LoginPage/NoticeButton";
import DDay from "components/MainPage/DDay";
import MyPageBTN from "components/NotMyMainPage/MyPageBTN";
import MakeLetterBTN from "components/NotMyMainPage/MakeLetterBTN";

const Bottom = ({ dday }) => {
  return (
    <div className="h-screen w-[100%] border-t-4 border-black bg-bottom-color">
      <NoticeButton className="flex justify-end" />

      <DDay dday={dday} />
      <div className="mt-[20px] flex justify-between">
        <MyPageBTN />
        <MakeLetterBTN />
      </div>
    </div>
  );
};

export default Bottom;
