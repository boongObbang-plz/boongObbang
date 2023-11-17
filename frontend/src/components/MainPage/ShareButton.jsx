import Share from "/images/icon_share.png"
import { useEffect } from "react"
import { useRecoilState } from "recoil"
import { modalAlertState } from "@states/ModalState"
import axios from "axios"

const ShareButton = () => {
    const [ alertOpen, setAlertOpen ] = useRecoilState(modalAlertState);
    const serverUrl = "mainpage/link"

    useEffect(() => {
        if (alertOpen) {
            setTimeout(() => {
                setAlertOpen({isOpen: false, message: ""})
            }, 2000)
        }
    }, [alertOpen])

    const onClickShareButton = () => {
        const msg = "";
        axios.get(serverUrl).then(res => {
            
        })

        setAlertOpen({isOpen: true, message:msg})
    }

    return (
        <div className="w-[10%] mr-[1%]">
            <button onClick={onClickShareButton}>
                <img src={Share} alt="share button"/>
            </button>
        </div>
    )
}

export default ShareButton