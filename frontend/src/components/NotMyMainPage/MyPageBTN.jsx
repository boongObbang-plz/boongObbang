import myPage from "/images/btn_myPage.png";
import { Link } from "react-router-dom";

const MyPageBTN = () => {
  return (
    <div className="flex items-center w-[25%] ml-2">
      <Link to="/">
        <img src={myPage} alt="my page button" />
      </Link>
    </div>
  );
};

export default MyPageBTN;
