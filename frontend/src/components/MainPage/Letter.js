import choco from 'images/letter_choco.png';
import cream from 'images/letter_cream.png';
import mint from 'images/letter_mint.png';
import pizza from 'images/letter_pizza.png';
import redbean from 'images/letter_redbean.png';
import sweetpotato from 'images/letter_sweetpotato.png';

const Letter = ({ letterLoc, tagLoc, message }) => {
    const colors = [redbean, cream, sweetpotato, pizza, choco, mint];
    return (
        <div>
            <img className={`absolute ${letterLoc[0]} ${letterLoc[1]} w-[120px]`} src={colors[message.color]} alt='letter'/>
            <div className={`absolute ${tagLoc[0]} ${tagLoc[1]}`}>
                <h1>{message.to}</h1>
                <h1>{message.madeby}</h1>
            </div>
        </div>
    );
}

export default Letter;