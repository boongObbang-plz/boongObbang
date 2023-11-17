import roofR    from "/images/preview_roof_red.png"
import roofO    from "/images/preview_roof_orange.png"
import roofG    from "/images/preview_roof_green.png"
import roofB    from "/images/preview_roof_blue.png"
import { useRecoilState } from "recoil";
import { cartState } from "@states//ModalState";
import ChooseRoof from "@components/SettingPage/ChooseRoof";
import ChooseLight from "@components/SettingPage/ChooseLight";
import Label from "@components/SettingPage/Label";
import LightBulbs from "@components/MainPage/LightBulbs";

const PreView = () => {
	const [cart, setCart] = useRecoilState(cartState)

	const ColorOptions = [
		{ key: 0, value: roofR},
		{ key: 1, value: roofO},
		{ key: 2, value: roofG},
		{ key: 3, value: roofB},
	]

    return (
        <div className="w-[100%] flex flex-col items-center">
			<Label message={"포장마차 꾸미기"} />
            <div className="relative w-[80%] bg-white rounded-[10px]">
				<img src={ColorOptions[cart.color].value} alt="roof" />
				<div className="absolute top-[40%] w-[100%] px-[10%]">	
					<div className="w-[102%] h-5 rounded-[80%] -rotate-12 shadow-light">
						<LightBulbs selectedIdx={cart.light} secondLine={false} />
					</div> 
					<div className="relative bottom-[20px] w-[102%] h-5 rounded-[80%] rotate-12 shadow-light">
						<LightBulbs selectedIdx={cart.light} secondLine={true} />
					</div>
				</div>
			</div>
			<Label message={"지붕 색상"} />
			<ChooseRoof />
			<Label message={"조명 장식"} />
			<ChooseLight />
        </div>
    )
}

export default PreView