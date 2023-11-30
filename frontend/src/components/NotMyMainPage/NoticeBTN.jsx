import { useSetRecoilState } from "recoil";
import { modalHelperState } from "@states/ModalState";

const NoticeBTN = () => {
  const setLetterOpen = useSetRecoilState(modalHelperState);

  return (
    <div className="flex justify-end pt-4 pr-6">
      <button
        onClick={() => setLetterOpen(true)}
        className="w-8 h-8 bg-white rounded-full text-black text-lg font-bold"
      >
        ?
      </button>
    </div>
  );
};

export default NoticeBTN;