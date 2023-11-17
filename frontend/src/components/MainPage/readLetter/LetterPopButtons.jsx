import CloseButton from "@components/MainPage/readLetter/CloseButton";
import DeleteButton from "@components/MainPage/readLetter/DeleteButton";

const LetterPopButtons = () => {
  return (
    <div className="w-[100%] flex justify-end">
      <DeleteButton />
      <CloseButton />
    </div>
  );
};

export default LetterPopButtons;
