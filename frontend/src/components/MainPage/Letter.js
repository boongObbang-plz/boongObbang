import choco from 'images/letter_choco.png';
import cream from 'images/letter_cream.png';
import mint from 'images/letter_mint.png';
import pizza from 'images/letter_pizza.png';
import redbean from 'images/letter_redbean.png';
import sweetpotato from 'images/letter_sweetpotato.png';

const Letter = ({ top, left, selectedIdx }) => {
    const colors = [redbean, cream, sweetpotato, pizza, choco, mint];

    return (
        <div>
            <img className={`absolute ${top} ${left} w-[120px]`} src={colors[selectedIdx]} alt='letter'/>
        </div>
    );
}

export default Letter;