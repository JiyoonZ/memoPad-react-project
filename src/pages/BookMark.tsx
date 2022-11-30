import {useRecoilValue} from "recoil";
import {IMemo, memoSelector} from "../atoms";
import MemoBox from "../components/MemoBox";

function BookMark() {
  const bookMarkData = useRecoilValue<IMemo[]>(memoSelector);
  return (
    <>
      {bookMarkData.map((memo, index) => (
        <MemoBox key={memo.id} data={memo} index={index} />
      ))}
    </>
  );
}

export default BookMark;
