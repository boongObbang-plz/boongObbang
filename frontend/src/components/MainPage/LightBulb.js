const LightBulb = (props) => {
  const { color, top, left } = props;
  return (
    <div
      className={`absolute ${top} ${left} rotate-1 w-[8px] h-[22px] rounded-full ${color}`}
    ></div>
  );
};

export default LightBulb;
