import icon_submit from "/images/icon_submit.png";
import icon_close from "/images/icon_close.png";
import { useSetRecoilState } from "recoil";
import { modalSubmitState } from "@states/ModalState";
import { useNavigate } from "react-router-dom";

const FinalCheckDeleteId = () => {
    const setPopOpen = useSetRecoilState(modalSubmitState)
    const navigate = useNavigate()

    const clickCheck = () => {
        setPopOpen(false)
        navigate("/")
    }
    return (
        <div className="h-full w-full flex flex-col justify-center items-center text-xs min-[400px]:text-[15px] min-[500px]:text-[17px] min-[600px]:text-[20px]">
            <div className="m-1">탈퇴 후 다시 로그인이 불가능해요🥺</div>
            <div className="m-1">탈퇴 하시겠어요?</div>
            <div className="flex justify-center">
            <img
                src={icon_submit}
                className="w-[10%] mt-2 mr-3"
                onClick={() => clickCheck()}
                alt="submit button"
            />
            <img
                src={icon_close}
                className="w-[10%] mt-2 ml-3"
                onClick={() => setPopOpen(false)}
                alt="close button"
            />
            </div>
        </div>
    )
}

export default FinalCheckDeleteId