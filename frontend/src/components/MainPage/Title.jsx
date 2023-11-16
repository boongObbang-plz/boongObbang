const Title = ({ title }) => {
  return (
    <div className="flex justify-center items-center h-14 min-[400px]:h-16 min-[500px]:h-20 min-[600px]:h-24 w-fit bg-title-color -mt-[2vh] mb-[2vh] border-15 border-title-color rounded-[10px] text-3xl min-[400px]:text-[40px] min-[500px]:text-[45px] min-[600px]:text-[50px]">
      <h1>{title}</h1>
    </div>
  );
};

export default Title;
