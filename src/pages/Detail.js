import Container from "../components/Container";
import Button from "../components/Button";
import styled from "styled-components";
import Modal from "../components/Modal";
import {useNavigate, useParams} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faArrowLeftLong,
  faBookmark,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import {faBookmark as regularBookmark} from "@fortawesome/free-regular-svg-icons";
import {useState, useEffect} from "react";
// regural/light 골라서 Import 해주기

function Detail() {
  let param = useParams();
  const [data, setData] = useState({title: null, content: null});

  useEffect(() => {
    const datas = JSON.parse(localStorage.getItem("memoList"));
    setData(datas.filter((ele) => Number(ele.id) === Number(param.id))[0]);
  }, []);

  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [bookMark, setBookMark] = useState(false);
  function goBackHandler() {
    navigate("/");
  }
  function bookMarkClickHandler() {
    setBookMark((prev) => !prev);
  }
  function openModal() {
    setModal(true);
  }
  function closeModal() {
    setModal((prev) => !prev);
  }
  return (
    <div>
      {modal && <Modal modalSet={modal} closeModal={closeModal} />}
      <Container>
        <Flexbox>
          <Button onClick={goBackHandler} btnColor="back">
            <FontAwesomeIcon icon={faArrowLeftLong} />
            &nbsp;뒤로가기
          </Button>
          <BookMarkBtn onClick={bookMarkClickHandler}>
            {bookMark ? (
              <FontAwesomeIcon icon={faBookmark} className="mark" />
            ) : (
              <FontAwesomeIcon icon={regularBookmark} />
            )}
          </BookMarkBtn>
          <SettingBtn onClick={openModal}>
            <FontAwesomeIcon icon={faEllipsis} />
          </SettingBtn>
        </Flexbox>
        <MemoContainer>
          <Title>{data.title}</Title>
          <Content>{data.content}</Content>
        </MemoContainer>
      </Container>
    </div>
  );
}
const BookMarkBtn = styled.div`
  cursor: pointer;
  color: white;
  stroke: darkgray;
  stroke-width: 20;
  font-size: 26px;
  margin-left: 150px;
  .mark {
    color: #edf25c;
    stroke: white;
    stroke-width: 40;
  }
  -webkit-filter: drop-shadow(
    5px 5px 2px ${({theme}) => theme.colors.shadowGray}
  );
  filter: drop-shadow(5px 5px 2px ${({theme}) => theme.colors.shadowGray});
`;
const MemoContainer = styled.div`
  margin: 0 5px;
  height: 80%;
  padding: 10px;
  box-sizing: border-box;
`;
const SettingBtn = styled.div`
  cursor: pointer;
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
`;
