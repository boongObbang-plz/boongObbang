import { useRecoilState } from "recoil";
import { writeLetterState } from "@states/ModalState";

const BOB = ({ index, color }) => {
  const [writeLetter, setWriteLetter] = useRecoilState(writeLetterState);

  const clickBOB = (index) => {
    setWriteLetter({ ...writeLetter, color: index });
  };

  return (
  <div className="w-full justify-center mt-3" onClick={() => clickBOB(index)}>
      <div
        className="flex items-center justify-center h-[90%] bg-[#DDDCDC] rounded-xl"
        style={{ "borderWidth": "5px", "borderColor": index === writeLetter.color ? "#192655" : "#DDDCDC"}}
      >
        <img className="w-[90%]" src={color[0]} alt="boongobbang" />
      </div>
      <div className="mt-1 text-center text-sm min-[400px]:text-[17px] min-[500px]:text-[20px] min-[600px]:text-[24px]">{color[1]}</div>
    </div>
  );
};

export default BOB;
