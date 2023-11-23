import Setting from "/images/icon_setting.png"
import { useNavigate } from "react-router";

const SettingButton = () => {
    const navigate = useNavigate();

    const onClickShareBTN = () => {
        navigate("/settings")
    }

    return (
        <div className="w-[11%]">
            <button onClick={onClickShareBTN}>
                <img src={Setting} alt="setting button"/>
            </button>
        </div>
    )
}

export default SettingButton