import NextCloseBTN from "components/NotMyMainPage/NextCloseBTN";
import BOB from "components/NotMyMainPage/BOB";
import choco from "images/letter_choco.png";
import cream from "images/letter_cream.png";
import mint from "images/letter_mint.png";
import pizza from "images/letter_pizza.png";
import redbean from "images/letter_redbean.png";
import sweetpotato from "images/letter_sweetpotato.png";

const ChooseBOB = () => {
  const colors = [
    [redbean, "팥 붕어빵"],
    [cream, "슈크림 붕어빵"],
    [sweetpotato, "고구마 붕어빵"],
    [pizza, "피자 붕어빵"],
    [choco, "초코 붕어빵"],
    [mint, "민트 초코 붕어빵"],
  ];

  return (
    <>
      <NextCloseBTN />
      <div className="h-[100%] flex flex-col items-start justify-between text-left">
        <div className="grid grid-cols-2">
          {colors.map((color, index) => (
            <BOB key={index} color={color} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ChooseBOB;
