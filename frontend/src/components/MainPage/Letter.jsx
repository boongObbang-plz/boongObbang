import choco from "/images/letter_choco.png";
import cream from "/images/letter_cream.png";
import mint from "/images/letter_mint.png";
import pizza from "/images/letter_pizza.png";
import redbean from "/images/letter_redbean.png";
import sweetpotato from "/images/letter_sweetpotato.png";

const Letter = ({ letterLoc, tagLoc, message }) => {
  const colors = [redbean, cream, sweetpotato, pizza, choco, mint];
  return (
    <div>
      <img
        className={`absolute ${letterLoc[0]} ${letterLoc[1]} w-[30%]`}
        src={colors[message.color]}
        alt="letter"
      />
      <div
        className={`absolute ${tagLoc[0]} ${tagLoc[1]} flex justify-center items-center w-[26%] h-[7%] text-[8px]`}
      >
        {/* <h1 className='text-center'>{message.made_by}</h1> */}
        <div>{message.made_by}</div>
      </div>
    </div>
  );
};

export default Letter;
