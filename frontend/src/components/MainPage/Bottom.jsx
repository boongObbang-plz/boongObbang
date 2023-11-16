import DDay from "@components/MainPage/DDay";
import SettingButton from "@components/MainPage/SettingButton";
import ShareButton from "@components/MainPage/ShareButton";

const Bottom = ({ dday }) => {
  return (
    <div className="relative w-full h-[30vh] border-t-4 border-black bg-bottom-color">
      <DDay dday={dday}/>
      <div className="absolute bottom-1 mt-3 mb-3 flex items-center justify-end pr-[2%]">
        <ShareButton/>
        <SettingButton/>
      </div>
    </div>
  )
};

export default Bottom;
