import {useEffect, useRef} from "react";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faCopy,
  faPenToSquare,
  faTrashCan,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";

function Modal({modalSet, closeModal, data}) {
  const modalRef = useRef();
  const navigate = useNavigate();
  let existedDatas = JSON.parse(localStorage.getItem("memoList"));
  useEffect(() => {
    document.addEventListener("click", clickModalOutside, true);
    return () => {
      document.removeEventListener("click", clickModalOutside, true);
    };
  });

  function clickModalOutside(evt) {
    if (modalSet && !modalRef.current.contains(evt.target)) {
      closeModal();
    }
  }
  function updateHandler() {
    navigate(`/update/${data.id}`);
  }
  function deleteHandler() {
    const filteredEntry = existedDatas.filter((ele) => {
      return ele.id !== data.id;
    });
    localStorage.setItem("memoList", JSON.stringify(filteredEntry));
    navigate("/");
  }
  return (
    <ModalLayer>
      <CloseBtn>
        <FontAwesomeIcon icon={faXmark} />
      </CloseBtn>
      <ModalBox ref={modalRef}>
        <FlexBox>
          <ButtonBox btnColor="gray">
            <IconBox>
              <FontAwesomeIcon icon={faCopy} />
              <div className="iconName">복사하기</div>
            </IconBox>
          </ButtonBox>
          <ButtonBox btnColor="blue">
            <IconBox onClick={updateHandler}>
              <FontAwesomeIcon icon={faPenToSquare} />
              <div className="iconName">수정하기</div>
            </IconBox>
          </ButtonBox>
          <ButtonBox btnColor="red">
            <IconBox onClick={deleteHandler}>
              <FontAwesomeIcon icon={faTrashCan} />
              <div className="iconName">삭제하기</div>
            </IconBox>
          </ButtonBox>
        </FlexBox>
      </ModalBox>
    </ModalLayer>
  );
}
const CloseBtn = styled.div`
  /* position: fixed;
  top: 290px;
  right: 300px; */
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({theme}) => theme.colors.mainGray};
  font-size: 20px;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
`;
const IconBox = styled.div`
  margin-top: calc((90px / 2) - (56.62px / 2));
  .iconName {
    font-size: 13px;
    margin-top: 10px;
  }
`;
const FlexBox = styled.div`
  ${({theme}) => theme.layout.flexbox};
  padding: 30px 25px;
  box-sizing: border-box;
`;
const ButtonBox = styled.div`
  cursor: pointer;
  width: 30%;
  height: 90px;
  border-radius: 12px;
  font-size: 30px;
  font-weight: 500;
  text-align: center;
  box-shadow: 0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #ffffff;
  color: ${({btnColor, theme}) => {
    if (btnColor === "blue") return theme.colors.blue;
    else if (btnColor === "red") return theme.colors.red;
    else if (btnColor === "gray") return theme.colors.darGray;
  }};
`;
const ModalBox = styled.div`
  width: 350px;
  background-color: ${({theme}) => theme.colors.mainGray};
  box-shadow: 0.1rem 0.1rem 1.5rem ${({theme}) => theme.colors.darkGray};
  border-radius: 13px;
  color: black;
  margin-top: 20px;
`;
const ModalLayer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  ${({theme}) => theme.layout.flexCenterColumn}
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;
export default Modal;
