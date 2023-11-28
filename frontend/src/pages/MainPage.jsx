import Top from "@components/MainPage/Top";
import Display from "@components/MainPage/Display";
import Bottom from "@components/MainPage/Bottom";
import { loginState, lettersState } from "@states//ModalState";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const [login, setLogin] = useRecoilState(loginState);
  const [lettersCount] = useRecoilState(lettersState);
  const [getData, setGetData] = useState({color: 0, d_day: 100, light:0, messages: [], name: ""});
  const navigate = useNavigate();

  useEffect(() => {
    fetch(login.url + "/mainpage", {
      method: "GET",
      headers: {
        Authorization: login.token
      },
    })
    .then(res => 
      res.json()
    )
    .then(data => {
      if (data.status !== 200)
      {
        setLogin({ isLogin: false, token: "", url: login.url });
        navigate('/');
      }
      setGetData(data.data);
    })
  }, [lettersCount])

  return (
    <div className="flex w-screen h-screen justify-center">
      <div className="flex w-full h-full flex-col justify-center items-center min-[733px]:w-[733px] min-w-[375px]">
      <div className="flex h-3/5 w-full">
        <Top
          title={getData.name}
          roof={getData.color}
          light={getData.light}
        />
      </div>
      <Display messages={getData.messages} dday={getData.d_day} />
      <Bottom dday={getData.d_day} />
    </div>
    </div>
  );
};

export default MainPage;
