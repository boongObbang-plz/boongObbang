import Top from "@components/NotMyMainPage/MakeLetter/TopOfChooseBOB";
import BOB from "@components/NotMyMainPage/MakeLetter/BOB";
import choco from "/images/letter_choco.png";
import cream from "/images/letter_cream.png";
import mint from "/images/letter_mint.png";
import pizza from "/images/letter_pizza.png";
import redbean from "/images/letter_redbean.png";
import sweetpotato from "/images/letter_sweetpotato.png";

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
      <Top />
      <div className="h-full flex flex-col">
        <div className="h-full w-full grid grid-cols-2 gap-2">
          {colors.map((color, index) => (
            <BOB key={index} index={index} color={color} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ChooseBOB;
