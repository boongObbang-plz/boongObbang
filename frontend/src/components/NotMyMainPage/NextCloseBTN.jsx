import NextButton from "/images/icon_next.png";
import closeImage from "/images/icon_close.png";
import { useSetRecoilState } from "recoil";
import { modalLetterState } from "@states/ModalState";

const CloseButton = () => {
  const setModalOpen = useSetRecoilState(modalLetterState);
  return (
    <div className="w-[100%] flex justify-end">
      <img className="w-[30px] m-2" src={NextButton} alt="next button" />
      <img
        className="w-[30px] m-2"
        src={closeImage}
        onClick={() => setModalOpen(false)}
        alt="close button"
      />
    </div>
  );
};

export default CloseButton;
