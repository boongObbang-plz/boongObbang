import Header   from '@components/SettingPage/Header'
import Name     from '@components/SettingPage/Name'
import PreView  from '@components/SettingPage/PreView'
import StartButton   from '@components/SettingPage/StartButton'
import { useState } from 'react'

const DefaultScreen = () => {
    const [nn, setName] = useState("")
    const [nameError, setNameError] = useState("")
    const [colorValue, setColorValue] = useState(0)
	const [lightValue, setLightValue] = useState(0)

    return (
        <div className="flex flex-col justify-center items-center h-full w-full max-w-[709px] max-h-[1366px] text-title-color">
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