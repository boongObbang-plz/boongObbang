import KakaoLogin from "images/kakao_login.png"

const SocialKakao = ()=>
{
    const Rest_api_key='' //REST API KEY
    const redirect_uri = 'http://localhost:3000/login/oauth2/code/kakao' //Redirect URI
    // oauth 요청 URL
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`
    const handleLogin = ()=>{
        window.location.href = kakaoURL
    }
    return(
    <div className="w-[90%]">
        <button onClick={handleLogin}><img src={KakaoLogin} alt="kakako login button"/></button>
    </div>
    )
}
export default SocialKakao