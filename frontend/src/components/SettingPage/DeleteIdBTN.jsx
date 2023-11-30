import { useSetRecoilState } from "recoil";
import { modalSubmitState } from "@states/ModalState"

const DeleteIdBTN = () => {
    const setSubmitOpen = useSetRecoilState(modalSubmitState)
    return (
        <button onClick={() => setSubmitOpen({isOpen: true, isSubmit: 3})}
        className="text-[20px] min-[400px]:text-[22px] min-[500px]:text-[24px] min-[600px]:text-[26px] hover:underline">
            탈퇴하기
        </button>
    )
}

export default DeleteIdBTN