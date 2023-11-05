import closeImage from "../../images/icon_close.png"

const CloseButton = () => {

    return (
        <div className="w-[30px] mb-[10px]">
        <button><img src={closeImage}/></button>
        </div>
    )
}

export default CloseButton