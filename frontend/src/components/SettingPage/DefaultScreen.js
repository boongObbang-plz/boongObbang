import Header   from './Header'
import Name     from './Name'
import PreView  from './PreView'
import StartButton   from './StartButton'
import { useState } from 'react'

const DefaultScreen = () => {
    const [nn, setName] = useState("")
    const [nameError, setNameError] = useState("")
    const [colorValue, setColorValue] = useState(0)
	const [lightValue, setLightValue] = useState(0)

    return (
        <div className="w-[393px] h-[1060px] flex flex-col">
            <Header/>
            <Name setName={setName} setNameError={setNameError}/>
            <div className="flex justify-start pl-[10%] text-[20px] font-normal">{nameError}</div>
            <PreView setColorValue={setColorValue} setLightValue={setLightValue}/>
            <button onClick={() => {console.log(nn)}}>이름 확인</button>
            <StartButton/>
        </div>
    )
}

export default DefaultScreen