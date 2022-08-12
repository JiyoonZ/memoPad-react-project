import Container from "../components/Container";
import Button from "../components/Button";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faArrowLeftLong,
  faBookmark,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
// regural/light 골라서 Import 해주기
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
          <FontAwesomeIcon icon={faBookmark} className="bookMark" />
          <SettingBtn>
            <FontAwesomeIcon icon={faEllipsis} />
          </SettingBtn>
        </Flexbox>
        <MemoContainer>
          <Title>메모 제목입니다</Title>
          <Content>
            메모내용입니다.메모내용입니다. 메모내용입니다.메모내용입니다.
            메모내용입니다.메모내용입니다.메모내용입니다.
          </Content>
        </MemoContainer>
      </Container>
    </div>
  );
}
const MemoContainer = styled.div`
  margin: 0 5px;
  height: 80%;
  padding: 10px;
  box-sizing: border-box;
`;
const SettingBtn = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({theme}) => theme.colors.mainGray};
  border: 2.5px solid #f25d07;
  color: #f25d07;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  box-shadow: 0.3rem 0.3rem 0.6rem #c8d0f9, -0.2rem -0.2rem 0.5rem #ffffff;
`;
const Title = styled.div`
  font-size: 25px;
  font-weight: 500;
  margin-top: 10px;
`;
const Content = styled.div`
  margin-top: 15px;
  font-size: 15px;
`;
export default Detail;

const Flexbox = styled.div`
  ${({theme}) => theme.layout.flexbox};
  height: 40px;
  font-size: 22px;
  color: #edf25c;
  .bookMark {
    font-size: 26px;
    margin-left: 150px;
    stroke: #fff;
    stroke-width: 20;
    -webkit-filter: drop-shadow(
      5px 5px 2px ${({theme}) => theme.colors.shadowGray}
    );
    filter: drop-shadow(5px 5px 2px ${({theme}) => theme.colors.shadowGray});
  }
`;
