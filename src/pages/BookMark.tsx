import {useRecoilValue} from "recoil";
import {IMemo, memoSelector} from "../atoms";
import MemoBox from "../components/MemoBox";

function BookMark() {
  const bookMarkData = useRecoilValue<IMemo[]>(memoSelector);
  return (
    <>
      {bookMarkData.map((memo) => (
        <MemoBox key={memo.id} data={memo} />
      ))}
    </>
  );
}

export default BookMark;
