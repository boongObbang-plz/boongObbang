import { atom } from "recoil";

const modalHelperState = atom({
  key: "modalHelperState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

const modalLetterState = atom({
  key: "modalLetterState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

const writeLetterState = atom({
  key: "writeLetterState", // unique ID (with respect to other atoms/selectors)
  default: {
    color: null,
    to: "",
    content: "",
    from: "",
  }, // default value (aka initial value)
});

export { modalHelperState, modalLetterState, writeLetterState };