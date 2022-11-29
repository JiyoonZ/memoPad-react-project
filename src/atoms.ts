import {recoilPersist} from "recoil-persist";
import {atom} from "recoil";
export interface IMemo {
  id: number;
  title: string;
  content: string;
  date: string;
  bookMark: boolean;
}

const {persistAtom} = recoilPersist({
  key: "memoList",
  storage: localStorage,
});

export const memoState = atom<IMemo[]>({
  key: "memo",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
