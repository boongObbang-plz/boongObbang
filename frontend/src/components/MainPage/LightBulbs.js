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
    ["top-[19px]", "left-[45px]"],
    ["top-[20px]", "left-[80px]"],
    ["top-[21px]", "left-[115px]"],
    ["top-[22px]", "left-[150px]"],
    ["top-[22px]", "left-[185px]"],
    ["top-[22px]", "left-[220px]"],
    ["top-[22px]", "left-[255px]"],
    ["top-[21px]", "left-[290px]"],
    ["top-[21px]", "left-[325px]"],
    ["top-[20px]", "left-[360px]"],
    ["top-[18px]", "left-[395px]"],
  ];

  const result = [];

  const rendering = () => {
    console.log("hi");
    var i = 0;
    while (i < 12) {
      if (secondLine === false) {
        for (let j = 0; j < 3; j++) {
          // console.log("here");
          result.push(
            <LightBulb
              key={i}
              color={lights[selectedIdx][j]}
              top={location[i][0]}
              left={location[i][1]}
            />
          );
          i++;
        }
      } else {
        for (let j = 2; j >= 0; j--) {
          // console.log("hi");
          result.push(
            <LightBulb
              key={i + 10}
              color={lights[selectedIdx][j]}
              top={location[i][0]}
              left={location[i][1]}
            />
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
