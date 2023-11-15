import NoticeButton from "@components/LoginPage/NoticeButton";
import DDay from "@components/MainPage/DDay";
import MakeLetterBTN from "@components/NotMyMainPage/MakeLetterBTN";
import MyPageBTN from "@components/NotMyMainPage/MyPageBTN";

const Bottom = ({ dday }) => {
  return (
    <div className="h-screen w-[100%] border-t-4 border-black bg-bottom-color">
      <NoticeButton />

      <DDay dday={dday} />
      <div className="mt-[20px] flex justify-between">
        <MyPageBTN />
        <MakeLetterBTN />
      </div>
    </div>
  );
};

export default Bottom;
