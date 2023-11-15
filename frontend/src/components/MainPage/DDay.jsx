const DDay = ({ dday }) => {
  return (
    <div className="absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] mt-1 text-title-color text-3xl min-[400px]:text-[40px] min-[500px]:text-[45px] min-[600px]:text-[50px] text-center w-[100%]">
      <h1>구워지기까지 {dday}일</h1>
    </div>
  );
};

export default DDay;
