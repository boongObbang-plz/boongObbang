import { loginState, modalAlertState } from "@states/ModalState";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import Share from "/images/icon_share.png";

const ShareButton = () => {
  const [alertOpen, setAlertOpen] = useRecoilState(modalAlertState);
  const [login, setLogin] = useRecoilState(loginState);
  const navigate = useNavigate();
  const [link, setLink] = useState("");

  useEffect(() => {
    if (login.isLogin) {
      fetch(login.url + "/mainpage/link", {
        method: "GET",
        headers: {
          Authorization: login.token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status !== 200) {
            setLogin({ isLogin: false, token: "", url: login.url });
            navigate("/");
          }
          setLink(data.data.link);
        });
    }
  }, []);

  const onClickShareButton = () => {
    const msg =
      "링크를 클립보드에 복사했어요. 카카오톡이나 SNS로 공유하고 친구들에게 붕어빵 가게를 부탁해봐요🍞";
    navigator.clipboard.writeText(link);
    setAlertOpen({ isOpen: true, message: msg });
    setTimeout(() => {
      setAlertOpen({ isOpen: false, message: "" });
    }, 3000);
  };

  return (
    <div className="mr-[1%] w-[10%]">
      <button onClick={onClickShareButton}>
        <img src={Share} alt="share button" />
      </button>
    </div>
  );
};

export default ShareButton;
