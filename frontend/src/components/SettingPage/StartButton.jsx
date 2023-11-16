import Name from "./Name"
import { Link } from 'react-router-dom';

const StartButton = () => {

	function onClickStartButton() {
        console.log()
	}

    return (
        <div className="flex flex-col items-center pt-[40px]">
            <button className="w-[220px] h-[54px] bg-zinc-400 rounded-[10px] text-black text-3xl font-normal" onClick={onClickStartButton}>영업 시작</button>
        </div>
    )
}

export default StartButton