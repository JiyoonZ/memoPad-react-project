import MemoBox from "../components/MemoBox";
import Button from "../components/Button";
import Container from "../components/Container";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import {useEffect, useState} from "react";
function Main() {
  const navigate = useNavigate();
  const [datas, setData] = useState(null);
  useEffect(() => {
    const existData = JSON.parse(localStorage.getItem("memoList"));
    if (existData) {
      setData(existData);
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
        <Button btnColor="blue">모두보기</Button>
        <Button btnColor="blue">즐겨찾기</Button>
      </FlexNav>
      <FlexMemo>
        {!datas ? (
          <EmptyMemo>😅 메모가 없습니다.</EmptyMemo>
        ) : (
          datas.map((ele) => <MemoBox key={ele.id} data={ele} />)
        )}
      </FlexMemo>
    </Container>
  );
}
const EmptyMemo = styled.div`
  ${({theme}) => theme.layout.flexCenter};
  font-size: 20px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.4);
`;
const FlexMemo = styled.div`
  height: 80%;
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
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
