const LetterPopLabel = ({ label, text }) => {
  return (
    <div className="mt-2 flex w-full justify-center">
      <div className="flex w-1/3 items-center justify-center text-lg min-[400px]:text-[17px] min-[500px]:text-[20px] min-[600px]:text-[24px]">
        {label}
      </div>
      <div className="text-md flex h-8 w-3/4 items-center rounded-lg border-l-[25px] border-[#DDDCDC] bg-[#DDDCDC] min-[400px]:text-[16px] min-[500px]:text-[19px] min-[600px]:text-[23px]">
        {text}
      </div>
    </div>
  );
};

export default LetterPopLabel;
