import { useState } from "react";

const Name = (props) => {
    const MAX_LENGTH = 10
    const [nameCount, setNameCount] = useState(0)

    const onChangeName = (e) => {
		if (e.target.value.length !== 0)
			props.setNameError("")
		if (e.target.value.length > MAX_LENGTH)
			e.target.value = e.target.value.slice(0, MAX_LENGTH)
        if (e.target.value.length === MAX_LENGTH)
            props.setNameError("10자 까지 작성할 수 있어요😢")
        setNameCount(e.target.value.length)
        console.log(props.nameError)
        props.setName(e.target.value)
    } 

    return (
        <div className="w-[100%] h-[150px] flex flex-col">
            <div className="flex flex-row justify-start items-end pb-[5px]">
                <div className="flex pl-[39px] text-[35px] font-normal">가게 이름</div>
                <div className="flex pl-[22%] text-[20px] font-normal">{nameCount} / 10 자</div>
            </div>
            <div className="flex flex-col">
                <div className="flex justify-center"><input className="w-[80%] h-[54px] px-4 text-black bg-white text-[25px] rounded-[10px]" type="text" onChange={onChangeName} maxLength={MAX_LENGTH}/></div>
            </div>      
        </div>
    )
}

export default Name