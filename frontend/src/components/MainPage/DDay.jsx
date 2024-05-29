const DDay = ({ dday }) => {
  return (
    <div className="w-full text-center text-3xl text-title-color min-[400px]:text-[40px] min-[500px]:text-[45px] min-[600px]:text-[50px]">
      {dday <= 0 ? "붕어빵 완성!" : `구워지기까지 ${dday}일`}
    </div>
  );
};

export default DDay;
