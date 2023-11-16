import makeLetter from "/images/btn_makeLetter.png";
import { useSetRecoilState } from "recoil";
import { modalLetterState, modalAlertState } from "@states/ModalState";

const MakeLetterBTN = ({ dday }) => {
  const setModalOpen = useSetRecoilState(modalLetterState);
  const setAlertOpen = useSetRecoilState(modalAlertState);

  const checkDday = () => {
    if (dday == 0)
    {
      setAlertOpen({ isOpen: true, message: "12월 25일부터는 편지를 등록할 수 없어요😢" });
      return;
    }
    setModalOpen({ isOpen: true, page: 1 })
  }

  return (
    <div className="w-[20%] mr-3">
      <img
        src={makeLetter}
        onClick={() => checkDday()}
        alt="make letter button"
      />
    </div>
  );
};

export default MakeLetterBTN;
