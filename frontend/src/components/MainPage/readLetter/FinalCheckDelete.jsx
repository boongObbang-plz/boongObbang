import icon_submit from "/images/icon_submit.png";
import icon_close from "/images/icon_close.png";
import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  modalReadLetterState,
  modalSubmitState,
  modalAlertState,
} from "@states//ModalState";

const FinalCheckDelete = () => {
  const [readOpen, setReadOpen] = useRecoilState(modalReadLetterState);
  const setDeleteOpen = useSetRecoilState(modalSubmitState);
  const [alertOpen, setAlertOpen] = useRecoilState(modalAlertState);

  useEffect(() => {
    if (alertOpen.isOpen) {
      setTimeout(() => {
        setAlertOpen({ isOpen: false, message: "" });
      }, 2000);
    }
  }, [alertOpen]);

  const clickDelete = () => {
    setDeleteOpen({ isOpen: false, isSubmit: false });
    setReadOpen(false);
    setAlertOpen({ isOpen: true, message: "삭제가 완료되었어요😉" });

    //todo: api 호출
  };

  return (
    <div className="flex flex-col text-center">
      <div>삭제 후 복원이 불가능해요🥺</div>
      <div>삭제 하시겠어요?</div>
      <div className="flex justify-center">
        <img
          src={icon_submit}
          className="w-[30px] mt-2 mr-3"
          onClick={() => clickDelete()}
          alt="submit button"
        />
        <img
          src={icon_close}
          className="w-[30px] mt-2 ml-3"
          onClick={() => setDeleteOpen(false)}
          alt="close button"
        />
      </div>
    </div>
  );
};

export default FinalCheckDelete;
