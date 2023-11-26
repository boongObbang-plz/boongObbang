import Share from "/images/icon_share.png"
import { useRecoilState } from "recoil"
import { modalAlertState, loginState } from "@states/ModalState"

const ShareButton = () => {
    const [ alertOpen, setAlertOpen ] = useRecoilState(modalAlertState);
    const [login, setLogin] = useRecoilState(loginState);

    const onClickShareButton = () => {
        const msg = "링크를 카카오톡이나 SNS로 공유하고 친구들에게 붕어빵 가게를 부탁해봐요🍞";
        
        fetch(login.url + "/mainpage/link", {
            method: "GET",
            headers: {
                Authorization: login.token
            },
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            let link = data.data.link
            //clipboard에 link 추가하기
            setAlertOpen({isOpen: true, message:msg+link})
            setTimeout(() => {
                setAlertOpen({isOpen: false, message: ""})
            }, 3000)
        })
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