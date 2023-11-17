import { cartState } from "@states//ModalState"
import { useRecoilState } from "recoil"

const Roof = ({index}) => {
    const [roofColor, setRoofColor] = useRecoilState(cartState)

    const onClickRoof = (index) => {
        setRoofColor({...roofColor, color: index})
    }

    return (
        <div className="mx-2 mt-1" onClick={() => onClickRoof(index)}>
            <div
            className="flex items-center justify-center w-[132px] h-[132px] bg-[#DDDCDC] rounded-[30px]"
            style={{ "borderWidth": "7px", "borderColor": index === roofColor.color ? "#B3ABAE" : "#FFFFFF",
                "background": index === 0 ? "#DF6F5F" : index === 1 ? "#F48E35" : index === 2 ? "#9FB433" : "#8FBDDF"}}
            >
            </div>
        </div>
    )
}

export default Roof