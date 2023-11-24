import { useEffect } from "react";
import { useNavigate } from "react-router";
import { loginState } from "@states//ModalState";
import { useRecoilState } from "recoil";

const KakaoRedirect = () => {
    const authCode = new URL(document.location.toString()).searchParams.get('code');
    const navigate = useNavigate();
    const urlPath = "/login/oauth2/code/test";  //테스트 후 /login/oauth2/code/kakao로 변경
    const [login, setLogin] = useRecoilState(loginState);

    useEffect(() => {
        fetch(login.url + urlPath, {
            method: "POST",
            body: JSON.stringify({
               code: authCode, 
            }),
        })
        .then(res => res.json())
        .then(data => {
            setLogin({ isLogin: true, token: data.data, url: login.url })   //테스트 후 isLogin: false로 변경
            console.log("login-status : " + data.status)
            if (data.status === 200)    //기존 로그인
                navigate('/mainpage')
            if (data.status === 201)    //최초 로그인
                navigate('/settings')
        })
    }, [])
    return (
        <div className="w-full h-[1000px] flex items-center justify-center">
            <h1 className="text-[#FFFFFF] text-[50px]">kakao login ing..</h1>
        </div>
    )
}

export default KakaoRedirect