import LetterPopTextArea from "./LetterPopTextArea"

const LetterPopLabel = ({label, text}) => {
    return (
        <div className="flex items-center my-[5%]">
            <div className="w-[30%]">{label}</div>
            <div className="w-[70%]"><LetterPopTextArea text={text}/></div>
        </div>
    )
}

export default LetterPopLabel