import Letter from 'components/MainPage/Letter';

const Letters = ({ messages }) => {
    const letterLocation = [
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

    const tagLocation = [
        ["top-[10px]", "left-[40px]"],
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
           var locationIdx = message.idx >= 9 ? message.idx % 9 : message.idx;
            return (
                    <Letter 
                    key={message.idx}
                    letterLoc={letterLocation[locationIdx]}
                    tagLoc={tagLocation[locationIdx]}
                    message={message} />
            ); 
        }         
    });

    return (
        <div>{rendering}</div>
    );
}

export default Letters;