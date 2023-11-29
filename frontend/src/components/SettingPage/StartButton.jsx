import { useRecoilState } from "recoil";
import { modalAlertState } from "@states//ModalState";
import { cartState } from "@states//ModalState";
import { useNavigate } from "react-router";
import { loginState } from "@states//ModalState";

const StartButton = () => {
  const [cart, setCart] = useRecoilState(cartState);
  const [alertOpen, setAlertOpen] = useRecoilState(modalAlertState);
  const navigate = useNavigate();
  const [login, setLogin] = useRecoilState(loginState);

  const fetchMethods = ({ method }) => {
    fetch(login.url + "/settings", {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: login.token
      },
      body: JSON.stringify({
        name: cart.name,
        color: cart.color,
        light: cart.light,
      }),
    })
    .then(res => res.json())
    .then(data => {
      console.log("settings-status: "+data.status) 
      if (data.status === 200 || data.status === 201) {
        if (data.status === 201)  //최초 로그인
          setLogin({ isLogin: true, token: login.token, url: login.url })
        navigate('/mainpage')
      }
      else {
        setLogin({ isLogin: false, token: "", url: login.url })
        navigate('/')
      }
    })
  }

  const onClickStartButton = () => {
    if (cart.name.length === 0) {
      setAlertOpen({ isOpen: true, message: "가게 이름을 입력해주세요!" });
      setTimeout(() => {
        setAlertOpen({ isOpen: false, message: "" });
      }, 2000);
      return ;
    }
    if (login.isLogin)
      fetchMethods({method: "PATCH"});
    else
      fetchMethods({method: "POST"});
  };

  return (
    <div className="flex flex-col items-center w-full pt-[40px]">
      <button
        className="w-[45%] h-[60px] bg-zinc-400 rounded-[10px] text-black text-[24px] min-[400px]:text-[28px] min-[500px]:text-[32px] min-[600px]:text-[35px]"
        onClick={onClickStartButton}
      >
        영업 시작
      </button>
    </div>
  );
};

export default StartButton;
