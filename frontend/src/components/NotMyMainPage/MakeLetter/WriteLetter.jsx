import Top from "@components/NotMyMainPage/MakeLetter/TopOfWriteLetter";
import { modalAlertState, writeLetterState } from "@states/ModalState";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

const WriteLetter = () => {
  const [writeLetter, setWriteLetter] = useRecoilState(writeLetterState);
  const [alertOpen, setAlertOpen] = useRecoilState(modalAlertState);

  useEffect(() => {
    if (alertOpen.isOpen) {
      setTimeout(() => {
        setAlertOpen({ isOpen: false, message: "" });
      }, 2000);
    }
  }, [alertOpen]);

  const onChangeTo = (e) => {
    if (e.target.value.length > 10) {
      setAlertOpen({ isOpen: true, message: "10자 까지 작성할 수 있어요😢" });
      return;
    }
    setWriteLetter({ ...writeLetter, to: e.target.value });
  };

  const onChangeMessage = (e) => {
    if (e.target.value.length > 500) {
      setAlertOpen({ isOpen: true, message: "500자 까지 작성할 수 있어요😢" });
      return;
    }
    setWriteLetter({ ...writeLetter, message: e.target.value });
  };

  const onChangeFrom = (e) => {
    if (e.target.value.length > 10) {
      setAlertOpen({ isOpen: true, message: "10자 까지 작성할 수 있어요😢" });
      return;
    }
    setWriteLetter({ ...writeLetter, made_by: e.target.value });
  };

  return (
    <>
      <Top />
      <div className="flex w-full h-full flex-col">
        <div className="mt-2 flex h-full w-full justify-center">
          <div className="flex w-1/3 items-center justify-center text-lg min-[400px]:text-[17px] min-[500px]:text-[20px] min-[600px]:text-[24px]">
            To
          </div>
          <input
            type="text"
            className="text-md h-8 w-2/3 rounded-lg border-l-[10px] border-[#DDDCDC] bg-[#DDDCDC] focus:outline-0 min-[400px]:text-[16px] min-[500px]:h-[2rem] min-[500px]:text-[19px] min-[600px]:h-[2.5rem] min-[600px]:text-[23px] min-[700px]:h-[3rem]"
            onChange={onChangeTo}
            value={writeLetter.to}
          />
        </div>
        <textarea
          type="text"
          className="text-md mt-4 h-full w-full rounded-lg border-[25px]  border-[#DDDCDC] bg-[#DDDCDC] focus:outline-0 min-[400px]:text-[16px] min-[500px]:text-[19px] min-[600px]:text-[23px]"
          onChange={onChangeMessage}
          value={writeLetter.message}
        />
        <div className="mt-4 flex justify-between">
          <div className="flex w-1/3 items-center justify-center text-lg min-[400px]:text-[17px] min-[500px]:text-[20px] min-[600px]:text-[24px]">
            Made by
          </div>
          <input
            type="text"
            className="text-md h-8 w-2/3 rounded-lg border-l-[10px] border-[#DDDCDC] bg-[#DDDCDC] focus:outline-0 min-[400px]:text-[16px] min-[500px]:h-[2rem] min-[500px]:text-[19px] min-[600px]:h-[2.5rem] min-[600px]:text-[23px] min-[700px]:h-[3rem]"
            onChange={onChangeFrom}
            value={writeLetter.made_by}
          />
        </div>
      </div>
    </>
  );
};

export default WriteLetter;
