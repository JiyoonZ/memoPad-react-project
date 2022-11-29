export interface IMemo {
  id: number;
  title: string;
  content: string;
  date: string;
  bookMark: boolean;
}

export interface IMemoList {
  memo: IMemo[];
}
