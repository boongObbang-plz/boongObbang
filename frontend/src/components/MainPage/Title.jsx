const Title = ({ title }) => {
  return (
    <h1 className="flex flex-auto items-center min-[400px]:h-16 min-[500px]:h-20 min-[600px]:h-24 w-fit bg-title-color my-4 border-15 border-title-color rounded-[10px] text-3xl min-[400px]:text-[40px] min-[500px]:text-[45px] min-[600px]:text-[50px]">
      {title}
    </h1>
  );
};

export default Title;
