import { useRecoilState } from "recoil";
import Modal from "react-modal";
import { Outlet } from "react-router-dom";
import { modalHelperState, modalLetterState } from "@states//ModalState";
import MakeLetter from "@components/NotMyMainPage/MakeLetter";
import Notice from "@components/NotMyMainPage/Notice";

const Layout = () => {
  const [letterOpen, setLetterOpen] = useRecoilState(modalLetterState);
  const [helperOpen, setHelperOpen] = useRecoilState(modalHelperState);
  return (
    <>
      <Outlet />
      {/* 편지쓰기 */}
      <Modal isOpen={letterOpen} onRequestClose={() => setLetterOpen(false)}>
        <MakeLetter />
      </Modal>
      {/* 도움말 */}
      <Modal isOpen={helperOpen} onRequestClose={() => setHelperOpen(false)}>
        <Notice />
      </Modal>
    </>
  );
};

export default Layout;
