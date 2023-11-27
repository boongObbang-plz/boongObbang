import Delete from "/images/icon_delete.png";
import { useSetRecoilState } from "recoil";
import { modalSubmitState } from "@states//ModalState";

const DeleteButton = () => {
  const setDeleteOpen = useSetRecoilState(modalSubmitState);

  return (
      <img
        src={Delete}
        alt="delete button"
        className="w-[10%] m-2"
        onClick={() => setDeleteOpen({ isOpen: true, isSubmit: 0 })} />
  );
};

export default DeleteButton;
