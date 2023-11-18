import kakaoSymbol from "/images/kakao_symbol.png"

const SocialKakao = () => {
  const Rest_api_key = ""; //REST API KEY
  const redirect_uri = "http://localhost:5173/login/oauth2/code/kakao"; //Redirect URI
  // oauth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
  const handleLogin = () => {
    window.location.href = kakaoURL;
  };
  return (
    <div 
    className="w-[70%] h-[60px] bg-[#FEE500] rounded-[12px] text-center text-[25px] text-[#191919] flex justify-center items-center font-sans"
    onClick={handleLogin}
    >
      <img className="absolute left-[20%] w-[45px] h-[45px]" src={kakaoSymbol} alt="kakao_symbol" />
      카카오 로그인
    </div>
  );
};
export default SocialKakao;
