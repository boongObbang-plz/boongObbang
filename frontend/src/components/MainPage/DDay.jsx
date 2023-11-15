const DDay = ({ dday }) => {
  return (
    <div className="absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] mt-1 text-title-color text-3xl text-center w-[100%]">
      <h1>구워지기까지 {dday}일</h1>
    </div>
  );
};

export default DDay;
