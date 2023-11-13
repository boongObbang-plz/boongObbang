import { useRecoilState } from "recoil";
import Modal from "react-modal";
import MakeLetter from "components/NotMyMainPage/MakeLetter";
import { Outlet } from "react-router-dom";
import Notice from "components/NotMyMainPage/Notice";
import { modalHelperState, modalLetterState } from "state/ModalState";

const Layout = () => {
  const [letterOpen, setLetterOpen] = useRecoilState(modalLetterState);
  const [helperModal, setHelperOpen] = useRecoilState(modalHelperState);
  return (
    <>
      <Outlet />
      {/* 편지쓰기 */}
      <Modal isOpen={letterOpen} onRequestClose={() => setLetterOpen(false)}>
        <MakeLetter />
      </Modal>
      {/* 도움말 */}
      <Modal isOpen={helperModal} onRequestClose={() => setHelperOpen(false)}>
        <Notice setModalIsOpen={setHelperOpen} />
      </Modal>
    </>
  );
};

export default Layout;
