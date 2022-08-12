import Container from "../components/Container";
import Button from "../components/Button";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeftLong, faBookmark} from "@fortawesome/free-solid-svg-icons";
function Detail() {
  const navigate = useNavigate();
  function goBackHandler() {
    navigate("/");
  }
  return (
    <div>
      <Container>
        <Flexbox>
          <Button onClick={goBackHandler} btnColor="back">
            <FontAwesomeIcon icon={faArrowLeftLong} />
            &nbsp;뒤로가기
          </Button>

          <FontAwesomeIcon icon={faBookmark} />
        </Flexbox>
        <Title>메모 제목입니다</Title>
        <Content>
          메모내용입니다.메모내용입니다. 메모내용입니다.메모내용입니다.
          메모내용입니다.메모내용입니다.메모내용입니다.
        </Content>
      </Container>
    </div>
  );
}
const Title = styled.div`
  font-size: 25px;
  font-weight: 500;
  margin-top: 30px;
`;
const Content = styled.div`
  margin-top: 15px;
  font-size: 15px;
`;
export default Detail;

const Flexbox = styled.div`
  ${({theme}) => theme.layout.flexbox};
  height: 40px;
`;
