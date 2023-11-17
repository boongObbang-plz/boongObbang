import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const KakaoRedirect = () => {
    const authCode = new URL(document.location.toString()).searchParams.get('code');
    const navigate = useNavigate();
    const serverUrl = "http://localhost:5173/login/oauth2/code/kakao";
    
    useEffect(() => {
        console.log(authCode)   //code 내용 확인 
        axios.post(serverUrl, { code: authCode }).then((res) => {
            console.log(res.status);
            navigate("/mainpage")
        })
        .catch((err) => {
            console.error(err);
        })
    }, [])

    return (
        <div className="w-full h-[1000px] flex items-center justify-center">
            <h1 className="text-[#FFFFFF] text-[50px]">kakao login ing..</h1>
        </div>
    )
}

export default KakaoRedirect