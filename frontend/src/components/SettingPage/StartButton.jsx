import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { modalAlertState } from "@states//ModalState";
import { cartState } from "@states//ModalState";
import { useNavigate } from "react-router";
const StartButton = () => {
  const [cart, setCart] = useRecoilState(cartState);
  const [alertOpen, setAlertOpen] = useRecoilState(modalAlertState);
  const navigate = useNavigate();

  useEffect(() => {
    if (alertOpen) {
      setTimeout(() => {
        setAlertOpen({ isOpen: false, message: "" });
      }, 2000);
    }
  }, [alertOpen]);

  const onClickStartButton = () => {
    if (cart.name.length === 0)
      setAlertOpen({ isOpen: true, message: "가게 이름을 입력해주세요!" });
    else
      navigate("/mainpage");
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
