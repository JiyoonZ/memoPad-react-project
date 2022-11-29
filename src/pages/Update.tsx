import Container from "../components/Container";
import Button from "../components/Button";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeftLong} from "@fortawesome/free-solid-svg-icons";
import {useNavigate, useParams} from "react-router-dom";
import dayjs from "dayjs";
import {useState, useEffect} from "react";
import React from "react";
import {IMemo} from "../atoms";

function Update() {
  const navigate = useNavigate();
  let param = useParams();
  const [data, setData] = useState<IMemo>();
  let existedDatas = JSON.parse(
    localStorage.getItem("memoList") as any
  ) as IMemo[];
  useEffect(() => {
    setData(
      existedDatas.filter((ele) => Number(ele.id) === Number(param.id))[0]
    );
  }, []);
  // 배열을 받아온다.
  // 배열중에 id 값 일치하는 것을 찾는다.
  // 해당 배열의 object 값을 변경
  function goBackHandler() {
    navigate("/");
  }
  function submitHandler(evt: any) {
    evt.preventDefault();
    const memoEntry = {
      id: Number(data?.id),
      title: evt.target.title.value + "",
      content: evt.target.content.value,
      date: dayjs(new Date()).format("YYYY-MM-DD"),
      bookMark: data?.bookMark,
    };
    const updatedEntry = existedDatas.map((ele: any) => {
      if (ele.id === data?.id) {
        return (ele = {...memoEntry});
      }
      return ele;
    });
    localStorage.setItem("memoList", JSON.stringify(updatedEntry));
    navigate(`/detail/${data?.id}`);
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <Container>
          <Flexbox>
            <Button btnColor="back" onClick={goBackHandler}>
              <FontAwesomeIcon icon={faArrowLeftLong} />
              &nbsp; 뒤로가기
            </Button>
            <Button type="submit" btnColor="blue">
              수정하기
            </Button>
          </Flexbox>

          <TitleInput
            placeholder="제목을 입력해주세요."
            name="title"
            defaultValue={data?.title}
          />
          <ContentInput
            placeholder="내용을 입력해주세요."
            name="content"
            defaultValue={data?.content}
          />
        </Container>
      </form>
    </div>
  );
}
const Flexbox = styled.div`
  ${({theme}) => theme.layout.flexbox}
`;
const TitleInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 5px 15px;
  margin-top: 10px;
  border-radius: 13px;
  box-sizing: border-box;
`;
const ContentInput = styled.textarea`
  width: 100%;
  height: 70%;
  border-radius: 13px;
  box-sizing: border-box;
  margin: 20px auto;
  resize: none;
  padding: 15px 15px;
`;
export default Update;
