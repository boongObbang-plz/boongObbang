const Title = ({ title }) => {
  return (
    <div className="flex justify-center items-center h-[61px] w-fit bg-title-color mb-8 border-15 border-title-color rounded-[10px] text-[40px]">
      <h1>{title}</h1>
    </div>
  );
};

export default Title;
