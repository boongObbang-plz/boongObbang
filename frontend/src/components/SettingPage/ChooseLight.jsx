import light0   from "/images/light0_ryg.png"
import light1   from "/images/light1_ryb.png"
import light2   from "/images/light2_ppb.png"
import light3   from "/images/light3_yyy.png"
import Light from "@components/SettingPage/Light"
const ChooseLight = () => {
    const lights = [
        [light0, 0],
        [light1, 1],
        [light2, 2],
        [light3, 3]
    ]

    return (
        <>
            <div className="h-[100%] flex flex-col items-start justify-between text-left">
                <div className="grid grid-cols-4">
                    {lights.map((light, index) => (
                        <Light key={index} light={light} index={index} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default ChooseLight