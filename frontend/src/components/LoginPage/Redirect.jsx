import { useEffect } from "react";
import { useNavigate } from "react-router";
import { loginState, codeState } from "@states//ModalState";
import { useRecoilState } from "recoil";

const Redirect = ({ brandPath }) => {
    const authCode = new URL(document.location.toString()).searchParams.get('code');
    const navigate = useNavigate();
    const urlPath = "/login/oauth2/code";
    const [login, setLogin] = useRecoilState(loginState);
    const [codes, setCode] = useRecoilState(codeState);
    const Rest_api_key = import.meta.env.VITE_KAKAO_REST_API_KEY; //REST API KEY
    const redirect_uri = "http://localhost:5173/login/oauth2/code/kakao";

    useEffect(() => {
        console.log(authCode);
        //카카오 access_token 발급
        fetch("https://kauth.kakao.com/oauth/token", {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `grant_type=authorization_code&client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&code=${authCode}`
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (brandPath === "/google")
            setCode({ idx: 1, code: data.data.access_token })
            else
            setCode({ idx: 2, code: data.data.access_token })       
        })
        //붕어빵 서버 로그인 요청
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