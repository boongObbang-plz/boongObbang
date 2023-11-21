import NoticeButton from "@components/NotMyMainPage/NoticeBTN";
import DDay from "@components/MainPage/DDay";
import MakeLetterBTN from "@components/NotMyMainPage/MakeLetterBTN";
import MyPageBTN from "@components/NotMyMainPage/MyPageBTN";

const Bottom = ({ dday }) => {
  return (
    <div className="flex flex-col w-full h-full justify-between flex-auto border-t-4 border-black bg-bottom-color">
      <NoticeButton />
      <DDay dday={dday} />
      <div className="flex bottom-1 mt-5 mb-3 justify-between ">
        <MyPageBTN />
        <MakeLetterBTN dday={dday} />
      </div>
    </div>
  );
};

export default Bottom;
