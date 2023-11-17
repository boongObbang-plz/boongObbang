

const SocialKakao = () => {
  const Rest_api_key = "fc790fdb3ffa52667e5fc35e231fc13b"; //REST API KEY
  const redirect_uri = "http://localhost:5173/login/oauth2/code/kakao"; //Redirect URI
  // oauth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
  const handleLogin = () => {
    window.location.href = kakaoURL;
  };
  return (
    <div className="w-[90%] h-[60px] bg-[#FEE500] rounded-[12px] text-center text-[30px] text-[#191919] flex justify-center">
      <button onClick={handleLogin}>
        <img src="" alt="" />
        카카오 로그인
      </button>
    </div>
  );
};
export default SocialKakao;
