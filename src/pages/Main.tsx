import React from "react";
import MemoBox from "../components/MemoBox";
import Button from "../components/Button";
import Container from "../components/Container";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {IMemo, memoState} from "../atoms";
import {useRecoilState} from "recoil";

function Main() {
  const navigate = useNavigate();
  const [bookMarkData, setBookMarkData] = useState<IMemo[]>();
  const [readBookMark, setReadBookMark] = useState<boolean>(false);
  const [memos, setMemos] = useRecoilState<IMemo[]>(memoState);

  function createHandler() {
    navigate("/create");
  }
  return (
    <Container>
      <Title>Zeeyoon님의</Title>
      <Title>MemoPad 📚</Title>
      <FlexNav>
        <Button onClick={createHandler} btnColor="red">
          + NEW
        </Button>
        <Button
          btnColor="blue"
          onClick={() => {
            setReadBookMark(false);
          }}
        >
          모두보기
        </Button>
        <Button
          btnColor="blue"
          onClick={() => {
            setReadBookMark(true);
          }}
        >
          즐겨찾기
        </Button>
      </FlexNav>
      <FlexMemo>
        {memos.length === 0 ? (
          <EmptyMemo>😅 메모가 없습니다.</EmptyMemo>
        ) : readBookMark ? (
          bookMarkData?.map((ele) => <MemoBox key={ele.id} data={ele} />)
        ) : (
          memos.map((memo) => <MemoBox key={memo.id} data={memo} />)
        )}
      </FlexMemo>
    </Container>
  );
}
const EmptyMemo = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  ${({theme}) => theme.layout.flexCenter};
`;
const FlexMemo = styled.div`
  height: 80%;
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const FlexNav = styled.div`
  ${({theme}) => theme.layout.flexbox};
  height: 30px;
`;
const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
  line-height: 1.5em;
`;
export default Main;
