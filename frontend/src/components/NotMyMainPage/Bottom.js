import { useState } from "react";
import Modal from "react-modal";
import NoticeButton from "components/LoginPage/NoticeButton";
import Notice from "components/NotMyMainPage/Notice";
import DDay from "components/MainPage/DDay";
import MyPageBTN from "components/NotMyMainPage/MyPageBTN";
import MakeLetterBTN from "components/NotMyMainPage/MakeLetterBTN";

const Bottom = ({ dday }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="h-screen w-[100%] border-t-4 border-black bg-bottom-color">
      <NoticeButton
        setModalIsOpen={setModalIsOpen}
        className="flex justify-end"
      />
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <Notice setModalIsOpen={setModalIsOpen} />
      </Modal>
      <DDay dday={dday} />
      <div className="mt-[20px] flex justify-between">
        <MyPageBTN />
        <MakeLetterBTN />
      </div>
    </div>
  );
};

export default Bottom;
