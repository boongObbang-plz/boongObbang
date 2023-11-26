import LetterPopButtons from "@components/MainPage/readLetter/LetterPopButtons";
import LetterPopLabel from "@components/MainPage/readLetter/LetterPopLabel";
import LetterPopTextArea from "@components/MainPage/readLetter/LetterPopTextArea";

const LetterPop = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <LetterPopButtons />
      <LetterPopLabel label={"To"} text={"aaa"} />
      <LetterPopTextArea text={"hello"} />
      <LetterPopLabel label={"Made by"} text={"aaa"} />
    </div>
  );
};

export default LetterPop;
