import GoogleLoginButton from "@components/LoginPage/GoogleLoginButton"
import SocialKakao from "@components/LoginPage/SocialKakao"

const Bottom = () => {
    
    return (
        <div className="w-[100%] h-screen border-t-4 border-black bg-bottom-color flex flex-col items-center justify-center">
            <GoogleLoginButton />
            <SocialKakao />
        </div>
    )
}

export default Bottom