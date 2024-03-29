import * as S from "./styles";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeftLong} from "@fortawesome/free-solid-svg-icons";
import {IMemo} from "../type";

interface IEditMode {
  submitHandler: (evt: any) => void;
  goBackHandler: () => void;
  mode: string;
  data?: IMemo;
}
function EditMode({submitHandler, goBackHandler, mode, data}: IEditMode) {
  return (
    // <div>
    <S.Container>
      <Form onSubmit={submitHandler}>
        <Flexbox>
          <S.Button btnColor="back" onClick={goBackHandler}>
            <FontAwesomeIcon icon={faArrowLeftLong} />
            &nbsp; 뒤로가기
          </S.Button>
          <S.Button type="submit" btnColor="blue">
            {mode}
          </S.Button>
        </Flexbox>

        <TitleInput
          placeholder="제목을 입력해주세요."
          name="title"
          defaultValue={data?.title}
        />
        <ContentInput
          placeholder="내용을 입력해주세요."
          name="content"
          defaultValue={data?.content.replaceAll("<br/>", "\r\n")}
        />
      </Form>
    </S.Container>
    // </div>
  );
}
const Flexbox = styled.div`
  ${({theme}) => theme.layout.flexbox}
`;
const Form = styled.form`
  height: 100%;
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

export default EditMode;
