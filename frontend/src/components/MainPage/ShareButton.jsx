import Share from "/images/icon_share.png"
import { useRecoilState } from "recoil"
import { modalAlertState, loginState } from "@states/ModalState"
import { useNavigate } from "react-router-dom";

const ShareButton = () => {
    const [ alertOpen, setAlertOpen ] = useRecoilState(modalAlertState);
    const [login, setLogin] = useRecoilState(loginState);
    const navigate = useNavigate();

    const onClickShareButton = () => {
        const msg = "링크를 클립보드에 복사했어요. 카카오톡이나 SNS로 공유하고 친구들에게 붕어빵 가게를 부탁해봐요🍞";

        fetch(login.url + "/mainpage/link", {
            method: "GET",
            headers: {
                Authorization: login.token
            },
        })
        .then(res => 
            res.json()
        )
        .then(data => {
            if (data.status !== 200)
            {
                setLogin({ isLogin: false, token: "", url: login.url });
                navigate('/');
            }
            let link = data.data.link
            navigator.clipboard.writeText(link);
            setAlertOpen({isOpen: true, message:msg})
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