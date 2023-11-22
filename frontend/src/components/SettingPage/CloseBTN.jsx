import closeImage from "/images/icon_close.png";
import { useNavigate } from "react-router";

const CloseBTN = () => {
    const navigate = useNavigate();

    const onClickCloseBTN = () => {
        navigate("/mainpage")
    }

    return (
        <div className="w-[100%] flex justify-end pt-[4%] pr-[4%]">
            <button className="w-[7%]" onClick={onClickCloseBTN}>
                <img src={closeImage} alt="close" />
            </button>
        </div>
    )
}

export default CloseBTN