import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { modalAlertState } from "@states//ModalState";
import { cartState } from "@states//ModalState";

const StartButton = () => {
    const [cart, setCart] = useRecoilState(cartState)
    const [ alertOpen, setAlertOpen ] = useRecoilState(modalAlertState);
    
    useEffect(() => {
        if (alertOpen) {
            setTimeout(() => {
                setAlertOpen({isOpen: false, message: ""})
            }, 2000)
        }
    }, [alertOpen])

	function onClickStartButton() {
        if (cart.name.length === 0)
            setAlertOpen({isOpen: true, message: "가게 이름을 입력해주세요!"})
	}

    return (
        <div className="flex flex-col items-center w-[100%] pt-[40px]">
            <button className="w-[45%] h-[60px] bg-zinc-400 rounded-[10px] text-black text-3xl font-normal" onClick={onClickStartButton}>영업 시작</button>
        </div>
    )
}

export default StartButton