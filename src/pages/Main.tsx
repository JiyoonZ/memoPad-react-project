import MemoBox from "../components/MemoBox";
import Button from "../components/Button";
import Container from "../components/Container";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import styled from "styled-components";
import {useState} from "react";
import {IMemo, memoState} from "../atoms";
import {useRecoilState} from "recoil";
import {HomeIcon} from "../components/LeftNav";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashCan} from "@fortawesome/free-solid-svg-icons";
import {DragDropContext, Droppable, DropResult} from "react-beautiful-dnd";

function Main() {
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const [readBookMark, setReadBookMark] = useState<boolean>(
    pathname === "/memo/bookmark" ? true : false
  );
  const [memos, setMemos] = useRecoilState<IMemo[]>(memoState);

  function createHandler() {
    navigate("/memo/create");
  }
  const onDragEnd = (info: DropResult) => {
    const {destination, draggableId} = info;
    if (destination?.droppableId === "two") {
      const deletedMemos = memos.filter((memo) => memo.id !== draggableId);
      setMemos(deletedMemos);
    } else {
      return;
    }
  };
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
              navigate("/memo");
              setReadBookMark(false);
            }}
          >
            모두보기
          </Button>
          <Button
            btnColor="blue"
            onClick={() => {
              navigate("/memo/bookmark");
              setReadBookMark(true);
            }}
          >
            즐겨찾기
          </Button>
        </FlexNav>
        <Droppable droppableId="one">
          {(magic, info) => (
            <FlexMemo ref={magic.innerRef} {...magic.droppableProps}>
              {memos.length === 0 ? (
                <EmptyMemo>😅 메모가 없습니다.</EmptyMemo>
              ) : readBookMark ? (
                <Outlet />
              ) : (
                memos.map((memo, index) => (
                  <MemoBox key={memo.id} data={memo} index={index} />
                ))
              )}
              {magic.placeholder}
            </FlexMemo>
          )}
        </Droppable>
        <Droppable droppableId="two">
          {(magic, info) => (
            <DeleteNav
              ref={magic.innerRef}
              {...magic.droppableProps}
              isDraggingOver={info.isDraggingOver}
            >
              <DeleteIcon>
                <FontAwesomeIcon icon={faTrashCan} className="home" />
              </DeleteIcon>
              <Info>drag and drop here to delete!</Info>
              {magic.placeholder}
            </DeleteNav>
          )}
        </Droppable>
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
interface IAreaProps {
  isDraggingOver: boolean;
}
const DeleteNav = styled.div<IAreaProps>`
  position: absolute;
  bottom: 10px;
  left: 103%;
  width: 200px;
  height: 70px;
  padding: 15px;
  border-radius: 10px;
  border: 1.5px dotted
    ${(props) =>
      props.isDraggingOver ? "transparent" : "rgb(100, 116, 123, .2)"};
  background-color: ${(props) =>
    props.isDraggingOver ? "rgb(100, 116, 123, .2)" : "transparent"};
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
  height: 76%;
  width: 100%;
  overflow-y: scroll;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* flex-wrap: wrap; */
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
