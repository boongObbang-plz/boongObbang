import Top from "@components/NotMyMainPage/MakeLetter/TopOfWriteLetter";
import { useRecoilState } from "recoil";
import { writeLetterState } from "@states/ModalState";

const WriteLetter = () => {
    const [ writeLetter, setWriteLetter ] = useRecoilState(writeLetterState);

    const onChangeTo = (e) => {
        setWriteLetter({...writeLetter, to: e.target.value});
        console.log(writeLetter.to);
    }

    const onChangeMessage = (e) => {
        setWriteLetter({...writeLetter, message: e.target.value});
        console.log(writeLetter.message);
    }

    const onChangeFrom = (e) => {
        setWriteLetter({...writeLetter, from: e.target.value});
        console.log(writeLetter.from);
    }

    // todo: submit button, 글자수 체크

    return (
    <>
        <Top />
        <div className="h-[100%] flex flex-col items-start justify-between text-left">
            <div className="w-72 flex justify-between mt-2">
                <div className="w-20 flex justify-center text-lg ">To</div>
                <input 
                    type="text"
                    className="w-52 h-8  border-l-[25px] border-[#DDDCDC] bg-[#DDDCDC] rounded-lg focus:outline-0"
                    onChange={onChangeTo}
                    value={writeLetter.to}
                />
            </div>
            <textarea 
                type="text"
                className="w-72 h-96 border-[25px] border-[#DDDCDC] bg-[#DDDCDC] rounded-lg  mt-4 focus:outline-0"
                onChange={onChangeMessage}
                value={writeLetter.message}
            />
            <div className="w-72 flex justify-between mt-4">
                <div className="w-20 flex justify-center text-lg ">From</div>
                <input 
                    type="text"
                    className="w-52 h-8  border-l-[25px] border-[#DDDCDC] bg-[#DDDCDC] rounded-lg focus:outline-0"
                    onChange={onChangeFrom}
                    value={writeLetter.from}
                />
            </div>
        </div>
    </>
    )
}

export default WriteLetter;