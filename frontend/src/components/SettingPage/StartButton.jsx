import Name from "./Name"
import { Link } from 'react-router-dom';

const StartButton = () => {

	function onClickStartButton() {
        console.log()
		// if (name.length === 0)
		// 	setNameError("가게 이름을 입력해주세요")
		// else {
		// 	// API 보내주기
		// 	// 성공 알림..?
		// 	// routing
		// }
	}

    return (
        <div className="flex flex-col items-center pt-[40px]">
            <button className="w-[220px] h-[54px] bg-zinc-400 rounded-[10px] text-black text-3xl font-normal" onClick={onClickStartButton}>영업 시작</button>
        </div>
    )
}

export default StartButton