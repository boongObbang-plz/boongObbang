import { useSetRecoilState } from "recoil";
import { modalHelperState } from "@states/ModalState";

const NoticeButton = () => {
  const setLetterOpen = useSetRecoilState(modalHelperState);

  return (
    <div className="w-[100%] flex justify-end pt-[10px] pr-[5%]">
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
