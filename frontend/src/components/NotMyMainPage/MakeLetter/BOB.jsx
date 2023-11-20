import { useRecoilState } from "recoil";
import { writeLetterState } from "@states/ModalState";

const BOB = ({ index, color }) => {
  const [writeLetter, setWriteLetter] = useRecoilState(writeLetterState);

  const clickBOB = (index) => {
    setWriteLetter({ ...writeLetter, color: index });
  };

  return (
  <div className="w-full mx-2 mt-3" onClick={() => clickBOB(index)}>
      <div
        className="flex  items-center justify-center w-[90%] h-[90%] bg-[#DDDCDC] rounded-xl"
        style={{ "borderWidth": "5px", "borderColor": index === writeLetter.color ? "#192655" : "#DDDCDC"}}
      >
        <img className="w-[90%]" src={color[0]} alt="boongobbang" />
      </div>
      <div className="text-center">{color[1]}</div>
    </div>
  );
};

export default BOB;
