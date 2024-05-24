import googleSymbol from "/images/google_symbol.png";
const client_id = import.meta.env.VITE_GOOGLE_API_ID;
// const redirect_uri = "http://localhost:5173/login/oauth2/code/google";
const redirect_uri = "https://boongobbang.site/login/oauth2/code/google";
const googleURL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile`;

const handleLogin = () => {
  window.location.href = googleURL;
};

const GoogleLoginButton = () => {
  return (
    <div
      className="relative mb-[2%] h-[50px] w-[70%] rounded-[12px] bg-[#FFFFFF] text-center font-sans text-[16px] text-[#191919] min-[400px]:text-[20px] min-[500px]:text-[22px] min-[600px]:text-[25px]"
      onClick={handleLogin}
    >
      <img
        className="absolute left-[10%] top-[22%] h-[26px] w-[26px] "
        src={googleSymbol}
        alt="google_symbol"
      />
      <div className="flex h-[100%] items-center justify-center">
        구글 로그인
      </div>
    </div>
  );
};

export default GoogleLoginButton;
