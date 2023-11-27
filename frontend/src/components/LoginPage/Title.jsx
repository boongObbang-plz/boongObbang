import NoticeButton from "@components/LoginPage/NoticeButton"

const Title = () => {
    return (
        <div className="w-full text-title-color pt-[10px] pb-[2%] text-center">
            <div className="relative flex justify-center">            
                <div className="flex justify-center items-center text-[40px] min-[400px]:text-[43px] min-[500px]:text-[46px] min-[600px]:text-[50px]">
                    붕어빵을 부탁해
                </div>
                <NoticeButton />
            </div>
            <div className="text-[20px] min-[400px]:text-[22px] min-[500px]:text-[24px] min-[600px]:text-[26px]">
                붕어빵처럼 따뜻한 편지를 나누어요
            </div>
        </div>
    )
}

export default Title