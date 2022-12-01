import {useRecoilValue} from "recoil";
import {IMemo, memoSelector} from "../atoms";
import MemoBox from "../components/MemoBox";
import styled from "styled-components";

function BookMark() {
  const bookMarkData = useRecoilValue<IMemo[]>(memoSelector);
  console.log(bookMarkData.length);
  return (
    <>
      {bookMarkData.length !== 0 ? (
        bookMarkData.map((memo, index) => (
          <MemoBox key={memo.id} data={memo} index={index} />
        ))
      ) : (
        <EmptyMemo>😹 즐겨찾기한 메모가 없습니다. </EmptyMemo>
      )}
    </>
  );
}
const EmptyMemo = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  margin: 80px;
  ${({theme}) => theme.layout.flexCenter};
`;
export default BookMark;
