import choco from "/images/letter_choco.png";
import cream from "/images/letter_cream.png";
import mint from "/images/letter_mint.png";
import pizza from "/images/letter_pizza.png";
import redbean from "/images/letter_redbean.png";
import sweetpotato from "/images/letter_sweetpotato.png";
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { modalReadLetterState, loginState } from '@states/ModalState';

const Letter = ({ letterLoc, tagLoc, message }) => {
  const colors = [redbean, cream, sweetpotato, pizza, choco, mint];
  const setModalOpen = useSetRecoilState(modalReadLetterState);
  const login = useRecoilValue(loginState);

  const checkLogin = () => {
    if (login.isLoin)
      setModalOpen(true)
  }

  return (
    <div onClick={() => checkLogin()}>
      <img
        className={`absolute ${letterLoc[0]} ${letterLoc[1]} w-[30%]`}
        src={colors[message.color]}
        alt="letter"
      />
      <div
        className={`absolute ${tagLoc[0]} ${tagLoc[1]} flex justify-center items-center w-[26%] h-[7%] text-[8px] min-[400px]:text-[11px] min-[500px]:text-[13px] min-[600px]:text-[16px]`}
      >
        {/* <h1 className='text-center'>{message.made_by}</h1> */}
        <div>{message.made_by}</div>
      </div> 
    </div> 
  );
};

export default Letter;
