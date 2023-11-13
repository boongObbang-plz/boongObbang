import CloseButton from "components/LoginPage/CloseButton"
import DeleteButton from "./DeleteButton"

const LetterPopButtons = (props) => {

    return (
        <div className="w-[100%] flex justify-end">
            <DeleteButton />
            <CloseButton setModalIsOpen={props.setModalIsOpen}/>
        </div>
    )
}

export default LetterPopButtons