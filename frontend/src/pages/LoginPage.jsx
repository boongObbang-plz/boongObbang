import Board from "@components/LoginPage/Board";
import Bottom from "@components/LoginPage/Bottom";
import Roof from "@components/LoginPage/Roof";
import Title from "@components/LoginPage/Title";
import Grill from "@components/MainPage/Grill";
import Letters from "@components/MainPage/Letters"

const LoginPage = () => {
  const messages = [
    { "idx" : 0, "color" : 0 },
    { "idx" : 1, "color" : 1 },
    { "idx" : 2, "color" : 2 },
    { "idx" : 3, "color" : 3 },
    { "idx" : 4, "color" : 4 },
    { "idx" : 5, "color" : 5 },
    { "idx" : 6, "color" : 5 },
    { "idx" : 7, "color" : 0 },
    { "idx" : 8, "color" : 3 },
  ]
  return (
    <div className="flex h-full">
      <div className="flex flex-col justify-center items-center">
      <Roof />
      <Title />
      <Grill />
      <div className="relative w-full pointer-events-none">
        <Letters messages={messages} />
        <Board />
      </div>
      <Bottom />
      </div>
    </div>
  );
};

export default LoginPage;
