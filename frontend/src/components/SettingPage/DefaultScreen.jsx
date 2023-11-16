import Header   from '@components/SettingPage/Header'
import Name     from '@components/SettingPage/Name'
import PreView  from '@components/SettingPage/PreView'
import StartButton   from '@components/SettingPage/StartButton'

const DefaultScreen = () => {

    return (
        <div className="flex flex-col justify-center items-center h-full w-full max-w-[709px] max-h-[1366px] text-title-color">
            <Header />
            <Name />
            <PreView />
            <StartButton/>
        </div>
    )
}

export default DefaultScreen