import GoogleLoginButton from "./GoogleLoginButton"
import SocialKakao from "./SocialKakao"
const Bottom = () => {
    
    return (
        <div className="w-[100%] border-t-4 border-black bg-bottom-color pt-[10%] flex flex-col items-center">
            <GoogleLoginButton />
            <SocialKakao />
        </div>
    )
}

export default Bottom