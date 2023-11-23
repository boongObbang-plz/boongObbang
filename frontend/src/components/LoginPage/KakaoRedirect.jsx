import { useEffect } from "react";
import { useNavigate } from "react-router";
import { loginState } from "@states//ModalState";
import { useRecoilState } from "recoil";

const KakaoRedirect = () => {
    const authCode = new URL(document.location.toString()).searchParams.get('code');
    const navigate = useNavigate();
    const serverUrl = "/login/oauth2/code/kakao";
    const [login, setLogin] = useRecoilState(loginState);

    useEffect(() => {
        console.log(authCode)
    }, [])

    return (
        <div className="w-full h-[1000px] flex items-center justify-center">
            <h1 className="text-[#FFFFFF] text-[50px]">kakao login ing..</h1>
        </div>
    )
}

export default KakaoRedirect