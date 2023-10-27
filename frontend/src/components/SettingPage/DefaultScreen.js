import Button   from './StartButton'
import Header   from './Header'
import Name     from './Name'
import PreView  from './PreView'
import StartButton   from './StartButton'
const DefaultScreen = () => {
    return (
        <div className="w-[393px] h-[1060px] flex flex-col">
            <Header/>
            <Name/>
            <PreView/>
            <StartButton/>
        </div>
    )
}

export default DefaultScreen