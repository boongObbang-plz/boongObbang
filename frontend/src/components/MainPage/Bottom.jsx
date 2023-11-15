import DDay from "@components/MainPage/DDay";
import SettingButton from "@components/MainPage/SettingButton";
import ShareButton from "@components/MainPage/ShareButton";

const Bottom = ({ dday }) => {
  return (
    <div className="h-screen w-[100%] border-t-4 border-black bg-bottom-color flex flex-col items-center justify-between">
      <DDay dday={dday}/>
      <div className="flex items-end justify-end pr-[2%] mb-[2%]">
        <ShareButton/>
        <SettingButton/>
      </div>
    </div>
  )
};

export default Bottom;
