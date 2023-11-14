import { useRecoilState } from "recoil";
import { writeLetterState } from "@states/ModalState";

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
        className="flex  items-center justify-center w-[132px] h-[132px] bg-[#DDDCDC] rounded-xl"
        style={{ "borderWidth": "5px", "borderColor": index === writeLetter.color ? "#192655" : "#DDDCDC"}}
      >
        <img className="w-[90%]" src={color[0]} alt="boongobbang" />
      </div>
      <div className="text-center">{color[1]}</div>
    </div>
  );
};

export default BOB;
