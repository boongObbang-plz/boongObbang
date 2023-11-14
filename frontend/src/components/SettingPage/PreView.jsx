import { useState } from "react";
import roofR    from "../../images/preview_roof_red.png"
import roofO    from "../../images/preview_roof_orange.png"
import roofG    from "../../images/preview_roof_green.png"
import roofB    from "../../images/preview_roof_blue.png"
import light0   from "../../images/light0_ryg.png"
import light1   from "../../images/light1_ryb.png"
import light2   from "../../images/light2_ppb.png"
import light3   from "../../images/light3_yyy.png"

const PreView = () => {
	const ColorOptions = [
		{ key: 0, value: roofR},
		{ key: 1, value: roofO},
		{ key: 2, value: roofG},
		{ key: 3, value: roofB}
	]
	const [previewImage, setPreviewImage] = useState(roofR)

	function onClickRadioButton(e) {
		setPreviewImage(ColorOptions[e.target.value].value)
	}

	function Radio({ children, value, name, defaultChecked, disabled }) {
		return (
			<label>
				<input
					type="radio"
					value={value}
					name={name}
					defaultChecked={defaultChecked}
					disabled={disabled}
                    onChange={onClickRadioButton}
                    className="hidden"
				/>
				{children}
			</label>

		)
	}

	function RadioGroup({ label, children }) {
		return (
			<div className="w-[284px] flex flex-row justify-between">
				{label}
				{children}
			</div>
		)
	}

    return (
        <div className="w-[100%] flex flex-col items-center">
            <div className="text-[35px] font-normal pb-[5px]">포장마차 꾸미기</div>
            <div className="flex items-center w-[80%] h-[228px] bg-white rounded-[10px]"><img src={previewImage}/></div>
			<div className="py-[5px] text-[19px] font-normal">지붕 색상</div>  
            <RadioGroup>
				<Radio name="roof" value="0">
					<div className="w-[55px] h-[55px] bg-[#DF6F5F] rounded-[20px] border-4 border-[#FCF6EB]"></div>
				</Radio>
				<Radio name="roof" value="1">
                    <div className="w-[55px] h-[55px] bg-[#F48E35] rounded-[20px] border-4 border-[#FCF6EB]"></div>
				</Radio>
				<Radio name="roof" value="2">
                    <div className="w-[55px] h-[55px] bg-[#9FB433] rounded-[20px] border-4 border-[#FCF6EB]"></div>
				</Radio>
				<Radio name="roof" value="3">
                    <div className="w-[55px] h-[55px] bg-[#8FBDDF] rounded-[20px] border-4 border-[#FCF6EB]"></div>
				</Radio>
			</RadioGroup>

            <div className="py-[5px] text-[19px] font-normal">조명 장식</div>
            <RadioGroup>
				<Radio name="light" value="0">
					<div className="w-[55px] h-[55px] bg-[#FCF6EB] rounded-[20px] border-4 border-[#FCF6EB]">
                        <img src={light0}/>
                    </div>
				</Radio>
				<Radio name="light" value="1">
                    <div className="w-[55px] h-[55px] bg-[#FCF6EB] rounded-[20px] border-4 border-[#FCF6EB]">
                        <img src={light1}/>
                    </div>
				</Radio>
				<Radio name="light" value="2">
                    <div className="w-[55px] h-[55px] bg-[#FCF6EB] rounded-[20px] border-4 border-[#FCF6EB]">
                        <img src={light2}/>
                    </div>
				</Radio>
				<Radio name="light" value="3">
                    <div className="w-[55px] h-[55px] bg-[#FCF6EB] rounded-[20px] border-4 border-[#FCF6EB]">
                        <img src={light3}/>
                    </div>
				</Radio>
			</RadioGroup>
        </div>
    )

}

export default PreView