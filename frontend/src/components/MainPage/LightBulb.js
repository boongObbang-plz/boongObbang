const LightBulb = (props) => {
  const { top, left, color, blink, smudge } = props;
  return (
    <div
      className={`absolute ${top} ${left} rotate-1 w-[2%] h-[22px] rounded-full ${color} ${blink} ${smudge}`}
    ></div>
  );
};

export default LightBulb;
