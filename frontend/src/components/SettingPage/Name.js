import { useState } from "react";

const Name = () => {
    const MAX_LENGTH = 10
    const [name, setName] = useState("")
    const [nameCount, setNameCount] = useState(0)
    const [nameError, setNameError] = useState("")

    const onChangeName = (e) => {
		if (e.target.value.length !== 0)
			setNameError("")
		if (e.target.value.length > MAX_LENGTH)
			e.target.value = e.target.value.slice(0, MAX_LENGTH)
		setNameCount(e.target.value.length)
		//10글자 이상 팝업 + 10글자 제한
		setName(e.target.value)
    } 

    return (
        <div className="w-[100%] h-[150px] flex flex-col">
            <div className="flex flex-row justify-start items-end pb-[5px]">
                <div className="flex pl-[39px] text-[35px] font-normal">가게 이름</div>
                <div className="flex pl-[22%] text-[20px] font-normal">{nameCount} / 10 자</div>
            </div>
            <div className="flex flex-col">
                <div className="flex justify-center"><input className="w-[80%] h-[54px] px-4 text-black bg-white text-[30px] rounded-[10px]" type="text" onChange={onChangeName} maxLength={MAX_LENGTH}/></div>
                <div className="flex justify-start pl-[10%] text-[20px] font-normal">{nameError}hello</div>
            </div>      
        </div>
    )
}

export default Name