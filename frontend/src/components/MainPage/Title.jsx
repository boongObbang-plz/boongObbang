const Title = ({ title }) => {
  return (
    <div className="flex justify-center items-center h-14 w-fit bg-title-color -mt-[2vh] mb-[2vh] border-15 border-title-color rounded-[10px] text-3xl">
      <h1>{title}</h1>
    </div>
  );
};

export default Title;
