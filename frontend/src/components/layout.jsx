import FinalCheckDelete from "@components//MainPage/readLetter/FinalCheckDelete";
import LoginNotice from "@components/LoginPage/Notice";
import LetterPop from "@components/MainPage/readLetter/LetterPop";
import FinalCheckSubmit from "@components/NotMyMainPage/MakeLetter/FinalCheckSubmit";
import MakeLetter from "@components/NotMyMainPage/MakeLetter/MakeLetter";
import Notice from "@components/NotMyMainPage/Notice";
import FinalCheckDeleteId from "@components/SettingPage/FinalCheckDeleteId";
import FinalCheckLogout from "@components/SettingPage/FinalCheckLogout";
import {
  modalAlertState,
  modalHelperState,
  modalLetterState,
  modalLoginHelperState,
  modalReadLetterState,
  modalSubmitState,
  writeLetterState,
} from "@states//ModalState";
import Modal from "react-modal";
import { Outlet } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";

const Layout = () => {
  const [letterOpen, setLetterOpen] = useRecoilState(modalLetterState);
  const setWriteLetter = useSetRecoilState(writeLetterState);
  const [submitOpen, setSubmitOpen] = useRecoilState(modalSubmitState);
  const [helperOpen, setHelperOpen] = useRecoilState(modalHelperState);
  const [readOpen, setReadOpen] = useRecoilState(modalReadLetterState);
  const [alertOpen, setAlertOpen] = useRecoilState(modalAlertState);
  const [loginHelperOpen, setLoginHelperOpen] = useRecoilState(
    modalLoginHelperState,
  );

  Modal.defaultStyles.overlay.backgroundColor = "transparent";
  Modal.defaultStyles.content.maxWidth = "650px";
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

  //todo: 최대 크기 이후 모달창 크기 조절
  const letterStyled = {
    content: {
      width: "80%",
      height: "80%",
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
    setWriteLetter({ color: 0, to: "", message: "", made_by: "" });
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
        isOpen={readOpen.isOpen}
        onRequestClose={() => setReadOpen({ isOpen: false, idx: 0 })}
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
        {submitOpen.isSubmit === 3 ? (
          <FinalCheckDeleteId />
        ) : submitOpen.isSubmit === 2 ? (
          <FinalCheckLogout />
        ) : submitOpen.isSubmit === 1 ? (
          <FinalCheckSubmit />
        ) : (
          <FinalCheckDelete />
        )}
      </Modal>
      {/* 알림창 */}
      <Modal
        className="fixed bottom-[50%] flex h-[10%] w-full animate-fade-out justify-center outline-none"
        isOpen={alertOpen.isOpen}
        onRequestClose={() => setAlertOpen({ isOpen: false, message: "" })}
        ariaHideApp={false}
      >
        <div className="flex w-[80%] items-center justify-center break-keep rounded-[5px] bg-[#FFFFFF] px-[8%] text-center text-xs leading-8 min-[400px]:text-[15px] min-[500px]:text-[17px] min-[600px]:text-[20px] min-[733px]:w-[650px]">
          {alertOpen.message}
        </div>
      </Modal>
    </>
  );
};

export default Layout;
