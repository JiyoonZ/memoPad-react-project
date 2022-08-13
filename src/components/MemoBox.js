import styled from "styled-components";
import {useNavigate} from "react-router-dom";
function MemoBox({data}) {
  const navigate = useNavigate();
  function goMemoHanlder() {
    navigate("/detail");
  }
  return (
    <BoxWrapper onClick={goMemoHanlder}>
      <MemoTitle>{data.title}</MemoTitle>
      <MemoContent>{data.content}</MemoContent>
    </BoxWrapper>
  );
}
const BoxWrapper = styled.div`
  width: 45%;
  /* height: 240px; */
  margin: 10px 5px;
  background-color: ${({theme}) => theme.colors.white};
  border-radius: 13px;
  box-sizing: border-box;
  box-shadow: 0.3rem 0.3rem 0.6rem #c8d0e7;
  cursor: pointer;
`;
const MemoTitle = styled.div`
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  font-size: 16px;
  font-weight: 500;
  padding: 14px;
  background-color: ${({theme}) => theme.colors.shadowGray};
`;
const MemoContent = styled.div`
  padding: 10px 14px;
  font-size: 14px;
  color: ${({theme}) => theme.colors.darkGray};
`;

export default MemoBox;
