import ChooseBOB from "@components/NotMyMainPage/MakeLetter/ChooseBOB";
import WriteLetter from "@components/NotMyMainPage/MakeLetter/WriteLetter";
import { useRecoilValue } from "recoil";
import { modalLetterState } from "@states/ModalState";

const MakeLetter = () => {
  const letterOpen = useRecoilValue(modalLetterState);

  return (
    <div className="h-full bg-white text-black flex flex-col items-center justify-start">
      {letterOpen.page === 1 ? <ChooseBOB /> : <WriteLetter />}
    </div>
  );
};

export default MakeLetter;
