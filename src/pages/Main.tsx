import MemoBox from "../components/MemoBox";
import Button from "../components/Button";
import Container from "../components/Container";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import styled from "styled-components";
import {useState} from "react";
import {IMemo, memoState} from "../atoms";
import {useRecoilValue} from "recoil";

function Main() {
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const [readBookMark, setReadBookMark] = useState<boolean>(
    pathname === "/bookmark" ? true : false
  );
  const memos = useRecoilValue<IMemo[]>(memoState);

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
            navigate("/");
            setReadBookMark(false);
          }}
        >
          모두보기
        </Button>
        <Button
          btnColor="blue"
          onClick={() => {
            navigate("/bookmark");
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
          <Outlet />
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
