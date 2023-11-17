import { useRecoilState } from "recoil"
import { cartState } from "@states//ModalState"

const Light = ({light, index}) => {
    const [lightColor, setRoofColor] = useRecoilState(cartState)

    const onClickRoof = (index) => {
        setRoofColor({...lightColor, light: index})
    }

    return (
        <div className="mx-2 mt-1" onClick={() => onClickRoof(index)}>
            <div
            className="flex  items-center justify-center w-[100px] h-[100px] bg-[#FFFFFF] rounded-[30px]"
            style={{ "borderWidth": "7px", "borderColor": index === lightColor.light ? "#B3ABAE" : "#FFFFFF"}}
            >
                <img src={light[0]} alt="light_icon" />
            </div>
        </div>
    )
}

export default Light