import googleSymbol from "/images/google_symbol.png"

const GoogleLoginButton = () => {
    return (
        <div className="w-[70%] h-[40%] bg-[#FFFFFF] rounded-[12px] text-center text-[16px] min-[400px]:text-[20px] min-[500px]:text-[22px] min-[600px]:text-[25px] text-[#191919] relative mb-[2%] font-sans">
            <img  className="absolute left-[10%] top-[25%] w-[30px] h-[30px] "src={googleSymbol} alt="google_symbol" />
            <div className="flex h-[100%] justify-center items-center">구글 로그인</div>
        </div>
    )
}

export default GoogleLoginButton