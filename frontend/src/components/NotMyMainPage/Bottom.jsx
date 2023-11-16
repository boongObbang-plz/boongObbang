import NoticeButton from "@components/NotMyMainPage/NoticeBTN";
import DDay from "@components/MainPage/DDay";
import MakeLetterBTN from "@components/NotMyMainPage/MakeLetterBTN";
import MyPageBTN from "@components/NotMyMainPage/MyPageBTN";

const Bottom = ({ dday }) => {
  return (
    <div className="relative w-full h-[30vh] border-t-4 border-black bg-bottom-color">
        <NoticeButton />
        <DDay dday={dday} />
      <div className="absolute bottom-1 mt-3 mb-3 flex justify-between ">
        <MyPageBTN />
        <MakeLetterBTN />
      </div>
    </div>
  );
};

export default Bottom;
