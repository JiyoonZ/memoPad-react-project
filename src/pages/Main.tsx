import MemoBox from "../components/MemoBox";
import Button from "../components/Button";
import Container from "../components/Container";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import styled from "styled-components";
import {useState} from "react";
import {IMemo, memoState} from "../atoms";
import {useRecoilValue} from "recoil";
import {HomeIcon} from "../components/LeftNav";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashCan} from "@fortawesome/free-solid-svg-icons";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";

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
  const onDragEnd = () => {};
  return (
    <DragDropContext onDragEnd={onDragEnd}>
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
            memos.map((memo, index) => (
              <MemoBox key={memo.id + ""} data={memo} index={index} />
            ))
          )}
        </FlexMemo>

        <DeleteNav>
          <DeleteIcon>
            <FontAwesomeIcon icon={faTrashCan} className="home" />
          </DeleteIcon>
          <Info>drag and drop here to delete!</Info>
        </DeleteNav>
      </Container>
    </DragDropContext>
  );
}
const Info = styled.p`
  font-size: 13px;
  color: rgba(0, 0, 0, 0.6);
  margin-top: 13px;
`;
const DeleteIcon = styled(HomeIcon)`
  color: red;
  cursor: pointer;
`;
const DeleteNav = styled.div`
  position: absolute;
  bottom: 10px;
  left: 108%;
  width: max-content;
`;

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
  border: 1px solid black;
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
