import { useEffect } from "react";
import { useNavigate } from "react-router";
import { loginState } from "@states//ModalState";
import { useRecoilState } from "recoil";

const Redirect = ({ brandPath }) => {
    const authCode = new URL(document.location.toString()).searchParams.get('code');
    const navigate = useNavigate();
    const urlPath = "/login/oauth2/code";
    const [login, setLogin] = useRecoilState(loginState);

    useEffect(() => {
        fetch(login.url + urlPath + brandPath, {
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
            console.log("brandname is : " + brandPath)
            if (data.status === 200) {
                setLogin({ isLogin: true, token: data.data.token, url: login.url })
                navigate('/mainpage')
            }
            if (data.status === 201) {
                setLogin({ isLogin: false, token: data.data.token, url: login.url })
                navigate('/settings')
            }
        })
    }, [])
    return (
        <div className="w-full h-[1000px] flex items-center justify-center">
            <h1 className="text-[#FFFFFF] text-[50px]">로그인 중입니다 😉</h1>
        </div>
    )
}

export default Redirect