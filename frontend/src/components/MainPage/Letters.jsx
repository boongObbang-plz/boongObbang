import Letter from "@components/MainPage/Letter";

const Letters = ({ messages }) => {
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
  const rendering = [...messages].reverse().map((message) => {
    if (message) {
      var locationIdx = message.idx >= 9 ? message.idx % 9 : message.idx;
      return (
        <Letter
          className="absolute"
          key={message.idx}
          letterLoc={letterLocation[locationIdx]}
          tagLoc={tagLocation[locationIdx]}
          message={message}
        />
      );
    }
  });

  return <div>{rendering}</div>;
};

export default Letters;