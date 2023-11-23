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

    const onClickShareButton = () => {
        const msg = "링크를 카카오톡이나 SNS로 공유하고 친구들에게 붕어빵 가게를 부탁해봐요🍞";
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