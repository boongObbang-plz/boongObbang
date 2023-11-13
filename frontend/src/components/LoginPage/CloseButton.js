import closeImage from "../../images/icon_close.png"

const CloseButton = (props) => {
    const onClickCloseButton = () => {
        props.setModalIsOpen(false)
    }
    return (
        <div className="w-[100%] flex justify-end">
        <button className="w-[30px]" onClick={onClickCloseButton}><img src={closeImage}/></button>
        </div>
    )
}

export default CloseButton