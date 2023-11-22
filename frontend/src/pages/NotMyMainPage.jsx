import Top from "@components/MainPage/Top";
import Display from "@components/MainPage/Display";
import Bottom from "@components/NotMyMainPage/Bottom";
import fakeData from "@components/MainPage/fake_api_data.json";
import Title from "@components/MainPage/Title";

const NotMyMainPage = () => {
  if (fakeData.status === 200) console.log("api 연동 성공");
  else console.log("api 연동 실패");

  return (
    <div className="flex w-screen h-screen">
      <div className="flex w-full flex-col justify-center items-center">
        <Top
          title={fakeData.data.name}
          roof={fakeData.data.roof}
          light={fakeData.data.light}
        />
        {/* <Title title={fakeData.data.name} /> */}
        <Display messages={fakeData.data.messages} />
        <Bottom dday={fakeData.data["d-day"]} />
      </div>
    </div>
  );
};

export default NotMyMainPage;
