import { atom } from "recoil";

const modalHelperState = atom({
  key: "modalHelperState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

const modalLetterState = atom({
  key: "modalLetterState", // unique ID (with respect to other atoms/selectors)
  default: {
    isOpen: false,
    page: 1,
  }, // default value (aka initial value)
});

const writeLetterState = atom({
  key: "writeLetterState", // unique ID (with respect to other atoms/selectors)
  default: {
    color: 0,
    to: "",
    message: "",
    from: "",
  }, // default value (aka initial value)
});

export { modalHelperState, modalLetterState, writeLetterState };
