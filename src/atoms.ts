import {recoilPersist} from "recoil-persist";
import {atom, selector} from "recoil";
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
// 전체 메모
export const memoState = atom<IMemo[]>({
  key: "memo",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
// 북마크한 메모만
export const memoSelector = selector({
  key: "memoSelector",
  get: ({get}) => {
    const memos = get(memoState);
    return memos.filter((memo) => memo.bookMark === true);
  },
});
