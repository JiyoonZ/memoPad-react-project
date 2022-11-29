import MemoBox from "../components/MemoBox";
import Button from "../components/Button";
import Container from "../components/Container";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import {useEffect, useState} from "react";
import React from "react";
import {IMemo, IMemoList} from "../atoms";

function Main() {
  const navigate = useNavigate();
  const [datas, setData] = useState<IMemo[]>();
  const [bookMarkData, setBookMarkData] = useState<IMemo[]>();
  const [readBookMark, setReadBookMark] = useState<boolean>(false);
  useEffect(() => {
    const existData = JSON.parse(localStorage?.getItem("memoList") as any);
    if (existData) {
      setData(existData);
      setBookMarkData(existData.filter((ele: any) => ele.bookMark));
    }
  }, []);
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
        {!datas ? (
          <EmptyMemo>😅 메모가 없습니다.</EmptyMemo>
        ) : readBookMark ? (
          bookMarkData?.map((ele) => <MemoBox key={ele.id} data={ele} />)
        ) : (
          datas.map((ele) => <MemoBox key={ele.id} data={ele} />)
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
