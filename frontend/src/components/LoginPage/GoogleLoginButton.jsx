import googleSymbol from "/images/google_symbol.png"

const GoogleLoginButton = () => {
    return (
        <div className="w-[70%] h-[60px] bg-[#FFFFFF] rounded-[12px] text-center text-[25px] text-[#191919] flex justify-center items-center mb-[2%] font-sans">
            <button>
            <img  className="absolute left-[20%] w-[40px] h-[40px] "src={googleSymbol} alt="google_symbol" />
                구글 로그인
            </button>
        </div>
    )
}

export default GoogleLoginButton