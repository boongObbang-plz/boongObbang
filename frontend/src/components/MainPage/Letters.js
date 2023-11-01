import Letter from 'components/MainPage/Letter';

const Letters = ({ messages }) => {
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

    const rendering = [...messages].reverse().map((message) => {
        if (message) {
            var locationIdx = message.idx >= 9 ? message.idx : message.idx % 9;
            return (
                    <Letter 
                    key={message.idx}
                    top={location[locationIdx][0]}
                    left={location[locationIdx][1]}
                    message={message} />
            ); 
        }         
    });

    return (
        <div>{rendering}</div>
    );
}

export default Letters;