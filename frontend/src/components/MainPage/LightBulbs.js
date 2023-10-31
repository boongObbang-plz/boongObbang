import LightBulb from "components/MainPage/LightBulb";

const LightBulbs = ({ selectedIdx, secondLine }) => {
  const lights = [
    ["bg-red-bulb-color", "bg-yellow-bulb-color", "bg-green-bulb-color"],
    ["bg-red-bulb-color", "bg-yellow-bulb-color", "bg-blue-bulb-color"],
    ["bg-pink-bulb-color", "bg-purple-bulb-color", "bg-blue-bulb-color"],
    ["bg-yellow-bulb-color", "bg-yellow-bulb-color", "bg-yellow-bulb-color"],
  ];

  const location = [
    ["top-[16px]", "left-[10px]"],
    ["top-[19px]", "left-[60px]"],
    ["top-[20px]", "left-[110px]"],
    ["top-[21px]", "left-[160px]"],
    ["top-[22px]", "left-[210px]"],
    ["top-[22px]", "left-[260px]"],
    ["top-[22px]", "left-[310px]"],
    ["top-[22px]", "left-[360px]"],
    ["top-[21px]", "left-[410px]"],
    ["top-[21px]", "left-[460px]"],
    ["top-[20px]", "left-[510px]"],
    ["top-[18px]", "left-[560px]"],
  ];

  const result = [];

  const rendering = () => {
    var i = 0;
    while (i < 12) {
      if (secondLine === false) {
        for (let j = 0; j < 3; j++) {
          result.push(
            <LightBulb
              key={i}
              color={lights[Number(selectedIdx)][j]}
              top={location[i][0]}
              left={location[i][1]}
            />
          );
        }
      } else {
        for (let j = 2; j >= 0; j--) {
          result.push(
            <LightBulb
              key={i}
              color={lights[Number(selectedIdx)][j]}
              top={location[i][0]}
              left={location[i][1]}
            />
          );
        }
      }
      i++;
    }

    return <>{result}</>;
  };

  return <>{rendering()}</>;
};

export default LightBulbs;
