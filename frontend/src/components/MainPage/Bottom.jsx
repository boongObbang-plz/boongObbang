import DDay from "@components/MainPage/DDay";
import SettingButton from "@components/MainPage/SettingButton";
import ShareButton from "@components/MainPage/ShareButton";

const Bottom = ({ dday }) => {
  return (
    <div className="flex flex-col w-full h-[30vh] justify-between flex-auto border-t-4 border-black bg-bottom-color">
      <div className="flex h-full items-center">
        <DDay dday={dday}/>
      </div>
      <div className="flex bottom-1 items-end justify-end pr-[2%]">
        <ShareButton/>
        <SettingButton/>
      </div>
    </div>
  )
};

export default Bottom;
