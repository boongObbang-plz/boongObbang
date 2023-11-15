import Board from "@components/LoginPage/Board";
import Bottom from "@components/LoginPage/Bottom";
import NoticeButton from "@components/LoginPage/NoticeButton";
import Roof from "@components/LoginPage/Roof";
import Title from "@components/LoginPage/Title";
import Display from "@components/MainPage/Display";
import Grill from "@components/MainPage/Grill";

const LoginPage = () => {

  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center items-center h-full w-full max-w-[709px] max-h-[1366px]">
      <Roof />
      <Title />
      <Grill />
      <Board />
      <Bottom />
      </div>
    </div>
  );
};

export default LoginPage;
