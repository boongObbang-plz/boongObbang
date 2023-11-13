import DDay from "components/MainPage/DDay";
import SettingButton from "./SettingButton";
import ShareButton from "./ShareButton";

const Bottom = ({ dday }) => {
  return (
    <div className="h-screen w-[100%] border-t-4 border-black bg-bottom-color flex flex-col justify-between">
      <DDay dday={dday}/>
      <div className="flex justify-end pr-[2%]">
        <ShareButton/>
        <SettingButton/>
      </div>
    </div>
  );
};

export default Bottom;
