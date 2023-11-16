import { useSetRecoilState } from "recoil";
import { modalLoginHelperState } from "@states/ModalState";

const NoticeButton = () => {
  const setLetterOpen = useSetRecoilState(modalLoginHelperState);

  return (
    <div className="flex justify-end pr-[3%]">
      <button
        onClick={() => setLetterOpen(true)}
        className="w-[30px] h-[30px] bg-[#FFFFFF] rounded-[20px] text-[#000000] text-[20px] font-bold"
      >
        ?
      </button>
    </div>
  );
};

export default NoticeButton;
