const LetterPopLabel = ({ label, text }) => {
  return (
    <div className="h-full w-full flex justify-center mt-2">
      <div className="w-1/3 flex justify-center items-center text-lg min-[400px]:text-[17px] min-[500px]:text-[20px] min-[600px]:text-[24px]">{label}</div>
      <div className="flex h-8 w-3/4 items-center border-l-[25px] border-[#DDDCDC] bg-[#DDDCDC] rounded-lg text-md min-[400px]:text-[16px] min-[500px]:text-[19px] min-[600px]:text-[23px]">{text}</div>
    </div>
  );
};

export default LetterPopLabel;
