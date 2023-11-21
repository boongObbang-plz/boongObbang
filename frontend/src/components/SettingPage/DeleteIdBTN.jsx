import { useSetRecoilState } from "recoil";
import { modalSubmitState } from "@states/ModalState"

const DeleteIdBTN = () => {
    const setSubmitOpen = useSetRecoilState(modalSubmitState)
    return (
        <button onClick={() => setSubmitOpen({isOpen: true, isSubmit: 3})}
        className="pb-[1%]">
            탈퇴하기
        </button>
    )
}

export default DeleteIdBTN