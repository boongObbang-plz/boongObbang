import Letter from 'components/MainPage/Letter';

const Letters = () => {
    const location = [
        ["top-[140px]", "left-[40px]"],
        ["top-[140px]", "left-[145px]"],
        ["top-[140px]", "left-[250px]"],
        ["top-[60px]", "left-[40px]"],
        ["top-[60px]", "left-[145px]"],
        ["top-[60px]", "left-[250px]"],
        ["top-[-25px]", "left-[40px]"],
        ["top-[-25px]", "left-[145px]"],
        ["top-[-25px]", "left-[250px]"],
    ];

    return (
        <div>
            <Letter 
            top={location[0][0]}
            left={location[0][1]}
            selectedIdx={1} />
        </div>
    );
}

export default Letters;