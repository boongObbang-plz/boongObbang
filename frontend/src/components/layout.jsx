import { useRecoilState } from "recoil";
import Modal from "react-modal";
import { Outlet } from "react-router-dom";
import { modalHelperState, modalLetterState, modalNoticeState, modalReadLetterState, modalShareState } from "@states//ModalState";
import MakeLetter from "@components/NotMyMainPage/MakeLetter";
import Notice from "@components/NotMyMainPage/Notice";
import LetterPop from "@components/MainPage/LetterPop";
import LoginNotice from "@components/LoginPage/Notice";

const Layout = () => {
  const [letterOpen, setLetterOpen] = useRecoilState(modalLetterState);
  const [helperOpen, setHelperOpen] = useRecoilState(modalHelperState);
  const [noticeOpen, setNoticeOpen] = useRecoilState(modalNoticeState);
  const [readOpen, setReadOpen] = useRecoilState(modalReadLetterState);
  const [shareOpen, setShareOpen] = useRecoilState(modalShareState);

  Modal.defaultStyles.overlay.backgroundColor = "transparent"

  const customStyled = {
    content: {
      width: "351px",
      height: "570px",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "10px",
    },
  };

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
      {/* 공지사항 */}
      <Modal 
      style={customStyled}
      isOpen={noticeOpen} onRequestClose={() => setNoticeOpen(false)}
      >
        <LoginNotice />
      </Modal>
      {/* 편지 읽기 */}
      <Modal 
      style={customStyled}
      isOpen={readOpen} onRequestClose={() => setReadOpen(false)}
      >
        <LetterPop />
      </Modal>
      {/* 공유 */}
      <Modal className="w-[100%] h-[10%] flex justify-center fixed bottom-10 animate-fade-out" 
      isOpen={shareOpen} onRequestClose={() => setShareOpen(false)}
      >
        <div className="w-[80%] bg-[#FFFFFF] rounded-[5px] flex justify-center items-center">{"공유링크 복사!!"}</div>
      </Modal>
    </>
  );
};

export default Layout;
