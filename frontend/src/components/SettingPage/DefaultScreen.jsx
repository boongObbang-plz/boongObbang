import Header   from '@components/SettingPage/Header'
import Name     from '@components/SettingPage/Name'
import PreView  from '@components/SettingPage/PreView'
import StartButton   from '@components/SettingPage/StartButton'

const DefaultScreen = () => {

    return (
        <div className="flex flex-col justify-center items-center text-title-color">
            <Header />
            <Name />
            <PreView />
            <StartButton/>
        </div>
    )
}

export default DefaultScreen