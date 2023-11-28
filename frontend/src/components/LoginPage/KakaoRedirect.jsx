import { useEffect } from "react";
import { useNavigate } from "react-router";
import { loginState } from "@states//ModalState";
import { useRecoilState } from "recoil";

const KakaoRedirect = () => {
    const authCode = new URL(document.location.toString()).searchParams.get('code');
    const navigate = useNavigate();
    const urlPath = "/login/oauth2/code/kakao";  //테스트 후 /login/oauth2/code/kakao로 변경
    const [login, setLogin] = useRecoilState(loginState);

    useEffect(() => {
        console.log(authCode)
        fetch(login.url + urlPath, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
               code: authCode,
            }),
        })
        .then(res => res.json())
        .then(data => {
            console.log("login-status : " + data.status)
            if (data.status === 200) {
                setLogin({ isLogin: true, token: data.data, url: login.url })
                navigate('/mainpage')
            }
            if (data.status === 201) {
                setLogin({ isLogin: false, token: data.data, url: login.url })
                navigate('/settings')
            }
        })
    }, [])
    return (
        <div className="w-full h-[1000px] flex items-center justify-center">
            <h1 className="text-[#FFFFFF] text-[50px]">kakao login ing..</h1>
        </div>
    )
}

export default KakaoRedirect