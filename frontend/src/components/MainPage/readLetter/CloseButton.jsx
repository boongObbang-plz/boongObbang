import closeImage from "/images/icon_close.png"
import { useSetRecoilState } from "recoil"
import { modalReadLetterState } from "@states/ModalState"

const CloseButton = () => {
    const setModalOpen = useSetRecoilState(modalReadLetterState)
    
    return (
        <img
            src={closeImage}
            alt="close button"
            className="w-[10%] m-2"
            onClick={() => setModalOpen(false)}/>
    )
}

export default CloseButton