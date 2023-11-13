import { useRecoilState } from "recoil";
import { writeLetterState } from "state/ModalState";

const BOB = ({ index, color }) => {
  const [writeLetter, setWriteLetter] = useRecoilState(writeLetterState);

  const clickBOB = (index) => {
    setWriteLetter({ ...writeLetter, color: index });
    console.log(writeLetter);
    console.log(index);
  };

  return (
    <div className="mx-2 mt-1" onClick={() => clickBOB(index)}>
      <div
        className={` flex  items-center justify-center w-[132px] h-[132px] bg-[#DDDCDC] rounded-xl ${
          index === writeLetter.color
            ? "border-8 border-solid border-black"
            : "border-8"
        }`}
      >
        <img className="w-[90%]" src={color[0]} alt="boongobbang" />
      </div>
      <div className="text-center">{color[1]}</div>
    </div>
  );
};

export default BOB;
