import NextCloseBTN from "components/NotMyMainPage/NextCloseBTN";

const ChooseBOB = () => {
  return (
    <>
      <NextCloseBTN />
      <div className="h-[100%] flex flex-col items-start justify-between text-left">
        <div className="grid grid-cols-2">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
      </div>
    </>
  );
};

export default ChooseBOB;
