import closeImage from "images/icon_close.png"

const CloseButton = (props) => {

    return (
        <div className="flex justify-end">
        <button className="w-[30px]" onClick={() => props.setModalIsOpen(false)}><img src={closeImage} alt="close button"/></button>
        </div>
    )
}

export default CloseButton