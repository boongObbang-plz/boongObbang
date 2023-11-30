import GoogleLoginButton from "@components/LoginPage/GoogleLoginButton"
import SocialKakao from "@components/LoginPage/SocialKakao"

const Bottom = () => {
    
    return (
        <div className="w-full h-screen border-t-4 border-black bg-bottom-color flex flex-col items-center justify-center pt-[2%]">
            <GoogleLoginButton />
            <SocialKakao />
        </div>
    )
}

export default Bottom