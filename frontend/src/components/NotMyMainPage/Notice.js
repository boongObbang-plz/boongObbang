import MessageTitle from "components/LoginPage/MessageTitle";
import Message from "components/LoginPage/Message";
import CloseButton from "components/LoginPage/CloseButton";

const Notice = () => {
  return (
    <div className="w-[100%] h-[980px] bg-[#FFFFFF] text-[#000000] flex flex-col items-center justify-start px-[7%] pt-[5%] pb-[10%]">
      <CloseButton />
      <div className="h-[100%] flex flex-col items-start justify-between text-left">
        <h3 className="text-[20px] font-bold">🎄붕어빵을 부탁해!🎄</h3>
        <div>
          <Message
            message={
              "당신은 붕어빵 포장마차를 오픈한 친구가 갑자기 급한 볼일이 생겼다며, 포장마차를 맡아달라는 부탁을 받았어요!🤩"
            }
          />
          <Message message={"붕어빵처럼 따뜻한 편지를 나누어보아요!"} />
        </div>
        <div>
          <MessageTitle title={"🍞붕어빵 굽기: "} />
          <Message
            message={
              "주전자 모양의 ‘붕어빵 굽기' 버튼을 클릭하여, 친구를 위해 사랑과 따뜻한 마음을 담은 특별한 붕어빵을 만들어 주세요."
            }
          />
          <Message
            message={
              "12월 24일까지, 여러 가지 붕어빵 중에 고르고 편지를 작성할 수 있어요."
            }
          />
        </div>
        <div>
          <MessageTitle title={"🎁나의 붕어빵 마차 보기: "} />
          <Message
            message={
              "포장마차 모양의 ‘나의 붕어빵 마차 보기' 버튼을 클릭하여, 나의 붕어빵 마차를 오픈하거나, 운영 중인 나의 붕어빵 마차를 볼 수 있어요."
            }
          />
        </div>
        <div>
          <MessageTitle title={"💝붕어빵 마차 오픈하기: "} />
          <Message
            message={
              "친구들이 당신을 위해 붕어빵을 만들어 줄 수 있도록, 지금 바로 붕어빵 포장마차를 오픈하세요."
            }
          />
          <Message
            message={
              "이 특별한 경험을 친구들과 함께 나누고, 2023년의 연말을 특별하게 만들어보세요!"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Notice;
