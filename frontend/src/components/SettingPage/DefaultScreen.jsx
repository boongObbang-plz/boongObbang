import Header   from '@components/SettingPage/Header'
import Name     from '@components/SettingPage/Name'
import PreView  from '@components/SettingPage/PreView'
import StartButton   from '@components/SettingPage/StartButton'
import CloseBTN from '@components/SettingPage/CloseBTN'
import LogoutBTN from '@components/SettingPage/LogoutBTN'
import DeleteIdBTN from '@components/SettingPage/DeleteIdBTN'
import QnABTN from '@components/SettingPage/QnABTN'
import { useEffect, useState } from 'react'
import { useRecoilState } from "recoil";
import { cartState, loginState } from "@states//ModalState";

const DefaultScreen = () => {
    const [login, setLogin] = useRecoilState(loginState);
    const [cart, setCart] = useRecoilState(cartState);
    const [check, setCheck] = useState(login.isLogin);

    useEffect(() => {
        console.log("islogin: "+login.isLogin)
        if (login.isLogin) {
            fetch(login.url + "/mainpage", {
                method: "GET",
                headers: {
                    Authorization: login.token
                },
            })
            .then(res => res.json())
            .then(data => {
                console.log("settings-status : "+data.status)
                setCart({ name: data.data.name, color: data.data.color, light: data.data.light })
            })
        }
    }, [])

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