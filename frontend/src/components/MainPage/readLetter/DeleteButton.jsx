import Delete from "/images/icon_delete.png";
import { useSetRecoilState } from "recoil";
import { modalSubmitState } from "@states//ModalState";

const DeleteButton = () => {
  const setDeleteOpen = useSetRecoilState(modalSubmitState);

  return (
    <button
      className="w-[32px] mr-[2%]"
      onClick={() => setDeleteOpen({ isOpen: true, isSubmit: false })}
    >
      <img src={Delete} alt="delete button" />
    </button>
  );
};

export default DeleteButton;
