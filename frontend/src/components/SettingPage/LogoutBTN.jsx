import { useSetRecoilState } from "recoil";
import { modalSubmitState } from "@states/ModalState"

const LogoutBTN = () => {
    const setSubmitOpen = useSetRecoilState(modalSubmitState);

    return (
        <button onClick={() => setSubmitOpen({isOpen: true, isSubmit: true})}
        className="pb-[1%]">
            로그아웃
        </button>
    )
}

export default LogoutBTN