import Top from "@components/NotMyMainPage/MakeLetter/TopOfWriteLetter";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { writeLetterState, modalAlertState } from "@states/ModalState";

const WriteLetter = () => {
    const [ writeLetter, setWriteLetter ] = useRecoilState(writeLetterState);
    const [ alertOpen, setAlertOpen ] = useRecoilState(modalAlertState);

    useEffect(() => {
        if (alertOpen.isOpen) {
            setTimeout(() => {
                setAlertOpen({isOpen: false, message: ""});
            }, 2000);
        }
    }, [alertOpen]);

    const onChangeTo = (e) => {
        if (e.target.value.length > 10) {
            setAlertOpen({isOpen: true, message: "10자 까지 작성할 수 있어요😢"});
            return;
        }
        setWriteLetter({...writeLetter, to: e.target.value});
        console.log(writeLetter.to);
    }

    const onChangeMessage = (e) => {
        if (e.target.value.length > 500) {
            setAlertOpen({isOpen: true, message: "500자 까지 작성할 수 있어요😢"});
            return;
        }
        setWriteLetter({...writeLetter, message: e.target.value});
        console.log(writeLetter.message);
    }

    const onChangeFrom = (e) => {
        if (e.target.value.length > 10) {
            setAlertOpen({isOpen: true, message: "10자 까지 작성할 수 있어요😢"});
            return;
        }
        setWriteLetter({...writeLetter, from: e.target.value});
        console.log(writeLetter.from);
    }

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
                className="w-72 h-[23rem] border-[25px] border-[#DDDCDC] bg-[#DDDCDC] rounded-lg  mt-4 focus:outline-0"
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