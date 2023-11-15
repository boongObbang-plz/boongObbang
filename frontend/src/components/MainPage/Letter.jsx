import choco from "/images/letter_choco.png";
import cream from "/images/letter_cream.png";
import mint from "/images/letter_mint.png";
import pizza from "/images/letter_pizza.png";
import redbean from "/images/letter_redbean.png";
import sweetpotato from "/images/letter_sweetpotato.png";
import { useSetRecoilState } from 'recoil';
import { modalReadLetterState } from '@states/ModalState';

const Letter = ({ letterLoc, tagLoc, message }) => {
  const colors = [redbean, cream, sweetpotato, pizza, choco, mint];
  const setModalOpen = useSetRecoilState(modalReadLetterState);
  return (
    <div onClick={() => setModalOpen(true)}>
      <img className={`absolute ${letterLoc[0]} ${letterLoc[1]} w-[30%]`} src={colors[message.color]} alt='letter'/>
      <div className={`absolute ${tagLoc[0]} ${tagLoc[1]} flex justify-center items-center w-[26%] h-[7%] text-[1.1vh]`}>
        {/* <h1 className='text-center'>{message.made_by}</h1> */}
        <div>{message.made_by}</div>
      </div> 
    </div> 
  );
};

export default Letter;
