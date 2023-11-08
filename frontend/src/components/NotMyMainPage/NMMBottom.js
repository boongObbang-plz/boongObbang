import { Link } from "react-router-dom";
import DDay from "components/MainPage/DDay";
import MyPageBTN from "components/NotMyMainPage/MyPageBTN";
import MakeLetterBTN from "components/NotMyMainPage/MakeLetterBTN";

const NMMBottom = ({ dday }) => {
  return (
    <div className="h-screen w-[100%] border-t-4 border-black bg-bottom-color">
      <DDay dday={dday}/>
      <div className="mt-[20px] flex justify-between">
        {/* <Link to="/"> */}
          <MyPageBTN />
        {/* </Link> */}
        {/* <Link to="/makeletter"> */}
          <MakeLetterBTN />
        {/* </Link> */}
      </div>
    </div>
  );
};

export default NMMBottom;