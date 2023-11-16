import { useState } from "react";
import roofR    from "/images/preview_roof_red.png"
import roofO    from "/images/preview_roof_orange.png"
import roofG    from "/images/preview_roof_green.png"
import roofB    from "/images/preview_roof_blue.png"
import ChooseRoof from "./ChooseRoof";
import Name from "./Name";
import { useRecoilState } from "recoil";
import { cartState } from "@states//ModalState";
import ChooseLight from "./ChooseLight";

const PreView = ({ setColorValue, setLightValue }) => {
	const [roofColor, setRoofColor] = useRecoilState(cartState)

	const ColorOptions = [
		{ key: 0, value: roofR},
		{ key: 1, value: roofO},
		{ key: 2, value: roofG},
		{ key: 3, value: roofB},
	]

    return (
        <div className="w-[100%] flex flex-col items-center">
            <div className="text-[35px] font-normal pb-[5px]">포장마차 꾸미기</div>
            <div className="flex items-center w-[80%] h-[228px] bg-white rounded-[10px]"><img src={ColorOptions[roofColor.color].value}/></div>
			<div className="py-[5px] text-[19px] font-normal">지붕 색상</div>  
			<ChooseRoof />
			<div className="py-[5px] text-[19px] font-normal">조명 장식</div>
			<ChooseLight />
            
            
        </div>
    )

}

export default PreView