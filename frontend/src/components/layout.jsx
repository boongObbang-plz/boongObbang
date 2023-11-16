import { useRecoilState, useSetRecoilState } from "recoil";
import Modal from "react-modal";
import { Outlet } from "react-router-dom";
import { modalHelperState, modalLetterState, writeLetterState, modalSubmitState, modalAlertState, modalReadLetterState, modalLoginHelperState } from "@states//ModalState";
import MakeLetter from "@components/NotMyMainPage/MakeLetter/MakeLetter";
import FinalCheckSubmit from "@components/NotMyMainPage/MakeLetter/FinalCheckSubmit";
import Notice from "@components/NotMyMainPage/Notice";
import LetterPop from "@components/MainPage/LetterPop";
import LoginNotice from "@components/LoginPage/Notice";

const Layout = () => {
  const [letterOpen, setLetterOpen] = useRecoilState(modalLetterState);
  const setWriteLetter = useSetRecoilState(writeLetterState);
  const [submitOpen, setSubmitOpen] = useRecoilState(modalSubmitState);
  const [helperOpen, setHelperOpen] = useRecoilState(modalHelperState);
  const [readOpen, setReadOpen] = useRecoilState(modalReadLetterState);
  const [alertOpen, setAlertOpen] = useRecoilState(modalAlertState);
  const [loginHelperOpen, setLoginHelperOpen] = useRecoilState(modalLoginHelperState);

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
      {/* 남의 메인 페이지 도움말 */}
      <Modal isOpen={helperOpen} onRequestClose={() => setHelperOpen(false)}>
        <Notice />
      </Modal>
      {/* 로그인 도움말 */}
      <Modal isOpen={loginHelperOpen} onRequestClose={() => setLoginHelperOpen(false)}>
        <LoginNotice />
      </Modal>
      {/* 편지 읽기 */}
      <Modal 
      style={customStyled}
      isOpen={readOpen} onRequestClose={() => setReadOpen(false)}
      >
        <LetterPop />
      </Modal>
      {/* 알림창 */}
      <Modal
        className="w-[100%] h-[10%] flex justify-center fixed bottom-10 animate-fade-out outline-none" 
        isOpen={alertOpen.isOpen}
        onRequestClose={() => setAlertOpen({ isOpen: false, message: "" })}
      >
        <div className="w-[80%] bg-[#FFFFFF] rounded-[5px] flex justify-center items-center">{alertOpen.message}</div>
      </Modal>
    </>
  );
};

export default Layout;
