import MemoBox from "../../components/MemoBox";
import * as S from "../../components/styles";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import styled from "styled-components";
import {useState} from "react";
import {memoState} from "../../atoms";
import {IMemo} from "../../type";
import {useRecoilState} from "recoil";
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
      <S.Container>
        <S.Title>Zeeyoon님의 MemoPad 📚</S.Title>
        <FlexNav>
          <S.Button onClick={createHandler} btnColor="red">
            + NEW
          </S.Button>
          <RightNav>
            <S.Button
              btnColor="blue"
              onClick={() => {
                navigate("/memo");
                setReadBookMark(false);
              }}
            >
              모두보기
            </S.Button>
            <S.Button
              btnColor="blue"
              onClick={() => {
                navigate("/memo/bookmark");
                setReadBookMark(true);
              }}
            >
              즐겨찾기
            </S.Button>
          </RightNav>
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
                <FontAwesomeIcon icon={faTrashCan} />
              </DeleteIcon>
              <Info>drag and drop here to delete!</Info>
              {/* {magic.placeholder} */}
            </DeleteNav>
          )}
        </Droppable>
      </S.Container>
    </DragDropContext>
  );
}
const Info = styled.p`
  font-size: 13px;
  color: rgba(0, 0, 0, 0.6);
  margin-left: 15px;
`;

const DeleteIcon = styled.div`
  color: red;
  cursor: pointer;
`;
interface IAreaProps {
  isDraggingOver: boolean;
}
const DeleteNav = styled.div<IAreaProps>`
  width: 200px;
  height: 50px;
  padding: 5px 15px;
  margin: 10px 0;
  border-radius: 10px;
  border: 1.5px dotted
    ${(props) =>
      props.isDraggingOver ? "transparent" : "rgb(100, 116, 123, .2)"};
  background-color: ${(props) =>
    props.isDraggingOver ? "rgb(100, 116, 123, .2)" : "rgb(100, 116, 123, .1)"};
  display: inline-flex;
  align-items: center;
  position: absolute;
  right: 25px;
  bottom: 10px;
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
  height: 70%;
  width: 100%;
  overflow-y: scroll;
  display: grid;
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  grid-template-columns: repeat(2, 1fr);
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
const RightNav = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default Main;
