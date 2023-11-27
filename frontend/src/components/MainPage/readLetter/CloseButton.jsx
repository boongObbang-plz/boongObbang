import closeImage from "/images/icon_close.png"
import { useSetRecoilState } from "recoil"
import { modalReadLetterState } from "@states/ModalState"

const CloseButton = () => {
    const setModalOpen = useSetRecoilState(modalReadLetterState)
    
    return (
        <div className="flex justify-end">
            <button className="w-[30px]" onClick={() => setModalOpen({isOpen: false, idx: 0})}>
                <img src={closeImage} alt="close button"/>
            </button>
        </div>
    )
}

export default CloseButton