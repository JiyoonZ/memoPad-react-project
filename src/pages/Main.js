import MemoBox from "../components/MemoBox";
import Button from "../components/Button";
import Container from "../components/Container";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import {useState} from "react";
function Main() {
  const navigate = useNavigate();
  const existData = JSON.parse(localStorage.getItem("memoList"));
  const [datas, setData] = useState(existData ? existData : null);

  function createHandler() {
    navigate("/create");
  }
  function goDetailHandler() {
    navigate("/detail");
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
          datas.map((ele) => (
            <MemoBox key={ele.id} data={ele} onClick={goDetailHandler} />
          ))
        )}
        {/* {`${Boolean(!datas)} gkgkgk`} */}
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
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 9px;
  }
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  &::-webkit-scrollbar-track {
    background: ${({theme}) => theme.colors.mainGray};
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
