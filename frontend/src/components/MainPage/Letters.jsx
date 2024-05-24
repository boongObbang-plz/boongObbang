import Letter from "@components/MainPage/Letter";
import { useEffect, useState } from "react";

const Letters = ({ messages, dday }) => {
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
  const [letters, setLetters] = useState([]);
  useEffect(() => {
    Promise.all(
      [...messages].reverse().map((message) => {
        if (message) {
          var locationIdx = --idx >= 9 ? idx : idx;
          return (
            <Letter
              className="absolute"
              key={idx}
              letterLoc={letterLocation[locationIdx]}
              tagLoc={tagLocation[locationIdx]}
              message={message}
              dday={dday}
            />
          );
        }
      }),
    ).then((tags) => setLetters(tags));
  }, []);

  console.log(letters);

  return <div>{letters}</div>;
};

export default Letters;
