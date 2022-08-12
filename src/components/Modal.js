import {useEffect, useRef} from "react";
import styled from "styled-components";

function Modal({modalSet, closeModal}) {
  const modalRef = useRef();
  useEffect(() => {
    document.addEventListener("click", clickModalOutside, true);
    return () => {
      document.removeEventListener("click", clickModalOutside, true);
    };
  });

  const clickModalOutside = (evt) => {
    if (modalSet && !modalRef.current.contains(evt.target)) {
      closeModal();
    }
  };
  return (
    <ModalConatiner>
      <ModalBox ref={modalRef}></ModalBox>
    </ModalConatiner>
  );
}
const ModalBox = styled.div`
  width: 350px;
  height: 200px;
  background-color: ${({theme}) => theme.colors.mainGray};
  box-shadow: 0.1rem 0.1rem 1.5rem ${({theme}) => theme.colors.darkGray};
  border-radius: 13px;
  color: black;
`;
const ModalConatiner = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;
export default Modal;
