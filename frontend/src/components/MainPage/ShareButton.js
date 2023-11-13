import Share from "images/icon_share.png"
import { useEffect, useState } from "react"
import Modal from "react-modal"

const ShareButton = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    useEffect(() => {
        if (modalIsOpen) {
            const timer = setTimeout(() => {
                setModalIsOpen(false)
            }, 2000)
            return () => clearTimeout(timer)
        }
    }, [modalIsOpen])

    return (
        <div className="w-[10%] mr-[1%]">
            <button onClick={() => setModalIsOpen(true)}><img src={Share} alt="share button"/></button>
            <Modal className="w-[100%] h-[10%] flex justify-center fixed bottom-10" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                <div className="w-[80%] bg-[#FFFFFF] rounded-[5px] flex justify-center items-center">{"공유링크 복사!!"}</div>
            </Modal>
        </div>
    )
}

export default ShareButton