import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

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
    made_by: "",
  }, // default value (aka initial value)
});

const modalSubmitState = atom({
  key: "modalSubmitState", // unique ID (with respect to other atoms/selectors)
  default: {
    isOpen: false,
    isSubmit: 1,
  }, // default value (aka initial value)
});

const modalReadLetterState = atom({
  key: "modalReadLetterState",
  default: {
    isOpen: false,
    idx: 0,
  }
});

const modalLoginHelperState = atom({
  key: "modalLoginHelperState",
  default: false,
});

const cartState = atom({
  key: "roofColorState",
  default: {
    name: "",
    color: 0,
    light: 0,
  },
});

const modalAlertState = atom({
  key: "modalAlertState",
  default: {
    isOpen: false,
    message: "",
  },
});

const loginState = atom({
  key: "loginState",
  default: {
    url: "http://3.35.28.186:8080",
    isLogin: false,
    token: "",
  },
  effects_UNSTABLE: [persistAtom],
});

const lettersState = atom({
  key: "lettersState",
  default: {
    count: 0,
  }
});

export {
  modalHelperState,
  modalLetterState,
  writeLetterState,
  modalSubmitState,
  modalAlertState,
  modalReadLetterState,
  cartState,
  modalLoginHelperState,
  loginState,
  lettersState,
};
