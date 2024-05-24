import Letter from "@components/MainPage/Letter";

const MakeLetter = async (idx, letterLoc, tagLoc, message, dday) => {
  return (
    <Letter
      className="absolute"
      key={idx}
      letterLoc={letterLoc}
      tagLoc={tagLoc}
      message={message}
      dday={dday}
    />
  );
};

const Letters = async ({ messages, dday }) => {
  const letterLocation = [
    ["top-[55%]", "left-[5%]"],
    ["top-[55%]", "left-[35%]"],
    ["top-[55%]", "right-[5%]"],
    ["top-[22%]", "left-[5%]"],
    ["top-[22%]", "left-[35%]"],
    ["top-[22%]", "right-[5%]"],
    ["top-[-10%]", "left-[5%]"],
    ["top-[-10%]", "left-[35%]"],
    ["top-[-10%]", "right-[5%]"],
  ];

  const tagLocation = [
    ["top-[57.5%]", "left-[7%]"],
    ["top-[57.5%]", "left-[37%]"],
    ["top-[57.5%]", "right-[7%]"],
    ["top-[24.5%]", "left-[7%]"],
    ["top-[24.5%]", "left-[37%]"],
    ["top-[24.5%]", "right-[7%]"],
    ["top-[-8%]", "left-[7%]"],
    ["top-[-8%]", "left-[37%]"],
    ["top-[-8%]", "right-[7%]"],
  ];

  var idx = messages.length;
  const rendering = await Promise.all(
    [...messages].reverse().map(async (message) => {
      if (message) {
        var locationIdx = --idx >= 9 ? idx : idx;
        return await MakeLetter(
          idx,
          letterLocation[locationIdx],
          tagLocation[locationIdx],
          dday,
        );
      }
    }),
  );

  return <div>{rendering}</div>;
};

export default Letters;
