import NoticeButton from "./NoticeButton"

const Title = () => {
    return (
        <div className="w-[100%] text-title-color pt-[10px] pb-[2%] text-center">
            <div className="flex justify-center">
                <div className="text-[50px] pl-[4%]">붕어빵을 부탁해</div> 
                <NoticeButton />
            </div>
            <h2 className="text-[30px]">붕어빵처럼 따뜻한 편지를 나누어요</h2>
        </div>
    )
}

export default Title