import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookmark} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {IMemo} from "../atoms";
interface IMemoBox {
  data: IMemo;
}
function MemoBox({data}: IMemoBox) {
  const navigate = useNavigate();
  function goMemoHanlder() {
    navigate(`/detail/${data.id}`);
  }
  return (
    <BoxWrapper onClick={goMemoHanlder}>
      {data.bookMark && <FontAwesomeIcon icon={faBookmark} className="mark" />}
      <MemoTitle>{data.title}</MemoTitle>
      <MemoContent>{data.content}</MemoContent>
    </BoxWrapper>
  );
}
const BoxWrapper = styled.div`
  width: 46%;
  height: min-content;
  margin: 10px 5px;
  background-color: ${({theme}) => theme.colors.white};
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0.3rem 0.3rem 0.6rem #c8d0e7;
  position: relative;
  cursor: pointer;
  .mark {
    position: absolute;
    top: -5px;
    right: 10px;
    color: #edf25c;
    stroke: white;
    stroke-width: 20;
  }
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
