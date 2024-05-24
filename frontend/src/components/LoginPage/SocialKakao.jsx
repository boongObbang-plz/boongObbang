import kakaoSymbol from "/images/kakao_symbol.png";

const SocialKakao = () => {
  const Rest_api_key = import.meta.env.VITE_KAKAO_REST_API_KEY; //REST API KEY
  // const redirect_uri = "http://localhost:5173/login/oauth2/code/kakao"; //Redirect URI
  const redirect_uri = "https://boongobbang.site/login/oauth2/code/kakao";
  // oauth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
  const handleLogin = () => {
    window.location.href = kakaoURL;
  };
  return (
    <div
      className="relative mb-[2%] flex h-[50px] w-[70%] items-center justify-center rounded-[12px] bg-[#FEE500] text-center font-sans font-sans text-[16px] text-[#191919] min-[400px]:text-[20px] min-[500px]:text-[22px] min-[600px]:text-[25px]"
      onClick={handleLogin}
    >
      <img
        className="absolute left-[10%] h-[28px] w-[28px] min-[400px]:h-[30px] min-[400px]:w-[30px]"
        src={kakaoSymbol}
        alt="kakao_symbol"
      />
      <div className="flex items-center justify-center">카카오 로그인</div>
    </div>
  );
};
export default SocialKakao;
