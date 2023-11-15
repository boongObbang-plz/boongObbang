const BOB = ({ color }) => {
  return (
    <div className="m-2">
      <div className="flex items-center justify-center w-[132px] h-[132px] bg-[#DDDCDC] rounded-xl">
        <img className="w-[90%]" src={color[0]} alt="choco boongobbang" />
      </div>
      <div className="text-center">{color[1]}</div>
    </div>
  );
};

export default BOB;
