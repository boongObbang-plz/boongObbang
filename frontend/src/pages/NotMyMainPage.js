import Top from "components/MainPage/Top";
import Display from "components/MainPage/Display";
import NMMBottom from "components/NotMyMainPage/NMMBottom";
import fakeData from "components/MainPage/fake_api_data.json";


const NotMyMainPage = () => {

    // api 연동 전 임시 데이터
  if (fakeData.status === 200)
    console.log("api 연동 성공");
  else
    console.log("api 연동 실패");

  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center items-center h-full w-full max-w-[709px] max-h-[1366px]">
        <Top 
        title={fakeData.data.name}
        roof={fakeData.data.roof}
        light={fakeData.data.light} />
        <Display messages={fakeData.data.messages}/>
        <NMMBottom dday={fakeData.data["d-day"]}/>
      </div>
    </div>
  );
};

export default NotMyMainPage;