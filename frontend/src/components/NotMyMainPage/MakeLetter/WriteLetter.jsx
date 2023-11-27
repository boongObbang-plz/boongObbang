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
    }

    const onChangeMessage = (e) => {
        if (e.target.value.length > 500) {
            setAlertOpen({isOpen: true, message: "500자 까지 작성할 수 있어요😢"});
            return;
        }
        setWriteLetter({...writeLetter, message: e.target.value});
    }

    const onChangeFrom = (e) => {
        if (e.target.value.length > 10) {
            setAlertOpen({isOpen: true, message: "10자 까지 작성할 수 있어요😢"});
            return;
        }
        setWriteLetter({...writeLetter, made_by: e.target.value});
    }

    return (
    <>
        <Top />
        <div className="h-full w-full flex flex-col">
            <div className="h-full w-full flex justify-center mt-2">
                <div className="w-1/3 flex justify-center items-center text-lg min-[400px]:text-[17px] min-[500px]:text-[20px] min-[600px]:text-[24px]">To</div>
                <input 
                    type="text"
                    className="h-8 w-3/4 border-l-[25px] border-[#DDDCDC] bg-[#DDDCDC] rounded-lg focus:outline-0 min-[500px]:h-[2rem] min-[600px]:h-[2.5rem] min-[700px]:h-[3rem]"
                    onChange={onChangeTo}
                    value={writeLetter.to}
                />
            </div>
            <textarea 
                type="text"
                className="w-full h-[22rem] border-[25px] border-[#DDDCDC] bg-[#DDDCDC] rounded-lg  mt-4 focus:outline-0 min-[500px]:h-[29.5rem] min-[600px]:h-[35rem] min-[700px]:h-[40rem]"
                onChange={onChangeMessage}
                value={writeLetter.message}
            />
            <div className="flex justify-between mt-4">
                <div className="w-1/3 flex justify-center items-center text-lg min-[400px]:text-[17px] min-[500px]:text-[20px] min-[600px]:text-[24px]">Made by</div>
                <input 
                    type="text"
                    className="h-8  w-3/4 border-l-[25px] border-[#DDDCDC] bg-[#DDDCDC] rounded-lg focus:outline-0 min-[500px]:h-[2rem] min-[600px]:h-[2.5rem] min-[700px]:h-[3rem]"
                    onChange={onChangeFrom}
                    value={writeLetter.made_by}
                />
            </div>
        </div>
    </>
    )
}

export default WriteLetter;