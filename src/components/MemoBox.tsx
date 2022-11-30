import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookmark} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {IMemo} from "../atoms";
import {Draggable} from "react-beautiful-dnd";
interface IMemoBox {
  data: IMemo;
  index: number;
}
function MemoBox({data, index}: IMemoBox) {
  const navigate = useNavigate();
  function goMemoHanlder() {
    navigate(`/detail/${data.id}`);
  }
  return (
    <Draggable draggableId={data.id + ""} index={index}>
      {(magic, snapshot) => (
        <BoxWrapper
          className="draggable"
          onClick={goMemoHanlder}
          // isDragging={snapshot.isDragging}
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          {data.bookMark && (
            <FontAwesomeIcon icon={faBookmark} className="mark" />
          )}
          <MemoTitle>{data.id}</MemoTitle>
          <MemoContent>
            {data.content.length > 18
              ? data.content.slice(0, 18) + "····"
              : data.content}
          </MemoContent>
        </BoxWrapper>
      )}
    </Draggable>
  );
}
const BoxWrapper = styled.div`
  width: 46%;
  height: 100px;
  line-height: 18px;
  margin: 10px 5px;
  background-color: ${({theme}) => theme.colors.white};
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0.3rem 0.3rem 0.6rem #c8d0e7;
  position: relative;
  .mark {
    position: absolute;
    top: -5px;
    right: 10px;
    color: #edf25c;
    stroke: white;
    stroke-width: 20;
  }
  top: auto !important;
  left: auto !important;
`;
const MemoTitle = styled.div`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  font-size: 16px;
  font-weight: 500;
  padding: 12px;
  background-color: ${({theme}) => theme.colors.shadowGray};
`;
const MemoContent = styled.div`
  padding: 10px 14px;
  font-size: 14px;
  color: ${({theme}) => theme.colors.darkGray};
`;

export default MemoBox;
