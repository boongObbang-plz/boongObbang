import MessageTitle from "./MessageTitle"
import Message from "./Message"
import CloseButton from "./CloseButton"

const Notice = () => {

    return (
        <div className="w-[80%] h-[980px] bg-[#FFFFFF] text-[#000000] flex flex-col items-end justify-start px-[7%] pt-[5%] pb-[10%] rounded-[10px]">
            <CloseButton/>
            <div className="h-[100%] flex flex-col items-start justify-between text-left">
            <h3 className="text-[20px] font-bold">🎄환영합니다!🎄</h3>
            <div>
            <Message message={"당신은 붕어빵 포장마차의 사장님 입니다."} />
            <Message message={"지금 바로 영업을 시작하고,"} />
            <Message message={"붕어빵처럼 따뜻한 편지를 나누어보아요!"} />
            </div>
            <div>
            <MessageTitle title={"🎨포장마차 꾸미기: "} />
            <Message message={"다양한 장식으로 포장마차를 꾸며,"} />
            <Message message={"자신만의 붕어빵 포장마차로 영업을 시작하세요."} />
            </div>
            <div>
            <MessageTitle title={"🍞친구에게 붕어빵 부탁하기: "} />
            <Message message={"당신은 갑자기 급한 볼일이 생겼습니다! "} />
            <Message message={"친구들에게 링크를 공유하여 포장마차를 잠시 맡아달라고 부탁해보세요. "} />
            <Message message={"당신의 친구들은 당신을 위해 특별한 붕어빵을 만들고, 사랑과 따뜻한 마음을 담은 메시지를 남겨 줄거에요."} />
            <Message message={"붕어빵은 ‘12월 24일’까지 만들 수 있어요."} />
            </div>
            <div>
            <MessageTitle title={"🎁따뜻한 메세지 확인하기: "} />
            <Message message={"친구들이 붕어빵을 만들면, ‘12월 25일’부터 모든 메시지를 확인할 수 있습니다. "} />
            <Message message={"두근거리는 마음을 참고 기다리면 더 큰 행복을 얻을 수 있을 거에요."} />
            </div>
            <div>
            <MessageTitle title={'💝"붕어빵을 부탁해"를 친구들과 공유하기: '} />
            <Message message={"당신의 친구들과 함께하는 특별한 연말을 만들어 보세요."} />
            </div>
            <div>
            <Message message={"이 특별한 경험을 함께 나누고, 당신의 친구들에게 마음을 전하세요!"} />
            </div>
            </div>
        </div>
    )
}

export default Notice