import Top from "@components/MainPage/Top";
import Display from "@components/MainPage/Display";
import Bottom from "@components/NotMyMainPage/Bottom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { loginState } from "@states//ModalState";
import { useRecoilState } from "recoil";

const NotMyMainPage = () => {
  const { uuid } = useParams();
  const [login, setLogin] = useRecoilState(loginState);
  const [getData, setGetData] = useState({color: 0, d_day: 100, light:0, messages: [], name: ""});

  useEffect(() => {
    fetch(login.url + "/main/" + uuid, {
      method: "GET",
    })
    .then(res => res.json())
    .then(data => {
      setGetData(data.data);
    })
    .catch(err => {console.log(err)})
  }, [])
  
  return (
    <div className="flex w-screen h-screen justify-center">
      <div className="flex w-full h-full flex-col justify-center items-center min-[733px]:w-[733px] min-w-[375px]">
        <div className="flex h-2/5 w-full ">
          <Top
            title={getData.name}
            roof={getData.color}
            light={getData.light}
            />
        </div>
          <Display messages={getData.messages} />
          <Bottom dday={getData.d_day} />
      </div>
    </div>
  );
};

export default NotMyMainPage;
