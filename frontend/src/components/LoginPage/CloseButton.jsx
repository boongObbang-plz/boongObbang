import { modalLoginHelperState, modalHelperState } from "@states//ModalState";
import closeImage from "/images/icon_close.png";
import { useSetRecoilState } from "recoil";

const CloseButton = () => {
  const setHelperOpen = useSetRecoilState(modalHelperState);
  const setLoginHelperOpen = useSetRecoilState(modalLoginHelperState);

  const onClickCloseButton = () => {
    setHelperOpen(false);
    setLoginHelperOpen(false);
  }

  return (
    <div className="w-full flex justify-end">
      <button className="w-[30px]" onClick={onClickCloseButton}>
        <img src={closeImage} alt="close" />
      </button>
    </div>
  );
};

export default CloseButton;
