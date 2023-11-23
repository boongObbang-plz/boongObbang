import { useSetRecoilState } from "recoil";
import { modalSubmitState } from "@states/ModalState"

const LogoutBTN = () => {
    const setSubmitOpen = useSetRecoilState(modalSubmitState);

    return (
        <button onClick={() => setSubmitOpen({isOpen: true, isSubmit: 2})}
        className="pb-[2%] text-[20px] min-[400px]:text-[22px] min-[500px]:text-[24px] min-[600px]:text-[26px] hover:underline">
            로그아웃
        </button>
    )
}

export default LogoutBTN