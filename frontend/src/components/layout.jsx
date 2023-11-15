import { useRecoilState, useSetRecoilState } from "recoil";
import Modal from "react-modal";
import { Outlet } from "react-router-dom";
import { modalHelperState, modalLetterState, writeLetterState, modalSubmitState } from "@states//ModalState";
import MakeLetter from "@components/NotMyMainPage/MakeLetter/MakeLetter";
import FinalCheckSubmit from "@components/NotMyMainPage/MakeLetter/FinalCheckSubmit";
import Notice from "@components/NotMyMainPage/Notice";

const Layout = () => {
  const [letterOpen, setLetterOpen] = useRecoilState(modalLetterState);
  const setWriteLetter = useSetRecoilState(writeLetterState);
  const [submitOpen, setSubmitOpen] = useRecoilState(modalSubmitState);
  const [helperOpen, setHelperOpen] = useRecoilState(modalHelperState);

  const closeMakeLetter = () => {
    setLetterOpen({ isOpen: false, page: 1 });
    setWriteLetter({ color: 0, to: "", message: "", from: "" });
  }

  return (
    <>
      <Outlet />
      {/* 편지쓰기 */}
      <Modal 
        style={{
          content: {
            width: "351px",
            height: "560px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "10px",
            paddingTop: "10px",
            paddingBottom: "10px",
          },
        }}
        isOpen={letterOpen.isOpen}
        onRequestClose={() => closeMakeLetter()}>
        <MakeLetter />
      </Modal>
      {/* 편지제출 확인 팝업 */}
      <Modal
        style={{
          content: {
            width: "320px",
            height: "110px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "10px",
            padding: "10px",
          },
        }}
        isOpen={submitOpen}
        onRequestClose={() => setSubmitOpen(false)}>
        <FinalCheckSubmit />
      </Modal>
      {/* 도움말 */}
      <Modal isOpen={helperOpen} onRequestClose={() => setHelperOpen(false)}>
        <Notice />
      </Modal>
    </>
  );
};

export default Layout;
