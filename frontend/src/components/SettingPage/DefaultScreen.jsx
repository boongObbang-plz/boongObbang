import Header   from '@components/SettingPage/Header'
import Name     from '@components/SettingPage/Name'
import PreView  from '@components/SettingPage/PreView'
import StartButton   from '@components/SettingPage/StartButton'
import CloseBTN from '@components/SettingPage/CloseBTN'
import LogoutBTN from '@components/SettingPage/LogoutBTN'
import DeleteIdBTN from '@components/SettingPage/DeleteIdBTN'
import QnABTN from '@components/SettingPage/QnABTN'
import { useState } from 'react'
const DefaultScreen = () => {
    // 201 - false, 200 - true
    const [check, setCheck] = useState(true)

    return (
        <div className="flex flex-col justify-center items-center  w-full min-[733px]:w-[733px] min-w-[375px] text-title-color">
            {check && <CloseBTN />}
            <Header />
            <Name />
            <PreView />
            <StartButton/>
            <div className='flex flex-col w-[100%] items-start pl-[10%] mt-[50px] text-[25px]'>
                {check && <LogoutBTN />}
                {check && <DeleteIdBTN />}
                {check && <QnABTN />}
            </div>
        </div>
    )
}

export default DefaultScreen