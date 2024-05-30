import { loginState } from "@states//ModalState";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useRecoilState } from "recoil";

const Redirect = ({ brandPath }) => {
  const authCode = new URL(document.location.toString()).searchParams.get(
    "code",
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
    <div className="flex h-screen w-full items-center justify-center break-keep text-center">
      <h1 className="text-[50px] text-[#FFFFFF]">로그인 중입니다 😉</h1>
    </div>
  );
};

export default Redirect;
