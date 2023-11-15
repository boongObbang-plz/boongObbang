const Title = ({ title }) => {
  return (
    <div className="flex justify-center items-center h-14 w-fit bg-title-color m-3 border-15 border-title-color rounded-[10px] text-3xl">
      <h1>{title}</h1>
    </div>
  );
};

export default Title;
