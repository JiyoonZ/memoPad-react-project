import Container from "../components/Container";
import Button from "../components/Button";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeftLong} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import dayjs from "dayjs";
import {IMemo, memoState} from "../atoms";
import {useRecoilState} from "recoil";

function Create() {
  const navigate = useNavigate();
  const [memos, setMemos] = useRecoilState<IMemo[]>(memoState);
  // useRef 사용법 2개 공부하기
  // useMemo => 쓸데없는 렌더링 관련해서 공부하기
  // 데이터 임시보관할때도 사용함
  // const idRef = useRef(1);
  function goBackHandler() {
    navigate("/");
  }
  function submitHandler(evt: any) {
    evt.preventDefault();
    const memoEntry: IMemo = {
      id: Date.now() + "",
      title: evt.target.title.value + "",
      content:
        evt.target.content.value.replaceAll(/(?:\r\n|\r|\n)/g, "<br/>") + "",
      date: dayjs(new Date()).format("YYYY-MM-DD") + "",
      bookMark: false,
    };
    setMemos((prev) => {
      return [memoEntry, ...prev];
    });
    navigate("/");
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
              저장하기
            </Button>
          </Flexbox>

          <TitleInput
            placeholder="제목을 입력해주세요."
            name="title"
            required={true}
          />
          <ContentInput
            placeholder="내용을 입력해주세요."
            name="content"
            required={true}
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
  white-space: pre-wrap;
`;
export default Create;
