import Top from "@components/MainPage/Top";
import Display from "@components/MainPage/Display";
import Bottom from "@components/NotMyMainPage/Bottom";
import fakeData from "@components/MainPage/fake_api_data.json";
import Title from "@components/MainPage/Title";

const NotMyMainPage = () => {
  if (fakeData.status === 200) console.log("api 연동 성공");
  else console.log("api 연동 실패");

  return (
    <div className="flex w-screen h-full">
      <div className="flex w-full h-full flex-col justify-center items-center">
        <div className="flex h-3/5 w-full ">
          <Top
            title={fakeData.data.name}
            roof={fakeData.data.roof}
            light={fakeData.data.light}
            />
        </div>
        <div className="h-2/5 w-full ">
          <Display messages={fakeData.data.messages} />
        </div>
        <div className="flex h-1/5 w-full">
          <Bottom dday={fakeData.data["d-day"]} />
        </div>
      </div>
    </div>
  );
};

export default NotMyMainPage;
