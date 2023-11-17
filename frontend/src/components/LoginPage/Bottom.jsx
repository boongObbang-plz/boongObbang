import GoogleLoginButton from "@components/LoginPage/GoogleLoginButton"
import SocialKakao from "@components/LoginPage/SocialKakao"

const Bottom = () => {
    
    return (
        <div className="flex flex-col items-center justify-center w-full h-[30vh] border-t-4 border-black bg-bottom-color">
            <GoogleLoginButton />
            <SocialKakao />
        </div>
    )
}

export default Bottom