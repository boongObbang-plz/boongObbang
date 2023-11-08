import { useState } from "react"
import NoticeButton from "./NoticeButton"
import Notice from "./Notice"
import Modal from "react-modal"
import Roof from "./Roof"
import Title from "./Title"
import Grill from "components/MainPage/Grill"
import Bottom from "./Bottom"
import Board from "./Board"

const LoginPage = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <div className="w-[393px] h-[1060px] flex flex-col items-center">
            <Roof />
            <NoticeButton setModalIsOpen={setModalIsOpen} className="flex justify-end"/>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                <Notice setModalIsOpen={setModalIsOpen}/>
            </Modal>
            <Title />
            <Grill />
            <Board />
            <Bottom />
        </div>
    )
}

export default LoginPage