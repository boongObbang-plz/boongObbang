import { useEffect } from "react";
import { useNavigate } from "react-router";
import { loginState } from "@states//ModalState";
import { useRecoilState } from "recoil";

const Redirect = ({ brandPath }) => {
  const authCode = new URL(document.location.toString()).searchParams.get(
    "code"
  );
  const navigate = useNavigate();
  const urlPath = "/login/oauth2/code";
  const [login, setLogin] = useRecoilState(loginState);

  useEffect(() => {
    //붕어빵 서버 로그인 요청
    fetch(login.url + urlPath + brandPath, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code: authCode,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          setLogin({ isLogin: true, token: data.data.token, url: login.url });
          navigate("/mainpage");
        }
        if (data.status === 201) {
          setLogin({ isLogin: false, token: data.data.token, url: login.url });
          navigate("/settings");
        }
      });
  }, []);
  return (
    <div className="w-full h-screen flex items-center justify-center text-center break-keep">
      <h1 className="text-[#FFFFFF] text-[50px]">로그인 중입니다 😉</h1>
    </div>
  );
};

export default Redirect;
