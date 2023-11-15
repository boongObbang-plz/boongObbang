import LightBulb from "@components/MainPage/LightBulb";

const LightBulbs = ({ selectedIdx, secondLine }) => {
  // Tailwind CSS는 props를 className로 사용하기 위해서 element값 전체를 요구
  const lights = [
    ["bg-red-bulb-color", "bg-yellow-bulb-color", "bg-green-bulb-color"],
    ["bg-red-bulb-color", "bg-yellow-bulb-color", "bg-blue-bulb-color"],
    ["bg-pink-bulb-color", "bg-purple-bulb-color", "bg-blue-bulb-color"],
    ["bg-yellow-bulb-color", "bg-yellow-bulb-color", "bg-yellow-bulb-color"],
  ];

  const location = [
    ["top-[85%]", "left-[2%]"],
    ["top-[97%]", "left-[10%]"],
    ["top-[105%]", "left-[19%]"],
    ["top-[110%]", "left-[27%]"],
    ["top-[115%]", "left-[36%]"],
    ["top-[115%]", "left-[45%]"],
    ["top-[115%]", "left-[53%]"],
    ["top-[115%]", "left-[62%]"],
    ["top-[110%]", "left-[71%]"],
    ["top-[110%]", "left-[79%]"],
    ["top-[100%]", "left-[88%]"],
    ["top-[85%]", "left-[97%]"],
  ];

  const smudges = {
    "bg-red-bulb-color": ["shadow-red-smudge", "animate-red-blink"],
    "bg-yellow-bulb-color": ["shadow-yellow-smudge", "animate-yellow-blink"],
    "bg-green-bulb-color": ["shadow-green-smudge", "animate-green-blink"],
    "bg-blue-bulb-color": ["shadow-blue-smudge", "animate-blue-blink"],
    "bg-pink-bulb-color": ["shadow-pink-smudge", "animate-pink-blink"],
    "bg-purple-bulb-color": ["shadow-purple-smudge", "animate-purple-blink"],
  };

  const result = [];

  const rendering = () => {
    var i = 0;
    while (i < 12) {
      if (secondLine === false) {
        for (let j = 0; j < 3; j++) {
          result.push(
            <LightBulb
              key={i}
              top={location[i][0]}
              left={location[i][1]}
              color={lights[selectedIdx][j]}
              smudge={smudges[lights[selectedIdx][j]][0]}
              blink={smudges[lights[selectedIdx][j]][1]}
            />,
          );
          i++;
        }
      } else {
        for (let j = 2; j >= 0; j--) {
          result.push(
            <LightBulb
              key={i + 10}
              top={location[i][0]}
              left={location[i][1]}
              color={lights[selectedIdx][j]}
              smudge={smudges[lights[selectedIdx][j]][0]}
              blink={smudges[lights[selectedIdx][j]][1]}
            />,
          );
          i++;
        }
      }
    }

    return <>{result}</>;
  };

  return <>{rendering()}</>;
};

export default LightBulbs;
