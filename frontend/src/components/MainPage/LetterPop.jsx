import LetterPopButtons from "@components/MainPage/LetterPopButtons"
import LetterPopLabel from "@components/MainPage/LetterPopLabel"
import LetterPopTextArea from "@components/MainPage/LetterPopTextArea"

const LetterPop = () => {
    return (
        <div className="w-[100%] h-[100%] text-[20px] font-bold p-[6%]">
            <LetterPopButtons />
            <LetterPopLabel label={"To"} text={"aaa"}/>
            <div className="h-[60%]"><LetterPopTextArea text={"hello"}/></div>
            <LetterPopLabel label={"Made by"} text={"aaa"}/>
        </div>
    )
}

export default LetterPop