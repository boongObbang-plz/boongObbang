import { cartState } from "@states//ModalState"
import { useRecoilState } from "recoil"
import tmpImage from "/images/light0_ryg.png"

const Roof = ({index}) => {
    const [roofColor, setRoofColor] = useRecoilState(cartState)

    const onClickRoof = (index) => {
        setRoofColor({...roofColor, color: index})
    }

    return (
        <div className="mx-2 mt-1" onClick={() => onClickRoof(index)}>
            <div
            className="flex items-center justify-center bg-[#DDDCDC] rounded-[30px]"
            style={{ "borderWidth": "7px", "borderColor": index === roofColor.color ? "#B3ABAE" : "#FFFFFF",
                "background": index === 0 ? "#DF6F5F" : index === 1 ? "#F48E35" : index === 2 ? "#9FB433" : "#8FBDDF"}}
            >
                <img className="opacity-0" src={tmpImage} alt="temp_icon" />
            </div>
        </div>
    )
}

export default Roof