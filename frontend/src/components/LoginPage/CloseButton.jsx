import { modalHelperState } from "@states//ModalState";
import closeImage from "/images/icon_close.png";
import { useSetRecoilState } from "recoil";

const CloseButton = () => {
  const setHelperOpen = useSetRecoilState(modalHelperState);

  return (
    <div className="w-[100%] flex justify-end">
      <button className="w-[30px]" onClick={() => setHelperOpen(false)}>
        <img src={closeImage} alt="close" />
      </button>
    </div>
  );
};

export default CloseButton;
