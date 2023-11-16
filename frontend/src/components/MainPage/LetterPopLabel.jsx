import LetterPopTextArea from "@components/MainPage/LetterPopTextArea"

const LetterPopLabel = ({ label, text }) => {
    return (
        <div className="flex items-center my-[5%]">
            <div className="w-[35%]">{label}</div>
            <div className="w-[65%]"><LetterPopTextArea text={text}/></div>
        </div>
    )
}

export default LetterPopLabel