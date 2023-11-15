import NoticeButton from "@components/LoginPage/NoticeButton";
import DDay from "@components/MainPage/DDay";
import MakeLetterBTN from "@components/NotMyMainPage/MakeLetterBTN";
import MyPageBTN from "@components/NotMyMainPage/MyPageBTN";

const Bottom = ({ dday }) => {
  return (
    <div className="w-full border-t-4 border-black bg-bottom-color">
      <NoticeButton />
      <DDay dday={dday} />
      <div className="mt-3 mb-3 flex justify-between">
        <MyPageBTN />
        <MakeLetterBTN />
      </div>
    </div>
  );
};

export default Bottom;
