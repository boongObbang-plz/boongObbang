import Roof from "@components/SettingPage/Roof"

const ChooseRoof = () => {
    const roofs = [
        0, 1, 2, 3,
    ]

    return (
        <>
            <div className="h-[100%] w-[80%]">
                <div className="grid grid-cols-4">
                    {roofs.map((index) => (
                        <Roof key={index} index={index} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default ChooseRoof