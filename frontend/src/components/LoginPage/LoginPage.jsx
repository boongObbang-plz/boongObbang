import Board from "@components/LoginPage/Board";
import Bottom from "@components/LoginPage/Bottom";
import Notice from "@components/LoginPage/Notice";
import NoticeButton from "@components/LoginPage/NoticeButton";
import Roof from "@components/LoginPage/Roof";
import Title from "@components/LoginPage/Title";
import Grill from "@components/MainPage/Grill";
import { useState } from "react";
import Modal from "react-modal";

const LoginPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="w-[393px] h-[1060px] flex flex-col items-center">
      <Roof />
      <NoticeButton />
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <Notice setModalIsOpen={setModalIsOpen} />
      </Modal>
      <Title />
      <Grill />
      <Board />
      <Bottom />
    </div>
  );
};

export default LoginPage;
