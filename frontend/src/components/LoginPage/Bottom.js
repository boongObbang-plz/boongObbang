import GoogleLoginButton from "./GoogleLoginButton"
import KakaoLoginButton from "./KakaoLoginButton"
const Bottom = () => {
    return (
        <div className="h-screen w-[100%] border-t-4 border-black bg-bottom-color pt-[50px]">
            <GoogleLoginButton />
            <KakaoLoginButton />
        </div>
    )
}

export default Bottom