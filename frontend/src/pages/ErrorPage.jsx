import ErrorContents from "@components/ErrorPage/ErrorContents";

const ErrorPage = () => {
  return (
    <div className="flex w-screen h-screen justify-center">
        <div className="flex w-full h-full flex-col justify-center items-center min-[733px]:w-[733px] min-w-[375px]">
            <ErrorContents />
        </div>
    </div>
  );
};

export default ErrorPage;
