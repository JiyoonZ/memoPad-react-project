import MemoBox from "../components/MemoBox";
import Nav from "../components/Nav";
import Container from "../components/Container";
import styled from "styled-components";

function Main() {
  return (
    <Container>
      <Title>Zeeyoon님의</Title>
      <Title>MemoPad 📚</Title>
      <Nav />
      <MemoBox />
    </Container>
  );
}
const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
  line-height: 1.5em;
`;
export default Main;
