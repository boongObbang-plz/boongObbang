import Top from "@components/MainPage/Top";
import Display from "@components/MainPage/Display";
import Bottom from "@components/MainPage/Bottom";
import { loginState } from "@states//ModalState";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";

const DefaultScreen = () => {
  const [login, setLogin] = useRecoilState(loginState);
  const [getData, setGetData] = useState({color: 0, d_day: 100, light:0, messages: [], name: ""});

  useEffect(() => {
    fetch(login.url + "/mainpage", {
      method: "GET",
      headers: {
        Authorization: login.token
      },
    })
    .then(res => res.json())
    .then(data => {
      setGetData(data.data)
    })
  }, [])

  return (
    <div className="flex w-full h-full flex-col justify-center items-center min-[733px]:w-[733px] min-w-[375px]">
      <div className="flex h-2/5 w-full">
        <Top
          title={getData.name}
          roof={getData.color}
          light={getData.light}
        />
      </div>
      <Display messages={getData.messages} />
      <Bottom dday={getData.d_day} />
    </div>
  );
};

export default DefaultScreen;
