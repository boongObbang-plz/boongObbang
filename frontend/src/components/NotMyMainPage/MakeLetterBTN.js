import makeLetter from 'images/btn_makeLetter.png'
import { Link } from 'react-router-dom';

const MakeLetterBTN = () => {
    return (
        <div className="w-[20%] mr-3">
            <img src={makeLetter} alt='make letter button' />
        </div>
    )
}

export default MakeLetterBTN;