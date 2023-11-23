import NoticeButton from "@components/LoginPage/NoticeButton"

const Title = () => {
    return (
        <div className="w-full text-title-color pt-[10px] pb-[2%] text-center">
            <NoticeButton />
            <div className="flex justify-center text-[40px] min-[400px]:text-[43px] min-[500px]:text-[46px] min-[600px]:text-[50px] mb-[3%]">
                붕어빵을 부탁해
            </div> 
            <div className="text-[20px] min-[400px]:text-[22px] min-[500px]:text-[24px] min-[600px]:text-[26px]">
                붕어빵처럼 따뜻한 편지를 나누어요
            </div>
        </div>
    )
}

export default Title