import CloseButton from "@components/MainPage/CloseButton"
import DeleteButton from "@components/MainPage/DeleteButton"

const LetterPopButtons = () => {

    return (
        <div className="w-[100%] flex justify-end">
            <DeleteButton />
            <CloseButton />
        </div>
    )
}

export default LetterPopButtons