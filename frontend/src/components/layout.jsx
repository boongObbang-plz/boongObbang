import { useRecoilState, useSetRecoilState } from "recoil";
import Modal from "react-modal";
import { Outlet } from "react-router-dom";
import {
  modalHelperState,
  modalLetterState,
  writeLetterState,
  modalSubmitState,
  modalAlertState,
  modalReadLetterState,
  modalLoginHelperState,
} from "@states//ModalState";
import MakeLetter from "@components/NotMyMainPage/MakeLetter/MakeLetter";
import FinalCheckSubmit from "@components/NotMyMainPage/MakeLetter/FinalCheckSubmit";
import Notice from "@components/NotMyMainPage/Notice";
import LetterPop from "@components/MainPage/readLetter/LetterPop";
import LoginNotice from "@components/LoginPage/Notice";
import FinalCheckDelete from "./MainPage/readLetter/FinalCheckDelete";

const Layout = () => {
  const [letterOpen, setLetterOpen] = useRecoilState(modalLetterState);
  const setWriteLetter = useSetRecoilState(writeLetterState);
  const [submitOpen, setSubmitOpen] = useRecoilState(modalSubmitState);
  const [helperOpen, setHelperOpen] = useRecoilState(modalHelperState);
  const [readOpen, setReadOpen] = useRecoilState(modalReadLetterState);
  const [alertOpen, setAlertOpen] = useRecoilState(modalAlertState);
  const [loginHelperOpen, setLoginHelperOpen] = useRecoilState(
    modalLoginHelperState
  );

  Modal.defaultStyles.overlay.backgroundColor = "transparent";

  const helperStyled = {
    content: {
      width: "80%",
      height: "80%",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "10px",
      paddingTop: "10px",
      paddingBottom: "10px",

    },
  };

  const letterStyled = {
    content: {
      width: "80%",
      height: "fit-content",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "10px",
      paddingTop: "10px",
      paddingBottom: "20px",
    },
  };

  const finalCheckStyled = {
    content: {
      width: "70%",
      height: "15%",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "10px",
      padding: "10px",
    },
  };

  const closeMakeLetter = () => {
    setLetterOpen({ isOpen: false, page: 1 });
    setWriteLetter({ color: 0, to: "", message: "", from: "" });
  };

  return (
    <>
      <Outlet />
      {/* 편지쓰기 */}
      <Modal
        style={letterStyled}
        isOpen={letterOpen.isOpen}
        onRequestClose={() => closeMakeLetter()}
        ariaHideApp={false}
      >
        <MakeLetter />
      </Modal>
      {/* 남의 메인 페이지 도움말 */}
      <Modal 
        style={helperStyled}
        isOpen={helperOpen}
        onRequestClose={() => setHelperOpen(false)}
        ariaHideApp={false}
      >
        <Notice />
      </Modal>
      {/* 로그인 도움말 */}
      <Modal
        style={helperStyled}
        isOpen={loginHelperOpen}
        onRequestClose={() => setLoginHelperOpen(false)}
        ariaHideApp={false}
      >
        <LoginNotice />
      </Modal>
      {/* 편지 읽기 */}
      <Modal
        style={letterStyled}
        isOpen={readOpen}
        onRequestClose={() => setReadOpen(false)}
        ariaHideApp={false}
      >
        <LetterPop />
      </Modal>
      {/* 편지제출/편지삭제 확인 팝업 */}
      <Modal
        style={finalCheckStyled}
        isOpen={submitOpen.isOpen}
        onRequestClose={() => setSubmitOpen({ isOpen: false, isSubmit: true })}
        ariaHideApp={false}
      >
        {submitOpen.isSubmit === true ? (
          <FinalCheckSubmit />
        ) : (
          <FinalCheckDelete />
        )}
      </Modal>
      {/* 알림창 */}
      <Modal
        className="w-full h-[10%] flex justify-center fixed bottom-[50%] animate-fade-out outline-none"
        isOpen={alertOpen.isOpen}
        onRequestClose={() => setAlertOpen({ isOpen: false, message: "" })}
        ariaHideApp={false}
      >
        <div className="w-[80%] bg-[#FFFFFF] rounded-[5px] flex justify-center items-center text-xs min-[400px]:text-[15px] min-[500px]:text-[17px] min-[600px]:text-[20px]">
          {alertOpen.message}
        </div>
      </Modal>
    </>
  );
};

export default Layout;
