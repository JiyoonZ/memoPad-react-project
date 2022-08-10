import Container from "../components/Container";
import Button from "../components/Button";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

function Create() {
  const navigate = useNavigate();
  function goBackHandler() {
    navigate("/");
  }
  return (
    <div>
      <Container>
        <Flexbox>
          <Button btnColor="darkGray" onClick={goBackHandler}>
            뒤로가기
          </Button>
          <Button btnColor="blue">저장하기</Button>
        </Flexbox>
        <Form>
          <TitleInput placeholder="제목을 입력해주세요." />
          <ContentInput placeholder="내용을 입력해주세요." />
        </Form>
      </Container>
    </div>
  );
}
const Flexbox = styled.div`
  ${({theme}) => theme.layout.flexbox}
`;
const Form = styled.form`
  height: 80%;
  margin-top: 40px;
`;
const TitleInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 5px 15px;
  border-radius: 13px;
  box-sizing: border-box;
`;
const ContentInput = styled.textarea`
  width: 100%;
  height: 80%;
  border-radius: 13px;
  box-sizing: border-box;
  margin: 20px auto;
  resize: none;
  padding: 15px 15px;
`;
export default Create;
