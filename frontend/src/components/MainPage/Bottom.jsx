import DDay from "@components/MainPage/DDay";

const Bottom = ({ dday }) => {
  return (
    <div className="w-[100%] border-t-4 border-black bg-bottom-color">
      <DDay dday={dday} />
    </div>
  );
};

export default Bottom;
