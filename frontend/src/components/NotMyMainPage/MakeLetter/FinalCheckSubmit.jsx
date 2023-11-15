import icon_submit from "/images/icon_submit.png";
import icon_close from "/images/icon_close.png";
import { useRecoilState, useSetRecoilState } from "recoil";
import { modalLetterState, writeLetterState, modalSubmitState } from "@states//ModalState";

const FinalCheckSubmit = () => {
    const setLetterOpen = useSetRecoilState(modalLetterState);
    const [writeLetter, setWriteLetter] = useRecoilState(writeLetterState);
    const setSubmitOpen = useSetRecoilState(modalSubmitState);

    const clickSubmit = () => {
        setSubmitOpen(false);
        setLetterOpen({ isOpen: false, page: 1 });

        alert("편지가 등록되었어요😉");
        //todo: api 호출
        setWriteLetter({ color: 0, to: "", message: "", from: "" });
    }

    return (
        <div className="flex flex-col text-center">
            <div>등록 후 수정 및 삭제가 불가능해요🥺</div>
            <div>등록 하시겠어요?</div>
            <div className="flex justify-center">
                <img 
                    src={icon_submit}
                    className="w-[30px] mt-2 mr-3"
                    onClick={() => clickSubmit()}
                    alt="submit button"
                />
                <img
                    src={icon_close}
                    className="w-[30px] mt-2 ml-3"
                    onClick={() => setSubmitOpen(false)}
                    alt="close button"
                />
            </div>
        </div>
    )
}

export default FinalCheckSubmit