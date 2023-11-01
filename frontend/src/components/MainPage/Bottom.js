import DDay from "components/MainPage/DDay";

const Bottom = ({ dday }) => {
  return (
    <div className="h-screen w-screen border-t-4 border-black bg-bottom-color">
      <DDay dday={dday}/>
    </div>
  );
};

export default Bottom;
