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
import React from "react";
import {IMemo, memoState} from "../atoms";
import {useRecoilState} from "recoil";
// regural/light 골라서 Import 해주기

function Detail() {
  let param = useParams();
  const navigate = useNavigate();
  const [modal, setModal] = useState<boolean>(false);
  const [bookMark, setBookMark] = useState<boolean>(false);
  const [data, setData] = useState<IMemo>();
  const [memos, setMemos] = useRecoilState<IMemo[]>(memoState);

  useEffect(() => {
    const filteredData = memos.filter(
      (memo) => Number(memo.id) === Number(param.id)
    )[0];
    setData(filteredData);
    setBookMark(filteredData.bookMark);
  }, []);

  function goBackHandler() {
    navigate("/");
  }
  console.log([...memos], "dd");
  function bookMarkClickHandler() {
    setBookMark((prev) => !prev);
    const memoEntry: IMemo = {
      id: Number(data?.id),
      title: data?.title + "",
      content: data?.content + "",
      date: data?.date + "",
      bookMark: !bookMark,
    };
    setMemos((prev): IMemo[] => {
      const old = [...prev];
      const updatedMemo: IMemo[] = old.map((memo) => {
        if (memo?.id === data?.id) {
          return (memo = memoEntry);
        }
        return memo;
      });
      return [...updatedMemo];
    });
  }
  function openModal() {
    setModal(true);
  }
  function closeModal() {
    setModal((prev) => !prev);
  }
  return (
    <div>
      {modal && <Modal modalSet={modal} closeModal={closeModal} data={data} />}
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
          <Title>{data?.title}</Title>
          <Content>{data?.content}</Content>
        </MemoContainer>
        <Date>{data?.date}</Date>
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
const Date = styled.div`
  font-size: 14px;
  text-align: end;
  font-weight: 500;
  color: gray;
  text-decoration: underline;
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
