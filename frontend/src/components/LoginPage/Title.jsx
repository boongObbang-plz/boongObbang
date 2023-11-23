import NoticeButton from "@components/LoginPage/NoticeButton"

const Title = () => {
    return (
        <div className="w-full text-title-color pt-[10px] pb-[2%] text-center">
            <NoticeButton />
            <div className="flex justify-center text-[50px]">붕어빵을 부탁해</div> 
            <h2 className="text-[30px]">붕어빵처럼 따뜻한 편지를 나누어요</h2>
        </div>
    )
}

export default Title