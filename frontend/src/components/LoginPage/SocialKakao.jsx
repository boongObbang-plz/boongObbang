import kakaoSymbol from "/images/kakao_symbol.png"

const SocialKakao = () => {
  const Rest_api_key = import.meta.env.VITE_KAKAO_REST_API_KEY; //REST API KEY
  const redirect_uri = "http://localhost:5173/login/oauth2/code/kakao"; //Redirect URI
  // oauth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
  const handleLogin = () => {
    window.location.href = kakaoURL;
  };
  return (
    <div 
    className="w-[70%] h-[50px] bg-[#FEE500] rounded-[12px] text-center text-[16px] min-[400px]:text-[20px] min-[500px]:text-[22px] min-[600px]:text-[25px] text-[#191919] relative font-sans mb-[2%] font-sans flex items-center justify-center"
    onClick={handleLogin}
    >
      <img className="absolute left-[10%] w-[28px] h-[28px] min-[400px]:w-[30px] min-[400px]:h-[30px]" src={kakaoSymbol} alt="kakao_symbol" />
      <div className="flex justify-center items-center">카카오 로그인</div>
    </div>
  );
};
export default SocialKakao;
