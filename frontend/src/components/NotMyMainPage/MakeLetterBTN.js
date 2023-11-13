import makeLetter from "images/btn_makeLetter.png";
import { useSetRecoilState } from "recoil";
import { modalLetterState } from "state/ModalState";

const MakeLetterBTN = () => {
  const setModalOpen = useSetRecoilState(modalLetterState);
  return (
    <div className="w-[20%] mr-3">
      <img
        src={makeLetter}
        onClick={() => setModalOpen(true)}
        alt="make letter button"
      />
    </div>
  );
};

export default MakeLetterBTN;
