import MemoBox from "../components/MemoBox";
import Button from "../components/Button";
import Container from "../components/Container";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";

function Main() {
  const navigate = useNavigate();
  function clickHandler() {
    navigate("/create");
  }
  return (
    <Container>
      <Title>Zeeyoon님의</Title>
      <Title>MemoPad 📚</Title>
      <Flexbox>
        <Button onClick={clickHandler} btnColor="red">
          + NEW
        </Button>
        <Button btnColor="blue">모두보기</Button>
        <Button btnColor="blue">즐겨찾기</Button>
      </Flexbox>
      <MemoBox />
    </Container>
  );
}
const Flexbox = styled.div`
  ${({theme}) => theme.layout.flexbox};
  height: 60px;
  border-bottom: 4px solid ${({theme}) => theme.colors.shadowGray};
`;
const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
  line-height: 1.5em;
`;
export default Main;
