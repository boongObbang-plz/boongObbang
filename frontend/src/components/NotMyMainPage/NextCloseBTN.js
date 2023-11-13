import NextButton from "images/icon_next.png";
import closeImage from "images/icon_close.png";
import { useSetRecoilState } from "recoil";
import { modalLetterState } from "state/ModalState";

const CloseButton = () => {
  const setModalOpen = useSetRecoilState(modalLetterState);
  return (
    <div className="w-full flex justify-between">
      <div className="flex items-center text-xl ml-2">붕어빵 고르기</div>
      <div className="flex justify-end">
        <img className="w-[30px] m-2" src={NextButton} alt="next button" />
        <img
          className="w-[30px] m-2"
          src={closeImage}
          onClick={() => setModalOpen(false)}
          alt="close button"
        />
      </div>
    </div>
  );
};

export default CloseButton;
