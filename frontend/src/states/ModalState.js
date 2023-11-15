import { atom } from "recoil";

const modalHelperState = atom({
  key: "modalHelperState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

const modalLetterState = atom({
  key: "modalLetterState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

const modalNoticeState = atom({
  key: "modalNoticeState",
  default: false,
});

const modalReadLetterState = atom({
  key: "modalReadLetterState",
  default: false,
});

const modalShareState = atom({
  key: "modalShareState",
  default: false,
});

export { modalHelperState, modalLetterState, modalNoticeState, modalReadLetterState, modalShareState };
