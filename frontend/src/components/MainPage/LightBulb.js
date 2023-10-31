const LightBulb = (props) => {
  const { top, left, color, blink, smudge } = props;
  console.log(blink);
  return (
    <div
      className={`absolute ${top} ${left} rotate-1 w-[8px] h-[22px] rounded-full ${color} ${blink} ${smudge}`}
    ></div>
  );
};

export default LightBulb;
