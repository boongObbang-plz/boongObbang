const NoticeButton = (props) => {
    const onClickNoticeButton = () => {
        props.setModalIsOpen(true)
    }
    return (
        <div className="w-[100%] flex justify-end pt-[10px] pr-[5%]">
            <button onClick={onClickNoticeButton} className="w-[30px] h-[30px] bg-[#FFFFFF] rounded-[20px] text-[#000000] text-[20px] font-bold">?</button>
        </div>
    )
}

export default NoticeButton