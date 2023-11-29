import Board from "@components/LoginPage/Board";
import Bottom from "@components/LoginPage/Bottom";
import Roof from "@components/MainPage/Roof";
import Title from "@components/LoginPage/Title";
import Grill from "@components/MainPage/Grill";
import Letters from "@components/MainPage/Letters"

const LoginPage = () => {
  const messages = [
    { "idx" : 0, "color" : 0, "made_by" : "행복한" },
    { "idx" : 1, "color" : 1, "made_by" : "크리스마스를" },
    { "idx" : 2, "color" : 2, "made_by" : "느껴보세요🎁" },
    { "idx" : 3, "color" : 3, "made_by" : "붕어빵으로"  },
    { "idx" : 4, "color" : 4, "made_by" : "편지를"  },
    { "idx" : 5, "color" : 5, "made_by" : "전달하고"  },
    { "idx" : 6, "color" : 5, "made_by" : "2023년"  },
    { "idx" : 7, "color" : 0, "made_by" : "소중한"  },
    { "idx" : 8, "color" : 3, "made_by" : "사람에게"  },
  ]
  return (
    <div className="flex w-screen h-screen justify-center">
      <div className="flex flex-col justify-center items-center w-full min-[733px]:w-[733px] min-w-[375px]">
      <Roof roof={0} light={0}/>
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
