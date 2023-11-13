import LetterPopButtons from "./LetterPopButtons"
import LetterPopLabel from "./LetterPopLabel"
import LetterPopTextArea from "./LetterPopTextArea"
const LetterPop = ({setModalIsOpen}) => {
    return (
        <div className="w-[100%] h-[100%] text-[20px] font-bold p-[6%]">
            <LetterPopButtons setModalIsOpen={setModalIsOpen} />
            <LetterPopLabel label={"To"} text={"aaa"}/>
            <div className="h-[60%]"><LetterPopTextArea text={"hello"}/></div>
            <LetterPopLabel label={"Made by"} text={"aaa"}/>
        </div>
    )
}

export default LetterPop