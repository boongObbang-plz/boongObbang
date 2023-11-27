import { cartState } from "@states//ModalState";
import { useState } from "react";
import { useRecoilState } from "recoil";

const Name = () => {
    const MAX_LENGTH = 10
    const [nameCount, setNameCount] = useState(0)
    const [name, setName] = useRecoilState(cartState)
    const [errMsg, setErrMsg] = useState("")

    const onChangeName = (e) => {
		if (e.target.value.length > MAX_LENGTH)
			e.target.value = e.target.value.slice(0, MAX_LENGTH)
        if (e.target.value.length === MAX_LENGTH)
            setErrMsg("10자 까지 작성할 수 있어요😢")
        else
            setErrMsg(" ")
        setNameCount(e.target.value.length)
        setName({...name, name: e.target.value})
    } 

    return (
        <div className="w-[80%] h-[150px] flex flex-col">
            <div className="flex items-center justify-between pb-[5px]">
                <div className="text-[24px] min-[400px]:text-[28px] min-[500px]:text-[32px] min-[600px]:text-[35px] py-[1%]">가게 이름</div>
                <div className="flex text-[20px] font-normal">{nameCount} / 10 자</div>
            </div>
            <div className="flex flex-col">
                <div className="flex justify-center">
                    <input className="w-full h-[70px] px-4 text-black bg-white text-[25px] rounded-[10px] outline-none" type="text" onChange={onChangeName} value={name.name} maxLength={MAX_LENGTH}/>
                </div>
                <div className="h-[20px] text-[15px] min-[500px]:text-[16px] min-[600px]:text-[18px]">{errMsg}</div>
            </div>      
        </div>
    )
}

export default Name