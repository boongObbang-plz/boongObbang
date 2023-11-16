import Share from "/images/icon_share.png"
import { useEffect } from "react"
import { useRecoilState } from "recoil"
import { modalAlertState } from "@states/ModalState"

const ShareButton = () => {
    const [ alertOpen, setAlertOpen ] = useRecoilState(modalAlertState);
    
    useEffect(() => {
        if (alertOpen) {
            setTimeout(() => {
                setAlertOpen({isOpen: false, message: ""})
            }, 2000)
        }
    }, [alertOpen])

    return (
        <div className="w-[10%] mr-[1%]">
            <button onClick={() => setAlertOpen({isOpen: true, message: "공유 링크가 저장되었습니다!"})}><img src={Share} alt="share button"/></button>
        </div>
    )
}

export default ShareButton