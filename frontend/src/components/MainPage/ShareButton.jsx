import Share from "/images/icon_share.png"
import { useEffect } from "react"
import { useSetRecoilState, useRecoilValue } from "recoil"
import { modalShareState } from "@states/ModalState"

const ShareButton = () => {
    const setModalOpen = useSetRecoilState(modalShareState)
    const getModalOpen = useRecoilValue(modalShareState)

    useEffect(() => {
        if (getModalOpen) {
            const timer = setTimeout(() => {
                setModalOpen(false)
            }, 3000)
            return () => clearTimeout(timer)
        }
    }, [getModalOpen])

    return (
        <div className="w-[10%] mr-[1%]">
            <button onClick={() => setModalOpen(true)}><img src={Share} alt="share button"/></button>
        </div>
    )
}

export default ShareButton