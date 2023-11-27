import choco from "/images/letter_choco.png";
import cream from "/images/letter_cream.png";
import mint from "/images/letter_mint.png";
import pizza from "/images/letter_pizza.png";
import redbean from "/images/letter_redbean.png";
import sweetpotato from "/images/letter_sweetpotato.png";
import { useRecoilValue, useSetRecoilState, useRecoilState } from 'recoil';
import { modalReadLetterState, loginState, modalAlertState } from '@states/ModalState';
import { useEffect } from 'react';

const Letter = ({ letterLoc, tagLoc, message, dday }) => {
  const colors = [redbean, cream, sweetpotato, pizza, choco, mint];
  const setModalOpen = useSetRecoilState(modalReadLetterState);
  const [ alertOpen, setAlertOpen ] = useRecoilState(modalAlertState);
  const login = useRecoilValue(loginState);

  useEffect(() => {
    if (alertOpen.isOpen) {
        setTimeout(() => {
            setAlertOpen({isOpen: false, message: ""});
        }, 2000);
    }
  }, [alertOpen]);

  const clickLetter = () => {
    if (login.isLogin)
    {
      if (dday > 0 )
        setAlertOpen({isOpen: true, message: "12월 25일부터 편지를 읽을 수 있어요😢"});
      else
        setModalOpen({ isOpen: true, idx: message.idx })
    }
    
  }

  return (
    <div onClick={() => clickLetter()}>
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
