import Top from "@components/MainPage/Top";
import Display from "@components/MainPage/Display";
import Bottom from "@components/MainPage/Bottom";
import fakeData from "@components/MainPage/fake_api_data.json";

const DefaultScreen = () => {
  // api 연동 전 임시 데이터
  if (fakeData.status === 200) console.log("api 연동 성공");
  else console.log("api 연동 실패");

  return (
    <div className="flex flex-col justify-center items-center">
      <Top
        title={fakeData.data.name}
        roof={fakeData.data.roof}
        light={fakeData.data.light}
      />
      <Display messages={fakeData.data.messages} />
      <Bottom dday={fakeData.data["d-day"]} />
    </div>
  );
};

export default DefaultScreen;
